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
/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 * @export
 * @interface V1LocalVolumeSource
 */
export interface V1LocalVolumeSource {
    /**
     * Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a fileystem if unspecified.
     * @type {string}
     * @memberof V1LocalVolumeSource
     */
    fsType?: string;
    /**
     * The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
     * @type {string}
     * @memberof V1LocalVolumeSource
     */
    path: string;
}

export function V1LocalVolumeSourceFromJSON(json: any): V1LocalVolumeSource {
    return V1LocalVolumeSourceFromJSONTyped(json, false);
}

export function V1LocalVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LocalVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'path': json['path'],
    };
}

export function V1LocalVolumeSourceToJSON(value?: V1LocalVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'path': value.path,
    };
}
