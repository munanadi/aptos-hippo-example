import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount} from "aptos";
import * as Std from "../std";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "system_addresses";

export const ENOT_APTOS_FRAMEWORK_ADDRESS : U64 = u64("3");
export const ENOT_CORE_RESOURCE_ADDRESS : U64 = u64("1");
export const EVM : U64 = u64("2");

export function assert_aptos_framework_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  if (!is_aptos_framework_address_(Std.Signer.address_of_(account, $c), $c)) {
    throw $.abortCode(Std.Error.permission_denied_($.copy(ENOT_APTOS_FRAMEWORK_ADDRESS), $c));
  }
  return;
}

export function assert_core_resource_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  return assert_core_resource_address_(Std.Signer.address_of_(account, $c), $c);
}

export function assert_core_resource_address_ (
  addr: HexString,
  $c: AptosDataCache,
): void {
  if (!is_core_resource_address_($.copy(addr), $c)) {
    throw $.abortCode(Std.Error.permission_denied_($.copy(ENOT_CORE_RESOURCE_ADDRESS), $c));
  }
  return;
}

export function assert_vm_ (
  account: HexString,
  $c: AptosDataCache,
): void {
  if (!((Std.Signer.address_of_(account, $c)).hex() === (new HexString("0x0")).hex())) {
    throw $.abortCode(Std.Error.permission_denied_($.copy(EVM), $c));
  }
  return;
}

export function is_aptos_framework_address_ (
  addr: HexString,
  $c: AptosDataCache,
): boolean {
  return (($.copy(addr)).hex() === (new HexString("0x1")).hex());
}

export function is_core_resource_address_ (
  addr: HexString,
  $c: AptosDataCache,
): boolean {
  return (($.copy(addr)).hex() === (new HexString("0xa550c18")).hex());
}

export function loadParsers(repo: AptosParserRepo) {
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
}

