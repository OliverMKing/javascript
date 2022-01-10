/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1LocalObjectReference,
    V1LocalObjectReferenceFromJSON,
    V1LocalObjectReferenceFromJSONTyped,
    V1LocalObjectReferenceToJSON,
} from './V1LocalObjectReference';

/**
 * Represents a StorageOS persistent volume resource.
 * @export
 * @interface V1StorageOSVolumeSource
 */
export interface V1StorageOSVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     * @type {string}
     * @memberof V1StorageOSVolumeSource
     */
    fsType?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof V1StorageOSVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1StorageOSVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
     * @type {string}
     * @memberof V1StorageOSVolumeSource
     */
    volumeName?: string;
    /**
     * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
     * @type {string}
     * @memberof V1StorageOSVolumeSource
     */
    volumeNamespace?: string;
}

export function V1StorageOSVolumeSourceFromJSON(json: any): V1StorageOSVolumeSource {
    return V1StorageOSVolumeSourceFromJSONTyped(json, false);
}

export function V1StorageOSVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StorageOSVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : V1LocalObjectReferenceFromJSON(json['secretRef']),
        'volumeName': !exists(json, 'volumeName') ? undefined : json['volumeName'],
        'volumeNamespace': !exists(json, 'volumeNamespace') ? undefined : json['volumeNamespace'],
    };
}

export function V1StorageOSVolumeSourceToJSON(value?: V1StorageOSVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'secretRef': V1LocalObjectReferenceToJSON(value.secretRef),
        'volumeName': value.volumeName,
        'volumeNamespace': value.volumeNamespace,
    };
}
