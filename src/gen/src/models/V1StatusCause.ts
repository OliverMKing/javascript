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
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 * @export
 * @interface V1StatusCause
 */
export interface V1StatusCause {
    /**
     * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
     * 
     * Examples:
     *   "name" - the field "name" on the current resource
     *   "items[0].name" - the field "name" on the first array entry in "items"
     * @type {string}
     * @memberof V1StatusCause
     */
    field?: string;
    /**
     * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
     * @type {string}
     * @memberof V1StatusCause
     */
    message?: string;
    /**
     * A machine-readable description of the cause of the error. If this value is empty there is no information available.
     * @type {string}
     * @memberof V1StatusCause
     */
    reason?: string;
}

export function V1StatusCauseFromJSON(json: any): V1StatusCause {
    return V1StatusCauseFromJSONTyped(json, false);
}

export function V1StatusCauseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatusCause {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field': !exists(json, 'field') ? undefined : json['field'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function V1StatusCauseToJSON(value?: V1StatusCause | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field': value.field,
        'message': value.message,
        'reason': value.reason,
    };
}

