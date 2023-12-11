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
 * @interface EventPortfolioQuestionResultListOut
 */
export interface EventPortfolioQuestionResultListOut {
    /**
     * 問題解答成績ID
     * @type {number}
     * @memberof EventPortfolioQuestionResultListOut
     */
    questionResultId: number;
    /**
     * 問題名
     * @type {string}
     * @memberof EventPortfolioQuestionResultListOut
     */
    questionTitle: string;
    /**
     * 難易度
     * @type {number}
     * @memberof EventPortfolioQuestionResultListOut
     */
    difficulty: number;
    /**
     * 獲得した得点
     * @type {number}
     * @memberof EventPortfolioQuestionResultListOut
     */
    score: number;
    /**
     * セッションID
     * @type {number}
     * @memberof EventPortfolioQuestionResultListOut
     */
    sessionId: number;
    /**
     * イベントID
     * @type {number}
     * @memberof EventPortfolioQuestionResultListOut
     */
    eventId: number;
    /**
     * コンテンツID
     * @type {number}
     * @memberof EventPortfolioQuestionResultListOut
     */
    contentId: number;
    /**
     * 問題解答状況
     * @type {string}
     * @memberof EventPortfolioQuestionResultListOut
     */
    questionResultStatus: string;
}

/**
 * Check if a given object implements the EventPortfolioQuestionResultListOut interface.
 */
export function instanceOfEventPortfolioQuestionResultListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "questionResultId" in value;
    isInstance = isInstance && "questionTitle" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "sessionId" in value;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "questionResultStatus" in value;

    return isInstance;
}

export function EventPortfolioQuestionResultListOutFromJSON(json: any): EventPortfolioQuestionResultListOut {
    return EventPortfolioQuestionResultListOutFromJSONTyped(json, false);
}

export function EventPortfolioQuestionResultListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventPortfolioQuestionResultListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionResultId': json['questionResultId'],
        'questionTitle': json['questionTitle'],
        'difficulty': json['difficulty'],
        'score': json['score'],
        'sessionId': json['sessionId'],
        'eventId': json['eventId'],
        'contentId': json['contentId'],
        'questionResultStatus': json['questionResultStatus'],
    };
}

export function EventPortfolioQuestionResultListOutToJSON(value?: EventPortfolioQuestionResultListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionResultId': value.questionResultId,
        'questionTitle': value.questionTitle,
        'difficulty': value.difficulty,
        'score': value.score,
        'sessionId': value.sessionId,
        'eventId': value.eventId,
        'contentId': value.contentId,
        'questionResultStatus': value.questionResultStatus,
    };
}
