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
 * Overhead structure represents the resource overhead associated with running a pod.
 * @export
 * @interface V1alpha1Overhead
 */
export interface V1alpha1Overhead {
    /**
     * PodFixed represents the fixed resource overhead associated with running a pod.
     * @type {{ [key: string]: string; }}
     * @memberof V1alpha1Overhead
     */
    podFixed?: { [key: string]: string; };
}

export function V1alpha1OverheadFromJSON(json: any): V1alpha1Overhead {
    return V1alpha1OverheadFromJSONTyped(json, false);
}

export function V1alpha1OverheadFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1Overhead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'podFixed': !exists(json, 'podFixed') ? undefined : json['podFixed'],
    };
}

export function V1alpha1OverheadToJSON(value?: V1alpha1Overhead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'podFixed': value.podFixed,
    };
}

