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
import type { AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResult } from './AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResult';
import {
    AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResultFromJSON,
    AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResultFromJSONTyped,
    AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResultToJSON,
} from './AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResult';
import type { RecommendQuestion } from './RecommendQuestion';
import {
    RecommendQuestionFromJSON,
    RecommendQuestionFromJSONTyped,
    RecommendQuestionToJSON,
} from './RecommendQuestion';
import type { Scores1 } from './Scores1';
import {
    Scores1FromJSON,
    Scores1FromJSONTyped,
    Scores1ToJSON,
} from './Scores1';

/**
 * 
 * @export
 * @interface GetTestCaseResultsOut
 */
export interface GetTestCaseResultsOut {
    /**
     * サンプルケース結果
     * @type {Array<AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResult>}
     * @memberof GetTestCaseResultsOut
     */
    testCaseResults: Array<AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResult>;
    /**
     * 合格テストケース数
     * @type {number}
     * @memberof GetTestCaseResultsOut
     */
    passedTestCaseCount?: number | null;
    /**
     * 全テストケース数
     * @type {number}
     * @memberof GetTestCaseResultsOut
     */
    totalTestCaseCount?: number | null;
    /**
     * 全テストケースの結果取得済かどうか
     * @type {boolean}
     * @memberof GetTestCaseResultsOut
     */
    isDone: boolean;
    /**
     * 
     * @type {Scores1}
     * @memberof GetTestCaseResultsOut
     */
    scores?: Scores1 | null;
    /**
     * おすすめ問題リスト
     * @type {Array<RecommendQuestion>}
     * @memberof GetTestCaseResultsOut
     */
    recommendQuestions: Array<RecommendQuestion>;
}

/**
 * Check if a given object implements the GetTestCaseResultsOut interface.
 */
export function instanceOfGetTestCaseResultsOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "testCaseResults" in value;
    isInstance = isInstance && "isDone" in value;
    isInstance = isInstance && "recommendQuestions" in value;

    return isInstance;
}

export function GetTestCaseResultsOutFromJSON(json: any): GetTestCaseResultsOut {
    return GetTestCaseResultsOutFromJSONTyped(json, false);
}

export function GetTestCaseResultsOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTestCaseResultsOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'testCaseResults': ((json['testCaseResults'] as Array<any>).map(AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResultFromJSON)),
        'passedTestCaseCount': !exists(json, 'passedTestCaseCount') ? undefined : json['passedTestCaseCount'],
        'totalTestCaseCount': !exists(json, 'totalTestCaseCount') ? undefined : json['totalTestCaseCount'],
        'isDone': json['isDone'],
        'scores': !exists(json, 'scores') ? undefined : Scores1FromJSON(json['scores']),
        'recommendQuestions': ((json['recommendQuestions'] as Array<any>).map(RecommendQuestionFromJSON)),
    };
}

export function GetTestCaseResultsOutToJSON(value?: GetTestCaseResultsOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'testCaseResults': ((value.testCaseResults as Array<any>).map(AppSchemasGeneralQuestionsGetQuestionTestCaseResultsOutTestCaseResultToJSON)),
        'passedTestCaseCount': value.passedTestCaseCount,
        'totalTestCaseCount': value.totalTestCaseCount,
        'isDone': value.isDone,
        'scores': Scores1ToJSON(value.scores),
        'recommendQuestions': ((value.recommendQuestions as Array<any>).map(RecommendQuestionToJSON)),
    };
}
