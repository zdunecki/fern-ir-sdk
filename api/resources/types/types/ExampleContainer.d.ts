/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type ExampleContainer = FernIr.ExampleContainer.List | FernIr.ExampleContainer.Set | FernIr.ExampleContainer.Optional | FernIr.ExampleContainer.Map;
export declare namespace ExampleContainer {
    interface List extends _Utils {
        type: "list";
        list: FernIr.ExampleTypeReference[];
    }
    interface Set extends _Utils {
        type: "set";
        set: FernIr.ExampleTypeReference[];
    }
    interface Optional extends _Utils {
        type: "optional";
        optional: FernIr.ExampleTypeReference | undefined;
    }
    interface Map extends _Utils {
        type: "map";
        map: FernIr.ExampleKeyValuePair[];
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExampleContainer._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        list: (value: FernIr.ExampleTypeReference[]) => _Result;
        set: (value: FernIr.ExampleTypeReference[]) => _Result;
        optional: (value: FernIr.ExampleTypeReference | undefined) => _Result;
        map: (value: FernIr.ExampleKeyValuePair[]) => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const ExampleContainer: {
    readonly list: (value: FernIr.ExampleTypeReference[]) => FernIr.ExampleContainer.List;
    readonly set: (value: FernIr.ExampleTypeReference[]) => FernIr.ExampleContainer.Set;
    readonly optional: (value?: FernIr.ExampleTypeReference | undefined) => FernIr.ExampleContainer.Optional;
    readonly map: (value: FernIr.ExampleKeyValuePair[]) => FernIr.ExampleContainer.Map;
    readonly _visit: <_Result>(value: FernIr.ExampleContainer, visitor: FernIr.ExampleContainer._Visitor<_Result>) => _Result;
};
