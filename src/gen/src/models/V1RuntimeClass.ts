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
    V1Overhead,
    V1OverheadFromJSON,
    V1OverheadFromJSONTyped,
    V1OverheadToJSON,
} from './V1Overhead';
import {
    V1Scheduling,
    V1SchedulingFromJSON,
    V1SchedulingFromJSONTyped,
    V1SchedulingToJSON,
} from './V1Scheduling';

/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/
 * @export
 * @interface V1RuntimeClass
 */
export interface V1RuntimeClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1RuntimeClass
     */
    apiVersion?: string;
    /**
     * Handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
     * @type {string}
     * @memberof V1RuntimeClass
     */
    handler: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1RuntimeClass
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1RuntimeClass
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1Overhead}
     * @memberof V1RuntimeClass
     */
    overhead?: V1Overhead;
    /**
     * 
     * @type {V1Scheduling}
     * @memberof V1RuntimeClass
     */
    scheduling?: V1Scheduling;
}

export function V1RuntimeClassFromJSON(json: any): V1RuntimeClass {
    return V1RuntimeClassFromJSONTyped(json, false);
}

export function V1RuntimeClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RuntimeClass {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'handler': json['handler'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'overhead': !exists(json, 'overhead') ? undefined : V1OverheadFromJSON(json['overhead']),
        'scheduling': !exists(json, 'scheduling') ? undefined : V1SchedulingFromJSON(json['scheduling']),
    };
}

export function V1RuntimeClassToJSON(value?: V1RuntimeClass | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'handler': value.handler,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'overhead': V1OverheadToJSON(value.overhead),
        'scheduling': V1SchedulingToJSON(value.scheduling),
    };
}
