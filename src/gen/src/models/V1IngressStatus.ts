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
    V1LoadBalancerStatus,
    V1LoadBalancerStatusFromJSON,
    V1LoadBalancerStatusFromJSONTyped,
    V1LoadBalancerStatusToJSON,
} from './V1LoadBalancerStatus';

/**
 * IngressStatus describe the current state of the Ingress.
 * @export
 * @interface V1IngressStatus
 */
export interface V1IngressStatus {
    /**
     * 
     * @type {V1LoadBalancerStatus}
     * @memberof V1IngressStatus
     */
    loadBalancer?: V1LoadBalancerStatus;
}

export function V1IngressStatusFromJSON(json: any): V1IngressStatus {
    return V1IngressStatusFromJSONTyped(json, false);
}

export function V1IngressStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loadBalancer': !exists(json, 'loadBalancer') ? undefined : V1LoadBalancerStatusFromJSON(json['loadBalancer']),
    };
}

export function V1IngressStatusToJSON(value?: V1IngressStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loadBalancer': V1LoadBalancerStatusToJSON(value.loadBalancer),
    };
}
