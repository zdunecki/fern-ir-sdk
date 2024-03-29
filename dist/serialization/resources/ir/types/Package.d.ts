/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";
export declare const Package: core.serialization.ObjectSchema<serializers.Package.Raw, FernIr.Package>;
export declare namespace Package {
    interface Raw extends serializers.WithDocs.Raw {
        fernFilepath: serializers.FernFilepath.Raw;
        service?: serializers.ServiceId.Raw | null;
        types: serializers.TypeId.Raw[];
        errors: serializers.ErrorId.Raw[];
        webhooks?: serializers.WebhookGroupId.Raw | null;
        subpackages: serializers.SubpackageId.Raw[];
        hasEndpointsInTree: boolean;
        navigationConfig?: serializers.PackageNavigationConfig.Raw | null;
    }
}
