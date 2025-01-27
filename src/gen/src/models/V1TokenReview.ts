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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import {
    V1TokenReviewSpec,
    V1TokenReviewSpecFromJSON,
    V1TokenReviewSpecFromJSONTyped,
    V1TokenReviewSpecToJSON,
} from './V1TokenReviewSpec';
import {
    V1TokenReviewStatus,
    V1TokenReviewStatusFromJSON,
    V1TokenReviewStatusFromJSONTyped,
    V1TokenReviewStatusToJSON,
} from './V1TokenReviewStatus';

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 * @export
 * @interface V1TokenReview
 */
export interface V1TokenReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1TokenReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1TokenReview
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1TokenReview
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1TokenReviewSpec}
     * @memberof V1TokenReview
     */
    spec: V1TokenReviewSpec;
    /**
     * 
     * @type {V1TokenReviewStatus}
     * @memberof V1TokenReview
     */
    status?: V1TokenReviewStatus;
}

export function V1TokenReviewFromJSON(json: any): V1TokenReview {
    return V1TokenReviewFromJSONTyped(json, false);
}

export function V1TokenReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TokenReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1TokenReviewSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1TokenReviewStatusFromJSON(json['status']),
    };
}

export function V1TokenReviewToJSON(value?: V1TokenReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1TokenReviewSpecToJSON(value.spec),
        'status': V1TokenReviewStatusToJSON(value.status),
    };
}

