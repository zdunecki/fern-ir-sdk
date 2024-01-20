/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type ExampleResponse = FernIr.ExampleResponse.Ok | FernIr.ExampleResponse.Error_;
export declare namespace ExampleResponse {
    interface Ok extends FernIr.ExampleEndpointSuccessResponse, _Utils {
        type: "ok";
    }
    interface Error_ extends FernIr.ExampleEndpointErrorResponse, _Utils {
        type: "error";
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExampleResponse._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        ok: (value: FernIr.ExampleEndpointSuccessResponse) => _Result;
        error: (value: FernIr.ExampleEndpointErrorResponse) => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const ExampleResponse: {
    readonly ok: (value: FernIr.ExampleEndpointSuccessResponse) => FernIr.ExampleResponse.Ok;
    readonly error: (value: FernIr.ExampleEndpointErrorResponse) => FernIr.ExampleResponse.Error_;
    readonly _visit: <_Result>(value: FernIr.ExampleResponse, visitor: FernIr.ExampleResponse._Visitor<_Result>) => _Result;
};