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
import type { ProJudgeStatus } from './ProJudgeStatus';
import {
    ProJudgeStatusFromJSON,
    ProJudgeStatusFromJSONTyped,
    ProJudgeStatusToJSON,
} from './ProJudgeStatus';

/**
 * 
 * @export
 * @interface ProQuestionBestResult
 */
export interface ProQuestionBestResult {
    /**
     * PRO問題提出結果ID
     * @type {number}
     * @memberof ProQuestionBestResult
     */
    id: number;
    /**
     * 精度
     * @type {number}
     * @memberof ProQuestionBestResult
     */
    accuracy: number;
    /**
     * 
     * @type {ProJudgeStatus}
     * @memberof ProQuestionBestResult
     */
    judgeStatus: ProJudgeStatus;
    /**
     * エラーメッセージ
     * @type {string}
     * @memberof ProQuestionBestResult
     */
    errorMessage?: string;
    /**
     * 提出日時
     * @type {Date}
     * @memberof ProQuestionBestResult
     */
    createdAt: Date;
    /**
     * 提出ファイル名
     * @type {Array<string>}
     * @memberof ProQuestionBestResult
     */
    submitFileNames: Array<string>;
    /**
     * 提出コメント
     * @type {string}
     * @memberof ProQuestionBestResult
     */
    extraInfo: string;
    /**
     * 合格ライン(0.1~100.0)
     * @type {number}
     * @memberof ProQuestionBestResult
     */
    passLine: number;
    /**
     * ランク
     * @type {string}
     * @memberof ProQuestionBestResult
     */
    rank?: string | null;
    /**
     * 総評
     * @type {string}
     * @memberof ProQuestionBestResult
     */
    review?: string | null;
}

/**
 * Check if a given object implements the ProQuestionBestResult interface.
 */
export function instanceOfProQuestionBestResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "accuracy" in value;
    isInstance = isInstance && "judgeStatus" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "submitFileNames" in value;
    isInstance = isInstance && "extraInfo" in value;
    isInstance = isInstance && "passLine" in value;

    return isInstance;
}

export function ProQuestionBestResultFromJSON(json: any): ProQuestionBestResult {
    return ProQuestionBestResultFromJSONTyped(json, false);
}

export function ProQuestionBestResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProQuestionBestResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'accuracy': json['accuracy'],
        'judgeStatus': ProJudgeStatusFromJSON(json['judgeStatus']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'createdAt': (new Date(json['createdAt'])),
        'submitFileNames': json['submitFileNames'],
        'extraInfo': json['extraInfo'],
        'passLine': json['passLine'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
        'review': !exists(json, 'review') ? undefined : json['review'],
    };
}

export function ProQuestionBestResultToJSON(value?: ProQuestionBestResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'accuracy': value.accuracy,
        'judgeStatus': ProJudgeStatusToJSON(value.judgeStatus),
        'errorMessage': value.errorMessage,
        'createdAt': (value.createdAt.toISOString()),
        'submitFileNames': value.submitFileNames,
        'extraInfo': value.extraInfo,
        'passLine': value.passLine,
        'rank': value.rank,
        'review': value.review,
    };
}
