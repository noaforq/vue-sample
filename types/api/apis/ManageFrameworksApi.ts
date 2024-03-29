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
  FrameworkCreateIn,
  FrameworkDetailOut,
  FrameworkListOut,
  FrameworkUpdateIn,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    FrameworkCreateInFromJSON,
    FrameworkCreateInToJSON,
    FrameworkDetailOutFromJSON,
    FrameworkDetailOutToJSON,
    FrameworkListOutFromJSON,
    FrameworkListOutToJSON,
    FrameworkUpdateInFromJSON,
    FrameworkUpdateInToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface CreateFrameworkRequest {
    frameworkCreateIn: FrameworkCreateIn;
}

export interface DeleteFrameworkRequest {
    frameworkId: number;
}

export interface GetFrameworkRequest {
    frameworkId: number;
}

export interface UpdateFrameworkRequest {
    frameworkId: number;
    frameworkUpdateIn: FrameworkUpdateIn;
}

/**
 * 
 */
export class ManageFrameworksApi extends runtime.BaseAPI {

    /**
     * フレームワークを作成 - 必要権限: [ASSETS_EDIT]
     * フレームワーク作成
     */
    async createFrameworkRaw(requestParameters: CreateFrameworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FrameworkDetailOut>> {
        if (requestParameters.frameworkCreateIn === null || requestParameters.frameworkCreateIn === undefined) {
            throw new runtime.RequiredError('frameworkCreateIn','Required parameter requestParameters.frameworkCreateIn was null or undefined when calling createFramework.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/frameworks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FrameworkCreateInToJSON(requestParameters.frameworkCreateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FrameworkDetailOutFromJSON(jsonValue));
    }

    /**
     * フレームワークを作成 - 必要権限: [ASSETS_EDIT]
     * フレームワーク作成
     */
    async createFramework(requestParameters: CreateFrameworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FrameworkDetailOut> {
        const response = await this.createFrameworkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * フレームワークを削除 - 必要権限: [ASSETS_EDIT]
     * フレームワーク削除
     */
    async deleteFrameworkRaw(requestParameters: DeleteFrameworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.frameworkId === null || requestParameters.frameworkId === undefined) {
            throw new runtime.RequiredError('frameworkId','Required parameter requestParameters.frameworkId was null or undefined when calling deleteFramework.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/frameworks/{framework_id}`.replace(`{${"framework_id"}}`, encodeURIComponent(String(requestParameters.frameworkId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * フレームワークを削除 - 必要権限: [ASSETS_EDIT]
     * フレームワーク削除
     */
    async deleteFramework(requestParameters: DeleteFrameworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFrameworkRaw(requestParameters, initOverrides);
    }

    /**
     * フレームワーク詳細を取得 - 必要権限: [ASSETS_EDIT]
     * フレームワーク詳細取得
     */
    async getFrameworkRaw(requestParameters: GetFrameworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FrameworkDetailOut>> {
        if (requestParameters.frameworkId === null || requestParameters.frameworkId === undefined) {
            throw new runtime.RequiredError('frameworkId','Required parameter requestParameters.frameworkId was null or undefined when calling getFramework.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/frameworks/{framework_id}`.replace(`{${"framework_id"}}`, encodeURIComponent(String(requestParameters.frameworkId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FrameworkDetailOutFromJSON(jsonValue));
    }

    /**
     * フレームワーク詳細を取得 - 必要権限: [ASSETS_EDIT]
     * フレームワーク詳細取得
     */
    async getFramework(requestParameters: GetFrameworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FrameworkDetailOut> {
        const response = await this.getFrameworkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * フレームワーク一覧を取得 - 必要権限: [ASSETS_EDIT] - 並び順: id降順
     * フレームワーク一覧取得
     */
    async getFrameworkListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FrameworkListOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/frameworks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FrameworkListOutFromJSON));
    }

    /**
     * フレームワーク一覧を取得 - 必要権限: [ASSETS_EDIT] - 並び順: id降順
     * フレームワーク一覧取得
     */
    async getFrameworkList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FrameworkListOut>> {
        const response = await this.getFrameworkListRaw(initOverrides);
        return await response.value();
    }

    /**
     * フレームワークを更新 - 必要権限: [ASSETS_EDIT]
     * フレームワーク更新
     */
    async updateFrameworkRaw(requestParameters: UpdateFrameworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FrameworkDetailOut>> {
        if (requestParameters.frameworkId === null || requestParameters.frameworkId === undefined) {
            throw new runtime.RequiredError('frameworkId','Required parameter requestParameters.frameworkId was null or undefined when calling updateFramework.');
        }

        if (requestParameters.frameworkUpdateIn === null || requestParameters.frameworkUpdateIn === undefined) {
            throw new runtime.RequiredError('frameworkUpdateIn','Required parameter requestParameters.frameworkUpdateIn was null or undefined when calling updateFramework.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/frameworks/{framework_id}`.replace(`{${"framework_id"}}`, encodeURIComponent(String(requestParameters.frameworkId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: FrameworkUpdateInToJSON(requestParameters.frameworkUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FrameworkDetailOutFromJSON(jsonValue));
    }

    /**
     * フレームワークを更新 - 必要権限: [ASSETS_EDIT]
     * フレームワーク更新
     */
    async updateFramework(requestParameters: UpdateFrameworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FrameworkDetailOut> {
        const response = await this.updateFrameworkRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
