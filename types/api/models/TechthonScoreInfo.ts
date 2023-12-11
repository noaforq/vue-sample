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
 * @interface TechthonScoreInfo
 */
export interface TechthonScoreInfo {
    /**
     * 獲得したミドルウェアの得点
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    middlewareScore?: number;
    /**
     * ミドルウェアで獲得可能な最大点数
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    middlewareMaxScore?: number;
    /**
     * 獲得したOSの得点
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    osScore?: number;
    /**
     * OSで獲得可能な最大点数
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    osMaxScore?: number;
    /**
     * 獲得したネットワークの得点
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    networkScore?: number;
    /**
     * ネットワークで獲得可能な最大点数
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    networkMaxScore?: number;
    /**
     * 獲得したアプリケーションの得点
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    applicationScore?: number;
    /**
     * アプリケーションで獲得可能な最大点数
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    applicationMaxScore?: number;
    /**
     * 獲得した合計得点
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    totalScore?: number;
    /**
     * 獲得可能な合計点数
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    totalMaxScore?: number;
    /**
     * 順位
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    rank: number;
    /**
     * 合計参加チーム数
     * @type {number}
     * @memberof TechthonScoreInfo
     */
    teamCount: number;
}

/**
 * Check if a given object implements the TechthonScoreInfo interface.
 */
export function instanceOfTechthonScoreInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rank" in value;
    isInstance = isInstance && "teamCount" in value;

    return isInstance;
}

export function TechthonScoreInfoFromJSON(json: any): TechthonScoreInfo {
    return TechthonScoreInfoFromJSONTyped(json, false);
}

export function TechthonScoreInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonScoreInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'middlewareScore': !exists(json, 'middlewareScore') ? undefined : json['middlewareScore'],
        'middlewareMaxScore': !exists(json, 'middlewareMaxScore') ? undefined : json['middlewareMaxScore'],
        'osScore': !exists(json, 'osScore') ? undefined : json['osScore'],
        'osMaxScore': !exists(json, 'osMaxScore') ? undefined : json['osMaxScore'],
        'networkScore': !exists(json, 'networkScore') ? undefined : json['networkScore'],
        'networkMaxScore': !exists(json, 'networkMaxScore') ? undefined : json['networkMaxScore'],
        'applicationScore': !exists(json, 'applicationScore') ? undefined : json['applicationScore'],
        'applicationMaxScore': !exists(json, 'applicationMaxScore') ? undefined : json['applicationMaxScore'],
        'totalScore': !exists(json, 'totalScore') ? undefined : json['totalScore'],
        'totalMaxScore': !exists(json, 'totalMaxScore') ? undefined : json['totalMaxScore'],
        'rank': json['rank'],
        'teamCount': json['teamCount'],
    };
}

export function TechthonScoreInfoToJSON(value?: TechthonScoreInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'middlewareScore': value.middlewareScore,
        'middlewareMaxScore': value.middlewareMaxScore,
        'osScore': value.osScore,
        'osMaxScore': value.osMaxScore,
        'networkScore': value.networkScore,
        'networkMaxScore': value.networkMaxScore,
        'applicationScore': value.applicationScore,
        'applicationMaxScore': value.applicationMaxScore,
        'totalScore': value.totalScore,
        'totalMaxScore': value.totalMaxScore,
        'rank': value.rank,
        'teamCount': value.teamCount,
    };
}

