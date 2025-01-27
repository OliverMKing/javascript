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
    V1NodeSelector,
    V1NodeSelectorFromJSON,
    V1NodeSelectorFromJSONTyped,
    V1NodeSelectorToJSON,
} from './V1NodeSelector';

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 * @export
 * @interface V1VolumeNodeAffinity
 */
export interface V1VolumeNodeAffinity {
    /**
     * 
     * @type {V1NodeSelector}
     * @memberof V1VolumeNodeAffinity
     */
    required?: V1NodeSelector;
}

export function V1VolumeNodeAffinityFromJSON(json: any): V1VolumeNodeAffinity {
    return V1VolumeNodeAffinityFromJSONTyped(json, false);
}

export function V1VolumeNodeAffinityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VolumeNodeAffinity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'required': !exists(json, 'required') ? undefined : V1NodeSelectorFromJSON(json['required']),
    };
}

export function V1VolumeNodeAffinityToJSON(value?: V1VolumeNodeAffinity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'required': V1NodeSelectorToJSON(value.required),
    };
}

