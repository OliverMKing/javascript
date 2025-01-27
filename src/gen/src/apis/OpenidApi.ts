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

/**
 * 
 */
export class OpenidApi extends runtime.BaseAPI {

    /**
     * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
     */
    async getServiceAccountIssuerOpenIDKeysetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/openid/v1/jwks/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
     */
    async getServiceAccountIssuerOpenIDKeyset(initOverrides?: RequestInit): Promise<string> {
        const response = await this.getServiceAccountIssuerOpenIDKeysetRaw(initOverrides);
        return await response.value();
    }

}
