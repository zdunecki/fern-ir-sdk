"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathParameterLocation = void 0;
exports.PathParameterLocation = {
    Root: "ROOT",
    Service: "SERVICE",
    Endpoint: "ENDPOINT",
    _visit: (value, visitor) => {
        switch (value) {
            case exports.PathParameterLocation.Root:
                return visitor.root();
            case exports.PathParameterLocation.Service:
                return visitor.service();
            case exports.PathParameterLocation.Endpoint:
                return visitor.endpoint();
            default:
                return visitor._other();
        }
    },
};
