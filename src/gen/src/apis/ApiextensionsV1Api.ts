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
    V1CustomResourceDefinition,
    V1CustomResourceDefinitionFromJSON,
    V1CustomResourceDefinitionToJSON,
    V1CustomResourceDefinitionList,
    V1CustomResourceDefinitionListFromJSON,
    V1CustomResourceDefinitionListToJSON,
    V1DeleteOptions,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
} from '../models';

export interface ApiextensionsV1ApiCreateCustomResourceDefinitionRequest {
    body: V1CustomResourceDefinition;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface ApiextensionsV1ApiDeleteCollectionCustomResourceDefinitionRequest {
    pretty?: string;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    body?: V1DeleteOptions;
}

export interface ApiextensionsV1ApiDeleteCustomResourceDefinitionRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface ApiextensionsV1ApiListCustomResourceDefinitionRequest {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface ApiextensionsV1ApiPatchCustomResourceDefinitionRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ApiextensionsV1ApiPatchCustomResourceDefinitionStatusRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ApiextensionsV1ApiReadCustomResourceDefinitionRequest {
    name: string;
    pretty?: string;
}

export interface ApiextensionsV1ApiReadCustomResourceDefinitionStatusRequest {
    name: string;
    pretty?: string;
}

export interface ApiextensionsV1ApiReplaceCustomResourceDefinitionRequest {
    name: string;
    body: V1CustomResourceDefinition;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface ApiextensionsV1ApiReplaceCustomResourceDefinitionStatusRequest {
    name: string;
    body: V1CustomResourceDefinition;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

/**
 * 
 */
export class ApiextensionsV1Api extends runtime.BaseAPI {

    /**
     * create a CustomResourceDefinition
     */
    async createCustomResourceDefinitionRaw(requestParameters: ApiextensionsV1ApiCreateCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1CustomResourceDefinition>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createCustomResourceDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1CustomResourceDefinitionToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * create a CustomResourceDefinition
     */
    async createCustomResourceDefinition(requestParameters: ApiextensionsV1ApiCreateCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<V1CustomResourceDefinition> {
        const response = await this.createCustomResourceDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of CustomResourceDefinition
     */
    async deleteCollectionCustomResourceDefinitionRaw(requestParameters: ApiextensionsV1ApiDeleteCollectionCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of CustomResourceDefinition
     */
    async deleteCollectionCustomResourceDefinition(requestParameters: ApiextensionsV1ApiDeleteCollectionCustomResourceDefinitionRequest = {}, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteCollectionCustomResourceDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a CustomResourceDefinition
     */
    async deleteCustomResourceDefinitionRaw(requestParameters: ApiextensionsV1ApiDeleteCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteCustomResourceDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a CustomResourceDefinition
     */
    async deleteCustomResourceDefinition(requestParameters: ApiextensionsV1ApiDeleteCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteCustomResourceDefinitionRaw(requestParameters, initOverrides);
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
            path: `/apis/apiextensions.k8s.io/v1/`,
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

    /**
     * list or watch objects of kind CustomResourceDefinition
     */
    async listCustomResourceDefinitionRaw(requestParameters: ApiextensionsV1ApiListCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1CustomResourceDefinitionList>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CustomResourceDefinitionListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind CustomResourceDefinition
     */
    async listCustomResourceDefinition(requestParameters: ApiextensionsV1ApiListCustomResourceDefinitionRequest = {}, initOverrides?: RequestInit): Promise<V1CustomResourceDefinitionList> {
        const response = await this.listCustomResourceDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified CustomResourceDefinition
     */
    async patchCustomResourceDefinitionRaw(requestParameters: ApiextensionsV1ApiPatchCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchCustomResourceDefinition.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchCustomResourceDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * partially update the specified CustomResourceDefinition
     */
    async patchCustomResourceDefinition(requestParameters: ApiextensionsV1ApiPatchCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<V1CustomResourceDefinition> {
        const response = await this.patchCustomResourceDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update status of the specified CustomResourceDefinition
     */
    async patchCustomResourceDefinitionStatusRaw(requestParameters: ApiextensionsV1ApiPatchCustomResourceDefinitionStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchCustomResourceDefinitionStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchCustomResourceDefinitionStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * partially update status of the specified CustomResourceDefinition
     */
    async patchCustomResourceDefinitionStatus(requestParameters: ApiextensionsV1ApiPatchCustomResourceDefinitionStatusRequest, initOverrides?: RequestInit): Promise<V1CustomResourceDefinition> {
        const response = await this.patchCustomResourceDefinitionStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified CustomResourceDefinition
     */
    async readCustomResourceDefinitionRaw(requestParameters: ApiextensionsV1ApiReadCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readCustomResourceDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * read the specified CustomResourceDefinition
     */
    async readCustomResourceDefinition(requestParameters: ApiextensionsV1ApiReadCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<V1CustomResourceDefinition> {
        const response = await this.readCustomResourceDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read status of the specified CustomResourceDefinition
     */
    async readCustomResourceDefinitionStatusRaw(requestParameters: ApiextensionsV1ApiReadCustomResourceDefinitionStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readCustomResourceDefinitionStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * read status of the specified CustomResourceDefinition
     */
    async readCustomResourceDefinitionStatus(requestParameters: ApiextensionsV1ApiReadCustomResourceDefinitionStatusRequest, initOverrides?: RequestInit): Promise<V1CustomResourceDefinition> {
        const response = await this.readCustomResourceDefinitionStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified CustomResourceDefinition
     */
    async replaceCustomResourceDefinitionRaw(requestParameters: ApiextensionsV1ApiReplaceCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceCustomResourceDefinition.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceCustomResourceDefinition.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1CustomResourceDefinitionToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * replace the specified CustomResourceDefinition
     */
    async replaceCustomResourceDefinition(requestParameters: ApiextensionsV1ApiReplaceCustomResourceDefinitionRequest, initOverrides?: RequestInit): Promise<V1CustomResourceDefinition> {
        const response = await this.replaceCustomResourceDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace status of the specified CustomResourceDefinition
     */
    async replaceCustomResourceDefinitionStatusRaw(requestParameters: ApiextensionsV1ApiReplaceCustomResourceDefinitionStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceCustomResourceDefinitionStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceCustomResourceDefinitionStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1CustomResourceDefinitionToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * replace status of the specified CustomResourceDefinition
     */
    async replaceCustomResourceDefinitionStatus(requestParameters: ApiextensionsV1ApiReplaceCustomResourceDefinitionStatusRequest, initOverrides?: RequestInit): Promise<V1CustomResourceDefinition> {
        const response = await this.replaceCustomResourceDefinitionStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
