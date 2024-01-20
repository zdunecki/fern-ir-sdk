/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type ErrorDiscriminationStrategy = FernIr.ErrorDiscriminationStrategy.StatusCode | FernIr.ErrorDiscriminationStrategy.Property;
export declare namespace ErrorDiscriminationStrategy {
    interface StatusCode extends _Utils {
        type: "statusCode";
    }
    interface Property extends FernIr.ErrorDiscriminationByPropertyStrategy, _Utils {
        type: "property";
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ErrorDiscriminationStrategy._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        statusCode: () => _Result;
        property: (value: FernIr.ErrorDiscriminationByPropertyStrategy) => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const ErrorDiscriminationStrategy: {
    readonly statusCode: () => FernIr.ErrorDiscriminationStrategy.StatusCode;
    readonly property: (value: FernIr.ErrorDiscriminationByPropertyStrategy) => FernIr.ErrorDiscriminationStrategy.Property;
    readonly _visit: <_Result>(value: FernIr.ErrorDiscriminationStrategy, visitor: FernIr.ErrorDiscriminationStrategy._Visitor<_Result>) => _Result;
};