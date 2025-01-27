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
    V1Endpoints,
    V1EndpointsFromJSON,
    V1EndpointsFromJSONTyped,
    V1EndpointsToJSON,
} from './V1Endpoints';
import {
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * EndpointsList is a list of endpoints.
 * @export
 * @interface V1EndpointsList
 */
export interface V1EndpointsList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1EndpointsList
     */
    apiVersion?: string;
    /**
     * List of endpoints.
     * @type {Array<V1Endpoints>}
     * @memberof V1EndpointsList
     */
    items: Array<V1Endpoints>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1EndpointsList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1EndpointsList
     */
    metadata?: V1ListMeta;
}

export function V1EndpointsListFromJSON(json: any): V1EndpointsList {
    return V1EndpointsListFromJSONTyped(json, false);
}

export function V1EndpointsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EndpointsList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1EndpointsFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1EndpointsListToJSON(value?: V1EndpointsList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1EndpointsToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

