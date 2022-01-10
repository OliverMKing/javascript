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

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 * @export
 * @interface V2beta1PodsMetricSource
 */
export interface V2beta1PodsMetricSource {
    /**
     * metricName is the name of the metric in question
     * @type {string}
     * @memberof V2beta1PodsMetricSource
     */
    metricName: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V2beta1PodsMetricSource
     */
    selector?: V1LabelSelector;
    /**
     * targetAverageValue is the target value of the average of the metric across all relevant pods (as a quantity)
     * @type {string}
     * @memberof V2beta1PodsMetricSource
     */
    targetAverageValue: string;
}

export function V2beta1PodsMetricSourceFromJSON(json: any): V2beta1PodsMetricSource {
    return V2beta1PodsMetricSourceFromJSONTyped(json, false);
}

export function V2beta1PodsMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1PodsMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metricName': json['metricName'],
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
        'targetAverageValue': json['targetAverageValue'],
    };
}

export function V2beta1PodsMetricSourceToJSON(value?: V2beta1PodsMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metricName': value.metricName,
        'selector': V1LabelSelectorToJSON(value.selector),
        'targetAverageValue': value.targetAverageValue,
    };
}
