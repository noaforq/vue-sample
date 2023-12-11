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
  AppRoutersManageSchoolsGetSchoolListOrdering,
  SchoolCountOut,
  SchoolCreateIn,
  SchoolDetailOut,
  SchoolListOut,
  SchoolUpdateIn,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    AppRoutersManageSchoolsGetSchoolListOrderingFromJSON,
    AppRoutersManageSchoolsGetSchoolListOrderingToJSON,
    SchoolCountOutFromJSON,
    SchoolCountOutToJSON,
    SchoolCreateInFromJSON,
    SchoolCreateInToJSON,
    SchoolDetailOutFromJSON,
    SchoolDetailOutToJSON,
    SchoolListOutFromJSON,
    SchoolListOutToJSON,
    SchoolUpdateInFromJSON,
    SchoolUpdateInToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface CreateSchoolRequest {
    schoolCreateIn: SchoolCreateIn;
}

export interface DeleteSchoolRequest {
    schoolId: number;
}

export interface GetSchoolRequest {
    schoolId: number;
}

export interface GetSchoolListRequest {
    search?: string;
    limit?: number;
    offset?: number;
    orderBy?: AppRoutersManageSchoolsGetSchoolListOrdering;
}

export interface UpdateSchoolRequest {
    schoolId: number;
    schoolUpdateIn: SchoolUpdateIn;
}

/**
 * 
 */
export class ManageSchoolsApi extends runtime.BaseAPI {

    /**
     * 学校を作成 - 必要権限: [ALL_ADMIN_EDIT]
     * 学校作成
     */
    async createSchoolRaw(requestParameters: CreateSchoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchoolDetailOut>> {
        if (requestParameters.schoolCreateIn === null || requestParameters.schoolCreateIn === undefined) {
            throw new runtime.RequiredError('schoolCreateIn','Required parameter requestParameters.schoolCreateIn was null or undefined when calling createSchool.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/schools`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SchoolCreateInToJSON(requestParameters.schoolCreateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchoolDetailOutFromJSON(jsonValue));
    }

    /**
     * 学校を作成 - 必要権限: [ALL_ADMIN_EDIT]
     * 学校作成
     */
    async createSchool(requestParameters: CreateSchoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchoolDetailOut> {
        const response = await this.createSchoolRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 学校を削除 - 必要権限: [ALL_ADMIN_EDIT] - is_deleted=Falseのもののみ削除可能 - 論理削除
     * 学校削除
     */
    async deleteSchoolRaw(requestParameters: DeleteSchoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.schoolId === null || requestParameters.schoolId === undefined) {
            throw new runtime.RequiredError('schoolId','Required parameter requestParameters.schoolId was null or undefined when calling deleteSchool.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/schools/{school_id}`.replace(`{${"school_id"}}`, encodeURIComponent(String(requestParameters.schoolId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 学校を削除 - 必要権限: [ALL_ADMIN_EDIT] - is_deleted=Falseのもののみ削除可能 - 論理削除
     * 学校削除
     */
    async deleteSchool(requestParameters: DeleteSchoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSchoolRaw(requestParameters, initOverrides);
    }

    /**
     * 学校詳細を取得 - 必要権限: [ALL_ADMIN_VIEW] - is_deleted=Falseのもののみ取得可能
     * 学校詳細取得
     */
    async getSchoolRaw(requestParameters: GetSchoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchoolDetailOut>> {
        if (requestParameters.schoolId === null || requestParameters.schoolId === undefined) {
            throw new runtime.RequiredError('schoolId','Required parameter requestParameters.schoolId was null or undefined when calling getSchool.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/schools/{school_id}`.replace(`{${"school_id"}}`, encodeURIComponent(String(requestParameters.schoolId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchoolDetailOutFromJSON(jsonValue));
    }

    /**
     * 学校詳細を取得 - 必要権限: [ALL_ADMIN_VIEW] - is_deleted=Falseのもののみ取得可能
     * 学校詳細取得
     */
    async getSchool(requestParameters: GetSchoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchoolDetailOut> {
        const response = await this.getSchoolRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 学校件数取得
     */
    async getSchoolCountRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchoolCountOut>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/schools/counts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchoolCountOutFromJSON(jsonValue));
    }

    /**
     * 学校件数取得
     */
    async getSchoolCount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchoolCountOut> {
        const response = await this.getSchoolCountRaw(initOverrides);
        return await response.value();
    }

    /**
     * 学校一覧を取得 - 必要権限: [ALL_ADMIN_VIEW] - is_deleted=Falseのもののみ取得
     * 学校一覧取得
     */
    async getSchoolListRaw(requestParameters: GetSchoolListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchoolListOut>> {
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
            path: `/manage/schools`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchoolListOutFromJSON(jsonValue));
    }

    /**
     * 学校一覧を取得 - 必要権限: [ALL_ADMIN_VIEW] - is_deleted=Falseのもののみ取得
     * 学校一覧取得
     */
    async getSchoolList(requestParameters: GetSchoolListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchoolListOut> {
        const response = await this.getSchoolListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 学校を更新 - 必要権限: [ALL_ADMIN_EDIT] - is_deleted=Falseのもののみ更新可能
     * 学校更新
     */
    async updateSchoolRaw(requestParameters: UpdateSchoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchoolDetailOut>> {
        if (requestParameters.schoolId === null || requestParameters.schoolId === undefined) {
            throw new runtime.RequiredError('schoolId','Required parameter requestParameters.schoolId was null or undefined when calling updateSchool.');
        }

        if (requestParameters.schoolUpdateIn === null || requestParameters.schoolUpdateIn === undefined) {
            throw new runtime.RequiredError('schoolUpdateIn','Required parameter requestParameters.schoolUpdateIn was null or undefined when calling updateSchool.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/schools/{school_id}`.replace(`{${"school_id"}}`, encodeURIComponent(String(requestParameters.schoolId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SchoolUpdateInToJSON(requestParameters.schoolUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchoolDetailOutFromJSON(jsonValue));
    }

    /**
     * 学校を更新 - 必要権限: [ALL_ADMIN_EDIT] - is_deleted=Falseのもののみ更新可能
     * 学校更新
     */
    async updateSchool(requestParameters: UpdateSchoolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchoolDetailOut> {
        const response = await this.updateSchoolRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
