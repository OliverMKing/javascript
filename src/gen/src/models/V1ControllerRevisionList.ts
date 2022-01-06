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
    V1ControllerRevision,
    V1ControllerRevisionFromJSON,
    V1ControllerRevisionFromJSONTyped,
    V1ControllerRevisionToJSON,
} from './V1ControllerRevision';
import {
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 * @export
 * @interface V1ControllerRevisionList
 */
export interface V1ControllerRevisionList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ControllerRevisionList
     */
    apiVersion?: string;
    /**
     * Items is the list of ControllerRevisions
     * @type {Array<V1ControllerRevision>}
     * @memberof V1ControllerRevisionList
     */
    items: Array<V1ControllerRevision>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ControllerRevisionList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1ControllerRevisionList
     */
    metadata?: V1ListMeta;
}

export function V1ControllerRevisionListFromJSON(json: any): V1ControllerRevisionList {
    return V1ControllerRevisionListFromJSONTyped(json, false);
}

export function V1ControllerRevisionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ControllerRevisionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1ControllerRevisionFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1ControllerRevisionListToJSON(value?: V1ControllerRevisionList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1ControllerRevisionToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

