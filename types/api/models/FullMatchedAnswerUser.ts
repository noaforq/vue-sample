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
 * 解答の完全一致 完全一致したコードの該当者
 * @export
 * @interface FullMatchedAnswerUser
 */
export interface FullMatchedAnswerUser {
    /**
     * 参加者ID
     * @type {number}
     * @memberof FullMatchedAnswerUser
     */
    userId: number;
    /**
     * アカウント名
     * @type {string}
     * @memberof FullMatchedAnswerUser
     */
    username: string;
}

/**
 * Check if a given object implements the FullMatchedAnswerUser interface.
 */
export function instanceOfFullMatchedAnswerUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "username" in value;

    return isInstance;
}

export function FullMatchedAnswerUserFromJSON(json: any): FullMatchedAnswerUser {
    return FullMatchedAnswerUserFromJSONTyped(json, false);
}

export function FullMatchedAnswerUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): FullMatchedAnswerUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'username': json['username'],
    };
}

export function FullMatchedAnswerUserToJSON(value?: FullMatchedAnswerUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'username': value.username,
    };
}
