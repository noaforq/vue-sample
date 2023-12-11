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
 * @interface SessionRealTimeRankingListOut
 */
export interface SessionRealTimeRankingListOut {
    /**
     * ユーザーID
     * @type {number}
     * @memberof SessionRealTimeRankingListOut
     */
    id: number;
    /**
     * スコア
     * @type {number}
     * @memberof SessionRealTimeRankingListOut
     */
    score: number;
    /**
     * 順位
     * @type {number}
     * @memberof SessionRealTimeRankingListOut
     */
    order: number;
    /**
     * 参加者アカウント名
     * @type {string}
     * @memberof SessionRealTimeRankingListOut
     */
    userName: string;
    /**
     * 参加者実名
     * @type {string}
     * @memberof SessionRealTimeRankingListOut
     */
    userRealName?: string | null;
    /**
     * 組織名
     * @type {string}
     * @memberof SessionRealTimeRankingListOut
     */
    organizationName?: string | null;
    /**
     * 補足情報
     * @type {string}
     * @memberof SessionRealTimeRankingListOut
     */
    extraInfo?: string | null;
    /**
     * 学籍番号
     * @type {string}
     * @memberof SessionRealTimeRankingListOut
     */
    studentNumber?: string | null;
}

/**
 * Check if a given object implements the SessionRealTimeRankingListOut interface.
 */
export function instanceOfSessionRealTimeRankingListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "userName" in value;

    return isInstance;
}

export function SessionRealTimeRankingListOutFromJSON(json: any): SessionRealTimeRankingListOut {
    return SessionRealTimeRankingListOutFromJSONTyped(json, false);
}

export function SessionRealTimeRankingListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionRealTimeRankingListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'score': json['score'],
        'order': json['order'],
        'userName': json['userName'],
        'userRealName': !exists(json, 'userRealName') ? undefined : json['userRealName'],
        'organizationName': !exists(json, 'organizationName') ? undefined : json['organizationName'],
        'extraInfo': !exists(json, 'extraInfo') ? undefined : json['extraInfo'],
        'studentNumber': !exists(json, 'studentNumber') ? undefined : json['studentNumber'],
    };
}

export function SessionRealTimeRankingListOutToJSON(value?: SessionRealTimeRankingListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'score': value.score,
        'order': value.order,
        'userName': value.userName,
        'userRealName': value.userRealName,
        'organizationName': value.organizationName,
        'extraInfo': value.extraInfo,
        'studentNumber': value.studentNumber,
    };
}

