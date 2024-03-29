/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const PathParameter: core.serialization.ObjectSchema<serializers.PathParameter.Raw, FernIr.PathParameter>;
export declare namespace PathParameter {
    interface Raw extends serializers.WithDocs.Raw {
        name: serializers.Name.Raw;
        valueType: serializers.TypeReference.Raw;
        location: serializers.PathParameterLocation.Raw;
        variable?: serializers.VariableId.Raw | null;
    }
}
