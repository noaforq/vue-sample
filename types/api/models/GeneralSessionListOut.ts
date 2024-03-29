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
import type { SessionStatus } from './SessionStatus';
import {
    SessionStatusFromJSON,
    SessionStatusFromJSONTyped,
    SessionStatusToJSON,
} from './SessionStatus';

/**
 * 
 * @export
 * @interface GeneralSessionListOut
 */
export interface GeneralSessionListOut {
    /**
     * セッションID
     * @type {number}
     * @memberof GeneralSessionListOut
     */
    id: number;
    /**
     * セッションコード
     * @type {string}
     * @memberof GeneralSessionListOut
     */
    sessionCode: string;
    /**
     * セッション名
     * @type {string}
     * @memberof GeneralSessionListOut
     */
    name: string;
    /**
     * セッション開始日時
     * @type {Date}
     * @memberof GeneralSessionListOut
     */
    startsAt: Date;
    /**
     * セッション終了日時
     * @type {Date}
     * @memberof GeneralSessionListOut
     */
    endsAt: Date;
    /**
     * 
     * @type {SessionStatus}
     * @memberof GeneralSessionListOut
     */
    sessionStatus: SessionStatus;
    /**
     * 
     * @type {string}
     * @memberof GeneralSessionListOut
     */
    sessionStatusLabel: string;
    /**
     * セッション参加人数
     * @type {number}
     * @memberof GeneralSessionListOut
     */
    sessionUserCount: number;
    /**
     * セッションがアクティブか
     * @type {boolean}
     * @memberof GeneralSessionListOut
     */
    isActive: boolean;
}

/**
 * Check if a given object implements the GeneralSessionListOut interface.
 */
export function instanceOfGeneralSessionListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "sessionCode" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "startsAt" in value;
    isInstance = isInstance && "endsAt" in value;
    isInstance = isInstance && "sessionStatus" in value;
    isInstance = isInstance && "sessionStatusLabel" in value;
    isInstance = isInstance && "sessionUserCount" in value;
    isInstance = isInstance && "isActive" in value;

    return isInstance;
}

export function GeneralSessionListOutFromJSON(json: any): GeneralSessionListOut {
    return GeneralSessionListOutFromJSONTyped(json, false);
}

export function GeneralSessionListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralSessionListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'sessionCode': json['sessionCode'],
        'name': json['name'],
        'startsAt': (new Date(json['startsAt'])),
        'endsAt': (new Date(json['endsAt'])),
        'sessionStatus': SessionStatusFromJSON(json['sessionStatus']),
        'sessionStatusLabel': json['sessionStatusLabel'],
        'sessionUserCount': json['sessionUserCount'],
        'isActive': json['isActive'],
    };
}

export function GeneralSessionListOutToJSON(value?: GeneralSessionListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'sessionCode': value.sessionCode,
        'name': value.name,
        'startsAt': (value.startsAt.toISOString()),
        'endsAt': (value.endsAt.toISOString()),
        'sessionStatus': SessionStatusToJSON(value.sessionStatus),
        'sessionStatusLabel': value.sessionStatusLabel,
        'sessionUserCount': value.sessionUserCount,
        'isActive': value.isActive,
    };
}

