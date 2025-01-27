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
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 * @export
 * @interface V1PolicyRule
 */
export interface V1PolicyRule {
    /**
     * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    apiGroups?: Array<string>;
    /**
     * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    nonResourceURLs?: Array<string>;
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    resourceNames?: Array<string>;
    /**
     * Resources is a list of resources this rule applies to. '*' represents all resources.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    resources?: Array<string>;
    /**
     * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. '*' represents all verbs.
     * @type {Array<string>}
     * @memberof V1PolicyRule
     */
    verbs: Array<string>;
}

export function V1PolicyRuleFromJSON(json: any): V1PolicyRule {
    return V1PolicyRuleFromJSONTyped(json, false);
}

export function V1PolicyRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PolicyRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroups': !exists(json, 'apiGroups') ? undefined : json['apiGroups'],
        'nonResourceURLs': !exists(json, 'nonResourceURLs') ? undefined : json['nonResourceURLs'],
        'resourceNames': !exists(json, 'resourceNames') ? undefined : json['resourceNames'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
        'verbs': json['verbs'],
    };
}

export function V1PolicyRuleToJSON(value?: V1PolicyRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroups': value.apiGroups,
        'nonResourceURLs': value.nonResourceURLs,
        'resourceNames': value.resourceNames,
        'resources': value.resources,
        'verbs': value.verbs,
    };
}

