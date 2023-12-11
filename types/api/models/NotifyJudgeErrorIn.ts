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
 * @interface NotifyJudgeErrorIn
 */
export interface NotifyJudgeErrorIn {
    /**
     * ジャッジエラー発生時刻
     * @type {Date}
     * @memberof NotifyJudgeErrorIn
     */
    timestamp: Date;
    /**
     * 実行結果ID; タイムアウト等で実行結果が得られなかったらnull
     * @type {number}
     * @memberof NotifyJudgeErrorIn
     */
    questionTestResultId?: number | null;
    /**
     * 問題ID
     * @type {number}
     * @memberof NotifyJudgeErrorIn
     */
    contentId: number;
    /**
     * セッションID
     * @type {number}
     * @memberof NotifyJudgeErrorIn
     */
    sessionId?: number | null;
    /**
     * ブラウザ上で得られたUserAgent
     * @type {string}
     * @memberof NotifyJudgeErrorIn
     */
    userAgent: string;
}

/**
 * Check if a given object implements the NotifyJudgeErrorIn interface.
 */
export function instanceOfNotifyJudgeErrorIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "userAgent" in value;

    return isInstance;
}

export function NotifyJudgeErrorInFromJSON(json: any): NotifyJudgeErrorIn {
    return NotifyJudgeErrorInFromJSONTyped(json, false);
}

export function NotifyJudgeErrorInFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifyJudgeErrorIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timestamp': (new Date(json['timestamp'])),
        'questionTestResultId': !exists(json, 'questionTestResultId') ? undefined : json['questionTestResultId'],
        'contentId': json['contentId'],
        'sessionId': !exists(json, 'sessionId') ? undefined : json['sessionId'],
        'userAgent': json['userAgent'],
    };
}

export function NotifyJudgeErrorInToJSON(value?: NotifyJudgeErrorIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timestamp': (value.timestamp.toISOString()),
        'questionTestResultId': value.questionTestResultId,
        'contentId': value.contentId,
        'sessionId': value.sessionId,
        'userAgent': value.userAgent,
    };
}
