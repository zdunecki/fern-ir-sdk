/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const HttpResponse: core.serialization.Schema<serializers.HttpResponse.Raw, FernIr.HttpResponse>;
export declare namespace HttpResponse {
    type Raw = HttpResponse.Json | HttpResponse.FileDownload | HttpResponse.Text | HttpResponse.Streaming;
    interface Json {
        type: "json";
        value: serializers.JsonResponse.Raw;
    }
    interface FileDownload extends serializers.FileDownloadResponse.Raw {
        type: "fileDownload";
    }
    interface Text extends serializers.TextResponse.Raw {
        type: "text";
    }
    interface Streaming extends serializers.StreamingResponse.Raw {
        type: "streaming";
    }
}
