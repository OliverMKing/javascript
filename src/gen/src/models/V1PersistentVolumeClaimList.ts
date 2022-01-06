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
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';
import {
    V1PersistentVolumeClaim,
    V1PersistentVolumeClaimFromJSON,
    V1PersistentVolumeClaimFromJSONTyped,
    V1PersistentVolumeClaimToJSON,
} from './V1PersistentVolumeClaim';

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 * @export
 * @interface V1PersistentVolumeClaimList
 */
export interface V1PersistentVolumeClaimList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PersistentVolumeClaimList
     */
    apiVersion?: string;
    /**
     * A list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     * @type {Array<V1PersistentVolumeClaim>}
     * @memberof V1PersistentVolumeClaimList
     */
    items: Array<V1PersistentVolumeClaim>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PersistentVolumeClaimList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1PersistentVolumeClaimList
     */
    metadata?: V1ListMeta;
}

export function V1PersistentVolumeClaimListFromJSON(json: any): V1PersistentVolumeClaimList {
    return V1PersistentVolumeClaimListFromJSONTyped(json, false);
}

export function V1PersistentVolumeClaimListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeClaimList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1PersistentVolumeClaimFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1PersistentVolumeClaimListToJSON(value?: V1PersistentVolumeClaimList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1PersistentVolumeClaimToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

