/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const TypeReference: core.serialization.Schema<serializers.TypeReference.Raw, FernIr.TypeReference>;
export declare namespace TypeReference {
    type Raw = TypeReference.Container | TypeReference.Named | TypeReference.Primitive | TypeReference.Unknown;
    interface Container {
        _type: "container";
        container: serializers.ContainerType.Raw;
    }
    interface Named extends serializers.DeclaredTypeName.Raw {
        _type: "named";
    }
    interface Primitive {
        _type: "primitive";
        primitive: serializers.PrimitiveType.Raw;
    }
    interface Unknown {
        _type: "unknown";
    }
}