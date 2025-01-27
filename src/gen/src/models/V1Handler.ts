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
    V1ExecAction,
    V1ExecActionFromJSON,
    V1ExecActionFromJSONTyped,
    V1ExecActionToJSON,
} from './V1ExecAction';
import {
    V1HTTPGetAction,
    V1HTTPGetActionFromJSON,
    V1HTTPGetActionFromJSONTyped,
    V1HTTPGetActionToJSON,
} from './V1HTTPGetAction';
import {
    V1TCPSocketAction,
    V1TCPSocketActionFromJSON,
    V1TCPSocketActionFromJSONTyped,
    V1TCPSocketActionToJSON,
} from './V1TCPSocketAction';

/**
 * Handler defines a specific action that should be taken
 * @export
 * @interface V1Handler
 */
export interface V1Handler {
    /**
     * 
     * @type {V1ExecAction}
     * @memberof V1Handler
     */
    exec?: V1ExecAction;
    /**
     * 
     * @type {V1HTTPGetAction}
     * @memberof V1Handler
     */
    httpGet?: V1HTTPGetAction;
    /**
     * 
     * @type {V1TCPSocketAction}
     * @memberof V1Handler
     */
    tcpSocket?: V1TCPSocketAction;
}

export function V1HandlerFromJSON(json: any): V1Handler {
    return V1HandlerFromJSONTyped(json, false);
}

export function V1HandlerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Handler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exec': !exists(json, 'exec') ? undefined : V1ExecActionFromJSON(json['exec']),
        'httpGet': !exists(json, 'httpGet') ? undefined : V1HTTPGetActionFromJSON(json['httpGet']),
        'tcpSocket': !exists(json, 'tcpSocket') ? undefined : V1TCPSocketActionFromJSON(json['tcpSocket']),
    };
}

export function V1HandlerToJSON(value?: V1Handler | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exec': V1ExecActionToJSON(value.exec),
        'httpGet': V1HTTPGetActionToJSON(value.httpGet),
        'tcpSocket': V1TCPSocketActionToJSON(value.tcpSocket),
    };
}

