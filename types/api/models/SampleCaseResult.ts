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
import type { JudgeStatus } from './JudgeStatus';
import {
    JudgeStatusFromJSON,
    JudgeStatusFromJSONTyped,
    JudgeStatusToJSON,
} from './JudgeStatus';

/**
 * 
 * @export
 * @interface SampleCaseResult
 */
export interface SampleCaseResult {
    /**
     * テストケースID
     * @type {number}
     * @memberof SampleCaseResult
     */
    questionTestCaseId: number;
    /**
     * 標準入力
     * @type {string}
     * @memberof SampleCaseResult
     */
    stdin: string;
    /**
     * 期待される標準出力
     * @type {string}
     * @memberof SampleCaseResult
     */
    expectedStdout: string;
    /**
     * ユーザー出力/エラー出力
     * @type {string}
     * @memberof SampleCaseResult
     */
    stdout: string;
    /**
     * 
     * @type {JudgeStatus}
     * @memberof SampleCaseResult
     */
    judgeStatus: JudgeStatus;
    /**
     * 実行時間(s)
     * @type {number}
     * @memberof SampleCaseResult
     */
    elapsedTime: number;
    /**
     * メモリ使用量(KB)
     * @type {number}
     * @memberof SampleCaseResult
     */
    memoryUsage: number;
}

/**
 * Check if a given object implements the SampleCaseResult interface.
 */
export function instanceOfSampleCaseResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "questionTestCaseId" in value;
    isInstance = isInstance && "stdin" in value;
    isInstance = isInstance && "expectedStdout" in value;
    isInstance = isInstance && "stdout" in value;
    isInstance = isInstance && "judgeStatus" in value;
    isInstance = isInstance && "elapsedTime" in value;
    isInstance = isInstance && "memoryUsage" in value;

    return isInstance;
}

export function SampleCaseResultFromJSON(json: any): SampleCaseResult {
    return SampleCaseResultFromJSONTyped(json, false);
}

export function SampleCaseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SampleCaseResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionTestCaseId': json['questionTestCaseId'],
        'stdin': json['stdin'],
        'expectedStdout': json['expectedStdout'],
        'stdout': json['stdout'],
        'judgeStatus': JudgeStatusFromJSON(json['judgeStatus']),
        'elapsedTime': json['elapsedTime'],
        'memoryUsage': json['memoryUsage'],
    };
}

export function SampleCaseResultToJSON(value?: SampleCaseResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionTestCaseId': value.questionTestCaseId,
        'stdin': value.stdin,
        'expectedStdout': value.expectedStdout,
        'stdout': value.stdout,
        'judgeStatus': JudgeStatusToJSON(value.judgeStatus),
        'elapsedTime': value.elapsedTime,
        'memoryUsage': value.memoryUsage,
    };
}

