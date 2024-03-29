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
/**
 * 問題成績
 * @export
 * @interface SessionPersonalRecordOut
 */
export interface SessionPersonalRecordOut {
    /**
     * 問題タイトル
     * @type {string}
     * @memberof SessionPersonalRecordOut
     */
    questionName: string;
    /**
     * 難易度
     * @type {number}
     * @memberof SessionPersonalRecordOut
     */
    difficulty: number;
    /**
     * PG言語
     * @type {string}
     * @memberof SessionPersonalRecordOut
     */
    pgLang: string | null;
    /**
     * 提出回数
     * @type {number}
     * @memberof SessionPersonalRecordOut
     */
    submitCount: number;
    /**
     * エラー回数
     * @type {number}
     * @memberof SessionPersonalRecordOut
     */
    failedCount: number;
    /**
     * コード文字数
     * @type {number}
     * @memberof SessionPersonalRecordOut
     */
    code: number;
    /**
     * 目標時間内に合格
     * @type {boolean}
     * @memberof SessionPersonalRecordOut
     */
    isPassedInTime: boolean;
    /**
     * ケース正解率（％）
     * @type {number}
     * @memberof SessionPersonalRecordOut
     */
    casePassedAnswerRate?: number;
    /**
     * 取得スコア
     * @type {number}
     * @memberof SessionPersonalRecordOut
     */
    score: number;
    /**
     * 最大スコア
     * @type {number}
     * @memberof SessionPersonalRecordOut
     */
    maxScore: number;
}

/**
 * Check if a given object implements the SessionPersonalRecordOut interface.
 */
export function instanceOfSessionPersonalRecordOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "questionName" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "pgLang" in value;
    isInstance = isInstance && "submitCount" in value;
    isInstance = isInstance && "failedCount" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "isPassedInTime" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "maxScore" in value;

    return isInstance;
}

export function SessionPersonalRecordOutFromJSON(json: any): SessionPersonalRecordOut {
    return SessionPersonalRecordOutFromJSONTyped(json, false);
}

export function SessionPersonalRecordOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPersonalRecordOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionName': json['questionName'],
        'difficulty': json['difficulty'],
        'pgLang': json['pgLang'],
        'submitCount': json['submitCount'],
        'failedCount': json['failedCount'],
        'code': json['code'],
        'isPassedInTime': json['isPassedInTime'],
        'casePassedAnswerRate': !exists(json, 'casePassedAnswerRate') ? undefined : json['casePassedAnswerRate'],
        'score': json['score'],
        'maxScore': json['maxScore'],
    };
}

export function SessionPersonalRecordOutToJSON(value?: SessionPersonalRecordOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionName': value.questionName,
        'difficulty': value.difficulty,
        'pgLang': value.pgLang,
        'submitCount': value.submitCount,
        'failedCount': value.failedCount,
        'code': value.code,
        'isPassedInTime': value.isPassedInTime,
        'casePassedAnswerRate': value.casePassedAnswerRate,
        'score': value.score,
        'maxScore': value.maxScore,
    };
}

