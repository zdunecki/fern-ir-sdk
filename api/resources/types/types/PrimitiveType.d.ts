/**
 * This file was auto-generated by Fern from our API Definition.
 */
export declare type PrimitiveType = "INTEGER" | "DOUBLE" | "STRING" | "BOOLEAN"
/**
 * Within the range -2^53 to 2^53 */
 | "LONG" | "DATE_TIME" | "DATE" | "UUID" | "BASE_64";
export declare const PrimitiveType: {
    readonly Integer: "INTEGER";
    readonly Double: "DOUBLE";
    readonly String: "STRING";
    readonly Boolean: "BOOLEAN";
    readonly Long: "LONG";
    readonly DateTime: "DATE_TIME";
    readonly Date: "DATE";
    readonly Uuid: "UUID";
    readonly Base64: "BASE_64";
    readonly _visit: <R>(value: PrimitiveType, visitor: PrimitiveType.Visitor<R>) => R;
};
export declare namespace PrimitiveType {
    interface Visitor<R> {
        integer: () => R;
        double: () => R;
        string: () => R;
        boolean: () => R;
        long: () => R;
        dateTime: () => R;
        date: () => R;
        uuid: () => R;
        base64: () => R;
        _other: () => R;
    }
}
