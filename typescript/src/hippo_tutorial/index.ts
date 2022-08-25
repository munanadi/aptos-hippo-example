
import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache } from "@manahippo/move-to-ts";
import * as Lend2 from './lend2';

export * as Lend2 from './lend2';


export function loadParsers(repo: AptosParserRepo) {
  Lend2.loadParsers(repo);
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
  lend2 : Lend2.App
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
    this.lend2 = new Lend2.App(client, repo, cache);
  }
}
