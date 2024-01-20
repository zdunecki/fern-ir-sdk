/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type StreamingResponseChunkType = FernIr.StreamingResponseChunkType.Json | FernIr.StreamingResponseChunkType.Text;
export declare namespace StreamingResponseChunkType {
    interface Json extends _Utils {
        type: "json";
        json: FernIr.TypeReference;
    }
    interface Text extends _Utils {
        type: "text";
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.StreamingResponseChunkType._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        json: (value: FernIr.TypeReference) => _Result;
        text: () => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const StreamingResponseChunkType: {
    readonly json: (value: FernIr.TypeReference) => FernIr.StreamingResponseChunkType.Json;
    readonly text: () => FernIr.StreamingResponseChunkType.Text;
    readonly _visit: <_Result>(value: FernIr.StreamingResponseChunkType, visitor: FernIr.StreamingResponseChunkType._Visitor<_Result>) => _Result;
};