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
    V2beta2CrossVersionObjectReference,
    V2beta2CrossVersionObjectReferenceFromJSON,
    V2beta2CrossVersionObjectReferenceFromJSONTyped,
    V2beta2CrossVersionObjectReferenceToJSON,
} from './V2beta2CrossVersionObjectReference';
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
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 * @export
 * @interface V2beta2ObjectMetricStatus
 */
export interface V2beta2ObjectMetricStatus {
    /**
     * 
     * @type {V2beta2MetricValueStatus}
     * @memberof V2beta2ObjectMetricStatus
     */
    current: V2beta2MetricValueStatus;
    /**
     * 
     * @type {V2beta2CrossVersionObjectReference}
     * @memberof V2beta2ObjectMetricStatus
     */
    describedObject: V2beta2CrossVersionObjectReference;
    /**
     * 
     * @type {V2beta2MetricIdentifier}
     * @memberof V2beta2ObjectMetricStatus
     */
    metric: V2beta2MetricIdentifier;
}

export function V2beta2ObjectMetricStatusFromJSON(json: any): V2beta2ObjectMetricStatus {
    return V2beta2ObjectMetricStatusFromJSONTyped(json, false);
}

export function V2beta2ObjectMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2ObjectMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': V2beta2MetricValueStatusFromJSON(json['current']),
        'describedObject': V2beta2CrossVersionObjectReferenceFromJSON(json['describedObject']),
        'metric': V2beta2MetricIdentifierFromJSON(json['metric']),
    };
}

export function V2beta2ObjectMetricStatusToJSON(value?: V2beta2ObjectMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': V2beta2MetricValueStatusToJSON(value.current),
        'describedObject': V2beta2CrossVersionObjectReferenceToJSON(value.describedObject),
        'metric': V2beta2MetricIdentifierToJSON(value.metric),
    };
}
