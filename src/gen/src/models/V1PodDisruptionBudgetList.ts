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
    V1PodDisruptionBudget,
    V1PodDisruptionBudgetFromJSON,
    V1PodDisruptionBudgetFromJSONTyped,
    V1PodDisruptionBudgetToJSON,
} from './V1PodDisruptionBudget';

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 * @export
 * @interface V1PodDisruptionBudgetList
 */
export interface V1PodDisruptionBudgetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PodDisruptionBudgetList
     */
    apiVersion?: string;
    /**
     * Items is a list of PodDisruptionBudgets
     * @type {Array<V1PodDisruptionBudget>}
     * @memberof V1PodDisruptionBudgetList
     */
    items: Array<V1PodDisruptionBudget>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PodDisruptionBudgetList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1PodDisruptionBudgetList
     */
    metadata?: V1ListMeta;
}

export function V1PodDisruptionBudgetListFromJSON(json: any): V1PodDisruptionBudgetList {
    return V1PodDisruptionBudgetListFromJSONTyped(json, false);
}

export function V1PodDisruptionBudgetListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodDisruptionBudgetList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1PodDisruptionBudgetFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1PodDisruptionBudgetListToJSON(value?: V1PodDisruptionBudgetList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1PodDisruptionBudgetToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}
