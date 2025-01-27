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
    V1StatefulSet,
    V1StatefulSetFromJSON,
    V1StatefulSetFromJSONTyped,
    V1StatefulSetToJSON,
} from './V1StatefulSet';

/**
 * StatefulSetList is a collection of StatefulSets.
 * @export
 * @interface V1StatefulSetList
 */
export interface V1StatefulSetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1StatefulSetList
     */
    apiVersion?: string;
    /**
     * Items is the list of stateful sets.
     * @type {Array<V1StatefulSet>}
     * @memberof V1StatefulSetList
     */
    items: Array<V1StatefulSet>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1StatefulSetList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1StatefulSetList
     */
    metadata?: V1ListMeta;
}

export function V1StatefulSetListFromJSON(json: any): V1StatefulSetList {
    return V1StatefulSetListFromJSONTyped(json, false);
}

export function V1StatefulSetListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatefulSetList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1StatefulSetFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1StatefulSetListToJSON(value?: V1StatefulSetList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1StatefulSetToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

