/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const FernFilepath: core.serialization.ObjectSchema<serializers.FernFilepath.Raw, FernIr.FernFilepath>;
export declare namespace FernFilepath {
    interface Raw {
        allParts: serializers.Name.Raw[];
        packagePath: serializers.Name.Raw[];
        file?: serializers.Name.Raw | null;
    }
}