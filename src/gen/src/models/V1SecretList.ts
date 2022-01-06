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
    V1Secret,
    V1SecretFromJSON,
    V1SecretFromJSONTyped,
    V1SecretToJSON,
} from './V1Secret';

/**
 * SecretList is a list of Secret.
 * @export
 * @interface V1SecretList
 */
export interface V1SecretList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1SecretList
     */
    apiVersion?: string;
    /**
     * Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
     * @type {Array<V1Secret>}
     * @memberof V1SecretList
     */
    items: Array<V1Secret>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1SecretList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1SecretList
     */
    metadata?: V1ListMeta;
}

export function V1SecretListFromJSON(json: any): V1SecretList {
    return V1SecretListFromJSONTyped(json, false);
}

export function V1SecretListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SecretList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1SecretFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1SecretListToJSON(value?: V1SecretList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1SecretToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

