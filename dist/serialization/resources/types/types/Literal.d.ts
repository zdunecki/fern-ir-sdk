/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const Literal: core.serialization.Schema<serializers.Literal.Raw, FernIr.Literal>;
export declare namespace Literal {
    type Raw = Literal.String | Literal.Boolean;
    interface String {
        type: "string";
        string: string;
    }
    interface Boolean {
        type: "boolean";
        boolean: boolean;
    }
}
