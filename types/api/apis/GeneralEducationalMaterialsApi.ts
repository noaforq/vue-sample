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
  EducationalMaterialDetailOut,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    EducationalMaterialDetailOutFromJSON,
    EducationalMaterialDetailOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface GetGeneralEducationalMaterialRequest {
    contentId: number;
    sessionId?: number;
}

/**
 * 
 */
export class GeneralEducationalMaterialsApi extends runtime.BaseAPI {

    /**
     * 一般ユーザー用 教材詳細取得/イベント教材取得 - 必要権限: [GENERAL_USER], [SKILL_CHECK_USER] - 表示条件     - is_deleted=False     - Content.content_type = 教材     - Content.is_published=True         - パラメーターにsession_idがある場合　Content.is_published=Falseも含む     - セッションの教材の場合: Queryパラメータ(session_id)を入力すること         - SessionUserであること         - Event.is_public = True         - Event.is_deleted = False         - Session.is_deleted = False         - SessionContentに含まれているもの
     * 教材詳細取得
     */
    async getGeneralEducationalMaterialRaw(requestParameters: GetGeneralEducationalMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EducationalMaterialDetailOut>> {
        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling getGeneralEducationalMaterial.');
        }

        const queryParameters: any = {};

        if (requestParameters.sessionId !== undefined) {
            queryParameters['session_id'] = requestParameters.sessionId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/general/educational-materials/{content_id}`.replace(`{${"content_id"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EducationalMaterialDetailOutFromJSON(jsonValue));
    }

    /**
     * 一般ユーザー用 教材詳細取得/イベント教材取得 - 必要権限: [GENERAL_USER], [SKILL_CHECK_USER] - 表示条件     - is_deleted=False     - Content.content_type = 教材     - Content.is_published=True         - パラメーターにsession_idがある場合　Content.is_published=Falseも含む     - セッションの教材の場合: Queryパラメータ(session_id)を入力すること         - SessionUserであること         - Event.is_public = True         - Event.is_deleted = False         - Session.is_deleted = False         - SessionContentに含まれているもの
     * 教材詳細取得
     */
    async getGeneralEducationalMaterial(requestParameters: GetGeneralEducationalMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EducationalMaterialDetailOut> {
        const response = await this.getGeneralEducationalMaterialRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
