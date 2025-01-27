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
    V1CustomResourceSubresourceScale,
    V1CustomResourceSubresourceScaleFromJSON,
    V1CustomResourceSubresourceScaleFromJSONTyped,
    V1CustomResourceSubresourceScaleToJSON,
} from './V1CustomResourceSubresourceScale';

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 * @export
 * @interface V1CustomResourceSubresources
 */
export interface V1CustomResourceSubresources {
    /**
     * 
     * @type {V1CustomResourceSubresourceScale}
     * @memberof V1CustomResourceSubresources
     */
    scale?: V1CustomResourceSubresourceScale;
    /**
     * status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
     * @type {object}
     * @memberof V1CustomResourceSubresources
     */
    status?: object;
}

export function V1CustomResourceSubresourcesFromJSON(json: any): V1CustomResourceSubresources {
    return V1CustomResourceSubresourcesFromJSONTyped(json, false);
}

export function V1CustomResourceSubresourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceSubresources {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scale': !exists(json, 'scale') ? undefined : V1CustomResourceSubresourceScaleFromJSON(json['scale']),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function V1CustomResourceSubresourcesToJSON(value?: V1CustomResourceSubresources | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scale': V1CustomResourceSubresourceScaleToJSON(value.scale),
        'status': value.status,
    };
}

