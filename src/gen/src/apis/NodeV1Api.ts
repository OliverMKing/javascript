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
    V1DeleteOptions,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1RuntimeClass,
    V1RuntimeClassFromJSON,
    V1RuntimeClassToJSON,
    V1RuntimeClassList,
    V1RuntimeClassListFromJSON,
    V1RuntimeClassListToJSON,
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
} from '../models';

export interface NodeV1ApiCreateRuntimeClassRequest {
    body: V1RuntimeClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface NodeV1ApiDeleteCollectionRuntimeClassRequest {
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

export interface NodeV1ApiDeleteRuntimeClassRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface NodeV1ApiListRuntimeClassRequest {
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

export interface NodeV1ApiPatchRuntimeClassRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface NodeV1ApiReadRuntimeClassRequest {
    name: string;
    pretty?: string;
}

export interface NodeV1ApiReplaceRuntimeClassRequest {
    name: string;
    body: V1RuntimeClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

/**
 * 
 */
export class NodeV1Api extends runtime.BaseAPI {

    /**
     * create a RuntimeClass
     */
    async createRuntimeClassRaw(requestParameters: NodeV1ApiCreateRuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1RuntimeClass>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createRuntimeClass.');
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
            path: `/apis/node.k8s.io/v1/runtimeclasses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1RuntimeClassToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * create a RuntimeClass
     */
    async createRuntimeClass(requestParameters: NodeV1ApiCreateRuntimeClassRequest, initOverrides?: RequestInit): Promise<V1RuntimeClass> {
        const response = await this.createRuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of RuntimeClass
     */
    async deleteCollectionRuntimeClassRaw(requestParameters: NodeV1ApiDeleteCollectionRuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
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
            path: `/apis/node.k8s.io/v1/runtimeclasses`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of RuntimeClass
     */
    async deleteCollectionRuntimeClass(requestParameters: NodeV1ApiDeleteCollectionRuntimeClassRequest = {}, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteCollectionRuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a RuntimeClass
     */
    async deleteRuntimeClassRaw(requestParameters: NodeV1ApiDeleteRuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteRuntimeClass.');
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
            path: `/apis/node.k8s.io/v1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a RuntimeClass
     */
    async deleteRuntimeClass(requestParameters: NodeV1ApiDeleteRuntimeClassRequest, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteRuntimeClassRaw(requestParameters, initOverrides);
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
            path: `/apis/node.k8s.io/v1/`,
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
     * list or watch objects of kind RuntimeClass
     */
    async listRuntimeClassRaw(requestParameters: NodeV1ApiListRuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1RuntimeClassList>> {
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
            path: `/apis/node.k8s.io/v1/runtimeclasses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RuntimeClassListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind RuntimeClass
     */
    async listRuntimeClass(requestParameters: NodeV1ApiListRuntimeClassRequest = {}, initOverrides?: RequestInit): Promise<V1RuntimeClassList> {
        const response = await this.listRuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified RuntimeClass
     */
    async patchRuntimeClassRaw(requestParameters: NodeV1ApiPatchRuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchRuntimeClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchRuntimeClass.');
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
            path: `/apis/node.k8s.io/v1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * partially update the specified RuntimeClass
     */
    async patchRuntimeClass(requestParameters: NodeV1ApiPatchRuntimeClassRequest, initOverrides?: RequestInit): Promise<V1RuntimeClass> {
        const response = await this.patchRuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified RuntimeClass
     */
    async readRuntimeClassRaw(requestParameters: NodeV1ApiReadRuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readRuntimeClass.');
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
            path: `/apis/node.k8s.io/v1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * read the specified RuntimeClass
     */
    async readRuntimeClass(requestParameters: NodeV1ApiReadRuntimeClassRequest, initOverrides?: RequestInit): Promise<V1RuntimeClass> {
        const response = await this.readRuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified RuntimeClass
     */
    async replaceRuntimeClassRaw(requestParameters: NodeV1ApiReplaceRuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceRuntimeClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceRuntimeClass.');
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
            path: `/apis/node.k8s.io/v1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1RuntimeClassToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * replace the specified RuntimeClass
     */
    async replaceRuntimeClass(requestParameters: NodeV1ApiReplaceRuntimeClassRequest, initOverrides?: RequestInit): Promise<V1RuntimeClass> {
        const response = await this.replaceRuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
