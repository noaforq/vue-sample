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
 * @interface ProQuestionSubmissionResultOut
 */
export interface ProQuestionSubmissionResultOut {
    /**
     * PRO問題提出結果ID
     * @type {number}
     * @memberof ProQuestionSubmissionResultOut
     */
    id: number;
    /**
     * 精度
     * @type {number}
     * @memberof ProQuestionSubmissionResultOut
     */
    accuracy: number;
    /**
     * 
     * @type {ProJudgeStatus}
     * @memberof ProQuestionSubmissionResultOut
     */
    judgeStatus: ProJudgeStatus;
    /**
     * エラーメッセージ
     * @type {string}
     * @memberof ProQuestionSubmissionResultOut
     */
    errorMessage?: string;
    /**
     * 提出日時
     * @type {Date}
     * @memberof ProQuestionSubmissionResultOut
     */
    createdAt: Date;
    /**
     * 提出ファイル名
     * @type {Array<string>}
     * @memberof ProQuestionSubmissionResultOut
     */
    submitFileNames: Array<string>;
    /**
     * 提出コメント
     * @type {string}
     * @memberof ProQuestionSubmissionResultOut
     */
    extraInfo: string;
    /**
     * 採点が完了したかどうか
     * @type {boolean}
     * @memberof ProQuestionSubmissionResultOut
     */
    isDone?: boolean;
}

/**
 * Check if a given object implements the ProQuestionSubmissionResultOut interface.
 */
export function instanceOfProQuestionSubmissionResultOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "accuracy" in value;
    isInstance = isInstance && "judgeStatus" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "submitFileNames" in value;
    isInstance = isInstance && "extraInfo" in value;

    return isInstance;
}

export function ProQuestionSubmissionResultOutFromJSON(json: any): ProQuestionSubmissionResultOut {
    return ProQuestionSubmissionResultOutFromJSONTyped(json, false);
}

export function ProQuestionSubmissionResultOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProQuestionSubmissionResultOut {
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
        'isDone': !exists(json, 'isDone') ? undefined : json['isDone'],
    };
}

export function ProQuestionSubmissionResultOutToJSON(value?: ProQuestionSubmissionResultOut | null): any {
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
        'isDone': value.isDone,
    };
}
