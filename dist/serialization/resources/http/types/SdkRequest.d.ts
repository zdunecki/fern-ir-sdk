/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const SdkRequest: core.serialization.ObjectSchema<serializers.SdkRequest.Raw, FernIr.SdkRequest>;
export declare namespace SdkRequest {
    interface Raw {
        requestParameterName: serializers.Name.Raw;
        shape: serializers.SdkRequestShape.Raw;
    }
}
