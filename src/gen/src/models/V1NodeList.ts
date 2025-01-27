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
    V1Node,
    V1NodeFromJSON,
    V1NodeFromJSONTyped,
    V1NodeToJSON,
} from './V1Node';

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 * @export
 * @interface V1NodeList
 */
export interface V1NodeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1NodeList
     */
    apiVersion?: string;
    /**
     * List of nodes
     * @type {Array<V1Node>}
     * @memberof V1NodeList
     */
    items: Array<V1Node>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1NodeList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1NodeList
     */
    metadata?: V1ListMeta;
}

export function V1NodeListFromJSON(json: any): V1NodeList {
    return V1NodeListFromJSONTyped(json, false);
}

export function V1NodeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1NodeFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1NodeListToJSON(value?: V1NodeList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1NodeToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

