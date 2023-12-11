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
  CompanyMemberCreateIn,
  CompanyMemberDetailOut,
  CompanyMemberListOut,
  CompanyMemberUpdateIn,
  CorporateProfileDetailOut,
  CorporateProfileUpdateIn,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    CompanyMemberCreateInFromJSON,
    CompanyMemberCreateInToJSON,
    CompanyMemberDetailOutFromJSON,
    CompanyMemberDetailOutToJSON,
    CompanyMemberListOutFromJSON,
    CompanyMemberListOutToJSON,
    CompanyMemberUpdateInFromJSON,
    CompanyMemberUpdateInToJSON,
    CorporateProfileDetailOutFromJSON,
    CorporateProfileDetailOutToJSON,
    CorporateProfileUpdateInFromJSON,
    CorporateProfileUpdateInToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface CreateCompanyMemberRequest {
    organizationId: number;
    companyMemberCreateIn: CompanyMemberCreateIn;
}

export interface DeleteCompanyMemberRequest {
    organizationId: number;
    companyMemberId: number;
}

export interface GetCompanyMemberRequest {
    organizationId: number;
    companyMemberId: number;
}

export interface GetCompanyMemberListRequest {
    organizationId: number;
}

export interface GetCorporateProfileRequest {
    organizationId: number;
}

export interface UpdateCompanyMemberRequest {
    organizationId: number;
    companyMemberId: number;
    companyMemberUpdateIn: CompanyMemberUpdateIn;
}

export interface UpdateCorporateProfileRequest {
    organizationId: number;
    corporateProfileUpdateIn: CorporateProfileUpdateIn;
}

/**
 * 
 */
export class ManageCorporateProfileApi extends runtime.BaseAPI {

    /**
     * 先輩社員を登録 - 必要権限: [ALL_ADMIN_EDIT], [OWN_ADMIN_EDIT] - 登録条件     - 登録数は最大3個     - 登録数が3個のとき、実行不可     - Organization.is_deleted=False
     * 先輩社員を登録
     */
    async createCompanyMemberRaw(requestParameters: CreateCompanyMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyMemberDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling createCompanyMember.');
        }

        if (requestParameters.companyMemberCreateIn === null || requestParameters.companyMemberCreateIn === undefined) {
            throw new runtime.RequiredError('companyMemberCreateIn','Required parameter requestParameters.companyMemberCreateIn was null or undefined when calling createCompanyMember.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/corporate_profile/{organization_id}/company_members`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyMemberCreateInToJSON(requestParameters.companyMemberCreateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyMemberDetailOutFromJSON(jsonValue));
    }

    /**
     * 先輩社員を登録 - 必要権限: [ALL_ADMIN_EDIT], [OWN_ADMIN_EDIT] - 登録条件     - 登録数は最大3個     - 登録数が3個のとき、実行不可     - Organization.is_deleted=False
     * 先輩社員を登録
     */
    async createCompanyMember(requestParameters: CreateCompanyMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyMemberDetailOut> {
        const response = await this.createCompanyMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 先輩社員情報を削除 - 必要権限:  [ALL_ADMIN_EDIT], [OWN_ADMIN_EDIT] - 実行条件     - Organization.is_deleted=False
     * 先輩社員情報を削除
     */
    async deleteCompanyMemberRaw(requestParameters: DeleteCompanyMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling deleteCompanyMember.');
        }

        if (requestParameters.companyMemberId === null || requestParameters.companyMemberId === undefined) {
            throw new runtime.RequiredError('companyMemberId','Required parameter requestParameters.companyMemberId was null or undefined when calling deleteCompanyMember.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/corporate_profile/{organization_id}/company_members/{company_member_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"company_member_id"}}`, encodeURIComponent(String(requestParameters.companyMemberId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 先輩社員情報を削除 - 必要権限:  [ALL_ADMIN_EDIT], [OWN_ADMIN_EDIT] - 実行条件     - Organization.is_deleted=False
     * 先輩社員情報を削除
     */
    async deleteCompanyMember(requestParameters: DeleteCompanyMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCompanyMemberRaw(requestParameters, initOverrides);
    }

    /**
     * 先輩社員情報を詳細取得 - 必要権限:  [ALL_ADMIN_VIEW], [OWN_ADMIN_VIEW] - 実行条件     - Organization.is_deleted=False
     * 先輩社員情報を詳細取得
     */
    async getCompanyMemberRaw(requestParameters: GetCompanyMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyMemberDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCompanyMember.');
        }

        if (requestParameters.companyMemberId === null || requestParameters.companyMemberId === undefined) {
            throw new runtime.RequiredError('companyMemberId','Required parameter requestParameters.companyMemberId was null or undefined when calling getCompanyMember.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/corporate_profile/{organization_id}/company_members/{company_member_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"company_member_id"}}`, encodeURIComponent(String(requestParameters.companyMemberId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyMemberDetailOutFromJSON(jsonValue));
    }

    /**
     * 先輩社員情報を詳細取得 - 必要権限:  [ALL_ADMIN_VIEW], [OWN_ADMIN_VIEW] - 実行条件     - Organization.is_deleted=False
     * 先輩社員情報を詳細取得
     */
    async getCompanyMember(requestParameters: GetCompanyMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyMemberDetailOut> {
        const response = await this.getCompanyMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 先輩社員情報を一覧取得 - 必要権限:  [ALL_ADMIN_VIEW], [OWN_ADMIN_VIEW] - 並び順: ID昇順 - 実行条件     - Organization.is_deleted=False
     * 先輩社員情報を一覧取得
     */
    async getCompanyMemberListRaw(requestParameters: GetCompanyMemberListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CompanyMemberListOut>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCompanyMemberList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/corporate_profile/{organization_id}/company_members`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CompanyMemberListOutFromJSON));
    }

    /**
     * 先輩社員情報を一覧取得 - 必要権限:  [ALL_ADMIN_VIEW], [OWN_ADMIN_VIEW] - 並び順: ID昇順 - 実行条件     - Organization.is_deleted=False
     * 先輩社員情報を一覧取得
     */
    async getCompanyMemberList(requestParameters: GetCompanyMemberListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CompanyMemberListOut>> {
        const response = await this.getCompanyMemberListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業プロファイル取得 - 必要権限: [OWN_ADMIN_VIEW] [ALL_ADMIN_VIEW] - 以下の条件のデータのみ取得可能     - OrganizationType: COMPANY     - is_deleted: False
     * 企業プロファイル取得
     */
    async getCorporateProfileRaw(requestParameters: GetCorporateProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CorporateProfileDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCorporateProfile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/corporate_profile/{organization_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CorporateProfileDetailOutFromJSON(jsonValue));
    }

    /**
     * 企業プロファイル取得 - 必要権限: [OWN_ADMIN_VIEW] [ALL_ADMIN_VIEW] - 以下の条件のデータのみ取得可能     - OrganizationType: COMPANY     - is_deleted: False
     * 企業プロファイル取得
     */
    async getCorporateProfile(requestParameters: GetCorporateProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CorporateProfileDetailOut> {
        const response = await this.getCorporateProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 先輩社員情報を更新 - 必要権限:  [ALL_ADMIN_EDIT], [OWN_ADMIN_EDIT] - 実行条件     - Organization.is_deleted=False
     * 先輩社員情報を更新
     */
    async updateCompanyMemberRaw(requestParameters: UpdateCompanyMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyMemberDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling updateCompanyMember.');
        }

        if (requestParameters.companyMemberId === null || requestParameters.companyMemberId === undefined) {
            throw new runtime.RequiredError('companyMemberId','Required parameter requestParameters.companyMemberId was null or undefined when calling updateCompanyMember.');
        }

        if (requestParameters.companyMemberUpdateIn === null || requestParameters.companyMemberUpdateIn === undefined) {
            throw new runtime.RequiredError('companyMemberUpdateIn','Required parameter requestParameters.companyMemberUpdateIn was null or undefined when calling updateCompanyMember.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/corporate_profile/{organization_id}/company_members/{company_member_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"company_member_id"}}`, encodeURIComponent(String(requestParameters.companyMemberId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyMemberUpdateInToJSON(requestParameters.companyMemberUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyMemberDetailOutFromJSON(jsonValue));
    }

    /**
     * 先輩社員情報を更新 - 必要権限:  [ALL_ADMIN_EDIT], [OWN_ADMIN_EDIT] - 実行条件     - Organization.is_deleted=False
     * 先輩社員情報を更新
     */
    async updateCompanyMember(requestParameters: UpdateCompanyMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyMemberDetailOut> {
        const response = await this.updateCompanyMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業プロファイル更新 - 必要権限: [OWN_ADMIN_EDIT] [ALL_ADMIN_EDIT] - 以下の条件のデータのみ更新可能     - OrganizationType: COMPANY     - is_deleted: False - 更新データ補足情報     - Organization.updated_by: last_name + first_name
     * 企業プロファイル更新
     */
    async updateCorporateProfileRaw(requestParameters: UpdateCorporateProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CorporateProfileDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling updateCorporateProfile.');
        }

        if (requestParameters.corporateProfileUpdateIn === null || requestParameters.corporateProfileUpdateIn === undefined) {
            throw new runtime.RequiredError('corporateProfileUpdateIn','Required parameter requestParameters.corporateProfileUpdateIn was null or undefined when calling updateCorporateProfile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/corporate_profile/{organization_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CorporateProfileUpdateInToJSON(requestParameters.corporateProfileUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CorporateProfileDetailOutFromJSON(jsonValue));
    }

    /**
     * 企業プロファイル更新 - 必要権限: [OWN_ADMIN_EDIT] [ALL_ADMIN_EDIT] - 以下の条件のデータのみ更新可能     - OrganizationType: COMPANY     - is_deleted: False - 更新データ補足情報     - Organization.updated_by: last_name + first_name
     * 企業プロファイル更新
     */
    async updateCorporateProfile(requestParameters: UpdateCorporateProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CorporateProfileDetailOut> {
        const response = await this.updateCorporateProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

}