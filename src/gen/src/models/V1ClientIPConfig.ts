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
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 * @export
 * @interface V1ClientIPConfig
 */
export interface V1ClientIPConfig {
    /**
     * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
     * @type {number}
     * @memberof V1ClientIPConfig
     */
    timeoutSeconds?: number;
}

export function V1ClientIPConfigFromJSON(json: any): V1ClientIPConfig {
    return V1ClientIPConfigFromJSONTyped(json, false);
}

export function V1ClientIPConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ClientIPConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeoutSeconds': !exists(json, 'timeoutSeconds') ? undefined : json['timeoutSeconds'],
    };
}

export function V1ClientIPConfigToJSON(value?: V1ClientIPConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timeoutSeconds': value.timeoutSeconds,
    };
}

