/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const ErrorDiscriminationStrategy: core.serialization.Schema<serializers.ErrorDiscriminationStrategy.Raw, FernIr.ErrorDiscriminationStrategy>;
export declare namespace ErrorDiscriminationStrategy {
    type Raw = ErrorDiscriminationStrategy.StatusCode | ErrorDiscriminationStrategy.Property;
    interface StatusCode {
        type: "statusCode";
    }
    interface Property extends serializers.ErrorDiscriminationByPropertyStrategy.Raw {
        type: "property";
    }
}