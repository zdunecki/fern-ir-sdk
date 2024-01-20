/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type SdkRequestBodyType = FernIr.SdkRequestBodyType.TypeReference | FernIr.SdkRequestBodyType.Bytes;
export declare namespace SdkRequestBodyType {
    interface TypeReference extends FernIr.HttpRequestBodyReference, _Utils {
        type: "typeReference";
    }
    interface Bytes extends FernIr.BytesRequest, _Utils {
        type: "bytes";
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.SdkRequestBodyType._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        typeReference: (value: FernIr.HttpRequestBodyReference) => _Result;
        bytes: (value: FernIr.BytesRequest) => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const SdkRequestBodyType: {
    readonly typeReference: (value: FernIr.HttpRequestBodyReference) => FernIr.SdkRequestBodyType.TypeReference;
    readonly bytes: (value: FernIr.BytesRequest) => FernIr.SdkRequestBodyType.Bytes;
    readonly _visit: <_Result>(value: FernIr.SdkRequestBodyType, visitor: FernIr.SdkRequestBodyType._Visitor<_Result>) => _Result;
};
