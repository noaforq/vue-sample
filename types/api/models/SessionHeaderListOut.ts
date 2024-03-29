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
import type { SessionType } from './SessionType';
import {
    SessionTypeFromJSON,
    SessionTypeFromJSONTyped,
    SessionTypeToJSON,
} from './SessionType';

/**
 * セッションヘッダー情報
 * @export
 * @interface SessionHeaderListOut
 */
export interface SessionHeaderListOut {
    /**
     * セッションID
     * @type {number}
     * @memberof SessionHeaderListOut
     */
    sessionId: number;
    /**
     * セッション名
     * @type {string}
     * @memberof SessionHeaderListOut
     */
    sessionName: string;
    /**
     * イベントID
     * @type {number}
     * @memberof SessionHeaderListOut
     */
    eventId: number;
    /**
     * イベント名
     * @type {string}
     * @memberof SessionHeaderListOut
     */
    eventName: string;
    /**
     * イベントテーマ
     * @type {string}
     * @memberof SessionHeaderListOut
     */
    eventTheme: string;
    /**
     * セッション開始日時
     * @type {Date}
     * @memberof SessionHeaderListOut
     */
    startsAt: Date;
    /**
     * セッション終了日時
     * @type {Date}
     * @memberof SessionHeaderListOut
     */
    endsAt: Date;
    /**
     * 
     * @type {SessionType}
     * @memberof SessionHeaderListOut
     */
    sessionType?: SessionType | null;
    /**
     * 参加人数
     * @type {number}
     * @memberof SessionHeaderListOut
     */
    sessionUserCount: number;
    /**
     * セッションコード
     * @type {string}
     * @memberof SessionHeaderListOut
     */
    sessionCode: string;
    /**
     * パスワード
     * @type {string}
     * @memberof SessionHeaderListOut
     */
    password: string;
    /**
     * 開催場所
     * @type {string}
     * @memberof SessionHeaderListOut
     */
    location: string;
    /**
     * 練習用セッションか
     * @type {boolean}
     * @memberof SessionHeaderListOut
     */
    isPracticeSession: boolean | null;
    /**
     * 公開中かどうか
     * @type {boolean}
     * @memberof SessionHeaderListOut
     */
    isActive: boolean | null;
    /**
     * 問題数
     * @type {number}
     * @memberof SessionHeaderListOut
     */
    sessionContentCount?: number | null;
    /**
     * 制限対象の卒業年度(最小値)
     * @type {number}
     * @memberof SessionHeaderListOut
     */
    minGraduationYearOfRestriction: number | null;
    /**
     * 制限対象の卒業年度(最大値)
     * @type {number}
     * @memberof SessionHeaderListOut
     */
    maxGraduationYearOfRestriction: number | null;
}

/**
 * Check if a given object implements the SessionHeaderListOut interface.
 */
export function instanceOfSessionHeaderListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionId" in value;
    isInstance = isInstance && "sessionName" in value;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "eventName" in value;
    isInstance = isInstance && "eventTheme" in value;
    isInstance = isInstance && "startsAt" in value;
    isInstance = isInstance && "endsAt" in value;
    isInstance = isInstance && "sessionUserCount" in value;
    isInstance = isInstance && "sessionCode" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "location" in value;
    isInstance = isInstance && "isPracticeSession" in value;
    isInstance = isInstance && "isActive" in value;
    isInstance = isInstance && "minGraduationYearOfRestriction" in value;
    isInstance = isInstance && "maxGraduationYearOfRestriction" in value;

    return isInstance;
}

export function SessionHeaderListOutFromJSON(json: any): SessionHeaderListOut {
    return SessionHeaderListOutFromJSONTyped(json, false);
}

export function SessionHeaderListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionHeaderListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionId': json['sessionId'],
        'sessionName': json['sessionName'],
        'eventId': json['eventId'],
        'eventName': json['eventName'],
        'eventTheme': json['eventTheme'],
        'startsAt': (new Date(json['startsAt'])),
        'endsAt': (new Date(json['endsAt'])),
        'sessionType': !exists(json, 'sessionType') ? undefined : SessionTypeFromJSON(json['sessionType']),
        'sessionUserCount': json['sessionUserCount'],
        'sessionCode': json['sessionCode'],
        'password': json['password'],
        'location': json['location'],
        'isPracticeSession': json['isPracticeSession'],
        'isActive': json['isActive'],
        'sessionContentCount': !exists(json, 'sessionContentCount') ? undefined : json['sessionContentCount'],
        'minGraduationYearOfRestriction': json['minGraduationYearOfRestriction'],
        'maxGraduationYearOfRestriction': json['maxGraduationYearOfRestriction'],
    };
}

export function SessionHeaderListOutToJSON(value?: SessionHeaderListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionId': value.sessionId,
        'sessionName': value.sessionName,
        'eventId': value.eventId,
        'eventName': value.eventName,
        'eventTheme': value.eventTheme,
        'startsAt': (value.startsAt.toISOString()),
        'endsAt': (value.endsAt.toISOString()),
        'sessionType': SessionTypeToJSON(value.sessionType),
        'sessionUserCount': value.sessionUserCount,
        'sessionCode': value.sessionCode,
        'password': value.password,
        'location': value.location,
        'isPracticeSession': value.isPracticeSession,
        'isActive': value.isActive,
        'sessionContentCount': value.sessionContentCount,
        'minGraduationYearOfRestriction': value.minGraduationYearOfRestriction,
        'maxGraduationYearOfRestriction': value.maxGraduationYearOfRestriction,
    };
}

