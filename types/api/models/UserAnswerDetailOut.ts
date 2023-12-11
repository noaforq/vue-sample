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
 * 各ユーザー解答
 * @export
 * @interface UserAnswerDetailOut
 */
export interface UserAnswerDetailOut {
    /**
     * ユーザーID
     * @type {number}
     * @memberof UserAnswerDetailOut
     */
    id: number;
    /**
     * 参加ユーザー名
     * @type {string}
     * @memberof UserAnswerDetailOut
     */
    username: string;
    /**
     * 参加者本名
     * @type {string}
     * @memberof UserAnswerDetailOut
     */
    userRealName: string;
    /**
     * 補足情報
     * @type {string}
     * @memberof UserAnswerDetailOut
     */
    extraInfo?: string;
    /**
     * 提出日時
     * @type {Date}
     * @memberof UserAnswerDetailOut
     */
    submittedAt: Date;
    /**
     * 成績使用提出か
     * @type {boolean}
     * @memberof UserAnswerDetailOut
     */
    isScoringTarget: boolean;
    /**
     * 提出コード
     * @type {string}
     * @memberof UserAnswerDetailOut
     */
    submittedCode: string;
    /**
     * 提出コード
     * @type {string}
     * @memberof UserAnswerDetailOut
     */
    pgLang: string;
    /**
     * 指定したキーワードの出現回数
     * @type {number}
     * @memberof UserAnswerDetailOut
     */
    searchResultCount: number;
}

/**
 * Check if a given object implements the UserAnswerDetailOut interface.
 */
export function instanceOfUserAnswerDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "userRealName" in value;
    isInstance = isInstance && "submittedAt" in value;
    isInstance = isInstance && "isScoringTarget" in value;
    isInstance = isInstance && "submittedCode" in value;
    isInstance = isInstance && "pgLang" in value;
    isInstance = isInstance && "searchResultCount" in value;

    return isInstance;
}

export function UserAnswerDetailOutFromJSON(json: any): UserAnswerDetailOut {
    return UserAnswerDetailOutFromJSONTyped(json, false);
}

export function UserAnswerDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAnswerDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': json['username'],
        'userRealName': json['userRealName'],
        'extraInfo': !exists(json, 'extraInfo') ? undefined : json['extraInfo'],
        'submittedAt': (new Date(json['submittedAt'])),
        'isScoringTarget': json['isScoringTarget'],
        'submittedCode': json['submittedCode'],
        'pgLang': json['pgLang'],
        'searchResultCount': json['searchResultCount'],
    };
}

export function UserAnswerDetailOutToJSON(value?: UserAnswerDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'userRealName': value.userRealName,
        'extraInfo': value.extraInfo,
        'submittedAt': (value.submittedAt.toISOString()),
        'isScoringTarget': value.isScoringTarget,
        'submittedCode': value.submittedCode,
        'pgLang': value.pgLang,
        'searchResultCount': value.searchResultCount,
    };
}
