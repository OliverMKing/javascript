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
    V1DaemonSetUpdateStrategy,
    V1DaemonSetUpdateStrategyFromJSON,
    V1DaemonSetUpdateStrategyFromJSONTyped,
    V1DaemonSetUpdateStrategyToJSON,
} from './V1DaemonSetUpdateStrategy';
import {
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';
import {
    V1PodTemplateSpec,
    V1PodTemplateSpecFromJSON,
    V1PodTemplateSpecFromJSONTyped,
    V1PodTemplateSpecToJSON,
} from './V1PodTemplateSpec';

/**
 * DaemonSetSpec is the specification of a daemon set.
 * @export
 * @interface V1DaemonSetSpec
 */
export interface V1DaemonSetSpec {
    /**
     * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
     * @type {number}
     * @memberof V1DaemonSetSpec
     */
    minReadySeconds?: number;
    /**
     * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     * @type {number}
     * @memberof V1DaemonSetSpec
     */
    revisionHistoryLimit?: number;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1DaemonSetSpec
     */
    selector: V1LabelSelector;
    /**
     * 
     * @type {V1PodTemplateSpec}
     * @memberof V1DaemonSetSpec
     */
    template: V1PodTemplateSpec;
    /**
     * 
     * @type {V1DaemonSetUpdateStrategy}
     * @memberof V1DaemonSetSpec
     */
    updateStrategy?: V1DaemonSetUpdateStrategy;
}

export function V1DaemonSetSpecFromJSON(json: any): V1DaemonSetSpec {
    return V1DaemonSetSpecFromJSONTyped(json, false);
}

export function V1DaemonSetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DaemonSetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'revisionHistoryLimit': !exists(json, 'revisionHistoryLimit') ? undefined : json['revisionHistoryLimit'],
        'selector': V1LabelSelectorFromJSON(json['selector']),
        'template': V1PodTemplateSpecFromJSON(json['template']),
        'updateStrategy': !exists(json, 'updateStrategy') ? undefined : V1DaemonSetUpdateStrategyFromJSON(json['updateStrategy']),
    };
}

export function V1DaemonSetSpecToJSON(value?: V1DaemonSetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minReadySeconds': value.minReadySeconds,
        'revisionHistoryLimit': value.revisionHistoryLimit,
        'selector': V1LabelSelectorToJSON(value.selector),
        'template': V1PodTemplateSpecToJSON(value.template),
        'updateStrategy': V1DaemonSetUpdateStrategyToJSON(value.updateStrategy),
    };
}

