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
  CurrentJob,
  IntroducedJobListOut,
  JobUserDetailModalOut,
  JobUserInfoModalOut,
  JobUserListOut,
  JobUsersMemoUpdateIn,
  JobUsersStatusUpdateIn,
  ReferableUserStatus,
  ScoutInvitationIn,
  ScoutListOut,
  SendJobScoutToUserIn,
  SendJobScoutToUserOut,
  SkillLevel,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    CurrentJobFromJSON,
    CurrentJobToJSON,
    IntroducedJobListOutFromJSON,
    IntroducedJobListOutToJSON,
    JobUserDetailModalOutFromJSON,
    JobUserDetailModalOutToJSON,
    JobUserInfoModalOutFromJSON,
    JobUserInfoModalOutToJSON,
    JobUserListOutFromJSON,
    JobUserListOutToJSON,
    JobUsersMemoUpdateInFromJSON,
    JobUsersMemoUpdateInToJSON,
    JobUsersStatusUpdateInFromJSON,
    JobUsersStatusUpdateInToJSON,
    ReferableUserStatusFromJSON,
    ReferableUserStatusToJSON,
    ScoutInvitationInFromJSON,
    ScoutInvitationInToJSON,
    ScoutListOutFromJSON,
    ScoutListOutToJSON,
    SendJobScoutToUserInFromJSON,
    SendJobScoutToUserInToJSON,
    SendJobScoutToUserOutFromJSON,
    SendJobScoutToUserOutToJSON,
    SkillLevelFromJSON,
    SkillLevelToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface DownloadJobUserListRequest {
    fuzzySearchName?: boolean;
    name?: string;
    lowerLimitGraduateYear?: number;
    upperLimitGraduateYear?: number;
    undefinedGraduateYear?: boolean;
    currentJobTypeLists?: Array<CurrentJob>;
    scoutStatusLists?: Array<ReferableUserStatus>;
    residenceId?: number;
    lowerLimitRegistrationDate?: Date;
    upperLimitRegistrationDate?: Date;
    lowerLimitLastAccessDate?: Date;
    upperLimitLastAccessDate?: Date;
    desiredPrefectureIds?: Array<number>;
    desiredOccupationIds?: Array<number>;
    skillLevels?: Array<SkillLevel>;
    userUsedPgLangIds?: Array<number>;
    userPreferredPgLangIds?: Array<number>;
}

export interface GetIntroducedJobsForJobUserRequest {
    jobUserId: number;
}

export interface GetJobUserDetailModalRequest {
    userId: number;
}

export interface GetJobUserInfoModalRequest {
    userId: number;
}

export interface GetJobUserListRequest {
    fuzzySearchName?: boolean;
    name?: string;
    lowerLimitGraduateYear?: number;
    upperLimitGraduateYear?: number;
    undefinedGraduateYear?: boolean;
    currentJobTypeLists?: Array<CurrentJob>;
    scoutStatusLists?: Array<ReferableUserStatus>;
    residenceId?: number;
    lowerLimitRegistrationDate?: Date;
    upperLimitRegistrationDate?: Date;
    lowerLimitLastAccessDate?: Date;
    upperLimitLastAccessDate?: Date;
    desiredPrefectureIds?: Array<number>;
    desiredOccupationIds?: Array<number>;
    skillLevels?: Array<SkillLevel>;
    userUsedPgLangIds?: Array<number>;
    userPreferredPgLangIds?: Array<number>;
    limit?: number;
    offset?: number;
}

export interface GetJobUserScoutListRequest {
    jobUserId: number;
    freeWord?: string;
    limit?: number;
    offset?: number;
}

export interface SendJobScoutToUserRequest {
    jobUserId: number;
    jobId: number;
    sendJobScoutToUserIn: SendJobScoutToUserIn;
}

export interface SendScoutInvitationRequest {
    jobUserId: number;
    scoutInvitationIn: ScoutInvitationIn;
}

export interface UpdateJobUsersMemoRequest {
    jobUserId: number;
    jobUsersMemoUpdateIn: JobUsersMemoUpdateIn;
}

export interface UpdateJobUsersStatusRequest {
    jobUserId: number;
    jobUsersStatusUpdateIn: JobUsersStatusUpdateIn;
}

/**
 * 
 */
export class ManageJobUsersApi extends runtime.BaseAPI {

    /**
     * 求人ユーザー一覧のダウンロード - 必要権限：[SCOUT],[ALL_JOB_VIEW],[OWN_JOB_VIEW] - 実行処理     - 求人ユーザー一覧取得APIと共通の処理     - 上記処理のレスポンスデータから対象のデータをcsvファイルに書き出しレスポンスとして返す - 書き出すデータのカラム名     - 行番号     - ユーザー名     - 現住所　※現在住んでいる都道府県     - 現職     - 学校区分     - 学校     - 学部・学科     - 卒業年度     - 希望職種     - 希望勤務地     - レベル - csvファイル名: users_list_yyyymmddss - 権限がない場合、PermissionDenied - 補足     - 求人ユーザー一覧取得APIがまだ実装されていないため、クエリパラメータ名は仮     - クエリパラメータ名は統一させるので、確定したら修正
     * 求人ユーザー一覧ダウンロード
     */
    async downloadJobUserListRaw(requestParameters: DownloadJobUserListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters.fuzzySearchName !== undefined) {
            queryParameters['fuzzy_search_name'] = requestParameters.fuzzySearchName;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.lowerLimitGraduateYear !== undefined) {
            queryParameters['lower_limit_graduate_year'] = requestParameters.lowerLimitGraduateYear;
        }

        if (requestParameters.upperLimitGraduateYear !== undefined) {
            queryParameters['upper_limit_graduate_year'] = requestParameters.upperLimitGraduateYear;
        }

        if (requestParameters.undefinedGraduateYear !== undefined) {
            queryParameters['undefined_graduate_year'] = requestParameters.undefinedGraduateYear;
        }

        if (requestParameters.currentJobTypeLists) {
            queryParameters['current_job_type_lists'] = requestParameters.currentJobTypeLists;
        }

        if (requestParameters.scoutStatusLists) {
            queryParameters['scout_status_lists'] = requestParameters.scoutStatusLists;
        }

        if (requestParameters.residenceId !== undefined) {
            queryParameters['residence_id'] = requestParameters.residenceId;
        }

        if (requestParameters.lowerLimitRegistrationDate !== undefined) {
            queryParameters['lower_limit_registration_date'] = (requestParameters.lowerLimitRegistrationDate as any).toISOString();
        }

        if (requestParameters.upperLimitRegistrationDate !== undefined) {
            queryParameters['upper_limit_registration_date'] = (requestParameters.upperLimitRegistrationDate as any).toISOString();
        }

        if (requestParameters.lowerLimitLastAccessDate !== undefined) {
            queryParameters['lower_limit_last_access_date'] = (requestParameters.lowerLimitLastAccessDate as any).toISOString();
        }

        if (requestParameters.upperLimitLastAccessDate !== undefined) {
            queryParameters['upper_limit_last_access_date'] = (requestParameters.upperLimitLastAccessDate as any).toISOString();
        }

        if (requestParameters.desiredPrefectureIds) {
            queryParameters['desired_prefecture_ids'] = requestParameters.desiredPrefectureIds;
        }

        if (requestParameters.desiredOccupationIds) {
            queryParameters['desired_occupation_ids'] = requestParameters.desiredOccupationIds;
        }

        if (requestParameters.skillLevels) {
            queryParameters['skill_levels'] = requestParameters.skillLevels;
        }

        if (requestParameters.userUsedPgLangIds) {
            queryParameters['user_used_pg_lang_ids'] = requestParameters.userUsedPgLangIds;
        }

        if (requestParameters.userPreferredPgLangIds) {
            queryParameters['user_preferred_pg_lang_ids'] = requestParameters.userPreferredPgLangIds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/job-users/download`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * 求人ユーザー一覧のダウンロード - 必要権限：[SCOUT],[ALL_JOB_VIEW],[OWN_JOB_VIEW] - 実行処理     - 求人ユーザー一覧取得APIと共通の処理     - 上記処理のレスポンスデータから対象のデータをcsvファイルに書き出しレスポンスとして返す - 書き出すデータのカラム名     - 行番号     - ユーザー名     - 現住所　※現在住んでいる都道府県     - 現職     - 学校区分     - 学校     - 学部・学科     - 卒業年度     - 希望職種     - 希望勤務地     - レベル - csvファイル名: users_list_yyyymmddss - 権限がない場合、PermissionDenied - 補足     - 求人ユーザー一覧取得APIがまだ実装されていないため、クエリパラメータ名は仮     - クエリパラメータ名は統一させるので、確定したら修正
     * 求人ユーザー一覧ダウンロード
     */
    async downloadJobUserList(requestParameters: DownloadJobUserListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.downloadJobUserListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 紹介済み求人一覧取得 - 必要権限：[RECRUITMENT] - 並び順: 求人created_atの降順 - 実行処理   - free_wordで(企業名または求人名で検索)で検索   - free_wordの初期値はNoneのため条件指定なしの検索   - スカウト先企業候補の情報をDB取得   - 一覧表示する企業の情報は別APIにて取得
     * 紹介済み求人一覧取得
     */
    async getIntroducedJobsForJobUserRaw(requestParameters: GetIntroducedJobsForJobUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ScoutListOut>>> {
        if (requestParameters.jobUserId === null || requestParameters.jobUserId === undefined) {
            throw new runtime.RequiredError('jobUserId','Required parameter requestParameters.jobUserId was null or undefined when calling getIntroducedJobsForJobUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/job-users/introduced-jobs/{job_user_id}`.replace(`{${"job_user_id"}}`, encodeURIComponent(String(requestParameters.jobUserId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScoutListOutFromJSON));
    }

    /**
     * 紹介済み求人一覧取得 - 必要権限：[RECRUITMENT] - 並び順: 求人created_atの降順 - 実行処理   - free_wordで(企業名または求人名で検索)で検索   - free_wordの初期値はNoneのため条件指定なしの検索   - スカウト先企業候補の情報をDB取得   - 一覧表示する企業の情報は別APIにて取得
     * 紹介済み求人一覧取得
     */
    async getIntroducedJobsForJobUser(requestParameters: GetIntroducedJobsForJobUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ScoutListOut>> {
        const response = await this.getIntroducedJobsForJobUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * スカウト承諾済み求人ユーザー詳細取得 - 必要権限: [SCOUT], [ALL_JOB_VIEW], [OWN_JOB_VIEW] - 取得条件:     - 一般ユーザーであること     - 削除済みでないこと - Response:     - 成功: HTTP_200_OK - 処理内容:
     * スカウト承諾済み求人ユーザー詳細取得
     */
    async getJobUserDetailModalRaw(requestParameters: GetJobUserDetailModalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobUserDetailModalOut>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getJobUserDetailModal.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/job-users/detail-modal/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobUserDetailModalOutFromJSON(jsonValue));
    }

    /**
     * スカウト承諾済み求人ユーザー詳細取得 - 必要権限: [SCOUT], [ALL_JOB_VIEW], [OWN_JOB_VIEW] - 取得条件:     - 一般ユーザーであること     - 削除済みでないこと - Response:     - 成功: HTTP_200_OK - 処理内容:
     * スカウト承諾済み求人ユーザー詳細取得
     */
    async getJobUserDetailModal(requestParameters: GetJobUserDetailModalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobUserDetailModalOut> {
        const response = await this.getJobUserDetailModalRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 求人ユーザー情報取得 - 必要権限: [RECRUITMENT] - 表示条件     - User.is_deleted = False     - GeneralUser.receive_scouts = True - Response:     - 成功: HTTP_200_OK - 処理内容:     - 承諾済のみfull nameを表示する
     * スカウト承諾済みでない求人ユーザー情報取得
     */
    async getJobUserInfoModalRaw(requestParameters: GetJobUserInfoModalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobUserInfoModalOut>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getJobUserInfoModal.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/job-users/info-modal/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobUserInfoModalOutFromJSON(jsonValue));
    }

    /**
     * 求人ユーザー情報取得 - 必要権限: [RECRUITMENT] - 表示条件     - User.is_deleted = False     - GeneralUser.receive_scouts = True - Response:     - 成功: HTTP_200_OK - 処理内容:     - 承諾済のみfull nameを表示する
     * スカウト承諾済みでない求人ユーザー情報取得
     */
    async getJobUserInfoModal(requestParameters: GetJobUserInfoModalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobUserInfoModalOut> {
        const response = await this.getJobUserInfoModalRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 求人ユーザー一覧取得 - 必要権限: [RECRUITMENT] - ユーザー名検索(絞り込みと併用しない)：     - 完全一致     - あいまい検索(部分一致) - ユーザ絞り込み：     - 卒業年度     - 居住地     - 登録日時     - 最終アクセス     - 現在の職業(学生/会社員)     - スカウト状況(未スカウト/承諾待ち/承諾済み/不承諾/スカウト拒否)     - 希望勤務地     - 希望職種     - スキルレベル(入門/初級/中級/上級/スキルレベルなし)     - 得意プログラミング言語 - ページネーション: 50件 - 表示条件     - User.is_deleted = False     - GeneralUser.receive_scouts = True - Response:     - 成功: HTTP_200_OK - 処理内容:     1. 権限確認         - 他組織求人を閲覧できることを確認     2. ユーザー名検索 or 絞り込み         - 取得クエリ作成         - 件数取得     3. 求人ユーザー一覧取得 - 並び順:ID降順 - 取得条件:     - 一般ユーザーであること     - 削除済みでないこと
     * 求人ユーザー検索一覧取得
     */
    async getJobUserListRaw(requestParameters: GetJobUserListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobUserListOut>> {
        const queryParameters: any = {};

        if (requestParameters.fuzzySearchName !== undefined) {
            queryParameters['fuzzy_search_name'] = requestParameters.fuzzySearchName;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.lowerLimitGraduateYear !== undefined) {
            queryParameters['lower_limit_graduate_year'] = requestParameters.lowerLimitGraduateYear;
        }

        if (requestParameters.upperLimitGraduateYear !== undefined) {
            queryParameters['upper_limit_graduate_year'] = requestParameters.upperLimitGraduateYear;
        }

        if (requestParameters.undefinedGraduateYear !== undefined) {
            queryParameters['undefined_graduate_year'] = requestParameters.undefinedGraduateYear;
        }

        if (requestParameters.currentJobTypeLists) {
            queryParameters['current_job_type_lists'] = requestParameters.currentJobTypeLists;
        }

        if (requestParameters.scoutStatusLists) {
            queryParameters['scout_status_lists'] = requestParameters.scoutStatusLists;
        }

        if (requestParameters.residenceId !== undefined) {
            queryParameters['residence_id'] = requestParameters.residenceId;
        }

        if (requestParameters.lowerLimitRegistrationDate !== undefined) {
            queryParameters['lower_limit_registration_date'] = (requestParameters.lowerLimitRegistrationDate as any).toISOString();
        }

        if (requestParameters.upperLimitRegistrationDate !== undefined) {
            queryParameters['upper_limit_registration_date'] = (requestParameters.upperLimitRegistrationDate as any).toISOString();
        }

        if (requestParameters.lowerLimitLastAccessDate !== undefined) {
            queryParameters['lower_limit_last_access_date'] = (requestParameters.lowerLimitLastAccessDate as any).toISOString();
        }

        if (requestParameters.upperLimitLastAccessDate !== undefined) {
            queryParameters['upper_limit_last_access_date'] = (requestParameters.upperLimitLastAccessDate as any).toISOString();
        }

        if (requestParameters.desiredPrefectureIds) {
            queryParameters['desired_prefecture_ids'] = requestParameters.desiredPrefectureIds;
        }

        if (requestParameters.desiredOccupationIds) {
            queryParameters['desired_occupation_ids'] = requestParameters.desiredOccupationIds;
        }

        if (requestParameters.skillLevels) {
            queryParameters['skill_levels'] = requestParameters.skillLevels;
        }

        if (requestParameters.userUsedPgLangIds) {
            queryParameters['user_used_pg_lang_ids'] = requestParameters.userUsedPgLangIds;
        }

        if (requestParameters.userPreferredPgLangIds) {
            queryParameters['user_preferred_pg_lang_ids'] = requestParameters.userPreferredPgLangIds;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/job-users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobUserListOutFromJSON(jsonValue));
    }

    /**
     * 求人ユーザー一覧取得 - 必要権限: [RECRUITMENT] - ユーザー名検索(絞り込みと併用しない)：     - 完全一致     - あいまい検索(部分一致) - ユーザ絞り込み：     - 卒業年度     - 居住地     - 登録日時     - 最終アクセス     - 現在の職業(学生/会社員)     - スカウト状況(未スカウト/承諾待ち/承諾済み/不承諾/スカウト拒否)     - 希望勤務地     - 希望職種     - スキルレベル(入門/初級/中級/上級/スキルレベルなし)     - 得意プログラミング言語 - ページネーション: 50件 - 表示条件     - User.is_deleted = False     - GeneralUser.receive_scouts = True - Response:     - 成功: HTTP_200_OK - 処理内容:     1. 権限確認         - 他組織求人を閲覧できることを確認     2. ユーザー名検索 or 絞り込み         - 取得クエリ作成         - 件数取得     3. 求人ユーザー一覧取得 - 並び順:ID降順 - 取得条件:     - 一般ユーザーであること     - 削除済みでないこと
     * 求人ユーザー検索一覧取得
     */
    async getJobUserList(requestParameters: GetJobUserListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobUserListOut> {
        const response = await this.getJobUserListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 求人ユーザースカウト先企業候補一覧を取得 - 必要権限：[RECRUITMENT] - 並び順: 求人IDの昇順 - データ取得可能条件:     - JobSelection.organization_id == user.organization_id     - JobSelection.user_id == job_user_id     - JobSelection.selection_type == SelectionType.SCOUT
     * 求人ユーザースカウト先企業候補一覧取得
     */
    async getJobUserScoutListRaw(requestParameters: GetJobUserScoutListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IntroducedJobListOut>> {
        if (requestParameters.jobUserId === null || requestParameters.jobUserId === undefined) {
            throw new runtime.RequiredError('jobUserId','Required parameter requestParameters.jobUserId was null or undefined when calling getJobUserScoutList.');
        }

        const queryParameters: any = {};

        if (requestParameters.freeWord !== undefined) {
            queryParameters['free_word'] = requestParameters.freeWord;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/job-users/{job_user_id}/scout-list`.replace(`{${"job_user_id"}}`, encodeURIComponent(String(requestParameters.jobUserId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IntroducedJobListOutFromJSON(jsonValue));
    }

    /**
     * 求人ユーザースカウト先企業候補一覧を取得 - 必要権限：[RECRUITMENT] - 並び順: 求人IDの昇順 - データ取得可能条件:     - JobSelection.organization_id == user.organization_id     - JobSelection.user_id == job_user_id     - JobSelection.selection_type == SelectionType.SCOUT
     * 求人ユーザースカウト先企業候補一覧取得
     */
    async getJobUserScoutList(requestParameters: GetJobUserScoutListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IntroducedJobListOut> {
        const response = await this.getJobUserScoutListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ユーザーに求人を紹介するAPI 必要権限: [RECRUITMENT] データ取得条件:     - User         - User.user_type == UserType.GENERAL_USER         - User.is_deleted == False         - ReferableUser.referable_user_status == ReferableUserStatus.APPROVED         - ReferableUser.is_deleted == False     - Job         - Job.is_deleted == False     - JobSelectionで(user_id, job_id)のレコードが存在しない 実行手順:     - user、jobデータ取得         - 取得できない場合はNotFoundエラー、userが存在するが、ReferableUserが存在しない/承諾ではない場合はParameterErrorエラー     - JobSelection レコードを作成、　JobSelection.selection_step = SelectionStep.WAITING_FOR_SCOUT_ACCEPTANCE     - 通知(Notification)作成 (user宛: リンク先はユーザーのスカウト一覧、agent宛: 応募企業のスカウト一覧)     - User.receive_emails = Trueの場合、メールを送信 (User.user_common_info.sub_emailが存在すれば、そちらにも送信)     - チャットにscout_messageを送信　（メッセージが空ではない場合）     - 更新したjob情報を返す
     * ユーザーに求人を紹介するAPI
     */
    async sendJobScoutToUserRaw(requestParameters: SendJobScoutToUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendJobScoutToUserOut>> {
        if (requestParameters.jobUserId === null || requestParameters.jobUserId === undefined) {
            throw new runtime.RequiredError('jobUserId','Required parameter requestParameters.jobUserId was null or undefined when calling sendJobScoutToUser.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling sendJobScoutToUser.');
        }

        if (requestParameters.sendJobScoutToUserIn === null || requestParameters.sendJobScoutToUserIn === undefined) {
            throw new runtime.RequiredError('sendJobScoutToUserIn','Required parameter requestParameters.sendJobScoutToUserIn was null or undefined when calling sendJobScoutToUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/job-users/{job_user_id}/submit-scout/{job_id}`.replace(`{${"job_user_id"}}`, encodeURIComponent(String(requestParameters.jobUserId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendJobScoutToUserInToJSON(requestParameters.sendJobScoutToUserIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendJobScoutToUserOutFromJSON(jsonValue));
    }

    /**
     * ユーザーに求人を紹介するAPI 必要権限: [RECRUITMENT] データ取得条件:     - User         - User.user_type == UserType.GENERAL_USER         - User.is_deleted == False         - ReferableUser.referable_user_status == ReferableUserStatus.APPROVED         - ReferableUser.is_deleted == False     - Job         - Job.is_deleted == False     - JobSelectionで(user_id, job_id)のレコードが存在しない 実行手順:     - user、jobデータ取得         - 取得できない場合はNotFoundエラー、userが存在するが、ReferableUserが存在しない/承諾ではない場合はParameterErrorエラー     - JobSelection レコードを作成、　JobSelection.selection_step = SelectionStep.WAITING_FOR_SCOUT_ACCEPTANCE     - 通知(Notification)作成 (user宛: リンク先はユーザーのスカウト一覧、agent宛: 応募企業のスカウト一覧)     - User.receive_emails = Trueの場合、メールを送信 (User.user_common_info.sub_emailが存在すれば、そちらにも送信)     - チャットにscout_messageを送信　（メッセージが空ではない場合）     - 更新したjob情報を返す
     * ユーザーに求人を紹介するAPI
     */
    async sendJobScoutToUser(requestParameters: SendJobScoutToUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendJobScoutToUserOut> {
        const response = await this.sendJobScoutToUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 未スカウトユーザーにスカウト送信(ReferableUser作成)
     * 未スカウトユーザーにスカウト送信
     */
    async sendScoutInvitationRaw(requestParameters: SendScoutInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.jobUserId === null || requestParameters.jobUserId === undefined) {
            throw new runtime.RequiredError('jobUserId','Required parameter requestParameters.jobUserId was null or undefined when calling sendScoutInvitation.');
        }

        if (requestParameters.scoutInvitationIn === null || requestParameters.scoutInvitationIn === undefined) {
            throw new runtime.RequiredError('scoutInvitationIn','Required parameter requestParameters.scoutInvitationIn was null or undefined when calling sendScoutInvitation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/job-users/{job_user_id}/scout-invitation`.replace(`{${"job_user_id"}}`, encodeURIComponent(String(requestParameters.jobUserId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScoutInvitationInToJSON(requestParameters.scoutInvitationIn),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 未スカウトユーザーにスカウト送信(ReferableUser作成)
     * 未スカウトユーザーにスカウト送信
     */
    async sendScoutInvitation(requestParameters: SendScoutInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.sendScoutInvitationRaw(requestParameters, initOverrides);
    }

    /**
     * 求人ユーザーメモを更新する - 必要権限：[SCOUT],[ALL_JOB_VIEW],[OWN_JOB_VIEW] - 更新条件     - ReferableUser.is_deleted=False
     * 求人ユーザーメモ更新
     */
    async updateJobUsersMemoRaw(requestParameters: UpdateJobUsersMemoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.jobUserId === null || requestParameters.jobUserId === undefined) {
            throw new runtime.RequiredError('jobUserId','Required parameter requestParameters.jobUserId was null or undefined when calling updateJobUsersMemo.');
        }

        if (requestParameters.jobUsersMemoUpdateIn === null || requestParameters.jobUsersMemoUpdateIn === undefined) {
            throw new runtime.RequiredError('jobUsersMemoUpdateIn','Required parameter requestParameters.jobUsersMemoUpdateIn was null or undefined when calling updateJobUsersMemo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/job-users/{job_user_id}/memo`.replace(`{${"job_user_id"}}`, encodeURIComponent(String(requestParameters.jobUserId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: JobUsersMemoUpdateInToJSON(requestParameters.jobUsersMemoUpdateIn),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 求人ユーザーメモを更新する - 必要権限：[SCOUT],[ALL_JOB_VIEW],[OWN_JOB_VIEW] - 更新条件     - ReferableUser.is_deleted=False
     * 求人ユーザーメモ更新
     */
    async updateJobUsersMemo(requestParameters: UpdateJobUsersMemoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateJobUsersMemoRaw(requestParameters, initOverrides);
    }

    /**
     * 求人ユーザーステータスを更新する - 必要権限: [RECRUITMENT] - 更新条件     - ReferableUser.is_deleted=False
     * 求人ユーザーステータス更新(未実装)
     */
    async updateJobUsersStatusRaw(requestParameters: UpdateJobUsersStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.jobUserId === null || requestParameters.jobUserId === undefined) {
            throw new runtime.RequiredError('jobUserId','Required parameter requestParameters.jobUserId was null or undefined when calling updateJobUsersStatus.');
        }

        if (requestParameters.jobUsersStatusUpdateIn === null || requestParameters.jobUsersStatusUpdateIn === undefined) {
            throw new runtime.RequiredError('jobUsersStatusUpdateIn','Required parameter requestParameters.jobUsersStatusUpdateIn was null or undefined when calling updateJobUsersStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/job-users/{job_user_id}/status`.replace(`{${"job_user_id"}}`, encodeURIComponent(String(requestParameters.jobUserId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: JobUsersStatusUpdateInToJSON(requestParameters.jobUsersStatusUpdateIn),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 求人ユーザーステータスを更新する - 必要権限: [RECRUITMENT] - 更新条件     - ReferableUser.is_deleted=False
     * 求人ユーザーステータス更新(未実装)
     */
    async updateJobUsersStatus(requestParameters: UpdateJobUsersStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateJobUsersStatusRaw(requestParameters, initOverrides);
    }

}
