/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as FernIr from "../../..";
export declare type ExamplePrimitive = FernIr.ExamplePrimitive.Integer | FernIr.ExamplePrimitive.Double | FernIr.ExamplePrimitive.String | FernIr.ExamplePrimitive.Boolean | FernIr.ExamplePrimitive.Long | FernIr.ExamplePrimitive.Datetime | FernIr.ExamplePrimitive.Date_ | FernIr.ExamplePrimitive.Uuid;
export declare namespace ExamplePrimitive {
    interface Integer extends _Utils {
        type: "integer";
        integer: number;
    }
    interface Double extends _Utils {
        type: "double";
        double: number;
    }
    interface String extends _Utils {
        type: "string";
        string: FernIr.EscapedString;
    }
    interface Boolean extends _Utils {
        type: "boolean";
        boolean: boolean;
    }
    interface Long extends _Utils {
        type: "long";
        long: number;
    }
    interface Datetime extends _Utils {
        type: "datetime";
        datetime: Date;
    }
    interface Date_ extends _Utils {
        type: "date";
        date: string;
    }
    interface Uuid extends _Utils {
        type: "uuid";
        uuid: string;
    }
    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExamplePrimitive._Visitor<_Result>) => _Result;
    }
    interface _Visitor<_Result> {
        integer: (value: number) => _Result;
        double: (value: number) => _Result;
        string: (value: FernIr.EscapedString) => _Result;
        boolean: (value: boolean) => _Result;
        long: (value: number) => _Result;
        datetime: (value: Date) => _Result;
        date: (value: string) => _Result;
        uuid: (value: string) => _Result;
        _other: (value: {
            type: string;
        }) => _Result;
    }
}
export declare const ExamplePrimitive: {
    readonly integer: (value: number) => FernIr.ExamplePrimitive.Integer;
    readonly double: (value: number) => FernIr.ExamplePrimitive.Double;
    readonly string: (value: FernIr.EscapedString) => FernIr.ExamplePrimitive.String;
    readonly boolean: (value: boolean) => FernIr.ExamplePrimitive.Boolean;
    readonly long: (value: number) => FernIr.ExamplePrimitive.Long;
    readonly datetime: (value: Date) => FernIr.ExamplePrimitive.Datetime;
    readonly date: (value: string) => FernIr.ExamplePrimitive.Date_;
    readonly uuid: (value: string) => FernIr.ExamplePrimitive.Uuid;
    readonly _visit: <_Result>(value: FernIr.ExamplePrimitive, visitor: FernIr.ExamplePrimitive._Visitor<_Result>) => _Result;
};
