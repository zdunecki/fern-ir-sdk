/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const ExampleNamedType: core.serialization.ObjectSchema<serializers.ExampleNamedType.Raw, FernIr.ExampleNamedType>;
export declare namespace ExampleNamedType {
    interface Raw {
        typeName: serializers.DeclaredTypeName.Raw;
        shape: serializers.ExampleTypeShape.Raw;
    }
}