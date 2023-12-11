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
  AppRoutersManageCompaniesGetCompanyListOrdering,
  CompanyConditionOut,
  CompanyConditionUpdateIn,
  CompanyCreateIn,
  CompanyDetailOut,
  CompanyDocumentCreateIn,
  CompanyDocumentDetailOut,
  CompanyDocumentUpdateIn,
  CompanyListOut,
  CompanyUpdateIn,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    AppRoutersManageCompaniesGetCompanyListOrderingFromJSON,
    AppRoutersManageCompaniesGetCompanyListOrderingToJSON,
    CompanyConditionOutFromJSON,
    CompanyConditionOutToJSON,
    CompanyConditionUpdateInFromJSON,
    CompanyConditionUpdateInToJSON,
    CompanyCreateInFromJSON,
    CompanyCreateInToJSON,
    CompanyDetailOutFromJSON,
    CompanyDetailOutToJSON,
    CompanyDocumentCreateInFromJSON,
    CompanyDocumentCreateInToJSON,
    CompanyDocumentDetailOutFromJSON,
    CompanyDocumentDetailOutToJSON,
    CompanyDocumentUpdateInFromJSON,
    CompanyDocumentUpdateInToJSON,
    CompanyListOutFromJSON,
    CompanyListOutToJSON,
    CompanyUpdateInFromJSON,
    CompanyUpdateInToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface CreateCompanyRequest {
    companyCreateIn: CompanyCreateIn;
}

export interface CreateCompanyDocumentRequest {
    organizationId: number;
    companyDocumentCreateIn: CompanyDocumentCreateIn;
}

export interface DeleteCompanyDocumentRequest {
    organizationId: number;
    documentId: number;
}

export interface GetCompanyRequest {
    organizationId: number;
}

export interface GetCompanyConditionRequest {
    organizationId: number;
}

export interface GetCompanyListRequest {
    search?: string;
    limit?: number;
    offset?: number;
    orderBy?: AppRoutersManageCompaniesGetCompanyListOrdering;
}

export interface UpdateCompanyRequest {
    organizationId: number;
    companyUpdateIn: CompanyUpdateIn;
}

export interface UpdateCompanyConditionRequest {
    organizationId: number;
    companyConditionUpdateIn: CompanyConditionUpdateIn;
}

export interface UpdateCompanyDocumentRequest {
    organizationId: number;
    documentId: number;
    companyDocumentUpdateIn: CompanyDocumentUpdateIn;
}

/**
 * 
 */
export class ManageCompaniesApi extends runtime.BaseAPI {

    /**
     * 企業を作成 - 必要権限: [ALL_ADMIN_EDIT] - 登録データ補足情報     - company_condition         - session_join_limit: 30         - skill_check_account_limit: 9999         - session_limit: 999         - skill_check_account_prefix: skillcheck         - can_scout: False         - scout_limit: 0         - school_event_limit: 0         - company_event_limit: 0     - created_by: last_name + first_name     - company_industry(企業業種)         - industry_id(業種ID)         - 最大3つまで登録できる
     * 企業作成
     */
    async createCompanyRaw(requestParameters: CreateCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyDetailOut>> {
        if (requestParameters.companyCreateIn === null || requestParameters.companyCreateIn === undefined) {
            throw new runtime.RequiredError('companyCreateIn','Required parameter requestParameters.companyCreateIn was null or undefined when calling createCompany.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/companies`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyCreateInToJSON(requestParameters.companyCreateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyDetailOutFromJSON(jsonValue));
    }

    /**
     * 企業を作成 - 必要権限: [ALL_ADMIN_EDIT] - 登録データ補足情報     - company_condition         - session_join_limit: 30         - skill_check_account_limit: 9999         - session_limit: 999         - skill_check_account_prefix: skillcheck         - can_scout: False         - scout_limit: 0         - school_event_limit: 0         - company_event_limit: 0     - created_by: last_name + first_name     - company_industry(企業業種)         - industry_id(業種ID)         - 最大3つまで登録できる
     * 企業作成
     */
    async createCompany(requestParameters: CreateCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyDetailOut> {
        const response = await this.createCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業資料を作成 - 必要権限: [OWN_ADMIN_EDIT] [ALL_ADMIN_EDIT] - 実行条件:     - 企業資料作成数上限：5     - 登録数が5個のとき、実行不可     - Organization.is_deleted = False
     * 企業資料を作成
     */
    async createCompanyDocumentRaw(requestParameters: CreateCompanyDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyDocumentDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling createCompanyDocument.');
        }

        if (requestParameters.companyDocumentCreateIn === null || requestParameters.companyDocumentCreateIn === undefined) {
            throw new runtime.RequiredError('companyDocumentCreateIn','Required parameter requestParameters.companyDocumentCreateIn was null or undefined when calling createCompanyDocument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/companies/{organization_id}/documents`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyDocumentCreateInToJSON(requestParameters.companyDocumentCreateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyDocumentDetailOutFromJSON(jsonValue));
    }

    /**
     * 企業資料を作成 - 必要権限: [OWN_ADMIN_EDIT] [ALL_ADMIN_EDIT] - 実行条件:     - 企業資料作成数上限：5     - 登録数が5個のとき、実行不可     - Organization.is_deleted = False
     * 企業資料を作成
     */
    async createCompanyDocument(requestParameters: CreateCompanyDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyDocumentDetailOut> {
        const response = await this.createCompanyDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業資料を削除 - 必要権限: [OWN_ADMIN_EDIT] [ALL_ADMIN_EDIT] - クラウドストレージ内の該当ファイルを削除する
     * 企業資料を削除
     */
    async deleteCompanyDocumentRaw(requestParameters: DeleteCompanyDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling deleteCompanyDocument.');
        }

        if (requestParameters.documentId === null || requestParameters.documentId === undefined) {
            throw new runtime.RequiredError('documentId','Required parameter requestParameters.documentId was null or undefined when calling deleteCompanyDocument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/companies/{organization_id}/documents/{document_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"document_id"}}`, encodeURIComponent(String(requestParameters.documentId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 企業資料を削除 - 必要権限: [OWN_ADMIN_EDIT] [ALL_ADMIN_EDIT] - クラウドストレージ内の該当ファイルを削除する
     * 企業資料を削除
     */
    async deleteCompanyDocument(requestParameters: DeleteCompanyDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCompanyDocumentRaw(requestParameters, initOverrides);
    }

    /**
     * 企業詳細を取得 - 必要権限: [ALL_ADMIN_VIEW] - 以下の条件のデータのみ取得可能     - OrganizationType: COMPANY     - is_deleted: False
     * 企業詳細取得
     */
    async getCompanyRaw(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCompany.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/companies/{organization_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyDetailOutFromJSON(jsonValue));
    }

    /**
     * 企業詳細を取得 - 必要権限: [ALL_ADMIN_VIEW] - 以下の条件のデータのみ取得可能     - OrganizationType: COMPANY     - is_deleted: False
     * 企業詳細取得
     */
    async getCompany(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyDetailOut> {
        const response = await this.getCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業条件を取得 - 必要権限: [ALL_ADMIN_VIEW] - is_deleted=Falseのもののみ取得可能
     * 企業条件取得
     */
    async getCompanyConditionRaw(requestParameters: GetCompanyConditionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyConditionOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling getCompanyCondition.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/companies/{organization_id}/conditions`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyConditionOutFromJSON(jsonValue));
    }

    /**
     * 企業条件を取得 - 必要権限: [ALL_ADMIN_VIEW] - is_deleted=Falseのもののみ取得可能
     * 企業条件取得
     */
    async getCompanyCondition(requestParameters: GetCompanyConditionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyConditionOut> {
        const response = await this.getCompanyConditionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業一覧を取得 - 必要権限: [ALL_ADMIN_VIEW] - レスポンスデータ補足情報,     - agreed_scout_count: 選考区分がスカウトでスカウト未承諾以外の選考情報データの総数     - total_scout_count: 選考区分がスカウトの選考情報データの総数     - recruit_count: 人材紹介求人に紐付いている選考情報データの総数     - is_published: 公開済みの求人が一つでもあればTrue - 以下の条件のデータのみ取得可能     - OrganizationType: COMPANY     - is_deleted: False
     * 企業一覧取得
     */
    async getCompanyListRaw(requestParameters: GetCompanyListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyListOut>> {
        const queryParameters: any = {};

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['order_by'] = requestParameters.orderBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/companies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyListOutFromJSON(jsonValue));
    }

    /**
     * 企業一覧を取得 - 必要権限: [ALL_ADMIN_VIEW] - レスポンスデータ補足情報,     - agreed_scout_count: 選考区分がスカウトでスカウト未承諾以外の選考情報データの総数     - total_scout_count: 選考区分がスカウトの選考情報データの総数     - recruit_count: 人材紹介求人に紐付いている選考情報データの総数     - is_published: 公開済みの求人が一つでもあればTrue - 以下の条件のデータのみ取得可能     - OrganizationType: COMPANY     - is_deleted: False
     * 企業一覧取得
     */
    async getCompanyList(requestParameters: GetCompanyListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyListOut> {
        const response = await this.getCompanyListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業を更新 - 必要権限: [ALL_ADMIN_EDIT] - is_deleted=Falseのもののみ更新可能 - 登録データ補足情報     - updated_by: last_name + first_name - company_industry(企業業種)     - industry_id(業種ID)     - 最大3つまで登録可能
     * 企業更新
     */
    async updateCompanyRaw(requestParameters: UpdateCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling updateCompany.');
        }

        if (requestParameters.companyUpdateIn === null || requestParameters.companyUpdateIn === undefined) {
            throw new runtime.RequiredError('companyUpdateIn','Required parameter requestParameters.companyUpdateIn was null or undefined when calling updateCompany.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/companies/{organization_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyUpdateInToJSON(requestParameters.companyUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyDetailOutFromJSON(jsonValue));
    }

    /**
     * 企業を更新 - 必要権限: [ALL_ADMIN_EDIT] - is_deleted=Falseのもののみ更新可能 - 登録データ補足情報     - updated_by: last_name + first_name - company_industry(企業業種)     - industry_id(業種ID)     - 最大3つまで登録可能
     * 企業更新
     */
    async updateCompany(requestParameters: UpdateCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyDetailOut> {
        const response = await this.updateCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業を更新 - 必要権限: [ALL_ADMIN_EDIT] - is_deleted=Falseのもののみ更新可能 - 登録データ補足情報     - updated_by: last_name + first_name
     * 企業条件更新
     */
    async updateCompanyConditionRaw(requestParameters: UpdateCompanyConditionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyConditionOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling updateCompanyCondition.');
        }

        if (requestParameters.companyConditionUpdateIn === null || requestParameters.companyConditionUpdateIn === undefined) {
            throw new runtime.RequiredError('companyConditionUpdateIn','Required parameter requestParameters.companyConditionUpdateIn was null or undefined when calling updateCompanyCondition.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/companies/{organization_id}/conditions`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyConditionUpdateInToJSON(requestParameters.companyConditionUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyConditionOutFromJSON(jsonValue));
    }

    /**
     * 企業を更新 - 必要権限: [ALL_ADMIN_EDIT] - is_deleted=Falseのもののみ更新可能 - 登録データ補足情報     - updated_by: last_name + first_name
     * 企業条件更新
     */
    async updateCompanyCondition(requestParameters: UpdateCompanyConditionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyConditionOut> {
        const response = await this.updateCompanyConditionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 企業資料を更新 - 必要権限: [OWN_ADMIN_EDIT][ALL_ADMIN_EDIT] - クラウドストレージ内の該当ファイルに変更があった場合、古いファイルを削除する
     * 企業資料更新
     */
    async updateCompanyDocumentRaw(requestParameters: UpdateCompanyDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyDocumentDetailOut>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling updateCompanyDocument.');
        }

        if (requestParameters.documentId === null || requestParameters.documentId === undefined) {
            throw new runtime.RequiredError('documentId','Required parameter requestParameters.documentId was null or undefined when calling updateCompanyDocument.');
        }

        if (requestParameters.companyDocumentUpdateIn === null || requestParameters.companyDocumentUpdateIn === undefined) {
            throw new runtime.RequiredError('companyDocumentUpdateIn','Required parameter requestParameters.companyDocumentUpdateIn was null or undefined when calling updateCompanyDocument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/companies/{organization_id}/documents/{document_id}`.replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"document_id"}}`, encodeURIComponent(String(requestParameters.documentId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyDocumentUpdateInToJSON(requestParameters.companyDocumentUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyDocumentDetailOutFromJSON(jsonValue));
    }

    /**
     * 企業資料を更新 - 必要権限: [OWN_ADMIN_EDIT][ALL_ADMIN_EDIT] - クラウドストレージ内の該当ファイルに変更があった場合、古いファイルを削除する
     * 企業資料更新
     */
    async updateCompanyDocument(requestParameters: UpdateCompanyDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyDocumentDetailOut> {
        const response = await this.updateCompanyDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}