/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
/**
 * A type, which is a name and a shape
 */
export interface TypeDeclaration extends FernIr.Declaration {
    name: FernIr.DeclaredTypeName;
    shape: FernIr.Type;
    examples: FernIr.ExampleType[];
    /** All other named types that this type references (directly or indirectly) */
    referencedTypes: Set<FernIr.TypeId>;
}
