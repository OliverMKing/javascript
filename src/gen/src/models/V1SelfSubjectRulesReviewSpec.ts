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
 * SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.
 * @export
 * @interface V1SelfSubjectRulesReviewSpec
 */
export interface V1SelfSubjectRulesReviewSpec {
    /**
     * Namespace to evaluate rules for. Required.
     * @type {string}
     * @memberof V1SelfSubjectRulesReviewSpec
     */
    namespace?: string;
}

export function V1SelfSubjectRulesReviewSpecFromJSON(json: any): V1SelfSubjectRulesReviewSpec {
    return V1SelfSubjectRulesReviewSpecFromJSONTyped(json, false);
}

export function V1SelfSubjectRulesReviewSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SelfSubjectRulesReviewSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function V1SelfSubjectRulesReviewSpecToJSON(value?: V1SelfSubjectRulesReviewSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespace': value.namespace,
    };
}

