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
    V1ClusterRoleBinding,
    V1ClusterRoleBindingFromJSON,
    V1ClusterRoleBindingFromJSONTyped,
    V1ClusterRoleBindingToJSON,
} from './V1ClusterRoleBinding';
import {
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 * @export
 * @interface V1ClusterRoleBindingList
 */
export interface V1ClusterRoleBindingList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ClusterRoleBindingList
     */
    apiVersion?: string;
    /**
     * Items is a list of ClusterRoleBindings
     * @type {Array<V1ClusterRoleBinding>}
     * @memberof V1ClusterRoleBindingList
     */
    items: Array<V1ClusterRoleBinding>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ClusterRoleBindingList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1ClusterRoleBindingList
     */
    metadata?: V1ListMeta;
}

export function V1ClusterRoleBindingListFromJSON(json: any): V1ClusterRoleBindingList {
    return V1ClusterRoleBindingListFromJSONTyped(json, false);
}

export function V1ClusterRoleBindingListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ClusterRoleBindingList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1ClusterRoleBindingFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1ClusterRoleBindingListToJSON(value?: V1ClusterRoleBindingList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1ClusterRoleBindingToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

