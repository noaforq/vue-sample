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
 * 
 * @export
 * @interface AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats
 */
export interface AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats {
    /**
     * 基礎得点
     * @type {number}
     * @memberof AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats
     */
    basicScore: number;
    /**
     * 合計タイムボーナス得点
     * @type {number}
     * @memberof AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats
     */
    totalBonusScore: number;
    /**
     * タイムボーナス得点
     * @type {number}
     * @memberof AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats
     */
    timeBonusScore: number;
    /**
     * 総合得点
     * @type {number}
     * @memberof AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats
     */
    totalScore: number;
    /**
     * 提出回数
     * @type {number}
     * @memberof AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats
     */
    submissionTimes: number;
    /**
     * 解答時間
     * @type {number}
     * @memberof AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats
     */
    elapsedTimeForSolution: number;
}

/**
 * Check if a given object implements the AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats interface.
 */
export function instanceOfAppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "basicScore" in value;
    isInstance = isInstance && "totalBonusScore" in value;
    isInstance = isInstance && "timeBonusScore" in value;
    isInstance = isInstance && "totalScore" in value;
    isInstance = isInstance && "submissionTimes" in value;
    isInstance = isInstance && "elapsedTimeForSolution" in value;

    return isInstance;
}

export function AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStatsFromJSON(json: any): AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats {
    return AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStatsFromJSONTyped(json, false);
}

export function AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'basicScore': json['basicScore'],
        'totalBonusScore': json['totalBonusScore'],
        'timeBonusScore': json['timeBonusScore'],
        'totalScore': json['totalScore'],
        'submissionTimes': json['submissionTimes'],
        'elapsedTimeForSolution': json['elapsedTimeForSolution'],
    };
}

export function AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStatsToJSON(value?: AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutScoreStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'basicScore': value.basicScore,
        'totalBonusScore': value.totalBonusScore,
        'timeBonusScore': value.timeBonusScore,
        'totalScore': value.totalScore,
        'submissionTimes': value.submissionTimes,
        'elapsedTimeForSolution': value.elapsedTimeForSolution,
    };
}
