/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type ExampleSingleUnionTypeProperties = FernIr.ExampleSingleUnionTypeProperties.SamePropertiesAsObject | FernIr.ExampleSingleUnionTypeProperties.SingleProperty | FernIr.ExampleSingleUnionTypeProperties.NoProperties;
export declare namespace ExampleSingleUnionTypeProperties {
    interface SamePropertiesAsObject extends FernIr.ExampleObjectTypeWithTypeId, _Utils {
        type: "samePropertiesAsObject";
    }
    interface SingleProperty extends FernIr.ExampleTypeReference, _Utils {
        type: "singleProperty";
    }
    interface NoProperties extends _Utils {
        type: "noProperties";
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExampleSingleUnionTypeProperties._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        samePropertiesAsObject: (value: FernIr.ExampleObjectTypeWithTypeId) => _Result;
        singleProperty: (value: FernIr.ExampleTypeReference) => _Result;
        noProperties: () => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const ExampleSingleUnionTypeProperties: {
    readonly samePropertiesAsObject: (value: FernIr.ExampleObjectTypeWithTypeId) => FernIr.ExampleSingleUnionTypeProperties.SamePropertiesAsObject;
    readonly singleProperty: (value: FernIr.ExampleTypeReference) => FernIr.ExampleSingleUnionTypeProperties.SingleProperty;
    readonly noProperties: () => FernIr.ExampleSingleUnionTypeProperties.NoProperties;
    readonly _visit: <_Result>(value: FernIr.ExampleSingleUnionTypeProperties, visitor: FernIr.ExampleSingleUnionTypeProperties._Visitor<_Result>) => _Result;
};
