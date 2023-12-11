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
 * @interface GetEventUserRankingOut
 */
export interface GetEventUserRankingOut {
    /**
     * 順位
     * @type {number}
     * @memberof GetEventUserRankingOut
     */
    rank: number;
    /**
     * ユーザーID
     * @type {number}
     * @memberof GetEventUserRankingOut
     */
    userId: number;
    /**
     * ユーザー名
     * @type {string}
     * @memberof GetEventUserRankingOut
     */
    username: string;
    /**
     * 名前(SU, ST, 主催学校)
     * @type {string}
     * @memberof GetEventUserRankingOut
     */
    fullName: string | null;
    /**
     * 補足(主催企業、学校)
     * @type {string}
     * @memberof GetEventUserRankingOut
     */
    extraInfo?: string | null;
    /**
     * 出身都道府県
     * @type {string}
     * @memberof GetEventUserRankingOut
     */
    birthPrefecture?: string | null;
    /**
     * 卒業予定
     * @type {Date}
     * @memberof GetEventUserRankingOut
     */
    graduateAt?: Date | null;
    /**
     * 学校/企業
     * @type {string}
     * @memberof GetEventUserRankingOut
     */
    organizationName?: string | null;
    /**
     * スコア
     * @type {number}
     * @memberof GetEventUserRankingOut
     */
    score: number;
}

/**
 * Check if a given object implements the GetEventUserRankingOut interface.
 */
export function instanceOfGetEventUserRankingOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rank" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "fullName" in value;
    isInstance = isInstance && "score" in value;

    return isInstance;
}

export function GetEventUserRankingOutFromJSON(json: any): GetEventUserRankingOut {
    return GetEventUserRankingOutFromJSONTyped(json, false);
}

export function GetEventUserRankingOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEventUserRankingOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rank': json['rank'],
        'userId': json['userId'],
        'username': json['username'],
        'fullName': json['fullName'],
        'extraInfo': !exists(json, 'extraInfo') ? undefined : json['extraInfo'],
        'birthPrefecture': !exists(json, 'birthPrefecture') ? undefined : json['birthPrefecture'],
        'graduateAt': !exists(json, 'graduateAt') ? undefined : (json['graduateAt'] === null ? null : new Date(json['graduateAt'])),
        'organizationName': !exists(json, 'organizationName') ? undefined : json['organizationName'],
        'score': json['score'],
    };
}

export function GetEventUserRankingOutToJSON(value?: GetEventUserRankingOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rank': value.rank,
        'userId': value.userId,
        'username': value.username,
        'fullName': value.fullName,
        'extraInfo': value.extraInfo,
        'birthPrefecture': value.birthPrefecture,
        'graduateAt': value.graduateAt === undefined ? undefined : (value.graduateAt === null ? null : value.graduateAt.toISOString().substring(0,10)),
        'organizationName': value.organizationName,
        'score': value.score,
    };
}
