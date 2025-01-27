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
    V1RoleRef,
    V1RoleRefFromJSON,
    V1RoleRefFromJSONTyped,
    V1RoleRefToJSON,
} from './V1RoleRef';
import {
    V1Subject,
    V1SubjectFromJSON,
    V1SubjectFromJSONTyped,
    V1SubjectToJSON,
} from './V1Subject';

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 * @export
 * @interface V1ClusterRoleBinding
 */
export interface V1ClusterRoleBinding {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ClusterRoleBinding
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ClusterRoleBinding
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1ClusterRoleBinding
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1RoleRef}
     * @memberof V1ClusterRoleBinding
     */
    roleRef: V1RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     * @type {Array<V1Subject>}
     * @memberof V1ClusterRoleBinding
     */
    subjects?: Array<V1Subject>;
}

export function V1ClusterRoleBindingFromJSON(json: any): V1ClusterRoleBinding {
    return V1ClusterRoleBindingFromJSONTyped(json, false);
}

export function V1ClusterRoleBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ClusterRoleBinding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'roleRef': V1RoleRefFromJSON(json['roleRef']),
        'subjects': !exists(json, 'subjects') ? undefined : ((json['subjects'] as Array<any>).map(V1SubjectFromJSON)),
    };
}

export function V1ClusterRoleBindingToJSON(value?: V1ClusterRoleBinding | null): any {
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
        'roleRef': V1RoleRefToJSON(value.roleRef),
        'subjects': value.subjects === undefined ? undefined : ((value.subjects as Array<any>).map(V1SubjectToJSON)),
    };
}

