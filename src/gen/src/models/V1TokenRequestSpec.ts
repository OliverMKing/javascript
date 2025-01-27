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
    V1BoundObjectReference,
    V1BoundObjectReferenceFromJSON,
    V1BoundObjectReferenceFromJSONTyped,
    V1BoundObjectReferenceToJSON,
} from './V1BoundObjectReference';

/**
 * TokenRequestSpec contains client provided parameters of a token request.
 * @export
 * @interface V1TokenRequestSpec
 */
export interface V1TokenRequestSpec {
    /**
     * Audiences are the intendend audiences of the token. A recipient of a token must identitfy themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
     * @type {Array<string>}
     * @memberof V1TokenRequestSpec
     */
    audiences: Array<string>;
    /**
     * 
     * @type {V1BoundObjectReference}
     * @memberof V1TokenRequestSpec
     */
    boundObjectRef?: V1BoundObjectReference;
    /**
     * ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.
     * @type {number}
     * @memberof V1TokenRequestSpec
     */
    expirationSeconds?: number;
}

export function V1TokenRequestSpecFromJSON(json: any): V1TokenRequestSpec {
    return V1TokenRequestSpecFromJSONTyped(json, false);
}

export function V1TokenRequestSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TokenRequestSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audiences': json['audiences'],
        'boundObjectRef': !exists(json, 'boundObjectRef') ? undefined : V1BoundObjectReferenceFromJSON(json['boundObjectRef']),
        'expirationSeconds': !exists(json, 'expirationSeconds') ? undefined : json['expirationSeconds'],
    };
}

export function V1TokenRequestSpecToJSON(value?: V1TokenRequestSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audiences': value.audiences,
        'boundObjectRef': V1BoundObjectReferenceToJSON(value.boundObjectRef),
        'expirationSeconds': value.expirationSeconds,
    };
}

