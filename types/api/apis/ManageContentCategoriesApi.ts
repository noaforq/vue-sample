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
  ContentCategoryCreateIn,
  ContentCategoryDetailOut,
  ContentCategoryListOut,
  ContentCategoryUpdateIn,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    ContentCategoryCreateInFromJSON,
    ContentCategoryCreateInToJSON,
    ContentCategoryDetailOutFromJSON,
    ContentCategoryDetailOutToJSON,
    ContentCategoryListOutFromJSON,
    ContentCategoryListOutToJSON,
    ContentCategoryUpdateInFromJSON,
    ContentCategoryUpdateInToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface CreateContentCategoryRequest {
    contentCategoryCreateIn: ContentCategoryCreateIn;
}

export interface DeleteContentCategoryRequest {
    contentCategoryId: number;
}

export interface GetContentCategoryRequest {
    contentCategoryId: number;
}

export interface UpdateContentCategoryRequest {
    contentCategoryId: number;
    contentCategoryUpdateIn: ContentCategoryUpdateIn;
}

/**
 * 
 */
export class ManageContentCategoriesApi extends runtime.BaseAPI {

    /**
     * コンテンツカテゴリを作成 - 必要権限: [ASSETS_EDIT]
     * コンテンツカテゴリ作成
     */
    async createContentCategoryRaw(requestParameters: CreateContentCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContentCategoryDetailOut>> {
        if (requestParameters.contentCategoryCreateIn === null || requestParameters.contentCategoryCreateIn === undefined) {
            throw new runtime.RequiredError('contentCategoryCreateIn','Required parameter requestParameters.contentCategoryCreateIn was null or undefined when calling createContentCategory.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/content-categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ContentCategoryCreateInToJSON(requestParameters.contentCategoryCreateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentCategoryDetailOutFromJSON(jsonValue));
    }

    /**
     * コンテンツカテゴリを作成 - 必要権限: [ASSETS_EDIT]
     * コンテンツカテゴリ作成
     */
    async createContentCategory(requestParameters: CreateContentCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContentCategoryDetailOut> {
        const response = await this.createContentCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * コンテンツカテゴリを削除 - 必要権限: [ASSETS_EDIT] - 物理削除、コンテンツトピックが紐付いている場合は削除不可
     * コンテンツカテゴリ削除
     */
    async deleteContentCategoryRaw(requestParameters: DeleteContentCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.contentCategoryId === null || requestParameters.contentCategoryId === undefined) {
            throw new runtime.RequiredError('contentCategoryId','Required parameter requestParameters.contentCategoryId was null or undefined when calling deleteContentCategory.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/content-categories/{content_category_id}`.replace(`{${"content_category_id"}}`, encodeURIComponent(String(requestParameters.contentCategoryId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * コンテンツカテゴリを削除 - 必要権限: [ASSETS_EDIT] - 物理削除、コンテンツトピックが紐付いている場合は削除不可
     * コンテンツカテゴリ削除
     */
    async deleteContentCategory(requestParameters: DeleteContentCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteContentCategoryRaw(requestParameters, initOverrides);
    }

    /**
     * コンテンツカテゴリ詳細を取得 - 必要権限: [ASSETS_EDIT]
     * コンテンツカテゴリ詳細取得
     */
    async getContentCategoryRaw(requestParameters: GetContentCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContentCategoryDetailOut>> {
        if (requestParameters.contentCategoryId === null || requestParameters.contentCategoryId === undefined) {
            throw new runtime.RequiredError('contentCategoryId','Required parameter requestParameters.contentCategoryId was null or undefined when calling getContentCategory.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/content-categories/{content_category_id}`.replace(`{${"content_category_id"}}`, encodeURIComponent(String(requestParameters.contentCategoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentCategoryDetailOutFromJSON(jsonValue));
    }

    /**
     * コンテンツカテゴリ詳細を取得 - 必要権限: [ASSETS_EDIT]
     * コンテンツカテゴリ詳細取得
     */
    async getContentCategory(requestParameters: GetContentCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContentCategoryDetailOut> {
        const response = await this.getContentCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * コンテンツカテゴリ一覧を取得 - 必要権限: [ASSETS_EDIT] - 並び順: id降順
     * コンテンツカテゴリ一覧取得
     */
    async getContentCategoryListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ContentCategoryListOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/content-categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ContentCategoryListOutFromJSON));
    }

    /**
     * コンテンツカテゴリ一覧を取得 - 必要権限: [ASSETS_EDIT] - 並び順: id降順
     * コンテンツカテゴリ一覧取得
     */
    async getContentCategoryList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ContentCategoryListOut>> {
        const response = await this.getContentCategoryListRaw(initOverrides);
        return await response.value();
    }

    /**
     * コンテンツカテゴリを更新 - 必要権限: [ASSETS_EDIT]
     * コンテンツカテゴリ更新
     */
    async updateContentCategoryRaw(requestParameters: UpdateContentCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContentCategoryDetailOut>> {
        if (requestParameters.contentCategoryId === null || requestParameters.contentCategoryId === undefined) {
            throw new runtime.RequiredError('contentCategoryId','Required parameter requestParameters.contentCategoryId was null or undefined when calling updateContentCategory.');
        }

        if (requestParameters.contentCategoryUpdateIn === null || requestParameters.contentCategoryUpdateIn === undefined) {
            throw new runtime.RequiredError('contentCategoryUpdateIn','Required parameter requestParameters.contentCategoryUpdateIn was null or undefined when calling updateContentCategory.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/content-categories/{content_category_id}`.replace(`{${"content_category_id"}}`, encodeURIComponent(String(requestParameters.contentCategoryId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ContentCategoryUpdateInToJSON(requestParameters.contentCategoryUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentCategoryDetailOutFromJSON(jsonValue));
    }

    /**
     * コンテンツカテゴリを更新 - 必要権限: [ASSETS_EDIT]
     * コンテンツカテゴリ更新
     */
    async updateContentCategory(requestParameters: UpdateContentCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContentCategoryDetailOut> {
        const response = await this.updateContentCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
