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
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1CinderPersistentVolumeSource
 */
export interface V1CinderPersistentVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof V1CinderPersistentVolumeSource
     */
    fsType?: string;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {boolean}
     * @memberof V1CinderPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1SecretReference}
     * @memberof V1CinderPersistentVolumeSource
     */
    secretRef?: V1SecretReference;
    /**
     * volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof V1CinderPersistentVolumeSource
     */
    volumeID: string;
}

export function V1CinderPersistentVolumeSourceFromJSON(json: any): V1CinderPersistentVolumeSource {
    return V1CinderPersistentVolumeSourceFromJSONTyped(json, false);
}

export function V1CinderPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CinderPersistentVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : V1SecretReferenceFromJSON(json['secretRef']),
        'volumeID': json['volumeID'],
    };
}

export function V1CinderPersistentVolumeSourceToJSON(value?: V1CinderPersistentVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'secretRef': V1SecretReferenceToJSON(value.secretRef),
        'volumeID': value.volumeID,
    };
}

