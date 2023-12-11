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
import type { GeneralRankingChallengeBaseOut } from './GeneralRankingChallengeBaseOut';
import {
    GeneralRankingChallengeBaseOutFromJSON,
    GeneralRankingChallengeBaseOutFromJSONTyped,
    GeneralRankingChallengeBaseOutToJSON,
} from './GeneralRankingChallengeBaseOut';

/**
 * 
 * @export
 * @interface GeneralRankingChallengeOut
 */
export interface GeneralRankingChallengeOut {
    /**
     * 
     * @type {GeneralRankingChallengeBaseOut}
     * @memberof GeneralRankingChallengeOut
     */
    ownUser: GeneralRankingChallengeBaseOut;
    /**
     * 合計ユーザー数
     * @type {number}
     * @memberof GeneralRankingChallengeOut
     */
    totalUserCount: number;
    /**
     * 上位10人のユーザ名とスコア
     * @type {Array<GeneralRankingChallengeBaseOut>}
     * @memberof GeneralRankingChallengeOut
     */
    top10Users: Array<GeneralRankingChallengeBaseOut>;
    /**
     * 次の順位に上がるための残りスコア数
     * @type {number}
     * @memberof GeneralRankingChallengeOut
     */
    scoreForNextRank: number | null;
}

/**
 * Check if a given object implements the GeneralRankingChallengeOut interface.
 */
export function instanceOfGeneralRankingChallengeOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ownUser" in value;
    isInstance = isInstance && "totalUserCount" in value;
    isInstance = isInstance && "top10Users" in value;
    isInstance = isInstance && "scoreForNextRank" in value;

    return isInstance;
}

export function GeneralRankingChallengeOutFromJSON(json: any): GeneralRankingChallengeOut {
    return GeneralRankingChallengeOutFromJSONTyped(json, false);
}

export function GeneralRankingChallengeOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralRankingChallengeOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ownUser': GeneralRankingChallengeBaseOutFromJSON(json['ownUser']),
        'totalUserCount': json['totalUserCount'],
        'top10Users': ((json['top10Users'] as Array<any>).map(GeneralRankingChallengeBaseOutFromJSON)),
        'scoreForNextRank': json['scoreForNextRank'],
    };
}

export function GeneralRankingChallengeOutToJSON(value?: GeneralRankingChallengeOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ownUser': GeneralRankingChallengeBaseOutToJSON(value.ownUser),
        'totalUserCount': value.totalUserCount,
        'top10Users': ((value.top10Users as Array<any>).map(GeneralRankingChallengeBaseOutToJSON)),
        'scoreForNextRank': value.scoreForNextRank,
    };
}

