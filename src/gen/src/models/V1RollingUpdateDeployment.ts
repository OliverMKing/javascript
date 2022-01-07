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
    IntOrString,
    IntOrStringFromJSON,
    IntOrStringFromJSONTyped,
    IntOrStringToJSON,
} from './IntOrString';

/**
 * Spec to control the desired behavior of rolling update.
 * @export
 * @interface V1RollingUpdateDeployment
 */
export interface V1RollingUpdateDeployment {
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {IntOrString}
     * @memberof V1RollingUpdateDeployment
     */
    maxSurge?: IntOrString;
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {IntOrString}
     * @memberof V1RollingUpdateDeployment
     */
    maxUnavailable?: IntOrString;
}

export function V1RollingUpdateDeploymentFromJSON(json: any): V1RollingUpdateDeployment {
    return V1RollingUpdateDeploymentFromJSONTyped(json, false);
}

export function V1RollingUpdateDeploymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RollingUpdateDeployment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxSurge': !exists(json, 'maxSurge') ? undefined : IntOrStringFromJSON(json['maxSurge']),
        'maxUnavailable': !exists(json, 'maxUnavailable') ? undefined : IntOrStringFromJSON(json['maxUnavailable']),
    };
}

export function V1RollingUpdateDeploymentToJSON(value?: V1RollingUpdateDeployment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxSurge': IntOrStringToJSON(value.maxSurge),
        'maxUnavailable': IntOrStringToJSON(value.maxUnavailable),
    };
}

