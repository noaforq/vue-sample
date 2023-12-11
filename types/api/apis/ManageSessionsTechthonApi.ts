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
  AppSchemasManageSessionsTechthonTechthonPortfolioOutTechthonPortfolioOut,
  AppSchemasManageSessionsTechthonTechthonRankingOutTechthonRankingOut,
  AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut,
  TechthonQuestionListOut,
  TechthonSessionContentAddIn,
  TechthonSessionIn,
  TechthonSessionOut,
  TechthonSessionTeamOut,
  TechthonSessionTeamUpdateIn,
  TechthonSessionUserOut,
  TechthonSessionUserTeamUpdateIn,
  TechthonTeamOut,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    AppSchemasManageSessionsTechthonTechthonPortfolioOutTechthonPortfolioOutFromJSON,
    AppSchemasManageSessionsTechthonTechthonPortfolioOutTechthonPortfolioOutToJSON,
    AppSchemasManageSessionsTechthonTechthonRankingOutTechthonRankingOutFromJSON,
    AppSchemasManageSessionsTechthonTechthonRankingOutTechthonRankingOutToJSON,
    AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSON,
    AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutToJSON,
    TechthonQuestionListOutFromJSON,
    TechthonQuestionListOutToJSON,
    TechthonSessionContentAddInFromJSON,
    TechthonSessionContentAddInToJSON,
    TechthonSessionInFromJSON,
    TechthonSessionInToJSON,
    TechthonSessionOutFromJSON,
    TechthonSessionOutToJSON,
    TechthonSessionTeamOutFromJSON,
    TechthonSessionTeamOutToJSON,
    TechthonSessionTeamUpdateInFromJSON,
    TechthonSessionTeamUpdateInToJSON,
    TechthonSessionUserOutFromJSON,
    TechthonSessionUserOutToJSON,
    TechthonSessionUserTeamUpdateInFromJSON,
    TechthonSessionUserTeamUpdateInToJSON,
    TechthonTeamOutFromJSON,
    TechthonTeamOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface AddTechthonSessionContentsRequest {
    sessionId: number;
    techthonSessionContentAddIn: Array<TechthonSessionContentAddIn>;
}

export interface CreateTechthonSessionRequest {
    eventId: number;
    techthonSessionIn: TechthonSessionIn;
}

export interface CreateTechthonSessionTeamRequest {
    sessionId: number;
}

export interface DeleteTechthonSessionTeamRequest {
    sessionId: number;
    teamId: number;
}

export interface GetManageTechthonSessionPortfolioRequest {
    sessionId: number;
    userId: number;
}

export interface GetSessionsTechthonQuestionRequest {
    sessionId: number;
    contentId: number;
}

export interface GetTechthonSessionQuestionListRequest {
    sessionId: number;
}

export interface GetTechthonSessionRankingRequest {
    sessionId: number;
}

export interface GetTechthonSessionUserListRequest {
    sessionId: number;
}

export interface GetTechthonTeamsRequest {
    sessionId: number;
}

export interface UpdateTeamForTechthonSessionUserRequest {
    sessionId: number;
    teamId: number;
    techthonSessionUserTeamUpdateIn: TechthonSessionUserTeamUpdateIn;
}

export interface UpdateTechthonSessionRequest {
    sessionId: number;
    techthonSessionIn: TechthonSessionIn;
}

export interface UpdateTechthonSessionTeamNameRequest {
    sessionId: number;
    teamId: number;
    techthonSessionTeamUpdateIn: TechthonSessionTeamUpdateIn;
}

/**
 * 
 */
export class ManageSessionsTechthonApi extends runtime.BaseAPI {

    /**
     * テックソンセッションコンテンツ追加 - 必要権限:     - techthon_session_edit - 処理内容:     - 既存のSessionContentsを削除(session_id=session_id)     - session_contentsを作成 (list分を作成)         - orderはcontent.techthon.orderを使う         - 一つがTechthonとして存在しなければ、NotFound
     * テックソンセッションコンテンツ追加
     */
    async addTechthonSessionContentsRaw(requestParameters: AddTechthonSessionContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling addTechthonSessionContents.');
        }

        if (requestParameters.techthonSessionContentAddIn === null || requestParameters.techthonSessionContentAddIn === undefined) {
            throw new runtime.RequiredError('techthonSessionContentAddIn','Required parameter requestParameters.techthonSessionContentAddIn was null or undefined when calling addTechthonSessionContents.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/contents`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.techthonSessionContentAddIn.map(TechthonSessionContentAddInToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * テックソンセッションコンテンツ追加 - 必要権限:     - techthon_session_edit - 処理内容:     - 既存のSessionContentsを削除(session_id=session_id)     - session_contentsを作成 (list分を作成)         - orderはcontent.techthon.orderを使う         - 一つがTechthonとして存在しなければ、NotFound
     * テックソンセッションコンテンツ追加
     */
    async addTechthonSessionContents(requestParameters: AddTechthonSessionContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addTechthonSessionContentsRaw(requestParameters, initOverrides);
    }

    /**
     * TechthonSession作成 - 必要権限     - [TECHTHON_SESSION_EDIT] - 処理内容     - Sessionを作成     - TechthonSessionを作成 - レスポンス     - 作成されたSessionIDを返す     - IDをもって、getTechthonSessionで詳細情報を取得する想定
     * TechthonSession作成
     */
    async createTechthonSessionRaw(requestParameters: CreateTechthonSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechthonSessionOut>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling createTechthonSession.');
        }

        if (requestParameters.techthonSessionIn === null || requestParameters.techthonSessionIn === undefined) {
            throw new runtime.RequiredError('techthonSessionIn','Required parameter requestParameters.techthonSessionIn was null or undefined when calling createTechthonSession.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/sessions-techthon/{event_id}`.replace(`{${"event_id"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TechthonSessionInToJSON(requestParameters.techthonSessionIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TechthonSessionOutFromJSON(jsonValue));
    }

    /**
     * TechthonSession作成 - 必要権限     - [TECHTHON_SESSION_EDIT] - 処理内容     - Sessionを作成     - TechthonSessionを作成 - レスポンス     - 作成されたSessionIDを返す     - IDをもって、getTechthonSessionで詳細情報を取得する想定
     * TechthonSession作成
     */
    async createTechthonSession(requestParameters: CreateTechthonSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechthonSessionOut> {
        const response = await this.createTechthonSessionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソンセッションチーム追加 - 必要権限: [TECHTHON_SESSION_EDIT] - 処理内容:     - セッションが存在しかつTechthonセッションか確認     - チーム番号を決める         - 対象セッションに既に存在するチーム番号の最大値+1を今回のチーム番号とする     - TechthonTeamに新規チームを追加         - TechthonTeam.techthon_session_id = TechthonSession.id         - TechthonTeam.team_name = \"team-{上記で決定した番号}\"         - TechthonTeam.ip_address = \"\"         - TechthonTeam.server_id = \"\"         - TechthonTeam.password = \"\"         - TechthonTeam.created_by = 作成者の本名         - TechthonTeam.updated_by = 作成者の本名         - TechthonTeam.gce_instance_name = \"\" - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - セッションIDが存在しない
     * テックソンセッションチーム追加
     */
    async createTechthonSessionTeamRaw(requestParameters: CreateTechthonSessionTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechthonSessionTeamOut>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling createTechthonSessionTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/team`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TechthonSessionTeamOutFromJSON(jsonValue));
    }

    /**
     * テックソンセッションチーム追加 - 必要権限: [TECHTHON_SESSION_EDIT] - 処理内容:     - セッションが存在しかつTechthonセッションか確認     - チーム番号を決める         - 対象セッションに既に存在するチーム番号の最大値+1を今回のチーム番号とする     - TechthonTeamに新規チームを追加         - TechthonTeam.techthon_session_id = TechthonSession.id         - TechthonTeam.team_name = \"team-{上記で決定した番号}\"         - TechthonTeam.ip_address = \"\"         - TechthonTeam.server_id = \"\"         - TechthonTeam.password = \"\"         - TechthonTeam.created_by = 作成者の本名         - TechthonTeam.updated_by = 作成者の本名         - TechthonTeam.gce_instance_name = \"\" - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - セッションIDが存在しない
     * テックソンセッションチーム追加
     */
    async createTechthonSessionTeam(requestParameters: CreateTechthonSessionTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechthonSessionTeamOut> {
        const response = await this.createTechthonSessionTeamRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソンセッションチーム削除 - 必要権限: [TECHTHON_SESSION_EDIT] - 処理内容:     - 対象セッションがTechthonセッションかつ存在するか確認     - 対象のテックソンチームを物理削除         - TechthonTeam.id == team_id - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - セッションID・チームIDが存在しない - 補足:     - チームは設定時に間違えて追加した以外で削除しないように心がける
     * テックソンセッションチーム削除
     */
    async deleteTechthonSessionTeamRaw(requestParameters: DeleteTechthonSessionTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling deleteTechthonSessionTeam.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling deleteTechthonSessionTeam.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/teams/{team_id}`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))).replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * テックソンセッションチーム削除 - 必要権限: [TECHTHON_SESSION_EDIT] - 処理内容:     - 対象セッションがTechthonセッションかつ存在するか確認     - 対象のテックソンチームを物理削除         - TechthonTeam.id == team_id - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - セッションID・チームIDが存在しない - 補足:     - チームは設定時に間違えて追加した以外で削除しないように心がける
     * テックソンセッションチーム削除
     */
    async deleteTechthonSessionTeam(requestParameters: DeleteTechthonSessionTeamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTechthonSessionTeamRaw(requestParameters, initOverrides);
    }

    /**
     * Techthonポートフォリオ取得 - 必要権限: [TECHTHON_SESSION_VIEW] - 例外処理:     - 以下の場合NotFound         - イベントかセッションが存在しないまたは削除済み         - 企業ユーザーだがスポンサー企業ではない         - 指定したユーザーが存在しないまたはセッション参加ユーザーではない         - 権限を持たない - レスポンス補足     - TechthonUserInfo         - team_name: チーム戦の場合はチーム名を返す、個人戦の場合はNone         - user_comment以下: ユーザーが利用技術登録していなければ全てNone     - TechthonScoreInfo         - 各種獲得したスコア: チーム戦の場合はチームで取得した点数         - team_count: 個人戦の場合でも一人一チームに割り振られる
     * Techthonポートフォリオ取得
     */
    async getManageTechthonSessionPortfolioRaw(requestParameters: GetManageTechthonSessionPortfolioRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppSchemasManageSessionsTechthonTechthonPortfolioOutTechthonPortfolioOut>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getManageTechthonSessionPortfolio.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getManageTechthonSessionPortfolio.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/portfolio/{user_id}`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppSchemasManageSessionsTechthonTechthonPortfolioOutTechthonPortfolioOutFromJSON(jsonValue));
    }

    /**
     * Techthonポートフォリオ取得 - 必要権限: [TECHTHON_SESSION_VIEW] - 例外処理:     - 以下の場合NotFound         - イベントかセッションが存在しないまたは削除済み         - 企業ユーザーだがスポンサー企業ではない         - 指定したユーザーが存在しないまたはセッション参加ユーザーではない         - 権限を持たない - レスポンス補足     - TechthonUserInfo         - team_name: チーム戦の場合はチーム名を返す、個人戦の場合はNone         - user_comment以下: ユーザーが利用技術登録していなければ全てNone     - TechthonScoreInfo         - 各種獲得したスコア: チーム戦の場合はチームで取得した点数         - team_count: 個人戦の場合でも一人一チームに割り振られる
     * Techthonポートフォリオ取得
     */
    async getManageTechthonSessionPortfolio(requestParameters: GetManageTechthonSessionPortfolioRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppSchemasManageSessionsTechthonTechthonPortfolioOutTechthonPortfolioOut> {
        const response = await this.getManageTechthonSessionPortfolioRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソン問題詳細取得 - 必要権限: [TECHTHON_MISSION_PHASE_VIEW] - 処理内容:     - 対象のテックソン問題詳細を取得 - 例外処理:     - 以下の場合NotFound:         - イベントまたはセッションが削除済み         - 削除済み問題         - 対象セッションの問題ではない         - 指定されたセッションID・コンテンツIDが存在しない         - 権限のないユーザーが閲覧 - 補足:     - 問題詳細取得は管理者側の詳細取得APIと共通処理とする
     * テックソンセッション問題詳細取得
     */
    async getSessionsTechthonQuestionRaw(requestParameters: GetSessionsTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getSessionsTechthonQuestion.');
        }

        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling getSessionsTechthonQuestion.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/contents/{content_id}`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))).replace(`{${"content_id"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSON(jsonValue));
    }

    /**
     * テックソン問題詳細取得 - 必要権限: [TECHTHON_MISSION_PHASE_VIEW] - 処理内容:     - 対象のテックソン問題詳細を取得 - 例外処理:     - 以下の場合NotFound:         - イベントまたはセッションが削除済み         - 削除済み問題         - 対象セッションの問題ではない         - 指定されたセッションID・コンテンツIDが存在しない         - 権限のないユーザーが閲覧 - 補足:     - 問題詳細取得は管理者側の詳細取得APIと共通処理とする
     * テックソンセッション問題詳細取得
     */
    async getSessionsTechthonQuestion(requestParameters: GetSessionsTechthonQuestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut> {
        const response = await this.getSessionsTechthonQuestionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソンセッション問題一覧取得 - 必要権限: [] - 並び順: idの昇順 - 抽出条件:     - Content.content_type = ContentType.TECHTHON     - SessionContent.session_id = session_id - 補足     - ミッション番号は\"mission\" + Techthon.orderを結合した文字列にして返す     - セッションID、コンテンツIDで詳細を取得する
     * テックソン問題一覧取得
     */
    async getTechthonSessionQuestionListRaw(requestParameters: GetTechthonSessionQuestionListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TechthonQuestionListOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getTechthonSessionQuestionList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/contents`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TechthonQuestionListOutFromJSON));
    }

    /**
     * テックソンセッション問題一覧取得 - 必要権限: [] - 並び順: idの昇順 - 抽出条件:     - Content.content_type = ContentType.TECHTHON     - SessionContent.session_id = session_id - 補足     - ミッション番号は\"mission\" + Techthon.orderを結合した文字列にして返す     - セッションID、コンテンツIDで詳細を取得する
     * テックソン問題一覧取得
     */
    async getTechthonSessionQuestionList(requestParameters: GetTechthonSessionQuestionListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TechthonQuestionListOut>> {
        const response = await this.getTechthonSessionQuestionListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Techthonセッションランキング取得 - 必要権限: [TECHTHON_SESSION_VIEW] - 例外処理:     - 以下の場合NotFound         - イベントかセッションが存在しないまたは削除済み         - 企業ユーザーだがスポンサー企業のユーザーではない         - 権限を持っていない - 補足情報:     - 順位は合計スコア順で表示         -  スコアが同じ場合は順位は同じだが、解答タイムが短い順に並べる     - team_name         - チーム戦の場合は返す         - 個人戦の場合はNone
     * Techthonセッションランキング取得
     */
    async getTechthonSessionRankingRaw(requestParameters: GetTechthonSessionRankingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AppSchemasManageSessionsTechthonTechthonRankingOutTechthonRankingOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getTechthonSessionRanking.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/ranking`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AppSchemasManageSessionsTechthonTechthonRankingOutTechthonRankingOutFromJSON));
    }

    /**
     * Techthonセッションランキング取得 - 必要権限: [TECHTHON_SESSION_VIEW] - 例外処理:     - 以下の場合NotFound         - イベントかセッションが存在しないまたは削除済み         - 企業ユーザーだがスポンサー企業のユーザーではない         - 権限を持っていない - 補足情報:     - 順位は合計スコア順で表示         -  スコアが同じ場合は順位は同じだが、解答タイムが短い順に並べる     - team_name         - チーム戦の場合は返す         - 個人戦の場合はNone
     * Techthonセッションランキング取得
     */
    async getTechthonSessionRanking(requestParameters: GetTechthonSessionRankingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AppSchemasManageSessionsTechthonTechthonRankingOutTechthonRankingOut>> {
        const response = await this.getTechthonSessionRankingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソンセッション参加ユーザー一覧取得 - 必要権限: [TECHTHON_SESSION_VIEW] - 並び順: 参加日時の昇順 - 処理内容:     - 対象のsession_idに紐づくTechthonSessionが存在するのか確認     - ホスト・スポンサー企業・444スタッフか確認     - 対象のsession_idに紐づく参加ユーザーをSessionUserから特定しUserテーブルから情報を取得     - GeneralUser.current_jobのタイプに応じて所属名を取得         - GeneralUser.current_job == CurrentJob.STUDENTの場合             - EducationalBackGround.school_master_idから学校名を取得             - 手入力の場合はEducationalBackGround.school_master_detailより取得         - GeneralUser.current_job != CurrentJob.STUDENTの場合             - WorkExperience.company_nameより企業名を取得     - 参加日はSessionUser.created_atをdateに変換した値で取得     - チーム情報はuser.idがTechthonTeamMember.user_idに存在する場合取得 - 取得条件:     - Session.is_deleted == False - 対象テーブル:     - Session     - TechthonSession     - TechthonTeam     - TechthonTeamMember     - SessionUser     - User     - GeneralUser     - EducationalBackGround     - WorkExperience - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - 対象セッションが存在しない - 補足:     - チームの割り振りは管理者側で手動で行われるため、参加時にチームIDが付与されるわけではない
     * テックソンセッション参加ユーザー一覧取得
     */
    async getTechthonSessionUserListRaw(requestParameters: GetTechthonSessionUserListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TechthonSessionUserOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getTechthonSessionUserList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/users`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TechthonSessionUserOutFromJSON));
    }

    /**
     * テックソンセッション参加ユーザー一覧取得 - 必要権限: [TECHTHON_SESSION_VIEW] - 並び順: 参加日時の昇順 - 処理内容:     - 対象のsession_idに紐づくTechthonSessionが存在するのか確認     - ホスト・スポンサー企業・444スタッフか確認     - 対象のsession_idに紐づく参加ユーザーをSessionUserから特定しUserテーブルから情報を取得     - GeneralUser.current_jobのタイプに応じて所属名を取得         - GeneralUser.current_job == CurrentJob.STUDENTの場合             - EducationalBackGround.school_master_idから学校名を取得             - 手入力の場合はEducationalBackGround.school_master_detailより取得         - GeneralUser.current_job != CurrentJob.STUDENTの場合             - WorkExperience.company_nameより企業名を取得     - 参加日はSessionUser.created_atをdateに変換した値で取得     - チーム情報はuser.idがTechthonTeamMember.user_idに存在する場合取得 - 取得条件:     - Session.is_deleted == False - 対象テーブル:     - Session     - TechthonSession     - TechthonTeam     - TechthonTeamMember     - SessionUser     - User     - GeneralUser     - EducationalBackGround     - WorkExperience - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - 対象セッションが存在しない - 補足:     - チームの割り振りは管理者側で手動で行われるため、参加時にチームIDが付与されるわけではない
     * テックソンセッション参加ユーザー一覧取得
     */
    async getTechthonSessionUserList(requestParameters: GetTechthonSessionUserListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TechthonSessionUserOut>> {
        const response = await this.getTechthonSessionUserListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Techthonチーム一覧取得
     * Get Techthon Teams
     */
    async getTechthonTeamsRaw(requestParameters: GetTechthonTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TechthonTeamOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getTechthonTeams.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/teams`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TechthonTeamOutFromJSON));
    }

    /**
     * Techthonチーム一覧取得
     * Get Techthon Teams
     */
    async getTechthonTeams(requestParameters: GetTechthonTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TechthonTeamOut>> {
        const response = await this.getTechthonTeamsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * テックソンセッション参加ユーザーチーム更新 - 必要権限: [TECHTHON_SESSION_EDIT] - 処理内容:     - 対象のsession_idに紐づくTechthonSessionが存在しかつ対象セッションの参加ユーザーか確認     - team_idがTechthonTeamに存在するか確認     - 対象セッションのTechthonTeamMemberに対象ユーザーのSessionUser.idが存在する場合、TechthonTeamMember.team_idを更新         - 更新者を更新したスタッフのフルネームで更新     - 対象セッションのTechthonTeamMemberに対象ユーザーのSessionUser.idが存在しない場合、レコードを新規作成         - 作成者と更新者を作成したスタッフのフルネームで更新 - 取得条件:     - Session.is_deleted == False - 対象テーブル:     - Session     - TechthonSession     - TechthonTeam     - TechthonTeamMember     - SessionUser     - User     - UserCommonInfo - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - 対象セッションが存在しない         - 対象チームIDが存在しない         - 対象セッション参加ユーザーではない - 補足:     - チームの割り振りは管理者側で手動で行われるため、参加時にチームIDが付与されるわけではない
     * テックソンセッション参加ユーザーチーム更新
     */
    async updateTeamForTechthonSessionUserRaw(requestParameters: UpdateTeamForTechthonSessionUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechthonSessionUserOut>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling updateTeamForTechthonSessionUser.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling updateTeamForTechthonSessionUser.');
        }

        if (requestParameters.techthonSessionUserTeamUpdateIn === null || requestParameters.techthonSessionUserTeamUpdateIn === undefined) {
            throw new runtime.RequiredError('techthonSessionUserTeamUpdateIn','Required parameter requestParameters.techthonSessionUserTeamUpdateIn was null or undefined when calling updateTeamForTechthonSessionUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/teams/{team_id}`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))).replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TechthonSessionUserTeamUpdateInToJSON(requestParameters.techthonSessionUserTeamUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TechthonSessionUserOutFromJSON(jsonValue));
    }

    /**
     * テックソンセッション参加ユーザーチーム更新 - 必要権限: [TECHTHON_SESSION_EDIT] - 処理内容:     - 対象のsession_idに紐づくTechthonSessionが存在しかつ対象セッションの参加ユーザーか確認     - team_idがTechthonTeamに存在するか確認     - 対象セッションのTechthonTeamMemberに対象ユーザーのSessionUser.idが存在する場合、TechthonTeamMember.team_idを更新         - 更新者を更新したスタッフのフルネームで更新     - 対象セッションのTechthonTeamMemberに対象ユーザーのSessionUser.idが存在しない場合、レコードを新規作成         - 作成者と更新者を作成したスタッフのフルネームで更新 - 取得条件:     - Session.is_deleted == False - 対象テーブル:     - Session     - TechthonSession     - TechthonTeam     - TechthonTeamMember     - SessionUser     - User     - UserCommonInfo - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - 対象セッションが存在しない         - 対象チームIDが存在しない         - 対象セッション参加ユーザーではない - 補足:     - チームの割り振りは管理者側で手動で行われるため、参加時にチームIDが付与されるわけではない
     * テックソンセッション参加ユーザーチーム更新
     */
    async updateTeamForTechthonSessionUser(requestParameters: UpdateTeamForTechthonSessionUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechthonSessionUserOut> {
        const response = await this.updateTeamForTechthonSessionUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * TechthonSession更新 - 必要権限     - [TECHTHON_SESSION_EDIT] - データ取得     - Session.id = session_id     - Session.session_type = SessionType.TECHTHON     - Session.is_deleted = False - 処理内容     - Sessionを更新     - TechthonSessionを更新
     * TechthonSession更新
     */
    async updateTechthonSessionRaw(requestParameters: UpdateTechthonSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling updateTechthonSession.');
        }

        if (requestParameters.techthonSessionIn === null || requestParameters.techthonSessionIn === undefined) {
            throw new runtime.RequiredError('techthonSessionIn','Required parameter requestParameters.techthonSessionIn was null or undefined when calling updateTechthonSession.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TechthonSessionInToJSON(requestParameters.techthonSessionIn),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * TechthonSession更新 - 必要権限     - [TECHTHON_SESSION_EDIT] - データ取得     - Session.id = session_id     - Session.session_type = SessionType.TECHTHON     - Session.is_deleted = False - 処理内容     - Sessionを更新     - TechthonSessionを更新
     * TechthonSession更新
     */
    async updateTechthonSession(requestParameters: UpdateTechthonSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateTechthonSessionRaw(requestParameters, initOverrides);
    }

    /**
     * テックソンセッションチーム名更新 - 必要権限: [TECHTHON_SESSION_EDIT] - 処理内容:     - セッションが存在しかつTechthonセッションか確認     - 対象のチーム名を更新         - TechthonTeam.team_name = TechthonSessionTeamUpdateIn.team_name - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - セッションIDが存在しない
     * テックソンセッションチーム名更新
     */
    async updateTechthonSessionTeamNameRaw(requestParameters: UpdateTechthonSessionTeamNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechthonSessionTeamOut>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling updateTechthonSessionTeamName.');
        }

        if (requestParameters.teamId === null || requestParameters.teamId === undefined) {
            throw new runtime.RequiredError('teamId','Required parameter requestParameters.teamId was null or undefined when calling updateTechthonSessionTeamName.');
        }

        if (requestParameters.techthonSessionTeamUpdateIn === null || requestParameters.techthonSessionTeamUpdateIn === undefined) {
            throw new runtime.RequiredError('techthonSessionTeamUpdateIn','Required parameter requestParameters.techthonSessionTeamUpdateIn was null or undefined when calling updateTechthonSessionTeamName.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/sessions-techthon/{session_id}/teams/{team_id}`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))).replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters.teamId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TechthonSessionTeamUpdateInToJSON(requestParameters.techthonSessionTeamUpdateIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TechthonSessionTeamOutFromJSON(jsonValue));
    }

    /**
     * テックソンセッションチーム名更新 - 必要権限: [TECHTHON_SESSION_EDIT] - 処理内容:     - セッションが存在しかつTechthonセッションか確認     - 対象のチーム名を更新         - TechthonTeam.team_name = TechthonSessionTeamUpdateIn.team_name - 例外処理:     - 以下の場合NotFound:         - セッションが削除済み         - セッションIDが存在しない
     * テックソンセッションチーム名更新
     */
    async updateTechthonSessionTeamName(requestParameters: UpdateTechthonSessionTeamNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechthonSessionTeamOut> {
        const response = await this.updateTechthonSessionTeamNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
