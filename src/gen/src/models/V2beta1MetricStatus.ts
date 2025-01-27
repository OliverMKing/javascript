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
    V2beta1ContainerResourceMetricStatus,
    V2beta1ContainerResourceMetricStatusFromJSON,
    V2beta1ContainerResourceMetricStatusFromJSONTyped,
    V2beta1ContainerResourceMetricStatusToJSON,
} from './V2beta1ContainerResourceMetricStatus';
import {
    V2beta1ExternalMetricStatus,
    V2beta1ExternalMetricStatusFromJSON,
    V2beta1ExternalMetricStatusFromJSONTyped,
    V2beta1ExternalMetricStatusToJSON,
} from './V2beta1ExternalMetricStatus';
import {
    V2beta1ObjectMetricStatus,
    V2beta1ObjectMetricStatusFromJSON,
    V2beta1ObjectMetricStatusFromJSONTyped,
    V2beta1ObjectMetricStatusToJSON,
} from './V2beta1ObjectMetricStatus';
import {
    V2beta1PodsMetricStatus,
    V2beta1PodsMetricStatusFromJSON,
    V2beta1PodsMetricStatusFromJSONTyped,
    V2beta1PodsMetricStatusToJSON,
} from './V2beta1PodsMetricStatus';
import {
    V2beta1ResourceMetricStatus,
    V2beta1ResourceMetricStatusFromJSON,
    V2beta1ResourceMetricStatusFromJSONTyped,
    V2beta1ResourceMetricStatusToJSON,
} from './V2beta1ResourceMetricStatus';

/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface V2beta1MetricStatus
 */
export interface V2beta1MetricStatus {
    /**
     * 
     * @type {V2beta1ContainerResourceMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    containerResource?: V2beta1ContainerResourceMetricStatus;
    /**
     * 
     * @type {V2beta1ExternalMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    external?: V2beta1ExternalMetricStatus;
    /**
     * 
     * @type {V2beta1ObjectMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    object?: V2beta1ObjectMetricStatus;
    /**
     * 
     * @type {V2beta1PodsMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    pods?: V2beta1PodsMetricStatus;
    /**
     * 
     * @type {V2beta1ResourceMetricStatus}
     * @memberof V2beta1MetricStatus
     */
    resource?: V2beta1ResourceMetricStatus;
    /**
     * type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
     * @type {string}
     * @memberof V2beta1MetricStatus
     */
    type: string;
}

export function V2beta1MetricStatusFromJSON(json: any): V2beta1MetricStatus {
    return V2beta1MetricStatusFromJSONTyped(json, false);
}

export function V2beta1MetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1MetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containerResource': !exists(json, 'containerResource') ? undefined : V2beta1ContainerResourceMetricStatusFromJSON(json['containerResource']),
        'external': !exists(json, 'external') ? undefined : V2beta1ExternalMetricStatusFromJSON(json['external']),
        'object': !exists(json, 'object') ? undefined : V2beta1ObjectMetricStatusFromJSON(json['object']),
        'pods': !exists(json, 'pods') ? undefined : V2beta1PodsMetricStatusFromJSON(json['pods']),
        'resource': !exists(json, 'resource') ? undefined : V2beta1ResourceMetricStatusFromJSON(json['resource']),
        'type': json['type'],
    };
}

export function V2beta1MetricStatusToJSON(value?: V2beta1MetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containerResource': V2beta1ContainerResourceMetricStatusToJSON(value.containerResource),
        'external': V2beta1ExternalMetricStatusToJSON(value.external),
        'object': V2beta1ObjectMetricStatusToJSON(value.object),
        'pods': V2beta1PodsMetricStatusToJSON(value.pods),
        'resource': V2beta1ResourceMetricStatusToJSON(value.resource),
        'type': value.type,
    };
}

