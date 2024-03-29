/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const SafeAndUnsafeString: core.serialization.ObjectSchema<serializers.SafeAndUnsafeString.Raw, FernIr.SafeAndUnsafeString>;
export declare namespace SafeAndUnsafeString {
    interface Raw {
        unsafeName: string;
        safeName: string;
    }
}
