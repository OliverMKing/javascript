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
    V1JobSpec,
    V1JobSpecFromJSON,
    V1JobSpecFromJSONTyped,
    V1JobSpecToJSON,
} from './V1JobSpec';
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 * @export
 * @interface V1JobTemplateSpec
 */
export interface V1JobTemplateSpec {
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1JobTemplateSpec
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1JobSpec}
     * @memberof V1JobTemplateSpec
     */
    spec?: V1JobSpec;
}

export function V1JobTemplateSpecFromJSON(json: any): V1JobTemplateSpec {
    return V1JobTemplateSpecFromJSONTyped(json, false);
}

export function V1JobTemplateSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1JobTemplateSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1JobSpecFromJSON(json['spec']),
    };
}

export function V1JobTemplateSpecToJSON(value?: V1JobTemplateSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1JobSpecToJSON(value.spec),
    };
}
