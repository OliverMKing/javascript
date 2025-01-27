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

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 * @export
 * @interface V1ControllerRevision
 */
export interface V1ControllerRevision {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ControllerRevision
     */
    apiVersion?: string;
    /**
     * Data is the serialized representation of the state.
     * @type {object}
     * @memberof V1ControllerRevision
     */
    data?: object;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ControllerRevision
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1ControllerRevision
     */
    metadata?: V1ObjectMeta;
    /**
     * Revision indicates the revision of the state represented by Data.
     * @type {number}
     * @memberof V1ControllerRevision
     */
    revision: number;
}

export function V1ControllerRevisionFromJSON(json: any): V1ControllerRevision {
    return V1ControllerRevisionFromJSONTyped(json, false);
}

export function V1ControllerRevisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ControllerRevision {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'revision': json['revision'],
    };
}

export function V1ControllerRevisionToJSON(value?: V1ControllerRevision | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'data': value.data,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'revision': value.revision,
    };
}

