
import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as Any from './any';
import * as Aptos_hash from './aptos_hash';
import * as Big_vector from './big_vector';
import * as Bls12381 from './bls12381';
import * as Bucket_table from './bucket_table';
import * as Capability from './capability';
import * as Comparator from './comparator';
import * as Debug from './debug';
import * as Ed25519 from './ed25519';
import * as Event from './event';
import * as Guid from './guid';
import * as Iterable_table from './iterable_table';
import * as Ristretto255 from './ristretto255';
import * as Simple_map from './simple_map';
import * as Table from './table';
import * as Table_with_length from './table_with_length';
import * as Type_info from './type_info';

export * as Any from './any';
export * as Aptos_hash from './aptos_hash';
export * as Big_vector from './big_vector';
export * as Bls12381 from './bls12381';
export * as Bucket_table from './bucket_table';
export * as Capability from './capability';
export * as Comparator from './comparator';
export * as Debug from './debug';
export * as Ed25519 from './ed25519';
export * as Event from './event';
export * as Guid from './guid';
export * as Iterable_table from './iterable_table';
export * as Ristretto255 from './ristretto255';
export * as Simple_map from './simple_map';
export * as Table from './table';
export * as Table_with_length from './table_with_length';
export * as Type_info from './type_info';


export function loadParsers(repo: AptosParserRepo) {
  Any.loadParsers(repo);
  Aptos_hash.loadParsers(repo);
  Big_vector.loadParsers(repo);
  Bls12381.loadParsers(repo);
  Bucket_table.loadParsers(repo);
  Capability.loadParsers(repo);
  Comparator.loadParsers(repo);
  Debug.loadParsers(repo);
  Ed25519.loadParsers(repo);
  Event.loadParsers(repo);
  Guid.loadParsers(repo);
  Iterable_table.loadParsers(repo);
  Ristretto255.loadParsers(repo);
  Simple_map.loadParsers(repo);
  Table.loadParsers(repo);
  Table_with_length.loadParsers(repo);
  Type_info.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}

export type AppType = {
  client: AptosClient,
  repo: AptosParserRepo,
  cache: AptosLocalCache,
};

export class App {
  any : Any.App
  aptos_hash : Aptos_hash.App
  big_vector : Big_vector.App
  bls12381 : Bls12381.App
  bucket_table : Bucket_table.App
  capability : Capability.App
  comparator : Comparator.App
  debug : Debug.App
  ed25519 : Ed25519.App
  event : Event.App
  guid : Guid.App
  iterable_table : Iterable_table.App
  ristretto255 : Ristretto255.App
  simple_map : Simple_map.App
  table : Table.App
  table_with_length : Table_with_length.App
  type_info : Type_info.App
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
    this.any = new Any.App(client, repo, cache);
    this.aptos_hash = new Aptos_hash.App(client, repo, cache);
    this.big_vector = new Big_vector.App(client, repo, cache);
    this.bls12381 = new Bls12381.App(client, repo, cache);
    this.bucket_table = new Bucket_table.App(client, repo, cache);
    this.capability = new Capability.App(client, repo, cache);
    this.comparator = new Comparator.App(client, repo, cache);
    this.debug = new Debug.App(client, repo, cache);
    this.ed25519 = new Ed25519.App(client, repo, cache);
    this.event = new Event.App(client, repo, cache);
    this.guid = new Guid.App(client, repo, cache);
    this.iterable_table = new Iterable_table.App(client, repo, cache);
    this.ristretto255 = new Ristretto255.App(client, repo, cache);
    this.simple_map = new Simple_map.App(client, repo, cache);
    this.table = new Table.App(client, repo, cache);
    this.table_with_length = new Table_with_length.App(client, repo, cache);
    this.type_info = new Type_info.App(client, repo, cache);
  }
}
