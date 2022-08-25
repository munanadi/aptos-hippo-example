import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount} from "aptos";
import * as Std from "../std";
import * as Reconfiguration from "./reconfiguration";
import * as System_addresses from "./system_addresses";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "state_storage";

export const EEPOCH_ZERO : U64 = u64("1");
export const EUSAGE_ALREADY_EXISTS : U64 = u64("0");


export class StateStorageUsage 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "StateStorageUsage";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "epoch", typeTag: AtomicTypeTag.U64 },
  { name: "items", typeTag: AtomicTypeTag.U64 },
  { name: "bytes", typeTag: AtomicTypeTag.U64 }];

  epoch: U64;
  items: U64;
  bytes: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.epoch = proto['epoch'] as U64;
    this.items = proto['items'] as U64;
    this.bytes = proto['bytes'] as U64;
  }

  static StateStorageUsageParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : StateStorageUsage {
    const proto = $.parseStructProto(data, typeTag, repo, StateStorageUsage);
    return new StateStorageUsage(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, StateStorageUsage, typeParams);
    return result as unknown as StateStorageUsage;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, StateStorageUsage, typeParams);
    await result.loadFullState(app)
    return result as unknown as StateStorageUsage;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "StateStorageUsage", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class Usage_ 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "Usage_";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "items", typeTag: AtomicTypeTag.U64 },
  { name: "bytes", typeTag: AtomicTypeTag.U64 }];

  items: U64;
  bytes: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.items = proto['items'] as U64;
    this.bytes = proto['bytes'] as U64;
  }

  static Usage_Parser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : Usage_ {
    const proto = $.parseStructProto(data, typeTag, repo, Usage_);
    return new Usage_(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "Usage_", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}
export function get_state_storage_usage_only_at_epoch_beginning_ (
  $c: AptosDataCache,
): Usage_ {
  return $.aptos_framework_state_storage_get_state_storage_usage_only_at_epoch_beginning($c);

}
export function initialize_ (
  aptos_framework: HexString,
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, temp$3, temp$4;
  System_addresses.assert_aptos_framework_(aptos_framework, $c);
  if (!!$c.exists(new SimpleStructTag(StateStorageUsage), new HexString("0x1"))) {
    throw $.abortCode(Std.Error.already_exists_($.copy(EUSAGE_ALREADY_EXISTS), $c));
  }
  temp$4 = aptos_framework;
  temp$1 = u64("0");
  temp$2 = u64("0");
  temp$3 = u64("0");
  $c.move_to(new SimpleStructTag(StateStorageUsage), temp$4, new StateStorageUsage({ epoch: temp$3, items: temp$1, bytes: temp$2 }, new SimpleStructTag(StateStorageUsage)));
  return;
}

export function on_new_block_ (
  $c: AptosDataCache,
): void {
  let temp$1, temp$2, temp$3, epoch, usage;
  epoch = Reconfiguration.current_epoch_($c);
  usage = $c.borrow_global_mut<StateStorageUsage>(new SimpleStructTag(StateStorageUsage), new HexString("0x1"));
  if (($.copy(epoch)).neq($.copy(usage.epoch))) {
    let { items: items, bytes: bytes } = get_state_storage_usage_only_at_epoch_beginning_($c);
    temp$1 = $.copy(items);
    temp$2 = $.copy(bytes);
    temp$3 = $.copy(epoch);
    $.set(usage, new StateStorageUsage({ epoch: temp$3, items: temp$1, bytes: temp$2 }, new SimpleStructTag(StateStorageUsage)));
  }
  else{
  }
  return;
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x1::state_storage::StateStorageUsage", StateStorageUsage.StateStorageUsageParser);
  repo.addParser("0x1::state_storage::Usage_", Usage_.Usage_Parser);
}
export class App {
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
  }
  get moduleAddress() {{ return moduleAddress; }}
  get moduleName() {{ return moduleName; }}
  get StateStorageUsage() { return StateStorageUsage; }
  async loadStateStorageUsage(
    owner: HexString,
    loadFull=true,
  ) {
    const val = await StateStorageUsage.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    return val;
  }
  get Usage_() { return Usage_; }
}

