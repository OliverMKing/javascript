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


import * as runtime from '../runtime';
import {
    V1APIResourceList,
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1LocalSubjectAccessReview,
    V1LocalSubjectAccessReviewFromJSON,
    V1LocalSubjectAccessReviewToJSON,
    V1SelfSubjectAccessReview,
    V1SelfSubjectAccessReviewFromJSON,
    V1SelfSubjectAccessReviewToJSON,
    V1SelfSubjectRulesReview,
    V1SelfSubjectRulesReviewFromJSON,
    V1SelfSubjectRulesReviewToJSON,
    V1SubjectAccessReview,
    V1SubjectAccessReviewFromJSON,
    V1SubjectAccessReviewToJSON,
} from '../models';

export interface AuthorizationV1ApiCreateNamespacedLocalSubjectAccessReviewRequest {
    namespace: string;
    body: V1LocalSubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
}

export interface AuthorizationV1ApiCreateSelfSubjectAccessReviewRequest {
    body: V1SelfSubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
}

export interface AuthorizationV1ApiCreateSelfSubjectRulesReviewRequest {
    body: V1SelfSubjectRulesReview;
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
}

export interface AuthorizationV1ApiCreateSubjectAccessReviewRequest {
    body: V1SubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
}

/**
 * 
 */
export class AuthorizationV1Api extends runtime.BaseAPI {

    /**
     * create a LocalSubjectAccessReview
     */
    async createNamespacedLocalSubjectAccessReviewRaw(requestParameters: AuthorizationV1ApiCreateNamespacedLocalSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1LocalSubjectAccessReview>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling createNamespacedLocalSubjectAccessReview.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createNamespacedLocalSubjectAccessReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1LocalSubjectAccessReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LocalSubjectAccessReviewFromJSON(jsonValue));
    }

    /**
     * create a LocalSubjectAccessReview
     */
    async createNamespacedLocalSubjectAccessReview(requestParameters: AuthorizationV1ApiCreateNamespacedLocalSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<V1LocalSubjectAccessReview> {
        const response = await this.createNamespacedLocalSubjectAccessReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * create a SelfSubjectAccessReview
     */
    async createSelfSubjectAccessReviewRaw(requestParameters: AuthorizationV1ApiCreateSelfSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1SelfSubjectAccessReview>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createSelfSubjectAccessReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/selfsubjectaccessreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1SelfSubjectAccessReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SelfSubjectAccessReviewFromJSON(jsonValue));
    }

    /**
     * create a SelfSubjectAccessReview
     */
    async createSelfSubjectAccessReview(requestParameters: AuthorizationV1ApiCreateSelfSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<V1SelfSubjectAccessReview> {
        const response = await this.createSelfSubjectAccessReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * create a SelfSubjectRulesReview
     */
    async createSelfSubjectRulesReviewRaw(requestParameters: AuthorizationV1ApiCreateSelfSubjectRulesReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1SelfSubjectRulesReview>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createSelfSubjectRulesReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/selfsubjectrulesreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1SelfSubjectRulesReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SelfSubjectRulesReviewFromJSON(jsonValue));
    }

    /**
     * create a SelfSubjectRulesReview
     */
    async createSelfSubjectRulesReview(requestParameters: AuthorizationV1ApiCreateSelfSubjectRulesReviewRequest, initOverrides?: RequestInit): Promise<V1SelfSubjectRulesReview> {
        const response = await this.createSelfSubjectRulesReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * create a SubjectAccessReview
     */
    async createSubjectAccessReviewRaw(requestParameters: AuthorizationV1ApiCreateSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1SubjectAccessReview>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createSubjectAccessReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/subjectaccessreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1SubjectAccessReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1SubjectAccessReviewFromJSON(jsonValue));
    }

    /**
     * create a SubjectAccessReview
     */
    async createSubjectAccessReview(requestParameters: AuthorizationV1ApiCreateSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<V1SubjectAccessReview> {
        const response = await this.createSubjectAccessReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAPIResourcesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1APIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAPIResources(initOverrides?: RequestInit): Promise<V1APIResourceList> {
        const response = await this.getAPIResourcesRaw(initOverrides);
        return await response.value();
    }

}
