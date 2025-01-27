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
    V2beta2HorizontalPodAutoscalerSpec,
    V2beta2HorizontalPodAutoscalerSpecFromJSON,
    V2beta2HorizontalPodAutoscalerSpecFromJSONTyped,
    V2beta2HorizontalPodAutoscalerSpecToJSON,
} from './V2beta2HorizontalPodAutoscalerSpec';
import {
    V2beta2HorizontalPodAutoscalerStatus,
    V2beta2HorizontalPodAutoscalerStatusFromJSON,
    V2beta2HorizontalPodAutoscalerStatusFromJSONTyped,
    V2beta2HorizontalPodAutoscalerStatusToJSON,
} from './V2beta2HorizontalPodAutoscalerStatus';

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 * @export
 * @interface V2beta2HorizontalPodAutoscaler
 */
export interface V2beta2HorizontalPodAutoscaler {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V2beta2HorizontalPodAutoscaler
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V2beta2HorizontalPodAutoscaler
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V2beta2HorizontalPodAutoscaler
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V2beta2HorizontalPodAutoscalerSpec}
     * @memberof V2beta2HorizontalPodAutoscaler
     */
    spec?: V2beta2HorizontalPodAutoscalerSpec;
    /**
     * 
     * @type {V2beta2HorizontalPodAutoscalerStatus}
     * @memberof V2beta2HorizontalPodAutoscaler
     */
    status?: V2beta2HorizontalPodAutoscalerStatus;
}

export function V2beta2HorizontalPodAutoscalerFromJSON(json: any): V2beta2HorizontalPodAutoscaler {
    return V2beta2HorizontalPodAutoscalerFromJSONTyped(json, false);
}

export function V2beta2HorizontalPodAutoscalerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2HorizontalPodAutoscaler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V2beta2HorizontalPodAutoscalerSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V2beta2HorizontalPodAutoscalerStatusFromJSON(json['status']),
    };
}

export function V2beta2HorizontalPodAutoscalerToJSON(value?: V2beta2HorizontalPodAutoscaler | null): any {
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
        'spec': V2beta2HorizontalPodAutoscalerSpecToJSON(value.spec),
        'status': V2beta2HorizontalPodAutoscalerStatusToJSON(value.status),
    };
}

