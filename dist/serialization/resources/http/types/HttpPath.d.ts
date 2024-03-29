/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const HttpPath: core.serialization.ObjectSchema<serializers.HttpPath.Raw, FernIr.HttpPath>;
export declare namespace HttpPath {
    interface Raw {
        head: string;
        parts: serializers.HttpPathPart.Raw[];
    }
}
