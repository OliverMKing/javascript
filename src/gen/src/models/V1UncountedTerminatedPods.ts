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
 * UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
 * @export
 * @interface V1UncountedTerminatedPods
 */
export interface V1UncountedTerminatedPods {
    /**
     * Failed holds UIDs of failed Pods.
     * @type {Array<string>}
     * @memberof V1UncountedTerminatedPods
     */
    failed?: Array<string>;
    /**
     * Succeeded holds UIDs of succeeded Pods.
     * @type {Array<string>}
     * @memberof V1UncountedTerminatedPods
     */
    succeeded?: Array<string>;
}

export function V1UncountedTerminatedPodsFromJSON(json: any): V1UncountedTerminatedPods {
    return V1UncountedTerminatedPodsFromJSONTyped(json, false);
}

export function V1UncountedTerminatedPodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UncountedTerminatedPods {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
        'succeeded': !exists(json, 'succeeded') ? undefined : json['succeeded'],
    };
}

export function V1UncountedTerminatedPodsToJSON(value?: V1UncountedTerminatedPods | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'failed': value.failed,
        'succeeded': value.succeeded,
    };
}

