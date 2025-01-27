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
    V1alpha1RuntimeClassSpec,
    V1alpha1RuntimeClassSpecFromJSON,
    V1alpha1RuntimeClassSpecFromJSONTyped,
    V1alpha1RuntimeClassSpecToJSON,
} from './V1alpha1RuntimeClassSpec';

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
 * @export
 * @interface V1alpha1RuntimeClass
 */
export interface V1alpha1RuntimeClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1RuntimeClass
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1RuntimeClass
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha1RuntimeClass
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1alpha1RuntimeClassSpec}
     * @memberof V1alpha1RuntimeClass
     */
    spec: V1alpha1RuntimeClassSpec;
}

export function V1alpha1RuntimeClassFromJSON(json: any): V1alpha1RuntimeClass {
    return V1alpha1RuntimeClassFromJSONTyped(json, false);
}

export function V1alpha1RuntimeClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1RuntimeClass {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1RuntimeClassSpecFromJSON(json['spec']),
    };
}

export function V1alpha1RuntimeClassToJSON(value?: V1alpha1RuntimeClass | null): any {
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
        'spec': V1alpha1RuntimeClassSpecToJSON(value.spec),
    };
}

