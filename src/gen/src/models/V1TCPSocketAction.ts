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
 * TCPSocketAction describes an action based on opening a socket
 * @export
 * @interface V1TCPSocketAction
 */
export interface V1TCPSocketAction {
    /**
     * Optional: Host name to connect to, defaults to the pod IP.
     * @type {string}
     * @memberof V1TCPSocketAction
     */
    host?: string;
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {IntOrString}
     * @memberof V1TCPSocketAction
     */
    port: IntOrString;
}

export function V1TCPSocketActionFromJSON(json: any): V1TCPSocketAction {
    return V1TCPSocketActionFromJSONTyped(json, false);
}

export function V1TCPSocketActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TCPSocketAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'host': !exists(json, 'host') ? undefined : json['host'],
        'port': IntOrStringFromJSON(json['port']),
    };
}

export function V1TCPSocketActionToJSON(value?: V1TCPSocketAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'host': value.host,
        'port': IntOrStringToJSON(value.port),
    };
}

