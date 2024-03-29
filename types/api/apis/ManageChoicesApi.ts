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
  ScoutMailTemplateChoicesOut,
  SessionTermChoicesOut,
  ValidationError,
} from '../models/index';
import {
    ScoutMailTemplateChoicesOutFromJSON,
    ScoutMailTemplateChoicesOutToJSON,
    SessionTermChoicesOutFromJSON,
    SessionTermChoicesOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

/**
 * 
 */
export class ManageChoicesApi extends runtime.BaseAPI {

    /**
     * スカウトメールテンプレート一覧を取得 - 必要権限: [SCOUT] - 並び順: id降順 - ログインユーザー企業と全体公開のデータを取得可能
     * スカウトメールテンプレート選択肢一覧取得
     */
    async getScoutMailTemplateChoicesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ScoutMailTemplateChoicesOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/choices/scout-mail-templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScoutMailTemplateChoicesOutFromJSON));
    }

    /**
     * スカウトメールテンプレート一覧を取得 - 必要権限: [SCOUT] - 並び順: id降順 - ログインユーザー企業と全体公開のデータを取得可能
     * スカウトメールテンプレート選択肢一覧取得
     */
    async getScoutMailTemplateChoices(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ScoutMailTemplateChoicesOut>> {
        const response = await this.getScoutMailTemplateChoicesRaw(initOverrides);
        return await response.value();
    }

    /**
     * セッション規約選択肢一覧を取得 - 必要権限: [OWN_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] - 並び順: id降順 - 自組織で作成した規約のみ取得可能
     * セッション規約選択肢一覧取得
     */
    async getSessionTermChoicesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SessionTermChoicesOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/choices/session_terms`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SessionTermChoicesOutFromJSON));
    }

    /**
     * セッション規約選択肢一覧を取得 - 必要権限: [OWN_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] - 並び順: id降順 - 自組織で作成した規約のみ取得可能
     * セッション規約選択肢一覧取得
     */
    async getSessionTermChoices(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SessionTermChoicesOut>> {
        const response = await this.getSessionTermChoicesRaw(initOverrides);
        return await response.value();
    }

}
