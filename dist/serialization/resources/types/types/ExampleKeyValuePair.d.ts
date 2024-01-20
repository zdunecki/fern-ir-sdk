/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const ExampleKeyValuePair: core.serialization.ObjectSchema<serializers.ExampleKeyValuePair.Raw, FernIr.ExampleKeyValuePair>;
export declare namespace ExampleKeyValuePair {
    interface Raw {
        key: serializers.ExampleTypeReference.Raw;
        value: serializers.ExampleTypeReference.Raw;
    }
}