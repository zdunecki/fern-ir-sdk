/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const SdkRequestWrapper: core.serialization.ObjectSchema<serializers.SdkRequestWrapper.Raw, FernIr.SdkRequestWrapper>;
export declare namespace SdkRequestWrapper {
    interface Raw {
        wrapperName: serializers.Name.Raw;
        bodyKey: serializers.Name.Raw;
    }
}