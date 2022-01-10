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
    V1IngressClass,
    V1IngressClassFromJSON,
    V1IngressClassFromJSONTyped,
    V1IngressClassToJSON,
} from './V1IngressClass';
import {
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * IngressClassList is a collection of IngressClasses.
 * @export
 * @interface V1IngressClassList
 */
export interface V1IngressClassList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1IngressClassList
     */
    apiVersion?: string;
    /**
     * Items is the list of IngressClasses.
     * @type {Array<V1IngressClass>}
     * @memberof V1IngressClassList
     */
    items: Array<V1IngressClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1IngressClassList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1IngressClassList
     */
    metadata?: V1ListMeta;
}

export function V1IngressClassListFromJSON(json: any): V1IngressClassList {
    return V1IngressClassListFromJSONTyped(json, false);
}

export function V1IngressClassListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressClassList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1IngressClassFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1IngressClassListToJSON(value?: V1IngressClassList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1IngressClassToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}
