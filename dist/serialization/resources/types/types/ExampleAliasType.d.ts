/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const ExampleAliasType: core.serialization.ObjectSchema<serializers.ExampleAliasType.Raw, FernIr.ExampleAliasType>;
export declare namespace ExampleAliasType {
    interface Raw {
        value: serializers.ExampleTypeReference.Raw;
    }
}
