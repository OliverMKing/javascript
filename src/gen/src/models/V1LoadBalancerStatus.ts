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
    V1LoadBalancerIngress,
    V1LoadBalancerIngressFromJSON,
    V1LoadBalancerIngressFromJSONTyped,
    V1LoadBalancerIngressToJSON,
} from './V1LoadBalancerIngress';

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 * @export
 * @interface V1LoadBalancerStatus
 */
export interface V1LoadBalancerStatus {
    /**
     * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
     * @type {Array<V1LoadBalancerIngress>}
     * @memberof V1LoadBalancerStatus
     */
    ingress?: Array<V1LoadBalancerIngress>;
}

export function V1LoadBalancerStatusFromJSON(json: any): V1LoadBalancerStatus {
    return V1LoadBalancerStatusFromJSONTyped(json, false);
}

export function V1LoadBalancerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LoadBalancerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ingress': !exists(json, 'ingress') ? undefined : ((json['ingress'] as Array<any>).map(V1LoadBalancerIngressFromJSON)),
    };
}

export function V1LoadBalancerStatusToJSON(value?: V1LoadBalancerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ingress': value.ingress === undefined ? undefined : ((value.ingress as Array<any>).map(V1LoadBalancerIngressToJSON)),
    };
}

