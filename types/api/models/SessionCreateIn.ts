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

import { exists, mapValues } from '../runtime';
import type { SessionType } from './SessionType';
import {
    SessionTypeFromJSON,
    SessionTypeFromJSONTyped,
    SessionTypeToJSON,
} from './SessionType';

/**
 * 
 * @export
 * @interface SessionCreateIn
 */
export interface SessionCreateIn {
    /**
     * セッション名
     * @type {string}
     * @memberof SessionCreateIn
     */
    name: string;
    /**
     * セッション開始日時
     * @type {Date}
     * @memberof SessionCreateIn
     */
    startsAt: Date;
    /**
     * セッション終了日時
     * @type {Date}
     * @memberof SessionCreateIn
     */
    endsAt: Date;
    /**
     * 開催場所
     * @type {string}
     * @memberof SessionCreateIn
     */
    location?: string;
    /**
     * 
     * @type {SessionType}
     * @memberof SessionCreateIn
     */
    sessionType: SessionType;
    /**
     * パスワード付きセッションか
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    isLockedSession?: boolean;
    /**
     * 練習用セッションか
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    isPracticeSession?: boolean;
    /**
     * 小テストセッション
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    isShortTestSession?: boolean;
    /**
     * ランダムセッション
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    isRandomSession?: boolean;
    /**
     * ランダム出題数
     * @type {number}
     * @memberof SessionCreateIn
     */
    numOfQuestionsInRandom?: number | null;
    /**
     * 制限対象の卒業年度(最小値)
     * @type {number}
     * @memberof SessionCreateIn
     */
    minGraduationYearOfRestriction?: number | null;
    /**
     * 制限対象の卒業年度(最大値)
     * @type {number}
     * @memberof SessionCreateIn
     */
    maxGraduationYearOfRestriction?: number | null;
    /**
     * 求人紹介規約に同意させるか
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    isAgreeRecruitRule?: boolean;
    /**
     * 何位までランキング表示するか
     * @type {number}
     * @memberof SessionCreateIn
     */
    maxNumOfRanking?: number;
    /**
     * ランキング実名表示
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    showRealNameInRanking?: boolean;
    /**
     * ランキング学校/会社表示
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    showOrganizationInRanking?: boolean;
    /**
     * ランキング学科・学部/部署表示
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    showDepartmentInRanking?: boolean;
    /**
     * ランキング補足情報表示
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    showInfoInRanking?: boolean;
    /**
     * ランキング学籍番号表示
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    showStudentIdInRanking?: boolean;
    /**
     * ユーザーに問題ごとの挑戦状況を表示するか
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    showChallengeStatus?: boolean;
    /**
     * ユーザー向けランキング表示有無
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    showRankingForUser?: boolean;
    /**
     * アンケートを表示有無
     * @type {boolean}
     * @memberof SessionCreateIn
     */
    hasInterview?: boolean;
    /**
     * GoogleForm編集ページURL
     * @type {string}
     * @memberof SessionCreateIn
     */
    editGoogleFormLink?: string;
    /**
     * アンケート説明文
     * @type {string}
     * @memberof SessionCreateIn
     */
    interviewDescription?: string;
    /**
     * GoogleForm回答ページURL
     * @type {string}
     * @memberof SessionCreateIn
     */
    answerGoogleFormLink?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof SessionCreateIn
     */
    availablePgLangIds: Array<number>;
    /**
     * 試験時間(分)
     * @type {number}
     * @memberof SessionCreateIn
     */
    timeLimit?: number | null;
}

/**
 * Check if a given object implements the SessionCreateIn interface.
 */
export function instanceOfSessionCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "startsAt" in value;
    isInstance = isInstance && "endsAt" in value;
    isInstance = isInstance && "sessionType" in value;
    isInstance = isInstance && "availablePgLangIds" in value;

    return isInstance;
}

export function SessionCreateInFromJSON(json: any): SessionCreateIn {
    return SessionCreateInFromJSONTyped(json, false);
}

export function SessionCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'startsAt': (new Date(json['startsAt'])),
        'endsAt': (new Date(json['endsAt'])),
        'location': !exists(json, 'location') ? undefined : json['location'],
        'sessionType': SessionTypeFromJSON(json['sessionType']),
        'isLockedSession': !exists(json, 'isLockedSession') ? undefined : json['isLockedSession'],
        'isPracticeSession': !exists(json, 'isPracticeSession') ? undefined : json['isPracticeSession'],
        'isShortTestSession': !exists(json, 'isShortTestSession') ? undefined : json['isShortTestSession'],
        'isRandomSession': !exists(json, 'isRandomSession') ? undefined : json['isRandomSession'],
        'numOfQuestionsInRandom': !exists(json, 'numOfQuestionsInRandom') ? undefined : json['numOfQuestionsInRandom'],
        'minGraduationYearOfRestriction': !exists(json, 'minGraduationYearOfRestriction') ? undefined : json['minGraduationYearOfRestriction'],
        'maxGraduationYearOfRestriction': !exists(json, 'maxGraduationYearOfRestriction') ? undefined : json['maxGraduationYearOfRestriction'],
        'isAgreeRecruitRule': !exists(json, 'isAgreeRecruitRule') ? undefined : json['isAgreeRecruitRule'],
        'maxNumOfRanking': !exists(json, 'maxNumOfRanking') ? undefined : json['maxNumOfRanking'],
        'showRealNameInRanking': !exists(json, 'showRealNameInRanking') ? undefined : json['showRealNameInRanking'],
        'showOrganizationInRanking': !exists(json, 'showOrganizationInRanking') ? undefined : json['showOrganizationInRanking'],
        'showDepartmentInRanking': !exists(json, 'showDepartmentInRanking') ? undefined : json['showDepartmentInRanking'],
        'showInfoInRanking': !exists(json, 'showInfoInRanking') ? undefined : json['showInfoInRanking'],
        'showStudentIdInRanking': !exists(json, 'showStudentIdInRanking') ? undefined : json['showStudentIdInRanking'],
        'showChallengeStatus': !exists(json, 'showChallengeStatus') ? undefined : json['showChallengeStatus'],
        'showRankingForUser': !exists(json, 'showRankingForUser') ? undefined : json['showRankingForUser'],
        'hasInterview': !exists(json, 'hasInterview') ? undefined : json['hasInterview'],
        'editGoogleFormLink': !exists(json, 'editGoogleFormLink') ? undefined : json['editGoogleFormLink'],
        'interviewDescription': !exists(json, 'interviewDescription') ? undefined : json['interviewDescription'],
        'answerGoogleFormLink': !exists(json, 'answerGoogleFormLink') ? undefined : json['answerGoogleFormLink'],
        'availablePgLangIds': json['availablePgLangIds'],
        'timeLimit': !exists(json, 'timeLimit') ? undefined : json['timeLimit'],
    };
}

export function SessionCreateInToJSON(value?: SessionCreateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'startsAt': (value.startsAt.toISOString()),
        'endsAt': (value.endsAt.toISOString()),
        'location': value.location,
        'sessionType': SessionTypeToJSON(value.sessionType),
        'isLockedSession': value.isLockedSession,
        'isPracticeSession': value.isPracticeSession,
        'isShortTestSession': value.isShortTestSession,
        'isRandomSession': value.isRandomSession,
        'numOfQuestionsInRandom': value.numOfQuestionsInRandom,
        'minGraduationYearOfRestriction': value.minGraduationYearOfRestriction,
        'maxGraduationYearOfRestriction': value.maxGraduationYearOfRestriction,
        'isAgreeRecruitRule': value.isAgreeRecruitRule,
        'maxNumOfRanking': value.maxNumOfRanking,
        'showRealNameInRanking': value.showRealNameInRanking,
        'showOrganizationInRanking': value.showOrganizationInRanking,
        'showDepartmentInRanking': value.showDepartmentInRanking,
        'showInfoInRanking': value.showInfoInRanking,
        'showStudentIdInRanking': value.showStudentIdInRanking,
        'showChallengeStatus': value.showChallengeStatus,
        'showRankingForUser': value.showRankingForUser,
        'hasInterview': value.hasInterview,
        'editGoogleFormLink': value.editGoogleFormLink,
        'interviewDescription': value.interviewDescription,
        'answerGoogleFormLink': value.answerGoogleFormLink,
        'availablePgLangIds': value.availablePgLangIds,
        'timeLimit': value.timeLimit,
    };
}

