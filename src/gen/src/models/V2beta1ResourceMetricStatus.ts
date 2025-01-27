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
/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 * @export
 * @interface V2beta1ResourceMetricStatus
 */
export interface V2beta1ResourceMetricStatus {
    /**
     * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification.
     * @type {number}
     * @memberof V2beta1ResourceMetricStatus
     */
    currentAverageUtilization?: number;
    /**
     * currentAverageValue is the current value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. It will always be set, regardless of the corresponding metric specification.
     * @type {string}
     * @memberof V2beta1ResourceMetricStatus
     */
    currentAverageValue: string;
    /**
     * name is the name of the resource in question.
     * @type {string}
     * @memberof V2beta1ResourceMetricStatus
     */
    name: string;
}

export function V2beta1ResourceMetricStatusFromJSON(json: any): V2beta1ResourceMetricStatus {
    return V2beta1ResourceMetricStatusFromJSONTyped(json, false);
}

export function V2beta1ResourceMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1ResourceMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentAverageUtilization': !exists(json, 'currentAverageUtilization') ? undefined : json['currentAverageUtilization'],
        'currentAverageValue': json['currentAverageValue'],
        'name': json['name'],
    };
}

export function V2beta1ResourceMetricStatusToJSON(value?: V2beta1ResourceMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currentAverageUtilization': value.currentAverageUtilization,
        'currentAverageValue': value.currentAverageValue,
        'name': value.name,
    };
}

