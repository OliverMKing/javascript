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
    V1NonResourceAttributes,
    V1NonResourceAttributesFromJSON,
    V1NonResourceAttributesFromJSONTyped,
    V1NonResourceAttributesToJSON,
} from './V1NonResourceAttributes';
import {
    V1ResourceAttributes,
    V1ResourceAttributesFromJSON,
    V1ResourceAttributesFromJSONTyped,
    V1ResourceAttributesToJSON,
} from './V1ResourceAttributes';

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 * @export
 * @interface V1SubjectAccessReviewSpec
 */
export interface V1SubjectAccessReviewSpec {
    /**
     * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof V1SubjectAccessReviewSpec
     */
    extra?: { [key: string]: Array<string>; };
    /**
     * Groups is the groups you're testing for.
     * @type {Array<string>}
     * @memberof V1SubjectAccessReviewSpec
     */
    groups?: Array<string>;
    /**
     * 
     * @type {V1NonResourceAttributes}
     * @memberof V1SubjectAccessReviewSpec
     */
    nonResourceAttributes?: V1NonResourceAttributes;
    /**
     * 
     * @type {V1ResourceAttributes}
     * @memberof V1SubjectAccessReviewSpec
     */
    resourceAttributes?: V1ResourceAttributes;
    /**
     * UID information about the requesting user.
     * @type {string}
     * @memberof V1SubjectAccessReviewSpec
     */
    uid?: string;
    /**
     * User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups
     * @type {string}
     * @memberof V1SubjectAccessReviewSpec
     */
    user?: string;
}

export function V1SubjectAccessReviewSpecFromJSON(json: any): V1SubjectAccessReviewSpec {
    return V1SubjectAccessReviewSpecFromJSONTyped(json, false);
}

export function V1SubjectAccessReviewSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SubjectAccessReviewSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extra': !exists(json, 'extra') ? undefined : json['extra'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'nonResourceAttributes': !exists(json, 'nonResourceAttributes') ? undefined : V1NonResourceAttributesFromJSON(json['nonResourceAttributes']),
        'resourceAttributes': !exists(json, 'resourceAttributes') ? undefined : V1ResourceAttributesFromJSON(json['resourceAttributes']),
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function V1SubjectAccessReviewSpecToJSON(value?: V1SubjectAccessReviewSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extra': value.extra,
        'groups': value.groups,
        'nonResourceAttributes': V1NonResourceAttributesToJSON(value.nonResourceAttributes),
        'resourceAttributes': V1ResourceAttributesToJSON(value.resourceAttributes),
        'uid': value.uid,
        'user': value.user,
    };
}

