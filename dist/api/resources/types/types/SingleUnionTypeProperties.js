"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleUnionTypeProperties = void 0;
const FernIr = __importStar(require("../../.."));
exports.SingleUnionTypeProperties = {
    samePropertiesAsObject: (value) => {
        return Object.assign(Object.assign({}, value), { propertiesType: "samePropertiesAsObject", _visit: function (visitor) {
                return FernIr.SingleUnionTypeProperties._visit(this, visitor);
            } });
    },
    singleProperty: (value) => {
        return Object.assign(Object.assign({}, value), { propertiesType: "singleProperty", _visit: function (visitor) {
                return FernIr.SingleUnionTypeProperties._visit(this, visitor);
            } });
    },
    noProperties: () => {
        return {
            propertiesType: "noProperties",
            _visit: function (visitor) {
                return FernIr.SingleUnionTypeProperties._visit(this, visitor);
            },
        };
    },
    _visit: (value, visitor) => {
        switch (value.propertiesType) {
            case "samePropertiesAsObject":
                return visitor.samePropertiesAsObject(value);
            case "singleProperty":
                return visitor.singleProperty(value);
            case "noProperties":
                return visitor.noProperties();
            default:
                return visitor._other(value);
        }
    },
};
