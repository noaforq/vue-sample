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
import type { FullMatchedAnswerSourceCode } from './FullMatchedAnswerSourceCode';
import {
    FullMatchedAnswerSourceCodeFromJSON,
    FullMatchedAnswerSourceCodeFromJSONTyped,
    FullMatchedAnswerSourceCodeToJSON,
} from './FullMatchedAnswerSourceCode';
import type { FullMatchedAnswerUser } from './FullMatchedAnswerUser';
import {
    FullMatchedAnswerUserFromJSON,
    FullMatchedAnswerUserFromJSONTyped,
    FullMatchedAnswerUserToJSON,
} from './FullMatchedAnswerUser';
import type { SimilarSourceCodeQuestion } from './SimilarSourceCodeQuestion';
import {
    SimilarSourceCodeQuestionFromJSON,
    SimilarSourceCodeQuestionFromJSONTyped,
    SimilarSourceCodeQuestionToJSON,
} from './SimilarSourceCodeQuestion';
import type { SimilarSourceCodeUser } from './SimilarSourceCodeUser';
import {
    SimilarSourceCodeUserFromJSON,
    SimilarSourceCodeUserFromJSONTyped,
    SimilarSourceCodeUserToJSON,
} from './SimilarSourceCodeUser';
import type { TooEarlyAnswerUserSourceCode } from './TooEarlyAnswerUserSourceCode';
import {
    TooEarlyAnswerUserSourceCodeFromJSON,
    TooEarlyAnswerUserSourceCodeFromJSONTyped,
    TooEarlyAnswerUserSourceCodeToJSON,
} from './TooEarlyAnswerUserSourceCode';

/**
 * 
 * @export
 * @interface AnswerlistInner
 */
export interface AnswerlistInner {
    /**
     * 問題ID
     * @type {number}
     * @memberof AnswerlistInner
     */
    contentId: number;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof AnswerlistInner
     */
    questionTitle: string;
    /**
     * ソースコード
     * @type {string}
     * @memberof AnswerlistInner
     */
    sourceCode: string;
    /**
     * 
     * @type {number}
     * @memberof AnswerlistInner
     */
    pgLangId: number;
    /**
     * 
     * @type {string}
     * @memberof AnswerlistInner
     */
    pgLangName: string;
    /**
     * 
     * @type {Array<FullMatchedAnswerUser>}
     * @memberof AnswerlistInner
     */
    matchedUserList: Array<FullMatchedAnswerUser>;
    /**
     * 参加者ID
     * @type {number}
     * @memberof AnswerlistInner
     */
    userId: number;
    /**
     * アカウント名
     * @type {string}
     * @memberof AnswerlistInner
     */
    username: string;
    /**
     * 解答にかかった時間(s)
     * @type {number}
     * @memberof AnswerlistInner
     */
    answeredTime: number;
    /**
     * 
     * @type {Array<SimilarSourceCodeUser>}
     * @memberof AnswerlistInner
     */
    similarSourceCodeUsers: Array<SimilarSourceCodeUser>;
}

/**
 * Check if a given object implements the AnswerlistInner interface.
 */
export function instanceOfAnswerlistInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "questionTitle" in value;
    isInstance = isInstance && "sourceCode" in value;
    isInstance = isInstance && "pgLangId" in value;
    isInstance = isInstance && "pgLangName" in value;
    isInstance = isInstance && "matchedUserList" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "answeredTime" in value;
    isInstance = isInstance && "similarSourceCodeUsers" in value;

    return isInstance;
}

export function AnswerlistInnerFromJSON(json: any): AnswerlistInner {
    return AnswerlistInnerFromJSONTyped(json, false);
}

export function AnswerlistInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnswerlistInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contentId': json['contentId'],
        'questionTitle': json['questionTitle'],
        'sourceCode': json['sourceCode'],
        'pgLangId': json['pgLangId'],
        'pgLangName': json['pgLangName'],
        'matchedUserList': ((json['matchedUserList'] as Array<any>).map(FullMatchedAnswerUserFromJSON)),
        'userId': json['userId'],
        'username': json['username'],
        'answeredTime': json['answeredTime'],
        'similarSourceCodeUsers': ((json['similarSourceCodeUsers'] as Array<any>).map(SimilarSourceCodeUserFromJSON)),
    };
}

export function AnswerlistInnerToJSON(value?: AnswerlistInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contentId': value.contentId,
        'questionTitle': value.questionTitle,
        'sourceCode': value.sourceCode,
        'pgLangId': value.pgLangId,
        'pgLangName': value.pgLangName,
        'matchedUserList': ((value.matchedUserList as Array<any>).map(FullMatchedAnswerUserToJSON)),
        'userId': value.userId,
        'username': value.username,
        'answeredTime': value.answeredTime,
        'similarSourceCodeUsers': ((value.similarSourceCodeUsers as Array<any>).map(SimilarSourceCodeUserToJSON)),
    };
}

