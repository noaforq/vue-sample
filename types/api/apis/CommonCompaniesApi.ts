/* tslint:disable */
/* eslint-disable */
/**
 * TechFUL API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiError,
  CompanyDocumentDetailOut,
  CompanyDocumentListOut,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    CompanyDocumentDetailOutFromJSON,
    CompanyDocumentDetailOutToJSON,
    CompanyDocumentListOutFromJSON,
    CompanyDocumentListOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface GetCompanyDocumentRequest {
    organizationId: number;
    documentId: number;
}

export interface GetCompanyDocumentListRequest {
    organizationId: number;
}

/**
 * 
 */
export class CommonCompaniesApi extends runtime.BaseAPI {

    /**
     * 企業資料を取得 - 取得条件:     - Organization.is_deleted = False
     * 企業資料を取得
     */
    async getCompanyDocumentRaw(requestParameters: GetCompanyDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyDocumentDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCompanyDocument.');
        }

        if (requestParameters.documentId === null || requestParameters.documentId === undefined) {
            throw new runtime.RequiredError('documentId','Required parameter requestParameters.documentId was null or undefined when calling getCompanyDocument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/common/companies/{organization_id}/documents/{document_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"document_id"}}`, encodeURIComponent(String(requestParameters.documentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyDocumentDetailOutFromJSON(jsonValue));
    }

    /**
     * 企業資料を取得 - 取得条件:     - Organization.is_deleted = False
     * 企業資料を取得
     */
    async getCompanyDocument(requestParameters: GetCompanyDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyDocumentDetailOut> {
        const response = await this.getCompanyDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業資料一覧を取得 - 並び順:id昇順 - 取得条件:     - Organization.is_deleted = False
     * 企業資料一覧を取得
     */
    async getCompanyDocumentListRaw(requestParameters: GetCompanyDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CompanyDocumentListOut>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCompanyDocumentList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/common/companies/{organization_id}/documents`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CompanyDocumentListOutFromJSON));
    }

    /**
     * 企業資料一覧を取得 - 並び順:id昇順 - 取得条件:     - Organization.is_deleted = False
     * 企業資料一覧を取得
     */
    async getCompanyDocumentList(requestParameters: GetCompanyDocumentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CompanyDocumentListOut>> {
        const response = await this.getCompanyDocumentListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
