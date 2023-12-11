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
import type { AppSchemasCommonUsersCodeCheckOutTestCaseResult } from './AppSchemasCommonUsersCodeCheckOutTestCaseResult';
import {
    AppSchemasCommonUsersCodeCheckOutTestCaseResultFromJSON,
    AppSchemasCommonUsersCodeCheckOutTestCaseResultFromJSONTyped,
    AppSchemasCommonUsersCodeCheckOutTestCaseResultToJSON,
} from './AppSchemasCommonUsersCodeCheckOutTestCaseResult';

/**
 * コーディング、バグ取り、穴埋め問題の合格結果
 * @export
 * @interface Codingquestionresult
 */
export interface Codingquestionresult {
    /**
     * id
     * @type {number}
     * @memberof Codingquestionresult
     */
    questionTestResultId: number;
    /**
     * 合格まで経過時間(hh:mm:ss)
     * @type {number}
     * @memberof Codingquestionresult
     */
    elapsedTimeToPass: number;
    /**
     * 合計実行時間(実行速度)
     * @type {number}
     * @memberof Codingquestionresult
     */
    elapsedTimeForExecution: number;
    /**
     * 合格数
     * @type {number}
     * @memberof Codingquestionresult
     */
    passedCount: number;
    /**
     * テストケース数
     * @type {number}
     * @memberof Codingquestionresult
     */
    totalCount: number;
    /**
     * 取得したスコア
     * @type {number}
     * @memberof Codingquestionresult
     */
    score: number;
    /**
     * 最大スコア
     * @type {number}
     * @memberof Codingquestionresult
     */
    maxScore: number;
    /**
     * 正解までの提出回数
     * @type {number}
     * @memberof Codingquestionresult
     */
    submissionCountUntilPassed: number;
    /**
     * エラー回数
     * @type {number}
     * @memberof Codingquestionresult
     */
    compileErrorCount: number;
    /**
     * 平均スコア(全ユーザーが取得したスコアの平均)
     * @type {number}
     * @memberof Codingquestionresult
     */
    averageScore: number;
    /**
     * 正解率(全ユーザーの合格率の平均)
     * @type {number}
     * @memberof Codingquestionresult
     */
    passedRate: number;
    /**
     * ソースコード
     * @type {string}
     * @memberof Codingquestionresult
     */
    sourceCode: string;
    /**
     * プログラミング言語
     * @type {string}
     * @memberof Codingquestionresult
     */
    pgLang: string;
    /**
     * テストケース結果
     * @type {Array<AppSchemasCommonUsersCodeCheckOutTestCaseResult>}
     * @memberof Codingquestionresult
     */
    testCaseResults?: Array<AppSchemasCommonUsersCodeCheckOutTestCaseResult>;
}

/**
 * Check if a given object implements the Codingquestionresult interface.
 */
export function instanceOfCodingquestionresult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "questionTestResultId" in value;
    isInstance = isInstance && "elapsedTimeToPass" in value;
    isInstance = isInstance && "elapsedTimeForExecution" in value;
    isInstance = isInstance && "passedCount" in value;
    isInstance = isInstance && "totalCount" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "maxScore" in value;
    isInstance = isInstance && "submissionCountUntilPassed" in value;
    isInstance = isInstance && "compileErrorCount" in value;
    isInstance = isInstance && "averageScore" in value;
    isInstance = isInstance && "passedRate" in value;
    isInstance = isInstance && "sourceCode" in value;
    isInstance = isInstance && "pgLang" in value;

    return isInstance;
}

export function CodingquestionresultFromJSON(json: any): Codingquestionresult {
    return CodingquestionresultFromJSONTyped(json, false);
}

export function CodingquestionresultFromJSONTyped(json: any, ignoreDiscriminator: boolean): Codingquestionresult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionTestResultId': json['questionTestResultId'],
        'elapsedTimeToPass': json['elapsedTimeToPass'],
        'elapsedTimeForExecution': json['elapsedTimeForExecution'],
        'passedCount': json['passedCount'],
        'totalCount': json['totalCount'],
        'score': json['score'],
        'maxScore': json['maxScore'],
        'submissionCountUntilPassed': json['submissionCountUntilPassed'],
        'compileErrorCount': json['compileErrorCount'],
        'averageScore': json['averageScore'],
        'passedRate': json['passedRate'],
        'sourceCode': json['sourceCode'],
        'pgLang': json['pgLang'],
        'testCaseResults': !exists(json, 'testCaseResults') ? undefined : ((json['testCaseResults'] as Array<any>).map(AppSchemasCommonUsersCodeCheckOutTestCaseResultFromJSON)),
    };
}

export function CodingquestionresultToJSON(value?: Codingquestionresult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionTestResultId': value.questionTestResultId,
        'elapsedTimeToPass': value.elapsedTimeToPass,
        'elapsedTimeForExecution': value.elapsedTimeForExecution,
        'passedCount': value.passedCount,
        'totalCount': value.totalCount,
        'score': value.score,
        'maxScore': value.maxScore,
        'submissionCountUntilPassed': value.submissionCountUntilPassed,
        'compileErrorCount': value.compileErrorCount,
        'averageScore': value.averageScore,
        'passedRate': value.passedRate,
        'sourceCode': value.sourceCode,
        'pgLang': value.pgLang,
        'testCaseResults': value.testCaseResults === undefined ? undefined : ((value.testCaseResults as Array<any>).map(AppSchemasCommonUsersCodeCheckOutTestCaseResultToJSON)),
    };
}

