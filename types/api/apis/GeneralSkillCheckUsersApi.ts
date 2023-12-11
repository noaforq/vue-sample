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
  ParticipatingSessionsOut,
  ValidationError,
} from '../models/index';
import {
    ParticipatingSessionsOutFromJSON,
    ParticipatingSessionsOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

/**
 * 
 */
export class GeneralSkillCheckUsersApi extends runtime.BaseAPI {

    /**
     * スキルチェックユーザー参加セッション一覧取得 - 必要権限: [SKILL_CHECK_USER] - 取得可能条件:     - 自分が参加したセッション一覧を取得可能     - Event.purpose == EventPurpose.SKILL_CHECK     - Event.host_id == user.organization_id     - Event.is_deleted == False     - Session.is_deleted == False     - SessionUser.user_id == user.id
     * スキルチェックユーザー参加セッション一覧取得
     */
    async getSkillUserParticipatingSessionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ParticipatingSessionsOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/general/skillcheck-users/sessions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ParticipatingSessionsOutFromJSON));
    }

    /**
     * スキルチェックユーザー参加セッション一覧取得 - 必要権限: [SKILL_CHECK_USER] - 取得可能条件:     - 自分が参加したセッション一覧を取得可能     - Event.purpose == EventPurpose.SKILL_CHECK     - Event.host_id == user.organization_id     - Event.is_deleted == False     - Session.is_deleted == False     - SessionUser.user_id == user.id
     * スキルチェックユーザー参加セッション一覧取得
     */
    async getSkillUserParticipatingSessions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ParticipatingSessionsOut>> {
        const response = await this.getSkillUserParticipatingSessionsRaw(initOverrides);
        return await response.value();
    }

}
