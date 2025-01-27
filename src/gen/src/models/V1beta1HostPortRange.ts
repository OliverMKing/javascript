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
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 * @export
 * @interface V1beta1HostPortRange
 */
export interface V1beta1HostPortRange {
    /**
     * max is the end of the range, inclusive.
     * @type {number}
     * @memberof V1beta1HostPortRange
     */
    max: number;
    /**
     * min is the start of the range, inclusive.
     * @type {number}
     * @memberof V1beta1HostPortRange
     */
    min: number;
}

export function V1beta1HostPortRangeFromJSON(json: any): V1beta1HostPortRange {
    return V1beta1HostPortRangeFromJSONTyped(json, false);
}

export function V1beta1HostPortRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1HostPortRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max': json['max'],
        'min': json['min'],
    };
}

export function V1beta1HostPortRangeToJSON(value?: V1beta1HostPortRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max': value.max,
        'min': value.min,
    };
}

