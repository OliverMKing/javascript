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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import {
    V1ServiceSpec,
    V1ServiceSpecFromJSON,
    V1ServiceSpecFromJSONTyped,
    V1ServiceSpecToJSON,
} from './V1ServiceSpec';
import {
    V1ServiceStatus,
    V1ServiceStatusFromJSON,
    V1ServiceStatusFromJSONTyped,
    V1ServiceStatusToJSON,
} from './V1ServiceStatus';

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 * @export
 * @interface V1Service
 */
export interface V1Service {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Service
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Service
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1Service
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1ServiceSpec}
     * @memberof V1Service
     */
    spec?: V1ServiceSpec;
    /**
     * 
     * @type {V1ServiceStatus}
     * @memberof V1Service
     */
    status?: V1ServiceStatus;
}

export function V1ServiceFromJSON(json: any): V1Service {
    return V1ServiceFromJSONTyped(json, false);
}

export function V1ServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Service {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1ServiceSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1ServiceStatusFromJSON(json['status']),
    };
}

export function V1ServiceToJSON(value?: V1Service | null): any {
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
        'spec': V1ServiceSpecToJSON(value.spec),
        'status': V1ServiceStatusToJSON(value.status),
    };
}

