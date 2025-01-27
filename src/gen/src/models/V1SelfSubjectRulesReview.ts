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
    V1SelfSubjectRulesReviewSpec,
    V1SelfSubjectRulesReviewSpecFromJSON,
    V1SelfSubjectRulesReviewSpecFromJSONTyped,
    V1SelfSubjectRulesReviewSpecToJSON,
} from './V1SelfSubjectRulesReviewSpec';
import {
    V1SubjectRulesReviewStatus,
    V1SubjectRulesReviewStatusFromJSON,
    V1SubjectRulesReviewStatusFromJSONTyped,
    V1SubjectRulesReviewStatusToJSON,
} from './V1SubjectRulesReviewStatus';

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 * @export
 * @interface V1SelfSubjectRulesReview
 */
export interface V1SelfSubjectRulesReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1SelfSubjectRulesReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1SelfSubjectRulesReview
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1SelfSubjectRulesReview
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1SelfSubjectRulesReviewSpec}
     * @memberof V1SelfSubjectRulesReview
     */
    spec: V1SelfSubjectRulesReviewSpec;
    /**
     * 
     * @type {V1SubjectRulesReviewStatus}
     * @memberof V1SelfSubjectRulesReview
     */
    status?: V1SubjectRulesReviewStatus;
}

export function V1SelfSubjectRulesReviewFromJSON(json: any): V1SelfSubjectRulesReview {
    return V1SelfSubjectRulesReviewFromJSONTyped(json, false);
}

export function V1SelfSubjectRulesReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SelfSubjectRulesReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1SelfSubjectRulesReviewSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1SubjectRulesReviewStatusFromJSON(json['status']),
    };
}

export function V1SelfSubjectRulesReviewToJSON(value?: V1SelfSubjectRulesReview | null): any {
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
        'spec': V1SelfSubjectRulesReviewSpecToJSON(value.spec),
        'status': V1SubjectRulesReviewStatusToJSON(value.status),
    };
}

