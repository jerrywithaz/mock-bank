import DataLoader from "dataloader";
import notAnError from "../notAnError";
import { LoadAllObject, LoadAllFn, BatchLoadFn, Options } from "./LoadAllDataLoader.types";

class LoadAllDataLoader<K, V extends LoadAllObject<K>> extends DataLoader<K, V> {

  _loadAllFn: LoadAllFn<K, V>;
  _shouldCache: boolean;
  _trackedKeys: Array<K>;

  constructor(batchLoadFn: BatchLoadFn<K, V>, loadAllFn: LoadAllFn<K, V>, options?: Options<K, V>) {

    super(batchLoadFn, options);
    
    this._loadAllFn = loadAllFn;
    this._shouldCache = !options || options.cache !== false;
    this._trackedKeys = [];

  }

  async loadAll(): Promise<Array<V | Error>> {
    
    console.log("hry");
    
    console.log(this);
    
    const shouldLoadMany = this._shouldCache && this._trackedKeys.length > 0;

    if (shouldLoadMany) return super.loadMany(this._trackedKeys);
    
    const entries = await this._loadAllFn();

    const keys = new Array(entries.length);
    const values = new Array(entries.length);

    for (let index = 0; index < entries.length; index++) {
        const value = entries[index];
        super.prime(value.id, value);
        keys[index] = value.id;
        values[index] = value;
    }

    this._trackedKeys = keys;

    return values;

  }

  async loadAllWithoutErrors(): Promise<Array<V>> {
    const entries = await this.loadAll();
    return entries.filter(notAnError);
  }

  clearAll() {
    this._trackedKeys = [];
    super.clearAll();
    return this;
  }

}

export default LoadAllDataLoader;