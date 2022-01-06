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
    V1NetworkPolicySpec,
    V1NetworkPolicySpecFromJSON,
    V1NetworkPolicySpecFromJSONTyped,
    V1NetworkPolicySpecToJSON,
} from './V1NetworkPolicySpec';
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 * @export
 * @interface V1NetworkPolicy
 */
export interface V1NetworkPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1NetworkPolicy
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1NetworkPolicy
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1NetworkPolicy
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1NetworkPolicySpec}
     * @memberof V1NetworkPolicy
     */
    spec?: V1NetworkPolicySpec;
}

export function V1NetworkPolicyFromJSON(json: any): V1NetworkPolicy {
    return V1NetworkPolicyFromJSONTyped(json, false);
}

export function V1NetworkPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NetworkPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1NetworkPolicySpecFromJSON(json['spec']),
    };
}

export function V1NetworkPolicyToJSON(value?: V1NetworkPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1NetworkPolicySpecToJSON(value.spec),
    };
}

