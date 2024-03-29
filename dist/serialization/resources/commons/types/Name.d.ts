/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const Name: core.serialization.ObjectSchema<serializers.Name.Raw, FernIr.Name>;
export declare namespace Name {
    interface Raw {
        originalName: string;
        camelCase: serializers.SafeAndUnsafeString.Raw;
        pascalCase: serializers.SafeAndUnsafeString.Raw;
        snakeCase: serializers.SafeAndUnsafeString.Raw;
        screamingSnakeCase: serializers.SafeAndUnsafeString.Raw;
    }
}
