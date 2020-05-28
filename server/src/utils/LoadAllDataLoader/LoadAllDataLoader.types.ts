import { CacheMap } from "dataloader";

export type LoadAllObject<K> = {
    id: K;
};

export type BatchLoadFn<K, V> = (keys: ReadonlyArray<K>) => Promise<Array<V | Error>>;

export type LoadAllFn<K, V extends LoadAllObject<K>> = () => Promise<Array<V>>;

export type Options<K, V> = {
  batch?: boolean,
  cache?: boolean,
  cacheMap?: CacheMap<K, Promise<V>>,
  cacheKeyFn?: (key: any) => any
};