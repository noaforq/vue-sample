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
import type { UserAnswerDetailOut } from './UserAnswerDetailOut';
import {
    UserAnswerDetailOutFromJSON,
    UserAnswerDetailOutFromJSONTyped,
    UserAnswerDetailOutToJSON,
} from './UserAnswerDetailOut';

/**
 * 
 * @export
 * @interface SessionSearchCodeOut
 */
export interface SessionSearchCodeOut {
    /**
     * 問題ID
     * @type {number}
     * @memberof SessionSearchCodeOut
     */
    contentId: number;
    /**
     * 問題名
     * @type {string}
     * @memberof SessionSearchCodeOut
     */
    questionTitle: string;
    /**
     * 解答総件数
     * @type {number}
     * @memberof SessionSearchCodeOut
     */
    answerTotalCount: number;
    /**
     * 
     * @type {Array<UserAnswerDetailOut>}
     * @memberof SessionSearchCodeOut
     */
    userAnswerList: Array<UserAnswerDetailOut>;
}

/**
 * Check if a given object implements the SessionSearchCodeOut interface.
 */
export function instanceOfSessionSearchCodeOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "questionTitle" in value;
    isInstance = isInstance && "answerTotalCount" in value;
    isInstance = isInstance && "userAnswerList" in value;

    return isInstance;
}

export function SessionSearchCodeOutFromJSON(json: any): SessionSearchCodeOut {
    return SessionSearchCodeOutFromJSONTyped(json, false);
}

export function SessionSearchCodeOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionSearchCodeOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contentId': json['contentId'],
        'questionTitle': json['questionTitle'],
        'answerTotalCount': json['answerTotalCount'],
        'userAnswerList': ((json['userAnswerList'] as Array<any>).map(UserAnswerDetailOutFromJSON)),
    };
}

export function SessionSearchCodeOutToJSON(value?: SessionSearchCodeOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contentId': value.contentId,
        'questionTitle': value.questionTitle,
        'answerTotalCount': value.answerTotalCount,
        'userAnswerList': ((value.userAnswerList as Array<any>).map(UserAnswerDetailOutToJSON)),
    };
}

