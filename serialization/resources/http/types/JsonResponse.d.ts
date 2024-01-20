/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const JsonResponse: core.serialization.Schema<serializers.JsonResponse.Raw, FernIr.JsonResponse>;
export declare namespace JsonResponse {
    type Raw = JsonResponse.Response | JsonResponse.NestedPropertyAsResponse;
    interface Response extends serializers.JsonResponseBody.Raw {
        type: "response";
    }
    interface NestedPropertyAsResponse extends serializers.JsonResponseBodyWithProperty.Raw {
        type: "nestedPropertyAsResponse";
    }
}