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
    V1SecretReference,
    V1SecretReferenceFromJSON,
    V1SecretReferenceFromJSONTyped,
    V1SecretReferenceToJSON,
} from './V1SecretReference';

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 * @export
 * @interface V1CSIPersistentVolumeSource
 */
export interface V1CSIPersistentVolumeSource {
    /**
     * 
     * @type {V1SecretReference}
     * @memberof V1CSIPersistentVolumeSource
     */
    controllerExpandSecretRef?: V1SecretReference;
    /**
     * 
     * @type {V1SecretReference}
     * @memberof V1CSIPersistentVolumeSource
     */
    controllerPublishSecretRef?: V1SecretReference;
    /**
     * Driver is the name of the driver to use for this volume. Required.
     * @type {string}
     * @memberof V1CSIPersistentVolumeSource
     */
    driver: string;
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
     * @type {string}
     * @memberof V1CSIPersistentVolumeSource
     */
    fsType?: string;
    /**
     * 
     * @type {V1SecretReference}
     * @memberof V1CSIPersistentVolumeSource
     */
    nodePublishSecretRef?: V1SecretReference;
    /**
     * 
     * @type {V1SecretReference}
     * @memberof V1CSIPersistentVolumeSource
     */
    nodeStageSecretRef?: V1SecretReference;
    /**
     * Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
     * @type {boolean}
     * @memberof V1CSIPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     * Attributes of the volume to publish.
     * @type {{ [key: string]: string; }}
     * @memberof V1CSIPersistentVolumeSource
     */
    volumeAttributes?: { [key: string]: string; };
    /**
     * VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
     * @type {string}
     * @memberof V1CSIPersistentVolumeSource
     */
    volumeHandle: string;
}

export function V1CSIPersistentVolumeSourceFromJSON(json: any): V1CSIPersistentVolumeSource {
    return V1CSIPersistentVolumeSourceFromJSONTyped(json, false);
}

export function V1CSIPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CSIPersistentVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'controllerExpandSecretRef': !exists(json, 'controllerExpandSecretRef') ? undefined : V1SecretReferenceFromJSON(json['controllerExpandSecretRef']),
        'controllerPublishSecretRef': !exists(json, 'controllerPublishSecretRef') ? undefined : V1SecretReferenceFromJSON(json['controllerPublishSecretRef']),
        'driver': json['driver'],
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'nodePublishSecretRef': !exists(json, 'nodePublishSecretRef') ? undefined : V1SecretReferenceFromJSON(json['nodePublishSecretRef']),
        'nodeStageSecretRef': !exists(json, 'nodeStageSecretRef') ? undefined : V1SecretReferenceFromJSON(json['nodeStageSecretRef']),
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'volumeAttributes': !exists(json, 'volumeAttributes') ? undefined : json['volumeAttributes'],
        'volumeHandle': json['volumeHandle'],
    };
}

export function V1CSIPersistentVolumeSourceToJSON(value?: V1CSIPersistentVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'controllerExpandSecretRef': V1SecretReferenceToJSON(value.controllerExpandSecretRef),
        'controllerPublishSecretRef': V1SecretReferenceToJSON(value.controllerPublishSecretRef),
        'driver': value.driver,
        'fsType': value.fsType,
        'nodePublishSecretRef': V1SecretReferenceToJSON(value.nodePublishSecretRef),
        'nodeStageSecretRef': V1SecretReferenceToJSON(value.nodeStageSecretRef),
        'readOnly': value.readOnly,
        'volumeAttributes': value.volumeAttributes,
        'volumeHandle': value.volumeHandle,
    };
}

