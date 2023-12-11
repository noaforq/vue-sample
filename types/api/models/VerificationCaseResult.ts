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
 * @interface VerificationCaseResult
 */
export interface VerificationCaseResult {
    /**
     * テストケースID
     * @type {number}
     * @memberof VerificationCaseResult
     */
    questionTestCaseId: number;
    /**
     * 標準入力
     * @type {string}
     * @memberof VerificationCaseResult
     */
    stdin?: string | null;
    /**
     * 想定出力
     * @type {string}
     * @memberof VerificationCaseResult
     */
    expectedStdout?: string | null;
    /**
     * ユーザー出力/エラー出力
     * @type {string}
     * @memberof VerificationCaseResult
     */
    stdout: string;
    /**
     * 
     * @type {JudgeStatus}
     * @memberof VerificationCaseResult
     */
    judgeStatus: JudgeStatus;
    /**
     * 実行時間(s)
     * @type {number}
     * @memberof VerificationCaseResult
     */
    elapsedTime: number;
}

/**
 * Check if a given object implements the VerificationCaseResult interface.
 */
export function instanceOfVerificationCaseResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "questionTestCaseId" in value;
    isInstance = isInstance && "stdout" in value;
    isInstance = isInstance && "judgeStatus" in value;
    isInstance = isInstance && "elapsedTime" in value;

    return isInstance;
}

export function VerificationCaseResultFromJSON(json: any): VerificationCaseResult {
    return VerificationCaseResultFromJSONTyped(json, false);
}

export function VerificationCaseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationCaseResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionTestCaseId': json['questionTestCaseId'],
        'stdin': !exists(json, 'stdin') ? undefined : json['stdin'],
        'expectedStdout': !exists(json, 'expectedStdout') ? undefined : json['expectedStdout'],
        'stdout': json['stdout'],
        'judgeStatus': JudgeStatusFromJSON(json['judgeStatus']),
        'elapsedTime': json['elapsedTime'],
    };
}

export function VerificationCaseResultToJSON(value?: VerificationCaseResult | null): any {
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
    };
}
