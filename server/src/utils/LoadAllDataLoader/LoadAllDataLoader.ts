import DataLoader from "dataloader";
import notAnError from "../notAnError";
import { LoadAllValue, LoadAllFn, BatchLoadFn, Options } from "./LoadAllDataLoader.types";

class LoadAllDataLoader<K, V extends LoadAllValue<K>, O extends object = {}> extends DataLoader<K, V> {

  private _loadAllFn: LoadAllFn<K, V, O>;
  private _shouldCache: boolean;
  private _trackedKeys: Array<K>;

  constructor(batchLoadFn: BatchLoadFn<K, V>, loadAllFn: LoadAllFn<K, V, O>, options?: Options<K, V>) {

    super(batchLoadFn, options);
    
    this._loadAllFn = loadAllFn;
    this._shouldCache = !options || options.cache !== false;
    this._trackedKeys = [];

  }

  async loadAll(options: O): Promise<Array<V | Error>> {
    
    const shouldLoadMany = this._shouldCache && this._trackedKeys.length > 0;

    if (shouldLoadMany) return super.loadMany(this._trackedKeys);
    
    const entries = await this._loadAllFn(options);

    const keys = new Array(entries.length);
    const values = new Array(entries.length);

    for (let index = 0; index < entries.length; index++) {
        const value = entries[index];
        if (value) {
          super.prime(value.id, value);
          keys[index] = value.id;
        }
        values[index] = value;
    }

    this._trackedKeys = keys;

    return values;

  }

  async loadAllWithoutErrors(options: O): Promise<Array<V>> {
    const entries = await this.loadAll(options);
    return entries.filter(notAnError);
  }

  clearAll() {
    this._trackedKeys = [];
    super.clearAll();
    return this;
  }

}

export default LoadAllDataLoader;