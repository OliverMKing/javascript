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
 * PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
 * @export
 * @interface V1beta1PriorityLevelConfigurationReference
 */
export interface V1beta1PriorityLevelConfigurationReference {
    /**
     * `name` is the name of the priority level configuration being referenced Required.
     * @type {string}
     * @memberof V1beta1PriorityLevelConfigurationReference
     */
    name: string;
}

export function V1beta1PriorityLevelConfigurationReferenceFromJSON(json: any): V1beta1PriorityLevelConfigurationReference {
    return V1beta1PriorityLevelConfigurationReferenceFromJSONTyped(json, false);
}

export function V1beta1PriorityLevelConfigurationReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PriorityLevelConfigurationReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function V1beta1PriorityLevelConfigurationReferenceToJSON(value?: V1beta1PriorityLevelConfigurationReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

