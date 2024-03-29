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
  SessionTermCreateIn,
  SessionTermDetailOut,
  SessionTermListOut,
  SessionTermUpdateIn,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    SessionTermCreateInFromJSON,
    SessionTermCreateInToJSON,
    SessionTermDetailOutFromJSON,
    SessionTermDetailOutToJSON,
    SessionTermListOutFromJSON,
    SessionTermListOutToJSON,
    SessionTermUpdateInFromJSON,
    SessionTermUpdateInToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface CreateSessionTermRequest {
    sessionTermCreateIn: SessionTermCreateIn;
}

export interface DeleteSessionTermRequest {
    sessionTermId: number;
}

export interface GetSessionTermRequest {
    sessionTermId: number;
}

export interface UpdateSessionTermRequest {
    sessionTermId: number;
    sessionTermUpdateIn: SessionTermUpdateIn;
}

/**
 * 
 */
export class ManageSessionTermsApi extends runtime.BaseAPI {

    /**
     * セッション規約を作成 - 必要権限: [OWN_SESSION_EDIT] [ALL_EVENT_AND_SESSION_EDIT] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - 自組織のセッション規約のみ作成できる
     * セッション規約を作成
     */
    async createSessionTermRaw(requestParameters: CreateSessionTermRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SessionTermDetailOut>> {
        if (requestParameters.sessionTermCreateIn === null || requestParameters.sessionTermCreateIn === undefined) {
            throw new runtime.RequiredError('sessionTermCreateIn','Required parameter requestParameters.sessionTermCreateIn was null or undefined when calling createSessionTerm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/session_terms`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SessionTermCreateInToJSON(requestParameters.sessionTermCreateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionTermDetailOutFromJSON(jsonValue));
    }

    /**
     * セッション規約を作成 - 必要権限: [OWN_SESSION_EDIT] [ALL_EVENT_AND_SESSION_EDIT] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - 自組織のセッション規約のみ作成できる
     * セッション規約を作成
     */
    async createSessionTerm(requestParameters: CreateSessionTermRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SessionTermDetailOut> {
        const response = await this.createSessionTermRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * セッション規約を削除 - 必要権限: [OWN_SESSION_EDIT] [ALL_EVENT_AND_SESSION_EDIT] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - セッションと紐づいている場合、削除不可 - 自組織のセッション規約のみ削除できる
     * セッション規約を削除
     */
    async deleteSessionTermRaw(requestParameters: DeleteSessionTermRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sessionTermId === null || requestParameters.sessionTermId === undefined) {
            throw new runtime.RequiredError('sessionTermId','Required parameter requestParameters.sessionTermId was null or undefined when calling deleteSessionTerm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/session_terms/{session_term_id}`.replace(`{${"session_term_id"}}`, encodeURIComponent(String(requestParameters.sessionTermId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * セッション規約を削除 - 必要権限: [OWN_SESSION_EDIT] [ALL_EVENT_AND_SESSION_EDIT] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - セッションと紐づいている場合、削除不可 - 自組織のセッション規約のみ削除できる
     * セッション規約を削除
     */
    async deleteSessionTerm(requestParameters: DeleteSessionTermRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSessionTermRaw(requestParameters, initOverrides);
    }

    /**
     * セッション規約を取得 - 必要権限: [OWN_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - 自組織で作成した規約のみ取得可能
     * セッション規約を取得
     */
    async getSessionTermRaw(requestParameters: GetSessionTermRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SessionTermDetailOut>> {
        if (requestParameters.sessionTermId === null || requestParameters.sessionTermId === undefined) {
            throw new runtime.RequiredError('sessionTermId','Required parameter requestParameters.sessionTermId was null or undefined when calling getSessionTerm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/session_terms/{session_term_id}`.replace(`{${"session_term_id"}}`, encodeURIComponent(String(requestParameters.sessionTermId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionTermDetailOutFromJSON(jsonValue));
    }

    /**
     * セッション規約を取得 - 必要権限: [OWN_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - 自組織で作成した規約のみ取得可能
     * セッション規約を取得
     */
    async getSessionTerm(requestParameters: GetSessionTermRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SessionTermDetailOut> {
        const response = await this.getSessionTermRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * セッション規約一覧を取得 - 必要権限: [OWN_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - 並び順:id昇順 - 自組織で作成した規約のみ取得可能
     * セッション規約一覧を取得
     */
    async getSessionTermListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SessionTermListOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/session_terms`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SessionTermListOutFromJSON));
    }

    /**
     * セッション規約一覧を取得 - 必要権限: [OWN_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - 並び順:id昇順 - 自組織で作成した規約のみ取得可能
     * セッション規約一覧を取得
     */
    async getSessionTermList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SessionTermListOut>> {
        const response = await this.getSessionTermListRaw(initOverrides);
        return await response.value();
    }

    /**
     * セッション規約更新 - 必要権限: [OWN_SESSION_EDIT] [ALL_EVENT_AND_SESSION_EDIT] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - 自組織セッション規約のみ更新可能 - 更新時     - versionをインクリメントする     - 更新者を変更する
     * セッション規約更新
     */
    async updateSessionTermRaw(requestParameters: UpdateSessionTermRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SessionTermDetailOut>> {
        if (requestParameters.sessionTermId === null || requestParameters.sessionTermId === undefined) {
            throw new runtime.RequiredError('sessionTermId','Required parameter requestParameters.sessionTermId was null or undefined when calling updateSessionTerm.');
        }

        if (requestParameters.sessionTermUpdateIn === null || requestParameters.sessionTermUpdateIn === undefined) {
            throw new runtime.RequiredError('sessionTermUpdateIn','Required parameter requestParameters.sessionTermUpdateIn was null or undefined when calling updateSessionTerm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/session_terms/{session_term_id}`.replace(`{${"session_term_id"}}`, encodeURIComponent(String(requestParameters.sessionTermId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SessionTermUpdateInToJSON(requestParameters.sessionTermUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionTermDetailOutFromJSON(jsonValue));
    }

    /**
     * セッション規約更新 - 必要権限: [OWN_SESSION_EDIT] [ALL_EVENT_AND_SESSION_EDIT] [PRO_SESSION_EDIT] [TECHTHON_SESSION_EDIT] - 自組織セッション規約のみ更新可能 - 更新時     - versionをインクリメントする     - 更新者を変更する
     * セッション規約更新
     */
    async updateSessionTerm(requestParameters: UpdateSessionTermRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SessionTermDetailOut> {
        const response = await this.updateSessionTermRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
