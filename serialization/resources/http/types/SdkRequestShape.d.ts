/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const SdkRequestShape: core.serialization.Schema<serializers.SdkRequestShape.Raw, FernIr.SdkRequestShape>;
export declare namespace SdkRequestShape {
    type Raw = SdkRequestShape.JustRequestBody | SdkRequestShape.Wrapper;
    interface JustRequestBody {
        type: "justRequestBody";
        value: serializers.SdkRequestBodyType.Raw;
    }
    interface Wrapper extends serializers.SdkRequestWrapper.Raw {
        type: "wrapper";
    }
}