/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const InlinedRequestBody: core.serialization.ObjectSchema<serializers.InlinedRequestBody.Raw, FernIr.InlinedRequestBody>;
export declare namespace InlinedRequestBody {
    interface Raw {
        name: serializers.Name.Raw;
        extends: serializers.DeclaredTypeName.Raw[];
        properties: serializers.InlinedRequestBodyProperty.Raw[];
        contentType?: string | null;
    }
}