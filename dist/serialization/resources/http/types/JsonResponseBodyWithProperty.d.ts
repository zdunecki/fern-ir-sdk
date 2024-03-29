/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const JsonResponseBodyWithProperty: core.serialization.ObjectSchema<serializers.JsonResponseBodyWithProperty.Raw, FernIr.JsonResponseBodyWithProperty>;
export declare namespace JsonResponseBodyWithProperty {
    interface Raw extends serializers.WithDocs.Raw {
        responseBodyType: serializers.TypeReference.Raw;
        responseProperty?: serializers.ObjectProperty.Raw | null;
    }
}
