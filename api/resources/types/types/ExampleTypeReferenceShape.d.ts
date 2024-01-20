/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type ExampleTypeReferenceShape = FernIr.ExampleTypeReferenceShape.Primitive | FernIr.ExampleTypeReferenceShape.Container | FernIr.ExampleTypeReferenceShape.Unknown | FernIr.ExampleTypeReferenceShape.Named;
export declare namespace ExampleTypeReferenceShape {
    interface Primitive extends _Utils {
        type: "primitive";
        primitive: FernIr.ExamplePrimitive;
    }
    interface Container extends _Utils {
        type: "container";
        container: FernIr.ExampleContainer;
    }
    interface Unknown extends _Utils {
        type: "unknown";
        unknown: unknown;
    }
    interface Named extends FernIr.ExampleNamedType, _Utils {
        type: "named";
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExampleTypeReferenceShape._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        primitive: (value: FernIr.ExamplePrimitive) => _Result;
        container: (value: FernIr.ExampleContainer) => _Result;
        unknown: (value: unknown) => _Result;
        named: (value: FernIr.ExampleNamedType) => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const ExampleTypeReferenceShape: {
    readonly primitive: (value: FernIr.ExamplePrimitive) => FernIr.ExampleTypeReferenceShape.Primitive;
    readonly container: (value: FernIr.ExampleContainer) => FernIr.ExampleTypeReferenceShape.Container;
    readonly unknown: (value?: unknown) => FernIr.ExampleTypeReferenceShape.Unknown;
    readonly named: (value: FernIr.ExampleNamedType) => FernIr.ExampleTypeReferenceShape.Named;
    readonly _visit: <_Result>(value: FernIr.ExampleTypeReferenceShape, visitor: FernIr.ExampleTypeReferenceShape._Visitor<_Result>) => _Result;
};