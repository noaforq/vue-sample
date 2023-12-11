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
  ManageProQuestionSubmissionHistoryOut,
  ProSessionContentListOut,
  ProSessionQuestionResultListOut,
  ProSessionRemaningNumOfParticipantsIn,
  ProSessionRemaningNumOfParticipantsOut,
  SessionRankingListOut,
  SessionRealTimeRankingListOut,
  ValidationError,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    ManageProQuestionSubmissionHistoryOutFromJSON,
    ManageProQuestionSubmissionHistoryOutToJSON,
    ProSessionContentListOutFromJSON,
    ProSessionContentListOutToJSON,
    ProSessionQuestionResultListOutFromJSON,
    ProSessionQuestionResultListOutToJSON,
    ProSessionRemaningNumOfParticipantsInFromJSON,
    ProSessionRemaningNumOfParticipantsInToJSON,
    ProSessionRemaningNumOfParticipantsOutFromJSON,
    ProSessionRemaningNumOfParticipantsOutToJSON,
    SessionRankingListOutFromJSON,
    SessionRankingListOutToJSON,
    SessionRealTimeRankingListOutFromJSON,
    SessionRealTimeRankingListOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface DownloadProSessionDataZipFileRequest {
    sessionId: number;
    contentId: number;
}

export interface GetProSessionContentListRequest {
    sessionId: number;
}

export interface GetProSessionQuestionResultRequest {
    sessionId: number;
}

export interface GetProSessionQuestionSubmissionHistoryListForManageRequest {
    sessionId: number;
    contentId: number;
    username?: string;
}

export interface GetProSessionRemaningNumOfParticipantsRequest {
    sessionId: number;
}

export interface GetProSessionsRankingRequest {
    sessionId: number;
}

export interface GetProSessionsRealTimeRankingListRequest {
    sessionId: number;
}

export interface UpdateProSessionRemaningNumOfParticipantsRequest {
    sessionId: number;
    proSessionRemaningNumOfParticipantsIn: ProSessionRemaningNumOfParticipantsIn;
}

/**
 * 
 */
export class ManageProSessionsApi extends runtime.BaseAPI {

    /**
     * 管理側PROセッション問題データzip取得 - 必要権限: [PRO_PROBLEM_VIEW] - 処理手順:     - 対象PRO問題に紐づいているProFile(file_type=FileType.DOWNLOAD)を取得     - GCSからダウンロード     - Zipで圧縮し、Responseで返す - 取得条件:     - SessionContentにデータが存在する     - Session.is_deleted == False     - Content.is_deleted == False     - ProFile.file_type == FileType.DOWNLOAD - 例外処理:     - 以下の場合NotFound:         - セッションに登録された問題でない         - セッションが存在しない・削除済み         - 問題が存在しない・削除済み - 補足:     - 取得方法は通常PRO問題と同様
     * 管理側PROセッション問題データzip取得
     */
    async downloadProSessionDataZipFileRaw(requestParameters: DownloadProSessionDataZipFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling downloadProSessionDataZipFile.');
        }

        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling downloadProSessionDataZipFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/pro-sessions/{session_id}/contents/{content_id}/data/zip`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))).replace(`{${"content_id"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 管理側PROセッション問題データzip取得 - 必要権限: [PRO_PROBLEM_VIEW] - 処理手順:     - 対象PRO問題に紐づいているProFile(file_type=FileType.DOWNLOAD)を取得     - GCSからダウンロード     - Zipで圧縮し、Responseで返す - 取得条件:     - SessionContentにデータが存在する     - Session.is_deleted == False     - Content.is_deleted == False     - ProFile.file_type == FileType.DOWNLOAD - 例外処理:     - 以下の場合NotFound:         - セッションに登録された問題でない         - セッションが存在しない・削除済み         - 問題が存在しない・削除済み - 補足:     - 取得方法は通常PRO問題と同様
     * 管理側PROセッション問題データzip取得
     */
    async downloadProSessionDataZipFile(requestParameters: DownloadProSessionDataZipFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downloadProSessionDataZipFileRaw(requestParameters, initOverrides);
    }

    /**
     * Pro用セッションコンテンツ一覧取得 - 必要権限: [PRO_PROBLEM_VIEW] - 並び順: order昇順 - session_idのセッションが削除済み、存在しない場合NotFound
     * Pro用セッションコンテンツ一覧取得
     */
    async getProSessionContentListRaw(requestParameters: GetProSessionContentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProSessionContentListOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getProSessionContentList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/pro-sessions/{session_id}/contents`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProSessionContentListOutFromJSON));
    }

    /**
     * Pro用セッションコンテンツ一覧取得 - 必要権限: [PRO_PROBLEM_VIEW] - 並び順: order昇順 - session_idのセッションが削除済み、存在しない場合NotFound
     * Pro用セッションコンテンツ一覧取得
     */
    async getProSessionContentList(requestParameters: GetProSessionContentListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProSessionContentListOut>> {
        const response = await this.getProSessionContentListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PROイベントセッション問題成績一覧取得(問題成績タブの内容) - 必要権限: [PRO_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] - 並び順: 登録された順に表示(SessionContentの順番通りに並べる) - 表示項目:     - 順 問題名 難易度 トピック 合格/挑戦 - 取得可能条件     - [ALL_EVENT_AND_SESSION_VIEW]を持つ場合         - 自組織・他組織イベントセッション取得可能     - [ALL_EVENT_AND_SESSION_VIEW]を持たない かつ [PRO_SESSION_VIEW]を持つ場合         - 自組織イベントセッションのみ取得可能 - 「詳細を見る」ボタン押下時に表示する内容     - 全アカウント共通表示項目         - 参加者名/合否/スコア/解答時間/提出回数/エラー数     - アカウントタイプ毎に取得項目変更:         - スタッフ主催イベント             - アルバイト:                 - 表示名 -> 表示                 - 実名/補足/学籍番号 -> 非表示             - ST,SU:                 - 表示名 -> 表示                 - 実名                     - 必要権限： 人材紹介機能 [RECRUITMENT] & ユーザーが人材紹介規約同意済み                     - 自組織イベントの場合                         - 必要権限： 自組織個人情報閲覧 [OWN_SESSION_PERSONAL_INFORMATION_VIEW]                 - 補足/学籍番号 -> 非表示             - イベント共催企業:                 - 実名/表示名/補足/学籍番号 -> 非表示         - 学校主催イベント             - 学校・スタッフ:                 - 学籍番号/補足 -> 表示                 - 表示名 -> 非表示                 - 実名                     - 自組織イベントの場合                         - 必要権限： [自組織イベント個人情報閲覧] OWN_SESSION_PERSONAL_INFORMATION_VIEW                     - 他組織イベント かつ 閲覧者がスタッフの場合                         - 必要権限： [他組織イベント個人情報閲覧] ALL_SESSION_PERSONAL_INFORMATION_VIEW                     - 必要権限: 人材紹介機能 [RECRUITMENT] & ユーザーが人材紹介規約同意済み             - イベント共催企業:                 - 実名/表示名/補足/学籍番号 -> 非表示         - 企業主催イベント             - 表示名/補足 -> 表示             - 実名/学籍番号 -> 非表示
     * PROセッション問題成績一覧取得
     */
    async getProSessionQuestionResultRaw(requestParameters: GetProSessionQuestionResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProSessionQuestionResultListOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getProSessionQuestionResult.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/pro-sessions/{session_id}/question-result`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProSessionQuestionResultListOutFromJSON));
    }

    /**
     * PROイベントセッション問題成績一覧取得(問題成績タブの内容) - 必要権限: [PRO_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] - 並び順: 登録された順に表示(SessionContentの順番通りに並べる) - 表示項目:     - 順 問題名 難易度 トピック 合格/挑戦 - 取得可能条件     - [ALL_EVENT_AND_SESSION_VIEW]を持つ場合         - 自組織・他組織イベントセッション取得可能     - [ALL_EVENT_AND_SESSION_VIEW]を持たない かつ [PRO_SESSION_VIEW]を持つ場合         - 自組織イベントセッションのみ取得可能 - 「詳細を見る」ボタン押下時に表示する内容     - 全アカウント共通表示項目         - 参加者名/合否/スコア/解答時間/提出回数/エラー数     - アカウントタイプ毎に取得項目変更:         - スタッフ主催イベント             - アルバイト:                 - 表示名 -> 表示                 - 実名/補足/学籍番号 -> 非表示             - ST,SU:                 - 表示名 -> 表示                 - 実名                     - 必要権限： 人材紹介機能 [RECRUITMENT] & ユーザーが人材紹介規約同意済み                     - 自組織イベントの場合                         - 必要権限： 自組織個人情報閲覧 [OWN_SESSION_PERSONAL_INFORMATION_VIEW]                 - 補足/学籍番号 -> 非表示             - イベント共催企業:                 - 実名/表示名/補足/学籍番号 -> 非表示         - 学校主催イベント             - 学校・スタッフ:                 - 学籍番号/補足 -> 表示                 - 表示名 -> 非表示                 - 実名                     - 自組織イベントの場合                         - 必要権限： [自組織イベント個人情報閲覧] OWN_SESSION_PERSONAL_INFORMATION_VIEW                     - 他組織イベント かつ 閲覧者がスタッフの場合                         - 必要権限： [他組織イベント個人情報閲覧] ALL_SESSION_PERSONAL_INFORMATION_VIEW                     - 必要権限: 人材紹介機能 [RECRUITMENT] & ユーザーが人材紹介規約同意済み             - イベント共催企業:                 - 実名/表示名/補足/学籍番号 -> 非表示         - 企業主催イベント             - 表示名/補足 -> 表示             - 実名/学籍番号 -> 非表示
     * PROセッション問題成績一覧取得
     */
    async getProSessionQuestionResult(requestParameters: GetProSessionQuestionResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProSessionQuestionResultListOut>> {
        const response = await this.getProSessionQuestionResultRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 管理者側PROセッション問題内提出履歴一覧取得 - 必要権限: [PRO_PROBLEM_VIEW] - 並び順: created_atの降順 - 実行条件     - イベントのホストであるまたは444スタッフである - 処理内容:     - セッションが存在するか確認     - ProSubmissionResultから対象問題における提出履歴を取得         - 対象セッション内での提出履歴を取得         - usernameが指定されたらusernameで絞り込む - 取得条件:     - Session.is_deleted == False     - SessionContent.session_id == session_id     - SessionContent.content_id == content_id     - ProSubmissionResult.judge_status != ProJudgeStatus.WAITING_FOR_JUDGING     - Content.is_official == True     - Content.is_deleted == False - 例外処理:     - 以下の場合NotFound         - 他組織のPROセッション         - 対象PROセッションが存在しない・削除済み         - PROセッションに登録されていないPRO問題         - 対象PRO問題が存在しない・削除済み - 補足:     - 提出履歴がない場合は空のリストを返す     - PRO問題はチャレンジ問題でもセッションに登録できるため、チャレンジ問題での提出履歴は取得しないように     - エラーメッセージと提出コメントはない場合は空文字を返す
     * 管理者側PROセッション問題内提出履歴一覧取得
     */
    async getProSessionQuestionSubmissionHistoryListForManageRaw(requestParameters: GetProSessionQuestionSubmissionHistoryListForManageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ManageProQuestionSubmissionHistoryOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getProSessionQuestionSubmissionHistoryListForManage.');
        }

        if (requestParameters.contentId === null || requestParameters.contentId === undefined) {
            throw new runtime.RequiredError('contentId','Required parameter requestParameters.contentId was null or undefined when calling getProSessionQuestionSubmissionHistoryListForManage.');
        }

        const queryParameters: any = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/pro-sessions/{session_id}/contents/{content_id}/submission-histories`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))).replace(`{${"content_id"}}`, encodeURIComponent(String(requestParameters.contentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ManageProQuestionSubmissionHistoryOutFromJSON));
    }

    /**
     * 管理者側PROセッション問題内提出履歴一覧取得 - 必要権限: [PRO_PROBLEM_VIEW] - 並び順: created_atの降順 - 実行条件     - イベントのホストであるまたは444スタッフである - 処理内容:     - セッションが存在するか確認     - ProSubmissionResultから対象問題における提出履歴を取得         - 対象セッション内での提出履歴を取得         - usernameが指定されたらusernameで絞り込む - 取得条件:     - Session.is_deleted == False     - SessionContent.session_id == session_id     - SessionContent.content_id == content_id     - ProSubmissionResult.judge_status != ProJudgeStatus.WAITING_FOR_JUDGING     - Content.is_official == True     - Content.is_deleted == False - 例外処理:     - 以下の場合NotFound         - 他組織のPROセッション         - 対象PROセッションが存在しない・削除済み         - PROセッションに登録されていないPRO問題         - 対象PRO問題が存在しない・削除済み - 補足:     - 提出履歴がない場合は空のリストを返す     - PRO問題はチャレンジ問題でもセッションに登録できるため、チャレンジ問題での提出履歴は取得しないように     - エラーメッセージと提出コメントはない場合は空文字を返す
     * 管理者側PROセッション問題内提出履歴一覧取得
     */
    async getProSessionQuestionSubmissionHistoryListForManage(requestParameters: GetProSessionQuestionSubmissionHistoryListForManageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ManageProQuestionSubmissionHistoryOut>> {
        const response = await this.getProSessionQuestionSubmissionHistoryListForManageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PROセッション残り参加可能人数(参加チケット)取得 - 必要権限: [PRO_SESSION_EDIT] (444スタッフのみアクセス可) - 実装: ProSessionモデルのremaning_num_of_participantsの値を返す - session_idのセッションが削除済み、存在しない場合NotFound
     * PROセッション残り参加可能人数(参加チケット)取得(未実装)
     */
    async getProSessionRemaningNumOfParticipantsRaw(requestParameters: GetProSessionRemaningNumOfParticipantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProSessionRemaningNumOfParticipantsOut>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getProSessionRemaningNumOfParticipants.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/pro-sessions/{session_id}/remaning-num-of-participants`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProSessionRemaningNumOfParticipantsOutFromJSON(jsonValue));
    }

    /**
     * PROセッション残り参加可能人数(参加チケット)取得 - 必要権限: [PRO_SESSION_EDIT] (444スタッフのみアクセス可) - 実装: ProSessionモデルのremaning_num_of_participantsの値を返す - session_idのセッションが削除済み、存在しない場合NotFound
     * PROセッション残り参加可能人数(参加チケット)取得(未実装)
     */
    async getProSessionRemaningNumOfParticipants(requestParameters: GetProSessionRemaningNumOfParticipantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProSessionRemaningNumOfParticipantsOut> {
        const response = await this.getProSessionRemaningNumOfParticipantsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PROイベントセッションランキング取得(ランキングタブの内容) - 必要権限: [PRO_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] - 取得数: 50 - 並び順: 合計スコア降順     - 同率スコアの場合: セッション参加ユーザID昇順で並べる - 取得可能条件     - [ALL_EVENT_AND_SESSION_VIEW]を持つ場合         - 自組織・他組織イベントセッション取得可能     - [ALL_EVENT_AND_SESSION_VIEW]を持たない かつ [PRO_SESSION_VIEW]を持つ場合         - 自組織イベントセッションのみ取得可能 - アカウント種別表示可能項目 (権限については一般イベントセッションと同様)     - 全アカウント共通表示項目         - 参加者名/順位/エラー数/挑戦数/合格数/合計スコア     - アカウントタイプ毎に取得項目変更:         - スタッフ主催イベント             - アルバイト:                 - 表示名 -> 表示                 - 実名/補足/学籍番号 -> 非表示             - ST,SU:                 - 表示名 -> 表示                 - 実名                     - 必要権限： 人材紹介機能 [RECRUITMENT] & ユーザーが人材紹介規約同意済み                     - 自組織イベントの場合                         - 必要権限： 自組織個人情報閲覧 [OWN_SESSION_PERSONAL_INFORMATION_VIEW]                 - 補足/学籍番号 -> 非表示             - イベント共催企業:                 - 実名/表示名/補足/学籍番号 -> 非表示         - 学校主催イベント             - 学校・スタッフ:                 - 学籍番号/補足 -> 表示                 - 表示名 -> 非表示                 - 実名                     - 自組織イベントの場合                         - 必要権限： [自組織イベント個人情報閲覧] OWN_SESSION_PERSONAL_INFORMATION_VIEW                     - 他組織イベント かつ 閲覧者がスタッフの場合                         - 必要権限： [他組織イベント個人情報閲覧] ALL_SESSION_PERSONAL_INFORMATION_VIEW                     - 必要権限: 人材紹介機能 [RECRUITMENT] & ユーザーが人材紹介規約同意済み             - イベント共催企業:                 - 実名/表示名/補足/学籍番号 -> 非表示         - 企業主催イベント             - 表示名/補足 -> 表示             - 実名/学籍番号 -> 非表示
     * PROセッションランキング取得
     */
    async getProSessionsRankingRaw(requestParameters: GetProSessionsRankingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SessionRankingListOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getProSessionsRanking.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/pro-sessions/{session_id}/ranking`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SessionRankingListOutFromJSON));
    }

    /**
     * PROイベントセッションランキング取得(ランキングタブの内容) - 必要権限: [PRO_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] - 取得数: 50 - 並び順: 合計スコア降順     - 同率スコアの場合: セッション参加ユーザID昇順で並べる - 取得可能条件     - [ALL_EVENT_AND_SESSION_VIEW]を持つ場合         - 自組織・他組織イベントセッション取得可能     - [ALL_EVENT_AND_SESSION_VIEW]を持たない かつ [PRO_SESSION_VIEW]を持つ場合         - 自組織イベントセッションのみ取得可能 - アカウント種別表示可能項目 (権限については一般イベントセッションと同様)     - 全アカウント共通表示項目         - 参加者名/順位/エラー数/挑戦数/合格数/合計スコア     - アカウントタイプ毎に取得項目変更:         - スタッフ主催イベント             - アルバイト:                 - 表示名 -> 表示                 - 実名/補足/学籍番号 -> 非表示             - ST,SU:                 - 表示名 -> 表示                 - 実名                     - 必要権限： 人材紹介機能 [RECRUITMENT] & ユーザーが人材紹介規約同意済み                     - 自組織イベントの場合                         - 必要権限： 自組織個人情報閲覧 [OWN_SESSION_PERSONAL_INFORMATION_VIEW]                 - 補足/学籍番号 -> 非表示             - イベント共催企業:                 - 実名/表示名/補足/学籍番号 -> 非表示         - 学校主催イベント             - 学校・スタッフ:                 - 学籍番号/補足 -> 表示                 - 表示名 -> 非表示                 - 実名                     - 自組織イベントの場合                         - 必要権限： [自組織イベント個人情報閲覧] OWN_SESSION_PERSONAL_INFORMATION_VIEW                     - 他組織イベント かつ 閲覧者がスタッフの場合                         - 必要権限： [他組織イベント個人情報閲覧] ALL_SESSION_PERSONAL_INFORMATION_VIEW                     - 必要権限: 人材紹介機能 [RECRUITMENT] & ユーザーが人材紹介規約同意済み             - イベント共催企業:                 - 実名/表示名/補足/学籍番号 -> 非表示         - 企業主催イベント             - 表示名/補足 -> 表示             - 実名/学籍番号 -> 非表示
     * PROセッションランキング取得
     */
    async getProSessionsRanking(requestParameters: GetProSessionsRankingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SessionRankingListOut>> {
        const response = await this.getProSessionsRankingRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PROイベントセッションリアルタイムランキング取得 一般イベントセッションリアルタイムランキングと動作は同様 - 必要権限: [PRO_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] - 並び順: 合計スコア降順     - 同率スコアの場合: セッション参加ユーザID昇順で並べる - 取得可能条件     - [ALL_EVENT_AND_SESSION_VIEW]を持つ場合         - 自組織・他組織PROイベントセッション取得可能     - [ALL_EVENT_AND_SESSION_VIEW]を持たない かつ [PRO_SESSION_VIEW]を持つ場合         - 自組織PROイベントセッションのみ取得可能 - アカウント種別表示可能項目     - セッションの表示設定によって、実名/所属組織/補足情報/学籍番号が表示される     - 全アカウント共通表示項目(ただしアルバイトは非表示)         - 順位         - スコア         - 参加者名     - スタッフ(アルバイト)         - 非表示     - スタッフ(ST, SU)         - 実名(本名表示設定の場合、参加者名から本名へ切り替わる)         - 所属組織         - 補足情報         - 学籍番号     - 学校         - 実名(本名表示設定の場合、参加者名から本名へ切り替わる)         - 所属組織         - 補足情報         - 学籍番号     - 企業         - 非表示 - ランキング表示人数(max_num_of_ranking)まで表示する - 表示にかかるSessionの項目     - max_num_of_ranking     - show_real_name_in_ranking     - show_organization_in_ranking     - show_info_in_ranking     - show_student_id_in_ranking
     * PROセッションランキング取得
     */
    async getProSessionsRealTimeRankingListRaw(requestParameters: GetProSessionsRealTimeRankingListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SessionRealTimeRankingListOut>>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getProSessionsRealTimeRankingList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manage/pro-sessions/{session_id}/real-time-ranking`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SessionRealTimeRankingListOutFromJSON));
    }

    /**
     * PROイベントセッションリアルタイムランキング取得 一般イベントセッションリアルタイムランキングと動作は同様 - 必要権限: [PRO_SESSION_VIEW] [ALL_EVENT_AND_SESSION_VIEW] - 並び順: 合計スコア降順     - 同率スコアの場合: セッション参加ユーザID昇順で並べる - 取得可能条件     - [ALL_EVENT_AND_SESSION_VIEW]を持つ場合         - 自組織・他組織PROイベントセッション取得可能     - [ALL_EVENT_AND_SESSION_VIEW]を持たない かつ [PRO_SESSION_VIEW]を持つ場合         - 自組織PROイベントセッションのみ取得可能 - アカウント種別表示可能項目     - セッションの表示設定によって、実名/所属組織/補足情報/学籍番号が表示される     - 全アカウント共通表示項目(ただしアルバイトは非表示)         - 順位         - スコア         - 参加者名     - スタッフ(アルバイト)         - 非表示     - スタッフ(ST, SU)         - 実名(本名表示設定の場合、参加者名から本名へ切り替わる)         - 所属組織         - 補足情報         - 学籍番号     - 学校         - 実名(本名表示設定の場合、参加者名から本名へ切り替わる)         - 所属組織         - 補足情報         - 学籍番号     - 企業         - 非表示 - ランキング表示人数(max_num_of_ranking)まで表示する - 表示にかかるSessionの項目     - max_num_of_ranking     - show_real_name_in_ranking     - show_organization_in_ranking     - show_info_in_ranking     - show_student_id_in_ranking
     * PROセッションランキング取得
     */
    async getProSessionsRealTimeRankingList(requestParameters: GetProSessionsRealTimeRankingListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SessionRealTimeRankingListOut>> {
        const response = await this.getProSessionsRealTimeRankingListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PROセッション残り参加可能人数(参加チケット)更新 - 必要権限: [PRO_SESSION_EDIT] (444スタッフのみアクセス可) - 実装: ProSessionモデルのremaning_num_of_participantsの値を入力数分だけ増加     - 負の値を入れると既存のチケットを減らす         - 但し計算結果が0未満になる場合は400(ParameterError) - session_idのセッションが削除済み、存在しない場合NotFound
     * PROセッション残り参加可能人数(参加チケット)更新(未実装)
     */
    async updateProSessionRemaningNumOfParticipantsRaw(requestParameters: UpdateProSessionRemaningNumOfParticipantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProSessionRemaningNumOfParticipantsOut>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling updateProSessionRemaningNumOfParticipants.');
        }

        if (requestParameters.proSessionRemaningNumOfParticipantsIn === null || requestParameters.proSessionRemaningNumOfParticipantsIn === undefined) {
            throw new runtime.RequiredError('proSessionRemaningNumOfParticipantsIn','Required parameter requestParameters.proSessionRemaningNumOfParticipantsIn was null or undefined when calling updateProSessionRemaningNumOfParticipants.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/manage/pro-sessions/{session_id}/remaning-num-of-participants`.replace(`{${"session_id"}}`, encodeURIComponent(String(requestParameters.sessionId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProSessionRemaningNumOfParticipantsInToJSON(requestParameters.proSessionRemaningNumOfParticipantsIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProSessionRemaningNumOfParticipantsOutFromJSON(jsonValue));
    }

    /**
     * PROセッション残り参加可能人数(参加チケット)更新 - 必要権限: [PRO_SESSION_EDIT] (444スタッフのみアクセス可) - 実装: ProSessionモデルのremaning_num_of_participantsの値を入力数分だけ増加     - 負の値を入れると既存のチケットを減らす         - 但し計算結果が0未満になる場合は400(ParameterError) - session_idのセッションが削除済み、存在しない場合NotFound
     * PROセッション残り参加可能人数(参加チケット)更新(未実装)
     */
    async updateProSessionRemaningNumOfParticipants(requestParameters: UpdateProSessionRemaningNumOfParticipantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProSessionRemaningNumOfParticipantsOut> {
        const response = await this.updateProSessionRemaningNumOfParticipantsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}