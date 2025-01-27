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
 * Selects a key from a ConfigMap.
 * @export
 * @interface V1ConfigMapKeySelector
 */
export interface V1ConfigMapKeySelector {
    /**
     * The key to select.
     * @type {string}
     * @memberof V1ConfigMapKeySelector
     */
    key: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1ConfigMapKeySelector
     */
    name?: string;
    /**
     * Specify whether the ConfigMap or its key must be defined
     * @type {boolean}
     * @memberof V1ConfigMapKeySelector
     */
    optional?: boolean;
}

export function V1ConfigMapKeySelectorFromJSON(json: any): V1ConfigMapKeySelector {
    return V1ConfigMapKeySelectorFromJSONTyped(json, false);
}

export function V1ConfigMapKeySelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConfigMapKeySelector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'optional': !exists(json, 'optional') ? undefined : json['optional'],
    };
}

export function V1ConfigMapKeySelectorToJSON(value?: V1ConfigMapKeySelector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'name': value.name,
        'optional': value.optional,
    };
}

