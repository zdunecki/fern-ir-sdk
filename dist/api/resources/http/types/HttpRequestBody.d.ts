/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type HttpRequestBody = FernIr.HttpRequestBody.InlinedRequestBody | FernIr.HttpRequestBody.Reference | FernIr.HttpRequestBody.FileUpload | FernIr.HttpRequestBody.Bytes;
export declare namespace HttpRequestBody {
    interface InlinedRequestBody extends FernIr.InlinedRequestBody, _Utils {
        type: "inlinedRequestBody";
    }
    interface Reference extends FernIr.HttpRequestBodyReference, _Utils {
        type: "reference";
    }
    interface FileUpload extends FernIr.FileUploadRequest, _Utils {
        type: "fileUpload";
    }
    interface Bytes extends FernIr.BytesRequest, _Utils {
        type: "bytes";
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.HttpRequestBody._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        inlinedRequestBody: (value: FernIr.InlinedRequestBody) => _Result;
        reference: (value: FernIr.HttpRequestBodyReference) => _Result;
        fileUpload: (value: FernIr.FileUploadRequest) => _Result;
        bytes: (value: FernIr.BytesRequest) => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const HttpRequestBody: {
    readonly inlinedRequestBody: (value: FernIr.InlinedRequestBody) => FernIr.HttpRequestBody.InlinedRequestBody;
    readonly reference: (value: FernIr.HttpRequestBodyReference) => FernIr.HttpRequestBody.Reference;
    readonly fileUpload: (value: FernIr.FileUploadRequest) => FernIr.HttpRequestBody.FileUpload;
    readonly bytes: (value: FernIr.BytesRequest) => FernIr.HttpRequestBody.Bytes;
    readonly _visit: <_Result>(value: FernIr.HttpRequestBody, visitor: FernIr.HttpRequestBody._Visitor<_Result>) => _Result;
};
