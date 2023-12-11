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
  AppRoutersManageSkillCheckUsersGetSkillCheckUsersListOrdering,
  SkillCheckUserInfoUpdateIn,
  SkillCheckUserInfoUpdateOut,
  SkillCheckUserLoginInfoOut,
  SkillCheckUsersAddIn,
  SkillCheckUsersAddOut,
  SkillCheckUsersListOut,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    AppRoutersManageSkillCheckUsersGetSkillCheckUsersListOrderingFromJSON,
    AppRoutersManageSkillCheckUsersGetSkillCheckUsersListOrderingToJSON,
    SkillCheckUserInfoUpdateInFromJSON,
    SkillCheckUserInfoUpdateInToJSON,
    SkillCheckUserInfoUpdateOutFromJSON,
    SkillCheckUserInfoUpdateOutToJSON,
    SkillCheckUserLoginInfoOutFromJSON,
    SkillCheckUserLoginInfoOutToJSON,
    SkillCheckUsersAddInFromJSON,
    SkillCheckUsersAddInToJSON,
    SkillCheckUsersAddOutFromJSON,
    SkillCheckUsersAddOutToJSON,
    SkillCheckUsersListOutFromJSON,
    SkillCheckUsersListOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface AddSkillCheckUsersRequest {
    skillCheckUsersAddIn: SkillCheckUsersAddIn;
}

export interface DeleteSkillCheckUserRequest {
    userId: number;
}

export interface GetSkillCheckUserListCsvRequest {
    sessionId?: number;
    includePassword?: boolean;
}

export interface GetSkillCheckUserLoginInfoRequest {
    userId: number;
}

export interface GetSkillUsersListRequest {
    orderBy?: AppRoutersManageSkillCheckUsersGetSkillCheckUsersListOrdering;
}

export interface ResetSkillCheckUserPasswordRequest {
    userId: number;
}

export interface UpdateSkillCheckUserInfoRequest {
    userId: number;
    skillCheckUserInfoUpdateIn: SkillCheckUserInfoUpdateIn;
}

/**
 * 
 */
export class ManageSkillCheckUsersApi extends runtime.BaseAPI {

    /**
     * スキルチェックアカウントをbulk createのAPI 必要権限: OWN_SKILL_CHECK_ACCOUNT_EDIT 設定可能パラメータ:     - count(追加数) 実行条件:     - 権限を持つこと     - count(追加数) > 0     - 発行可能スキルチェックアカウント数　- 既存アカウント数 > 0 レスポンス:     - 成功に追加したアカウント数     - 追加後の数     - 登録に失敗した数     - 発行可能数を超過した数 既存アカウント数取得条件 (一覧と同じ):     - user.school_user_type = None     - User.is_deleted = False     - 組織id = 作成企業のid (User.organization_id = user.organization_id)     - ユーザータイプ = スキルチェック (User.user_type = UserType.SKILL_CHECK)
     * スキルチェックアカウント追加(未実装)
     */
    async addSkillCheckUsersRaw(requestParameters: AddSkillCheckUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SkillCheckUsersAddOut>> {
        if (requestParameters.skillCheckUsersAddIn === null || requestParameters.skillCheckUsersAddIn === undefined) {
            throw new runtime.RequiredError('skillCheckUsersAddIn','Required parameter requestParameters.skillCheckUsersAddIn was null or undefined when calling addSkillCheckUsers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/skillcheck-users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SkillCheckUsersAddInToJSON(requestParameters.skillCheckUsersAddIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SkillCheckUsersAddOutFromJSON(jsonValue));
    }

    /**
     * スキルチェックアカウントをbulk createのAPI 必要権限: OWN_SKILL_CHECK_ACCOUNT_EDIT 設定可能パラメータ:     - count(追加数) 実行条件:     - 権限を持つこと     - count(追加数) > 0     - 発行可能スキルチェックアカウント数　- 既存アカウント数 > 0 レスポンス:     - 成功に追加したアカウント数     - 追加後の数     - 登録に失敗した数     - 発行可能数を超過した数 既存アカウント数取得条件 (一覧と同じ):     - user.school_user_type = None     - User.is_deleted = False     - 組織id = 作成企業のid (User.organization_id = user.organization_id)     - ユーザータイプ = スキルチェック (User.user_type = UserType.SKILL_CHECK)
     * スキルチェックアカウント追加(未実装)
     */
    async addSkillCheckUsers(requestParameters: AddSkillCheckUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SkillCheckUsersAddOut> {
        const response = await this.addSkillCheckUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * スキルチェックアカウント削除 必要権限: OWN_SKILL_CHECK_ACCOUNT_EDIT 実行条件:     - 該当データが特定できる (存在しない場合NotFound) データ取得条件:     - User.id = user_id     - User.is_deleted = False     - User.organization_id = user.organization_id     - User.user_type = UserType.SKILL_CHECK
     * スキルチェックアカウント削除
     */
    async deleteSkillCheckUserRaw(requestParameters: DeleteSkillCheckUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deleteSkillCheckUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/skillcheck-users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * スキルチェックアカウント削除 必要権限: OWN_SKILL_CHECK_ACCOUNT_EDIT 実行条件:     - 該当データが特定できる (存在しない場合NotFound) データ取得条件:     - User.id = user_id     - User.is_deleted = False     - User.organization_id = user.organization_id     - User.user_type = UserType.SKILL_CHECK
     * スキルチェックアカウント削除
     */
    async deleteSkillCheckUser(requestParameters: DeleteSkillCheckUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSkillCheckUserRaw(requestParameters, initOverrides);
    }

    /**
     * スキルチェックアカウント一覧画面からCSVダウンロードする - 必要権限: [OWN_SKILL_CHECK_ACCOUNT_VIEW] - 取得可能条件(一覧と同じ):     - user.school_user_type = None     - User.is_deleted = False     - 組織id = 作成企業のid (User.organization_id = user.organization_id)     - ユーザータイプ = スキルチェック (User.user_type = UserType.SKILL_CHECK) - 備考: パスワードは`User.password`ではなく、 `User.user_common_info.onetime_password`で取得 - 処理内容     1. data取得     2. response 書き込み(content-type, http header)
     * スキルチェックアカウントリストダウンロード
     */
    async getSkillCheckUserListCsvRaw(requestParameters: GetSkillCheckUserListCsvRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.sessionId !== undefined) {
            queryParameters['session_id'] = requestParameters.sessionId;
        }

        if (requestParameters.includePassword !== undefined) {
            queryParameters['include_password'] = requestParameters.includePassword;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/skillcheck-users/csv`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * スキルチェックアカウント一覧画面からCSVダウンロードする - 必要権限: [OWN_SKILL_CHECK_ACCOUNT_VIEW] - 取得可能条件(一覧と同じ):     - user.school_user_type = None     - User.is_deleted = False     - 組織id = 作成企業のid (User.organization_id = user.organization_id)     - ユーザータイプ = スキルチェック (User.user_type = UserType.SKILL_CHECK) - 備考: パスワードは`User.password`ではなく、 `User.user_common_info.onetime_password`で取得 - 処理内容     1. data取得     2. response 書き込み(content-type, http header)
     * スキルチェックアカウントリストダウンロード
     */
    async getSkillCheckUserListCsv(requestParameters: GetSkillCheckUserListCsvRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getSkillCheckUserListCsvRaw(requestParameters, initOverrides);
    }

    /**
     * 指定のuser_idでスキルチェックアカウントのログイン情報を取得 必要権限: [OWN_SKILL_CHECK_ACCOUNT_VIEW] レスポンス補足:     - ログインURLはフロント側に用意していただく 取得条件:     - User.is_delete == False     - User.organization_id == user.organization_id 備考: パスワードはUser.user_common_info.onetime_passwordを使用 処理内容:     - 条件でユーザーを特定     - レスポンス返す
     * スキルチェックアカウントログイン情報取得
     */
    async getSkillCheckUserLoginInfoRaw(requestParameters: GetSkillCheckUserLoginInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SkillCheckUserLoginInfoOut>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getSkillCheckUserLoginInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/skillcheck-users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SkillCheckUserLoginInfoOutFromJSON(jsonValue));
    }

    /**
     * 指定のuser_idでスキルチェックアカウントのログイン情報を取得 必要権限: [OWN_SKILL_CHECK_ACCOUNT_VIEW] レスポンス補足:     - ログインURLはフロント側に用意していただく 取得条件:     - User.is_delete == False     - User.organization_id == user.organization_id 備考: パスワードはUser.user_common_info.onetime_passwordを使用 処理内容:     - 条件でユーザーを特定     - レスポンス返す
     * スキルチェックアカウントログイン情報取得
     */
    async getSkillCheckUserLoginInfo(requestParameters: GetSkillCheckUserLoginInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SkillCheckUserLoginInfoOut> {
        const response = await this.getSkillCheckUserLoginInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * スキルチェックアカウント一覧取得 - 必要権限: [OWN_SKILL_CHECK_ACCOUNT_VIEW] - ページネーション: しばらくなしにする - 並び順: ユーザー名、名前(fullname)、補足情報、作成日、それぞれ昇順、降順に並べるように設定 - 取得可能条件     - user.school_user_type = None     - User.is_deleted = False     - 組織id = 作成企業のid (User.organization_id = user.organization_id)     - ユーザータイプ = スキルチェック (User.user_type = UserType.SKILL_CHECK) - レスポンス補足情報     - count: 現在有効なスキルチェックアカウント数(削除されると失効)     - total: 発行可能なスキルチェックアカウント数 - 処理内容     1. 自組織の組織id取得(user.organization_id)     2. 自組織に紐づいている企業トライアル条件から発行可能スキルチェックアカウント数取得     3. 条件で絞り込み、レスポンス構築
     * スキルチェックアカウント一覧取得
     */
    async getSkillUsersListRaw(requestParameters: GetSkillUsersListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SkillCheckUsersListOut>> {
        const queryParameters: any = {};

        if (requestParameters.orderBy !== undefined) {
            queryParameters['order_by'] = requestParameters.orderBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/skillcheck-users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SkillCheckUsersListOutFromJSON(jsonValue));
    }

    /**
     * スキルチェックアカウント一覧取得 - 必要権限: [OWN_SKILL_CHECK_ACCOUNT_VIEW] - ページネーション: しばらくなしにする - 並び順: ユーザー名、名前(fullname)、補足情報、作成日、それぞれ昇順、降順に並べるように設定 - 取得可能条件     - user.school_user_type = None     - User.is_deleted = False     - 組織id = 作成企業のid (User.organization_id = user.organization_id)     - ユーザータイプ = スキルチェック (User.user_type = UserType.SKILL_CHECK) - レスポンス補足情報     - count: 現在有効なスキルチェックアカウント数(削除されると失効)     - total: 発行可能なスキルチェックアカウント数 - 処理内容     1. 自組織の組織id取得(user.organization_id)     2. 自組織に紐づいている企業トライアル条件から発行可能スキルチェックアカウント数取得     3. 条件で絞り込み、レスポンス構築
     * スキルチェックアカウント一覧取得
     */
    async getSkillUsersList(requestParameters: GetSkillUsersListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SkillCheckUsersListOut> {
        const response = await this.getSkillUsersListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * スキルチェックアカウントリセットパスワードAPI 必要権限: OWN_SKILL_CHECK_ACCOUNT_EDIT 実行条件:     - 該当ユーザが特定できる (存在しない場合NotFound) データ取得条件:     - User.id = user_id     - User.is_deleted = False     - User.organization_id = user.organization_id     - User.user_type = UserType.SKILL_CHECK
     * パスワードリセット
     */
    async resetSkillCheckUserPasswordRaw(requestParameters: ResetSkillCheckUserPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling resetSkillCheckUserPassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/skillcheck-users/{user_id}/reset-password`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * スキルチェックアカウントリセットパスワードAPI 必要権限: OWN_SKILL_CHECK_ACCOUNT_EDIT 実行条件:     - 該当ユーザが特定できる (存在しない場合NotFound) データ取得条件:     - User.id = user_id     - User.is_deleted = False     - User.organization_id = user.organization_id     - User.user_type = UserType.SKILL_CHECK
     * パスワードリセット
     */
    async resetSkillCheckUserPassword(requestParameters: ResetSkillCheckUserPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetSkillCheckUserPasswordRaw(requestParameters, initOverrides);
    }

    /**
     * スキルチェックアカウント情報更新API 必要権限: OWN_SKILL_CHECK_ACCOUNT_EDIT 更新可能項目:     - 名前(display_name)     - 補足情報(extra_info) 実行条件:     - 該当データ特定できる (存在しない場合NotFound) データ取得条件:     - User.id = user_id     - User.is_deleted = False     - User.organization_id = user.organization_id     - User.user_type = UserType.SKILL_CHECK
     * スキルチェックアカウント情報更新
     */
    async updateSkillCheckUserInfoRaw(requestParameters: UpdateSkillCheckUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SkillCheckUserInfoUpdateOut>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateSkillCheckUserInfo.');
        }

        if (requestParameters.skillCheckUserInfoUpdateIn === null || requestParameters.skillCheckUserInfoUpdateIn === undefined) {
            throw new runtime.RequiredError('skillCheckUserInfoUpdateIn','Required parameter requestParameters.skillCheckUserInfoUpdateIn was null or undefined when calling updateSkillCheckUserInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/skillcheck-users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SkillCheckUserInfoUpdateInToJSON(requestParameters.skillCheckUserInfoUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SkillCheckUserInfoUpdateOutFromJSON(jsonValue));
    }

    /**
     * スキルチェックアカウント情報更新API 必要権限: OWN_SKILL_CHECK_ACCOUNT_EDIT 更新可能項目:     - 名前(display_name)     - 補足情報(extra_info) 実行条件:     - 該当データ特定できる (存在しない場合NotFound) データ取得条件:     - User.id = user_id     - User.is_deleted = False     - User.organization_id = user.organization_id     - User.user_type = UserType.SKILL_CHECK
     * スキルチェックアカウント情報更新
     */
    async updateSkillCheckUserInfo(requestParameters: UpdateSkillCheckUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SkillCheckUserInfoUpdateOut> {
        const response = await this.updateSkillCheckUserInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
