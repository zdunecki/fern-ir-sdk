/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const ExampleObjectTypeWithTypeId: core.serialization.ObjectSchema<serializers.ExampleObjectTypeWithTypeId.Raw, FernIr.ExampleObjectTypeWithTypeId>;
export declare namespace ExampleObjectTypeWithTypeId {
    interface Raw {
        typeId: serializers.TypeId.Raw;
        object: serializers.ExampleObjectType.Raw;
    }
}