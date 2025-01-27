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
    V2beta2MetricValueStatus,
    V2beta2MetricValueStatusFromJSON,
    V2beta2MetricValueStatusFromJSONTyped,
    V2beta2MetricValueStatusToJSON,
} from './V2beta2MetricValueStatus';

/**
 * ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 * @export
 * @interface V2beta2ContainerResourceMetricStatus
 */
export interface V2beta2ContainerResourceMetricStatus {
    /**
     * Container is the name of the container in the pods of the scaling target
     * @type {string}
     * @memberof V2beta2ContainerResourceMetricStatus
     */
    container: string;
    /**
     * 
     * @type {V2beta2MetricValueStatus}
     * @memberof V2beta2ContainerResourceMetricStatus
     */
    current: V2beta2MetricValueStatus;
    /**
     * Name is the name of the resource in question.
     * @type {string}
     * @memberof V2beta2ContainerResourceMetricStatus
     */
    name: string;
}

export function V2beta2ContainerResourceMetricStatusFromJSON(json: any): V2beta2ContainerResourceMetricStatus {
    return V2beta2ContainerResourceMetricStatusFromJSONTyped(json, false);
}

export function V2beta2ContainerResourceMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2ContainerResourceMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'container': json['container'],
        'current': V2beta2MetricValueStatusFromJSON(json['current']),
        'name': json['name'],
    };
}

export function V2beta2ContainerResourceMetricStatusToJSON(value?: V2beta2ContainerResourceMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'container': value.container,
        'current': V2beta2MetricValueStatusToJSON(value.current),
        'name': value.name,
    };
}

