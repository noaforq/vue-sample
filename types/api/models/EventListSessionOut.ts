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
 * @interface EventListSessionOut
 */
export interface EventListSessionOut {
    /**
     * 
     * @type {number}
     * @memberof EventListSessionOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof EventListSessionOut
     */
    createdAt: Date;
    /**
     * セッションコード
     * @type {string}
     * @memberof EventListSessionOut
     */
    sessionCode: string;
    /**
     * 
     * @type {string}
     * @memberof EventListSessionOut
     */
    name: string;
    /**
     * セッション開始日時
     * @type {Date}
     * @memberof EventListSessionOut
     */
    startsAt: Date;
    /**
     * セッション終了日時
     * @type {Date}
     * @memberof EventListSessionOut
     */
    endsAt: Date;
    /**
     * イベント参加人数
     * @type {number}
     * @memberof EventListSessionOut
     */
    userCount: number;
    /**
     * 
     * @type {SessionStatus}
     * @memberof EventListSessionOut
     */
    sessionStatus: SessionStatus;
    /**
     * 
     * @type {string}
     * @memberof EventListSessionOut
     */
    sessionStatusLabel: string;
    /**
     * セッションが終了している
     * @type {boolean}
     * @memberof EventListSessionOut
     */
    isFinished: boolean;
}

/**
 * Check if a given object implements the EventListSessionOut interface.
 */
export function instanceOfEventListSessionOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "sessionCode" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "startsAt" in value;
    isInstance = isInstance && "endsAt" in value;
    isInstance = isInstance && "userCount" in value;
    isInstance = isInstance && "sessionStatus" in value;
    isInstance = isInstance && "sessionStatusLabel" in value;
    isInstance = isInstance && "isFinished" in value;

    return isInstance;
}

export function EventListSessionOutFromJSON(json: any): EventListSessionOut {
    return EventListSessionOutFromJSONTyped(json, false);
}

export function EventListSessionOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventListSessionOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'sessionCode': json['sessionCode'],
        'name': json['name'],
        'startsAt': (new Date(json['startsAt'])),
        'endsAt': (new Date(json['endsAt'])),
        'userCount': json['userCount'],
        'sessionStatus': SessionStatusFromJSON(json['sessionStatus']),
        'sessionStatusLabel': json['sessionStatusLabel'],
        'isFinished': json['isFinished'],
    };
}

export function EventListSessionOutToJSON(value?: EventListSessionOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'sessionCode': value.sessionCode,
        'name': value.name,
        'startsAt': (value.startsAt.toISOString()),
        'endsAt': (value.endsAt.toISOString()),
        'userCount': value.userCount,
        'sessionStatus': SessionStatusToJSON(value.sessionStatus),
        'sessionStatusLabel': value.sessionStatusLabel,
        'isFinished': value.isFinished,
    };
}

