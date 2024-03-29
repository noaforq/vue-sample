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
import type { VerificationCaseResult } from './VerificationCaseResult';
import {
    VerificationCaseResultFromJSON,
    VerificationCaseResultFromJSONTyped,
    VerificationCaseResultToJSON,
} from './VerificationCaseResult';

/**
 * 
 * @export
 * @interface QuestionVerificationResultOut
 */
export interface QuestionVerificationResultOut {
    /**
     * テストケース検証結果
     * @type {Array<VerificationCaseResult>}
     * @memberof QuestionVerificationResultOut
     */
    testCaseResults: Array<VerificationCaseResult>;
    /**
     * 合格テストケース数
     * @type {number}
     * @memberof QuestionVerificationResultOut
     */
    passedTestCaseCount?: number | null;
    /**
     * 全テストケース数
     * @type {number}
     * @memberof QuestionVerificationResultOut
     */
    totalTestCaseCount?: number | null;
    /**
     * 
     * @type {QuestionAnswerResult}
     * @memberof QuestionVerificationResultOut
     */
    resultStatus: QuestionAnswerResult;
}

/**
 * Check if a given object implements the QuestionVerificationResultOut interface.
 */
export function instanceOfQuestionVerificationResultOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "testCaseResults" in value;
    isInstance = isInstance && "resultStatus" in value;

    return isInstance;
}

export function QuestionVerificationResultOutFromJSON(json: any): QuestionVerificationResultOut {
    return QuestionVerificationResultOutFromJSONTyped(json, false);
}

export function QuestionVerificationResultOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionVerificationResultOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'testCaseResults': ((json['testCaseResults'] as Array<any>).map(VerificationCaseResultFromJSON)),
        'passedTestCaseCount': !exists(json, 'passedTestCaseCount') ? undefined : json['passedTestCaseCount'],
        'totalTestCaseCount': !exists(json, 'totalTestCaseCount') ? undefined : json['totalTestCaseCount'],
        'resultStatus': QuestionAnswerResultFromJSON(json['resultStatus']),
    };
}

export function QuestionVerificationResultOutToJSON(value?: QuestionVerificationResultOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'testCaseResults': ((value.testCaseResults as Array<any>).map(VerificationCaseResultToJSON)),
        'passedTestCaseCount': value.passedTestCaseCount,
        'totalTestCaseCount': value.totalTestCaseCount,
        'resultStatus': QuestionAnswerResultToJSON(value.resultStatus),
    };
}

