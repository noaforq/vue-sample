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
  AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut,
  TechthonContentDetailIn,
  TechthonQuestionListOut,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSON,
    AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutToJSON,
    TechthonContentDetailInFromJSON,
    TechthonContentDetailInToJSON,
    TechthonQuestionListOutFromJSON,
    TechthonQuestionListOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface CreateTechthonQuestionRequest {
    techthonContentDetailIn: TechthonContentDetailIn;
}

export interface DeleteTechthonQuestionRequest {
    contentId: number;
}

export interface GetTechthonQuestionRequest {
    contentId: number;
}

export interface GetTechthonQuestionListRequest {
    contentCategoryIds?: Array<number>;
    contentTopicIds?: Array<number>;
}

export interface UpdateTechthonQuestionRequest {
    contentId: number;
    techthonContentDetailIn: TechthonContentDetailIn;
}

/**
 * 
 */
export class ManageTechthonQuestionsApi extends runtime.BaseAPI {

    /**
     * テックソン問題作成 - 必要権限: [TECHTHON_MISSION_PHASE_EDIT] - 対象テーブル:     - Content     - Techthon     - TechthonDocument     - TechthonTestCase     - TechthonTestCaseRequestParameter     - TechthonTestCaseHint - 登録情報:     - Content.content_type = ContentType.TECHTHON     - Content.content_division = ContentDivision.STOCK     - Content.is_official = True     - Content.is_shared_between_schools = False     - Content.organization_id = user.organization_id     - Content.created_by: user.full_name - 例外処理:     - 権限のないユーザーが作成の場合403
     * テックソン問題作成
     */
    async createTechthonQuestionRaw(requestParameters: CreateTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut>> {
        if (requestParameters.techthonContentDetailIn === null || requestParameters.techthonContentDetailIn === undefined) {
            throw new runtime.RequiredError('techthonContentDetailIn','Required parameter requestParameters.techthonContentDetailIn was null or undefined when calling createTechthonQuestion.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/techthon_questions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TechthonContentDetailInToJSON(requestParameters.techthonContentDetailIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSON(jsonValue));
    }

    /**
     * テックソン問題作成 - 必要権限: [TECHTHON_MISSION_PHASE_EDIT] - 対象テーブル:     - Content     - Techthon     - TechthonDocument     - TechthonTestCase     - TechthonTestCaseRequestParameter     - TechthonTestCaseHint - 登録情報:     - Content.content_type = ContentType.TECHTHON     - Content.content_division = ContentDivision.STOCK     - Content.is_official = True     - Content.is_shared_between_schools = False     - Content.organization_id = user.organization_id     - Content.created_by: user.full_name - 例外処理:     - 権限のないユーザーが作成の場合403
     * テックソン問題作成
     */
    async createTechthonQuestion(requestParameters: CreateTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut> {
        const response = await this.createTechthonQuestionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソン問題削除 - 必要権限: [TECHTHON_MISSION_PHASE_EDIT] - 論理削除 - 削除条件:     - Content.content_type = ContentType.TECHTHON     - Content.organization_id = user.organization_id     - Content.is_deleted = False     - Content.updated_by: user.full_name - 例外処理:     - コンテンツIDが存在しない場合NotFound     - 権限のないユーザーが削除の場合NotFound
     * テックソン問題削除
     */
    async deleteTechthonQuestionRaw(requestParameters: DeleteTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling deleteTechthonQuestion.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/techthon_questions/{content_id}`.replace(`{${"content_id"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * テックソン問題削除 - 必要権限: [TECHTHON_MISSION_PHASE_EDIT] - 論理削除 - 削除条件:     - Content.content_type = ContentType.TECHTHON     - Content.organization_id = user.organization_id     - Content.is_deleted = False     - Content.updated_by: user.full_name - 例外処理:     - コンテンツIDが存在しない場合NotFound     - 権限のないユーザーが削除の場合NotFound
     * テックソン問題削除
     */
    async deleteTechthonQuestion(requestParameters: DeleteTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTechthonQuestionRaw(requestParameters, initOverrides);
    }

    /**
     * テックソン問題詳細取得 - 必要権限: [TECHTHON_MISSION_PHASE_VIEW] - 対象テーブル:     - Content     - Techthon     - TechthonDocument     - TechthonTestCase     - TechthonTestCaseRequestParameter     - TechthonTestCaseHint - 抽出条件:     - Content.content_type = ContentType.TECHTHON(テックソン)     - Content.is_official = True     - Content.is_published = True     - Content.is_deleted = False     - TechthonTestCaseHint.is_deleted = False - 例外処理:     - 以下の場合NotFound:         - 削除済み問題         - 指定されたコンテンツIDが存在しない     - 権限のないユーザーが閲覧の場合403
     * テックソン問題詳細取得
     */
    async getTechthonQuestionRaw(requestParameters: GetTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut>> {
        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling getTechthonQuestion.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/techthon_questions/{content_id}`.replace(`{${"content_id"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSON(jsonValue));
    }

    /**
     * テックソン問題詳細取得 - 必要権限: [TECHTHON_MISSION_PHASE_VIEW] - 対象テーブル:     - Content     - Techthon     - TechthonDocument     - TechthonTestCase     - TechthonTestCaseRequestParameter     - TechthonTestCaseHint - 抽出条件:     - Content.content_type = ContentType.TECHTHON(テックソン)     - Content.is_official = True     - Content.is_published = True     - Content.is_deleted = False     - TechthonTestCaseHint.is_deleted = False - 例外処理:     - 以下の場合NotFound:         - 削除済み問題         - 指定されたコンテンツIDが存在しない     - 権限のないユーザーが閲覧の場合403
     * テックソン問題詳細取得
     */
    async getTechthonQuestion(requestParameters: GetTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut> {
        const response = await this.getTechthonQuestionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソン問題一覧取得 - 必要権限: [TECHTHON_MISSION_PHASE_VIEW] - 並び順: idの昇順 - 抽出条件:     - Content.content_type = ContentType.TECHTHON     - Content.is_deleted = False     - Content.content_topic_id in content_topic_ids     - ContentTopic.content_category_id in content_category_ids - 例外処理     - 権限のないユーザーからのリクエストの場合NotFound     - クエリパラメータが存在しない値の場合ParameterError - 補足     - ミッション番号は\"mission\" + Techthon.orderを結合した文字列にして返す
     * テックソン問題一覧取得
     */
    async getTechthonQuestionListRaw(requestParameters: GetTechthonQuestionListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TechthonQuestionListOut>>> {
        const queryParameters: any = {};

        if (requestParameters.contentCategoryIds) {
            queryParameters['content_category_ids'] = requestParameters.contentCategoryIds;
        }

        if (requestParameters.contentTopicIds) {
            queryParameters['content_topic_ids'] = requestParameters.contentTopicIds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/techthon_questions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TechthonQuestionListOutFromJSON));
    }

    /**
     * テックソン問題一覧取得 - 必要権限: [TECHTHON_MISSION_PHASE_VIEW] - 並び順: idの昇順 - 抽出条件:     - Content.content_type = ContentType.TECHTHON     - Content.is_deleted = False     - Content.content_topic_id in content_topic_ids     - ContentTopic.content_category_id in content_category_ids - 例外処理     - 権限のないユーザーからのリクエストの場合NotFound     - クエリパラメータが存在しない値の場合ParameterError - 補足     - ミッション番号は\"mission\" + Techthon.orderを結合した文字列にして返す
     * テックソン問題一覧取得
     */
    async getTechthonQuestionList(requestParameters: GetTechthonQuestionListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TechthonQuestionListOut>> {
        const response = await this.getTechthonQuestionListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソン問題更新 - 必要権限: [TECHTHON_MISSION_PHASE_EDIT] - 対象テーブル:     - Content     - Techthon     - TechthonDocument     - TechthonTestCase     - TechthonTestCaseRequestParameter     - TechthonTestCaseHint - 更新条件:     - Content.content_type = ContentType.TECHTHON     - Content.content_division = ContentDivision.STOCK     - Content.is_official = True     - Content.is_shared_between_schools = False     - Content.organization_id = user.organization_id     - Content.is_deleted = False     - Content.updated_by: user.full_name - 例外処理:     - コンテンツIDが存在しない場合NotFound     - 権限のないユーザーが作成の場合NotFound
     * テックソン問題更新
     */
    async updateTechthonQuestionRaw(requestParameters: UpdateTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut>> {
        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling updateTechthonQuestion.');
        }

        if (requestParameters.techthonContentDetailIn === null || requestParameters.techthonContentDetailIn === undefined) {
            throw new runtime.RequiredError('techthonContentDetailIn','Required parameter requestParameters.techthonContentDetailIn was null or undefined when calling updateTechthonQuestion.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/techthon_questions/{content_id}`.replace(`{${"content_id"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TechthonContentDetailInToJSON(requestParameters.techthonContentDetailIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSON(jsonValue));
    }

    /**
     * テックソン問題更新 - 必要権限: [TECHTHON_MISSION_PHASE_EDIT] - 対象テーブル:     - Content     - Techthon     - TechthonDocument     - TechthonTestCase     - TechthonTestCaseRequestParameter     - TechthonTestCaseHint - 更新条件:     - Content.content_type = ContentType.TECHTHON     - Content.content_division = ContentDivision.STOCK     - Content.is_official = True     - Content.is_shared_between_schools = False     - Content.organization_id = user.organization_id     - Content.is_deleted = False     - Content.updated_by: user.full_name - 例外処理:     - コンテンツIDが存在しない場合NotFound     - 権限のないユーザーが作成の場合NotFound
     * テックソン問題更新
     */
    async updateTechthonQuestion(requestParameters: UpdateTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut> {
        const response = await this.updateTechthonQuestionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
