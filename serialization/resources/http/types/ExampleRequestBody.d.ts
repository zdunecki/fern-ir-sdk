/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const ExampleRequestBody: core.serialization.Schema<serializers.ExampleRequestBody.Raw, FernIr.ExampleRequestBody>;
export declare namespace ExampleRequestBody {
    type Raw = ExampleRequestBody.InlinedRequestBody | ExampleRequestBody.Reference;
    interface InlinedRequestBody extends serializers.ExampleInlinedRequestBody.Raw {
        type: "inlinedRequestBody";
    }
    interface Reference extends serializers.ExampleTypeReference.Raw {
        type: "reference";
    }
}