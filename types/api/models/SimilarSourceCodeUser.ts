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
 * 類似ソースコード ユーザー
 * @export
 * @interface SimilarSourceCodeUser
 */
export interface SimilarSourceCodeUser {
    /**
     * 参加者ID
     * @type {number}
     * @memberof SimilarSourceCodeUser
     */
    userId: number;
    /**
     * アカウント名
     * @type {string}
     * @memberof SimilarSourceCodeUser
     */
    username: string;
    /**
     * ソースコード
     * @type {string}
     * @memberof SimilarSourceCodeUser
     */
    sourceCode: string;
    /**
     * 完全一致したか
     * @type {boolean}
     * @memberof SimilarSourceCodeUser
     */
    isMatched?: boolean;
}

/**
 * Check if a given object implements the SimilarSourceCodeUser interface.
 */
export function instanceOfSimilarSourceCodeUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "sourceCode" in value;

    return isInstance;
}

export function SimilarSourceCodeUserFromJSON(json: any): SimilarSourceCodeUser {
    return SimilarSourceCodeUserFromJSONTyped(json, false);
}

export function SimilarSourceCodeUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimilarSourceCodeUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'username': json['username'],
        'sourceCode': json['sourceCode'],
        'isMatched': !exists(json, 'isMatched') ? undefined : json['isMatched'],
    };
}

export function SimilarSourceCodeUserToJSON(value?: SimilarSourceCodeUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'username': value.username,
        'sourceCode': value.sourceCode,
        'isMatched': value.isMatched,
    };
}
