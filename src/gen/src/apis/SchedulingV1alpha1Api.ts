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
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
    V1alpha1PriorityClass,
    V1alpha1PriorityClassFromJSON,
    V1alpha1PriorityClassToJSON,
    V1alpha1PriorityClassList,
    V1alpha1PriorityClassListFromJSON,
    V1alpha1PriorityClassListToJSON,
} from '../models';

export interface SchedulingV1alpha1ApiCreatePriorityClassRequest {
    body: V1alpha1PriorityClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface SchedulingV1alpha1ApiDeleteCollectionPriorityClassRequest {
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

export interface SchedulingV1alpha1ApiDeletePriorityClassRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface SchedulingV1alpha1ApiListPriorityClassRequest {
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

export interface SchedulingV1alpha1ApiPatchPriorityClassRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface SchedulingV1alpha1ApiReadPriorityClassRequest {
    name: string;
    pretty?: string;
}

export interface SchedulingV1alpha1ApiReplacePriorityClassRequest {
    name: string;
    body: V1alpha1PriorityClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

/**
 * 
 */
export class SchedulingV1alpha1Api extends runtime.BaseAPI {

    /**
     * create a PriorityClass
     */
    async createPriorityClassRaw(requestParameters: SchedulingV1alpha1ApiCreatePriorityClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1alpha1PriorityClass>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createPriorityClass.');
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
            path: `/apis/scheduling.k8s.io/v1alpha1/priorityclasses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1alpha1PriorityClassToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1PriorityClassFromJSON(jsonValue));
    }

    /**
     * create a PriorityClass
     */
    async createPriorityClass(requestParameters: SchedulingV1alpha1ApiCreatePriorityClassRequest, initOverrides?: RequestInit): Promise<V1alpha1PriorityClass> {
        const response = await this.createPriorityClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of PriorityClass
     */
    async deleteCollectionPriorityClassRaw(requestParameters: SchedulingV1alpha1ApiDeleteCollectionPriorityClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
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
            path: `/apis/scheduling.k8s.io/v1alpha1/priorityclasses`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of PriorityClass
     */
    async deleteCollectionPriorityClass(requestParameters: SchedulingV1alpha1ApiDeleteCollectionPriorityClassRequest = {}, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteCollectionPriorityClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a PriorityClass
     */
    async deletePriorityClassRaw(requestParameters: SchedulingV1alpha1ApiDeletePriorityClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deletePriorityClass.');
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
            path: `/apis/scheduling.k8s.io/v1alpha1/priorityclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a PriorityClass
     */
    async deletePriorityClass(requestParameters: SchedulingV1alpha1ApiDeletePriorityClassRequest, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deletePriorityClassRaw(requestParameters, initOverrides);
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
            path: `/apis/scheduling.k8s.io/v1alpha1/`,
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
     * list or watch objects of kind PriorityClass
     */
    async listPriorityClassRaw(requestParameters: SchedulingV1alpha1ApiListPriorityClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1alpha1PriorityClassList>> {
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
            path: `/apis/scheduling.k8s.io/v1alpha1/priorityclasses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1PriorityClassListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind PriorityClass
     */
    async listPriorityClass(requestParameters: SchedulingV1alpha1ApiListPriorityClassRequest = {}, initOverrides?: RequestInit): Promise<V1alpha1PriorityClassList> {
        const response = await this.listPriorityClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified PriorityClass
     */
    async patchPriorityClassRaw(requestParameters: SchedulingV1alpha1ApiPatchPriorityClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1alpha1PriorityClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchPriorityClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchPriorityClass.');
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
            path: `/apis/scheduling.k8s.io/v1alpha1/priorityclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1PriorityClassFromJSON(jsonValue));
    }

    /**
     * partially update the specified PriorityClass
     */
    async patchPriorityClass(requestParameters: SchedulingV1alpha1ApiPatchPriorityClassRequest, initOverrides?: RequestInit): Promise<V1alpha1PriorityClass> {
        const response = await this.patchPriorityClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified PriorityClass
     */
    async readPriorityClassRaw(requestParameters: SchedulingV1alpha1ApiReadPriorityClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1alpha1PriorityClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readPriorityClass.');
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
            path: `/apis/scheduling.k8s.io/v1alpha1/priorityclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1PriorityClassFromJSON(jsonValue));
    }

    /**
     * read the specified PriorityClass
     */
    async readPriorityClass(requestParameters: SchedulingV1alpha1ApiReadPriorityClassRequest, initOverrides?: RequestInit): Promise<V1alpha1PriorityClass> {
        const response = await this.readPriorityClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified PriorityClass
     */
    async replacePriorityClassRaw(requestParameters: SchedulingV1alpha1ApiReplacePriorityClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1alpha1PriorityClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replacePriorityClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replacePriorityClass.');
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
            path: `/apis/scheduling.k8s.io/v1alpha1/priorityclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1alpha1PriorityClassToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1alpha1PriorityClassFromJSON(jsonValue));
    }

    /**
     * replace the specified PriorityClass
     */
    async replacePriorityClass(requestParameters: SchedulingV1alpha1ApiReplacePriorityClassRequest, initOverrides?: RequestInit): Promise<V1alpha1PriorityClass> {
        const response = await this.replacePriorityClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
