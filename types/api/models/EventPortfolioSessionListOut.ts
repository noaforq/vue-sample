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
 * @interface EventPortfolioSessionListOut
 */
export interface EventPortfolioSessionListOut {
    /**
     * セッションID
     * @type {number}
     * @memberof EventPortfolioSessionListOut
     */
    id: number;
    /**
     * セッション名
     * @type {string}
     * @memberof EventPortfolioSessionListOut
     */
    name: string;
    /**
     * イベントID
     * @type {number}
     * @memberof EventPortfolioSessionListOut
     */
    eventId: number;
    /**
     * セッションコード
     * @type {string}
     * @memberof EventPortfolioSessionListOut
     */
    sessionCode: string;
    /**
     * セッション開始日時
     * @type {Date}
     * @memberof EventPortfolioSessionListOut
     */
    startsAt: Date;
    /**
     * セッション終了日時
     * @type {Date}
     * @memberof EventPortfolioSessionListOut
     */
    endsAt: Date;
    /**
     * 順位
     * @type {number}
     * @memberof EventPortfolioSessionListOut
     */
    rank: number;
    /**
     * 参加者数
     * @type {number}
     * @memberof EventPortfolioSessionListOut
     */
    totalCount: number;
}

/**
 * Check if a given object implements the EventPortfolioSessionListOut interface.
 */
export function instanceOfEventPortfolioSessionListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "sessionCode" in value;
    isInstance = isInstance && "startsAt" in value;
    isInstance = isInstance && "endsAt" in value;
    isInstance = isInstance && "rank" in value;
    isInstance = isInstance && "totalCount" in value;

    return isInstance;
}

export function EventPortfolioSessionListOutFromJSON(json: any): EventPortfolioSessionListOut {
    return EventPortfolioSessionListOutFromJSONTyped(json, false);
}

export function EventPortfolioSessionListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventPortfolioSessionListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'eventId': json['eventId'],
        'sessionCode': json['sessionCode'],
        'startsAt': (new Date(json['startsAt'])),
        'endsAt': (new Date(json['endsAt'])),
        'rank': json['rank'],
        'totalCount': json['totalCount'],
    };
}

export function EventPortfolioSessionListOutToJSON(value?: EventPortfolioSessionListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'eventId': value.eventId,
        'sessionCode': value.sessionCode,
        'startsAt': (value.startsAt.toISOString()),
        'endsAt': (value.endsAt.toISOString()),
        'rank': value.rank,
        'totalCount': value.totalCount,
    };
}

