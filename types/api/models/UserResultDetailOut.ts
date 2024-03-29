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
import type { QuestionAnswerResult } from './QuestionAnswerResult';
import {
    QuestionAnswerResultFromJSON,
    QuestionAnswerResultFromJSONTyped,
    QuestionAnswerResultToJSON,
} from './QuestionAnswerResult';

/**
 * 
 * @export
 * @interface UserResultDetailOut
 */
export interface UserResultDetailOut {
    /**
     * コンテンツID
     * @type {number}
     * @memberof UserResultDetailOut
     */
    contentId: number;
    /**
     * 問題名
     * @type {string}
     * @memberof UserResultDetailOut
     */
    questionName: string;
    /**
     * 難易度
     * @type {number}
     * @memberof UserResultDetailOut
     */
    questionDifficulty: number;
    /**
     * 提出回数
     * @type {number}
     * @memberof UserResultDetailOut
     */
    submitCount: number;
    /**
     * 目標時間内クリアしたか
     * @type {boolean}
     * @memberof UserResultDetailOut
     */
    inTargetTime: boolean;
    /**
     * 回答開始日時
     * @type {Date}
     * @memberof UserResultDetailOut
     */
    startAt: Date;
    /**
     * 
     * @type {QuestionAnswerResult}
     * @memberof UserResultDetailOut
     */
    answerStatus: QuestionAnswerResult;
    /**
     * スコア
     * @type {number}
     * @memberof UserResultDetailOut
     */
    score: number;
    /**
     * コンパイルエラー数
     * @type {number}
     * @memberof UserResultDetailOut
     */
    failedCount: number;
}

/**
 * Check if a given object implements the UserResultDetailOut interface.
 */
export function instanceOfUserResultDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "questionName" in value;
    isInstance = isInstance && "questionDifficulty" in value;
    isInstance = isInstance && "submitCount" in value;
    isInstance = isInstance && "inTargetTime" in value;
    isInstance = isInstance && "startAt" in value;
    isInstance = isInstance && "answerStatus" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "failedCount" in value;

    return isInstance;
}

export function UserResultDetailOutFromJSON(json: any): UserResultDetailOut {
    return UserResultDetailOutFromJSONTyped(json, false);
}

export function UserResultDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResultDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contentId': json['contentId'],
        'questionName': json['questionName'],
        'questionDifficulty': json['questionDifficulty'],
        'submitCount': json['submitCount'],
        'inTargetTime': json['inTargetTime'],
        'startAt': (new Date(json['startAt'])),
        'answerStatus': QuestionAnswerResultFromJSON(json['answerStatus']),
        'score': json['score'],
        'failedCount': json['failedCount'],
    };
}

export function UserResultDetailOutToJSON(value?: UserResultDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contentId': value.contentId,
        'questionName': value.questionName,
        'questionDifficulty': value.questionDifficulty,
        'submitCount': value.submitCount,
        'inTargetTime': value.inTargetTime,
        'startAt': (value.startAt.toISOString()),
        'answerStatus': QuestionAnswerResultToJSON(value.answerStatus),
        'score': value.score,
        'failedCount': value.failedCount,
    };
}

