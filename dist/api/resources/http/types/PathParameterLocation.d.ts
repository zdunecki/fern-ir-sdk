/**
 * This file was auto-generated by Fern from our API Definition.
 */
export declare type PathParameterLocation = "ROOT" | "SERVICE" | "ENDPOINT";
export declare const PathParameterLocation: {
    readonly Root: "ROOT";
    readonly Service: "SERVICE";
    readonly Endpoint: "ENDPOINT";
    readonly _visit: <R>(value: PathParameterLocation, visitor: PathParameterLocation.Visitor<R>) => R;
};
export declare namespace PathParameterLocation {
    interface Visitor<R> {
        root: () => R;
        service: () => R;
        endpoint: () => R;
        _other: () => R;
    }
}