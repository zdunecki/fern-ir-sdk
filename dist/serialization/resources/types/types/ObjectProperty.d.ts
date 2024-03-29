/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const ObjectProperty: core.serialization.ObjectSchema<serializers.ObjectProperty.Raw, FernIr.ObjectProperty>;
export declare namespace ObjectProperty {
    interface Raw extends serializers.Declaration.Raw {
        name: serializers.NameAndWireValue.Raw;
        valueType: serializers.TypeReference.Raw;
    }
}
