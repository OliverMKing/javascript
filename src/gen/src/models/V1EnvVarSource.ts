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
    V1ConfigMapKeySelector,
    V1ConfigMapKeySelectorFromJSON,
    V1ConfigMapKeySelectorFromJSONTyped,
    V1ConfigMapKeySelectorToJSON,
} from './V1ConfigMapKeySelector';
import {
    V1ObjectFieldSelector,
    V1ObjectFieldSelectorFromJSON,
    V1ObjectFieldSelectorFromJSONTyped,
    V1ObjectFieldSelectorToJSON,
} from './V1ObjectFieldSelector';
import {
    V1ResourceFieldSelector,
    V1ResourceFieldSelectorFromJSON,
    V1ResourceFieldSelectorFromJSONTyped,
    V1ResourceFieldSelectorToJSON,
} from './V1ResourceFieldSelector';
import {
    V1SecretKeySelector,
    V1SecretKeySelectorFromJSON,
    V1SecretKeySelectorFromJSONTyped,
    V1SecretKeySelectorToJSON,
} from './V1SecretKeySelector';

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 * @export
 * @interface V1EnvVarSource
 */
export interface V1EnvVarSource {
    /**
     * 
     * @type {V1ConfigMapKeySelector}
     * @memberof V1EnvVarSource
     */
    configMapKeyRef?: V1ConfigMapKeySelector;
    /**
     * 
     * @type {V1ObjectFieldSelector}
     * @memberof V1EnvVarSource
     */
    fieldRef?: V1ObjectFieldSelector;
    /**
     * 
     * @type {V1ResourceFieldSelector}
     * @memberof V1EnvVarSource
     */
    resourceFieldRef?: V1ResourceFieldSelector;
    /**
     * 
     * @type {V1SecretKeySelector}
     * @memberof V1EnvVarSource
     */
    secretKeyRef?: V1SecretKeySelector;
}

export function V1EnvVarSourceFromJSON(json: any): V1EnvVarSource {
    return V1EnvVarSourceFromJSONTyped(json, false);
}

export function V1EnvVarSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EnvVarSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configMapKeyRef': !exists(json, 'configMapKeyRef') ? undefined : V1ConfigMapKeySelectorFromJSON(json['configMapKeyRef']),
        'fieldRef': !exists(json, 'fieldRef') ? undefined : V1ObjectFieldSelectorFromJSON(json['fieldRef']),
        'resourceFieldRef': !exists(json, 'resourceFieldRef') ? undefined : V1ResourceFieldSelectorFromJSON(json['resourceFieldRef']),
        'secretKeyRef': !exists(json, 'secretKeyRef') ? undefined : V1SecretKeySelectorFromJSON(json['secretKeyRef']),
    };
}

export function V1EnvVarSourceToJSON(value?: V1EnvVarSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configMapKeyRef': V1ConfigMapKeySelectorToJSON(value.configMapKeyRef),
        'fieldRef': V1ObjectFieldSelectorToJSON(value.fieldRef),
        'resourceFieldRef': V1ResourceFieldSelectorToJSON(value.resourceFieldRef),
        'secretKeyRef': V1SecretKeySelectorToJSON(value.secretKeyRef),
    };
}

