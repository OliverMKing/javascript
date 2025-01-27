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
 * volumeDevice describes a mapping of a raw block device within a container.
 * @export
 * @interface V1VolumeDevice
 */
export interface V1VolumeDevice {
    /**
     * devicePath is the path inside of the container that the device will be mapped to.
     * @type {string}
     * @memberof V1VolumeDevice
     */
    devicePath: string;
    /**
     * name must match the name of a persistentVolumeClaim in the pod
     * @type {string}
     * @memberof V1VolumeDevice
     */
    name: string;
}

export function V1VolumeDeviceFromJSON(json: any): V1VolumeDevice {
    return V1VolumeDeviceFromJSONTyped(json, false);
}

export function V1VolumeDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VolumeDevice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'devicePath': json['devicePath'],
        'name': json['name'],
    };
}

export function V1VolumeDeviceToJSON(value?: V1VolumeDevice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'devicePath': value.devicePath,
        'name': value.name,
    };
}

