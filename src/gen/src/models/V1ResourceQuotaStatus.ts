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
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 * @export
 * @interface V1ResourceQuotaStatus
 */
export interface V1ResourceQuotaStatus {
    /**
     * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceQuotaStatus
     */
    hard?: { [key: string]: string; };
    /**
     * Used is the current observed total usage of the resource in the namespace.
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceQuotaStatus
     */
    used?: { [key: string]: string; };
}

export function V1ResourceQuotaStatusFromJSON(json: any): V1ResourceQuotaStatus {
    return V1ResourceQuotaStatusFromJSONTyped(json, false);
}

export function V1ResourceQuotaStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceQuotaStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hard': !exists(json, 'hard') ? undefined : json['hard'],
        'used': !exists(json, 'used') ? undefined : json['used'],
    };
}

export function V1ResourceQuotaStatusToJSON(value?: V1ResourceQuotaStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hard': value.hard,
        'used': value.used,
    };
}

