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
import type { FullMatchedAnswerUser } from './FullMatchedAnswerUser';
import {
    FullMatchedAnswerUserFromJSON,
    FullMatchedAnswerUserFromJSONTyped,
    FullMatchedAnswerUserToJSON,
} from './FullMatchedAnswerUser';

/**
 * 解答の完全一致 完全一致したコード
 * @export
 * @interface FullMatchedAnswerSourceCode
 */
export interface FullMatchedAnswerSourceCode {
    /**
     * 問題ID
     * @type {number}
     * @memberof FullMatchedAnswerSourceCode
     */
    contentId: number;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof FullMatchedAnswerSourceCode
     */
    questionTitle: string;
    /**
     * ソースコード
     * @type {string}
     * @memberof FullMatchedAnswerSourceCode
     */
    sourceCode: string;
    /**
     * 
     * @type {number}
     * @memberof FullMatchedAnswerSourceCode
     */
    pgLangId: number;
    /**
     * 
     * @type {string}
     * @memberof FullMatchedAnswerSourceCode
     */
    pgLangName: string;
    /**
     * 
     * @type {Array<FullMatchedAnswerUser>}
     * @memberof FullMatchedAnswerSourceCode
     */
    matchedUserList: Array<FullMatchedAnswerUser>;
}

/**
 * Check if a given object implements the FullMatchedAnswerSourceCode interface.
 */
export function instanceOfFullMatchedAnswerSourceCode(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "questionTitle" in value;
    isInstance = isInstance && "sourceCode" in value;
    isInstance = isInstance && "pgLangId" in value;
    isInstance = isInstance && "pgLangName" in value;
    isInstance = isInstance && "matchedUserList" in value;

    return isInstance;
}

export function FullMatchedAnswerSourceCodeFromJSON(json: any): FullMatchedAnswerSourceCode {
    return FullMatchedAnswerSourceCodeFromJSONTyped(json, false);
}

export function FullMatchedAnswerSourceCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FullMatchedAnswerSourceCode {
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
    };
}

export function FullMatchedAnswerSourceCodeToJSON(value?: FullMatchedAnswerSourceCode | null): any {
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
    };
}

