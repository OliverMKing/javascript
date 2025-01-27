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
    V2beta2MetricIdentifier,
    V2beta2MetricIdentifierFromJSON,
    V2beta2MetricIdentifierFromJSONTyped,
    V2beta2MetricIdentifierToJSON,
} from './V2beta2MetricIdentifier';
import {
    V2beta2MetricValueStatus,
    V2beta2MetricValueStatusFromJSON,
    V2beta2MetricValueStatusFromJSONTyped,
    V2beta2MetricValueStatusToJSON,
} from './V2beta2MetricValueStatus';

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 * @export
 * @interface V2beta2ExternalMetricStatus
 */
export interface V2beta2ExternalMetricStatus {
    /**
     * 
     * @type {V2beta2MetricValueStatus}
     * @memberof V2beta2ExternalMetricStatus
     */
    current: V2beta2MetricValueStatus;
    /**
     * 
     * @type {V2beta2MetricIdentifier}
     * @memberof V2beta2ExternalMetricStatus
     */
    metric: V2beta2MetricIdentifier;
}

export function V2beta2ExternalMetricStatusFromJSON(json: any): V2beta2ExternalMetricStatus {
    return V2beta2ExternalMetricStatusFromJSONTyped(json, false);
}

export function V2beta2ExternalMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2ExternalMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': V2beta2MetricValueStatusFromJSON(json['current']),
        'metric': V2beta2MetricIdentifierFromJSON(json['metric']),
    };
}

export function V2beta2ExternalMetricStatusToJSON(value?: V2beta2ExternalMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': V2beta2MetricValueStatusToJSON(value.current),
        'metric': V2beta2MetricIdentifierToJSON(value.metric),
    };
}

