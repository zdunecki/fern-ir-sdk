/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type TypeReference = FernIr.TypeReference.Container | FernIr.TypeReference.Named | FernIr.TypeReference.Primitive | FernIr.TypeReference.Unknown;
export declare namespace TypeReference {
    interface Container extends _Utils {
        type: "container";
        container: FernIr.ContainerType;
    }
    interface Named extends FernIr.DeclaredTypeName, _Utils {
        type: "named";
    }
    interface Primitive extends _Utils {
        type: "primitive";
        primitive: FernIr.PrimitiveType;
    }
    interface Unknown extends _Utils {
        type: "unknown";
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.TypeReference._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        container: (value: FernIr.ContainerType) => _Result;
        named: (value: FernIr.DeclaredTypeName) => _Result;
        primitive: (value: FernIr.PrimitiveType) => _Result;
        unknown: () => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const TypeReference: {
    readonly container: (value: FernIr.ContainerType) => FernIr.TypeReference.Container;
    readonly named: (value: FernIr.DeclaredTypeName) => FernIr.TypeReference.Named;
    readonly primitive: (value: FernIr.PrimitiveType) => FernIr.TypeReference.Primitive;
    readonly unknown: () => FernIr.TypeReference.Unknown;
    readonly _visit: <_Result>(value: FernIr.TypeReference, visitor: FernIr.TypeReference._Visitor<_Result>) => _Result;
};
