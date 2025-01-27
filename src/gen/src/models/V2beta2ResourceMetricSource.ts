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
    V2beta2MetricTarget,
    V2beta2MetricTargetFromJSON,
    V2beta2MetricTargetFromJSONTyped,
    V2beta2MetricTargetToJSON,
} from './V2beta2MetricTarget';

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 * @export
 * @interface V2beta2ResourceMetricSource
 */
export interface V2beta2ResourceMetricSource {
    /**
     * name is the name of the resource in question.
     * @type {string}
     * @memberof V2beta2ResourceMetricSource
     */
    name: string;
    /**
     * 
     * @type {V2beta2MetricTarget}
     * @memberof V2beta2ResourceMetricSource
     */
    target: V2beta2MetricTarget;
}

export function V2beta2ResourceMetricSourceFromJSON(json: any): V2beta2ResourceMetricSource {
    return V2beta2ResourceMetricSourceFromJSONTyped(json, false);
}

export function V2beta2ResourceMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2ResourceMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'target': V2beta2MetricTargetFromJSON(json['target']),
    };
}

export function V2beta2ResourceMetricSourceToJSON(value?: V2beta2ResourceMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'target': V2beta2MetricTargetToJSON(value.target),
    };
}

