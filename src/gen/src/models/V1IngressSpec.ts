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
    V1IngressBackend,
    V1IngressBackendFromJSON,
    V1IngressBackendFromJSONTyped,
    V1IngressBackendToJSON,
} from './V1IngressBackend';
import {
    V1IngressRule,
    V1IngressRuleFromJSON,
    V1IngressRuleFromJSONTyped,
    V1IngressRuleToJSON,
} from './V1IngressRule';
import {
    V1IngressTLS,
    V1IngressTLSFromJSON,
    V1IngressTLSFromJSONTyped,
    V1IngressTLSToJSON,
} from './V1IngressTLS';

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 * @export
 * @interface V1IngressSpec
 */
export interface V1IngressSpec {
    /**
     * 
     * @type {V1IngressBackend}
     * @memberof V1IngressSpec
     */
    defaultBackend?: V1IngressBackend;
    /**
     * IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
     * @type {string}
     * @memberof V1IngressSpec
     */
    ingressClassName?: string;
    /**
     * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
     * @type {Array<V1IngressRule>}
     * @memberof V1IngressSpec
     */
    rules?: Array<V1IngressRule>;
    /**
     * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
     * @type {Array<V1IngressTLS>}
     * @memberof V1IngressSpec
     */
    tls?: Array<V1IngressTLS>;
}

export function V1IngressSpecFromJSON(json: any): V1IngressSpec {
    return V1IngressSpecFromJSONTyped(json, false);
}

export function V1IngressSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultBackend': !exists(json, 'defaultBackend') ? undefined : V1IngressBackendFromJSON(json['defaultBackend']),
        'ingressClassName': !exists(json, 'ingressClassName') ? undefined : json['ingressClassName'],
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(V1IngressRuleFromJSON)),
        'tls': !exists(json, 'tls') ? undefined : ((json['tls'] as Array<any>).map(V1IngressTLSFromJSON)),
    };
}

export function V1IngressSpecToJSON(value?: V1IngressSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultBackend': V1IngressBackendToJSON(value.defaultBackend),
        'ingressClassName': value.ingressClassName,
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(V1IngressRuleToJSON)),
        'tls': value.tls === undefined ? undefined : ((value.tls as Array<any>).map(V1IngressTLSToJSON)),
    };
}
