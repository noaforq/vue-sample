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
 * @interface AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats
 */
export interface AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats {
    /**
     * 基礎得点
     * @type {number}
     * @memberof AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats
     */
    basicScore: number;
    /**
     * 合計タイムボーナス得点
     * @type {number}
     * @memberof AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats
     */
    totalBonusScore: number;
    /**
     * タイムボーナス得点
     * @type {number}
     * @memberof AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats
     */
    timeBonusScore: number;
    /**
     * 総合得点
     * @type {number}
     * @memberof AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats
     */
    totalScore: number;
    /**
     * 提出回数
     * @type {number}
     * @memberof AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats
     */
    submissionTimes: number;
    /**
     * 解答時間
     * @type {number}
     * @memberof AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats
     */
    elapsedTimeForSolution: number;
}

/**
 * Check if a given object implements the AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats interface.
 */
export function instanceOfAppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "basicScore" in value;
    isInstance = isInstance && "totalBonusScore" in value;
    isInstance = isInstance && "timeBonusScore" in value;
    isInstance = isInstance && "totalScore" in value;
    isInstance = isInstance && "submissionTimes" in value;
    isInstance = isInstance && "elapsedTimeForSolution" in value;

    return isInstance;
}

export function AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStatsFromJSON(json: any): AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats {
    return AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStatsFromJSONTyped(json, false);
}

export function AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats {
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

export function AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStatsToJSON(value?: AppSchemasGeneralSessionsGetSessionQuestionTestCaseResultsOutScoreStats | null): any {
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

