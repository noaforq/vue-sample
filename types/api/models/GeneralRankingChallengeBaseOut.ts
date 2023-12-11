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
 * @interface GeneralRankingChallengeBaseOut
 */
export interface GeneralRankingChallengeBaseOut {
    /**
     * アイコンURL
     * @type {string}
     * @memberof GeneralRankingChallengeBaseOut
     */
    icon: string;
    /**
     * ユーザー名(表示名)
     * @type {string}
     * @memberof GeneralRankingChallengeBaseOut
     */
    displayName: string;
    /**
     * 順位
     * @type {number}
     * @memberof GeneralRankingChallengeBaseOut
     */
    rank: number | null;
    /**
     * 獲得した得点もしくは正解した問題数
     * @type {number}
     * @memberof GeneralRankingChallengeBaseOut
     */
    totalScoreOrTotalAnswer: number;
}

/**
 * Check if a given object implements the GeneralRankingChallengeBaseOut interface.
 */
export function instanceOfGeneralRankingChallengeBaseOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "rank" in value;
    isInstance = isInstance && "totalScoreOrTotalAnswer" in value;

    return isInstance;
}

export function GeneralRankingChallengeBaseOutFromJSON(json: any): GeneralRankingChallengeBaseOut {
    return GeneralRankingChallengeBaseOutFromJSONTyped(json, false);
}

export function GeneralRankingChallengeBaseOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralRankingChallengeBaseOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'icon': json['icon'],
        'displayName': json['displayName'],
        'rank': json['rank'],
        'totalScoreOrTotalAnswer': json['totalScoreOrTotalAnswer'],
    };
}

export function GeneralRankingChallengeBaseOutToJSON(value?: GeneralRankingChallengeBaseOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'icon': value.icon,
        'displayName': value.displayName,
        'rank': value.rank,
        'totalScoreOrTotalAnswer': value.totalScoreOrTotalAnswer,
    };
}

