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
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';
import {
    V2beta1CrossVersionObjectReference,
    V2beta1CrossVersionObjectReferenceFromJSON,
    V2beta1CrossVersionObjectReferenceFromJSONTyped,
    V2beta1CrossVersionObjectReferenceToJSON,
} from './V2beta1CrossVersionObjectReference';

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 * @export
 * @interface V2beta1ObjectMetricSource
 */
export interface V2beta1ObjectMetricSource {
    /**
     * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
     * @type {string}
     * @memberof V2beta1ObjectMetricSource
     */
    averageValue?: string;
    /**
     * metricName is the name of the metric in question.
     * @type {string}
     * @memberof V2beta1ObjectMetricSource
     */
    metricName: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V2beta1ObjectMetricSource
     */
    selector?: V1LabelSelector;
    /**
     * 
     * @type {V2beta1CrossVersionObjectReference}
     * @memberof V2beta1ObjectMetricSource
     */
    target: V2beta1CrossVersionObjectReference;
    /**
     * targetValue is the target value of the metric (as a quantity).
     * @type {string}
     * @memberof V2beta1ObjectMetricSource
     */
    targetValue: string;
}

export function V2beta1ObjectMetricSourceFromJSON(json: any): V2beta1ObjectMetricSource {
    return V2beta1ObjectMetricSourceFromJSONTyped(json, false);
}

export function V2beta1ObjectMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1ObjectMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageValue': !exists(json, 'averageValue') ? undefined : json['averageValue'],
        'metricName': json['metricName'],
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
        'target': V2beta1CrossVersionObjectReferenceFromJSON(json['target']),
        'targetValue': json['targetValue'],
    };
}

export function V2beta1ObjectMetricSourceToJSON(value?: V2beta1ObjectMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageValue': value.averageValue,
        'metricName': value.metricName,
        'selector': V1LabelSelectorToJSON(value.selector),
        'target': V2beta1CrossVersionObjectReferenceToJSON(value.target),
        'targetValue': value.targetValue,
    };
}

