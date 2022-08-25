
import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as aptos_framework from './aptos_framework';
import * as aptos_std from './aptos_std';
import * as hippo_tutorial from './hippo_tutorial';
import * as std from './std';

export * as aptos_framework from './aptos_framework';
export * as aptos_std from './aptos_std';
export * as hippo_tutorial from './hippo_tutorial';
export * as std from './std';


export function getProjectRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  aptos_framework.loadParsers(repo);
  aptos_std.loadParsers(repo);
  hippo_tutorial.loadParsers(repo);
  std.loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}

export class App {
  parserRepo: AptosParserRepo;
  cache: AptosLocalCache;
  aptos_framework : aptos_framework.App
  aptos_std : aptos_std.App
  hippo_tutorial : hippo_tutorial.App
  std : std.App
  constructor(
    public client: AptosClient,
  ) {
    this.parserRepo = getProjectRepo();
    this.cache = new AptosLocalCache();
    this.aptos_framework = new aptos_framework.App(client, this.parserRepo, this.cache);
    this.aptos_std = new aptos_std.App(client, this.parserRepo, this.cache);
    this.hippo_tutorial = new hippo_tutorial.App(client, this.parserRepo, this.cache);
    this.std = new std.App(client, this.parserRepo, this.cache);
  }
}
