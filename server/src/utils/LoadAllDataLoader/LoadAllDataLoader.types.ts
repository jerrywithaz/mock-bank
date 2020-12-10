import { CacheMap } from "dataloader";
import { NullOrUndefined } from "../../types";

export type LoadAllValue<K> = NullOrUndefined<{
    id: K;
}>;

export type BatchLoadFn<K, V, A extends Array<any> = any[]> = (keys: ReadonlyArray<K>, ...args: A) => Promise<Array<V | Error>>;

export type LoadAllFn<K, V extends LoadAllValue<K>, O extends object = {}> = (options: O) => Promise<Array<V>>;

export type Options<K, V> = {
  batch?: boolean;
  cache?: boolean;
  cacheMap?: CacheMap<K, Promise<V>>;
  cacheKeyFn?: (key: any) => any;
};