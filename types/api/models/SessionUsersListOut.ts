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
import type { SessionUserStatus } from './SessionUserStatus';
import {
    SessionUserStatusFromJSON,
    SessionUserStatusFromJSONTyped,
    SessionUserStatusToJSON,
} from './SessionUserStatus';

/**
 * 
 * @export
 * @interface SessionUsersListOut
 */
export interface SessionUsersListOut {
    /**
     * 参加者ユーザID
     * @type {number}
     * @memberof SessionUsersListOut
     */
    id: number;
    /**
     * 参加者名
     * @type {string}
     * @memberof SessionUsersListOut
     */
    username: string;
    /**
     * 参加日
     * @type {Date}
     * @memberof SessionUsersListOut
     */
    joinedAt: Date;
    /**
     * 
     * @type {SessionUserStatus}
     * @memberof SessionUsersListOut
     */
    sessionUserStatus: SessionUserStatus;
    /**
     * 表示名
     * @type {string}
     * @memberof SessionUsersListOut
     */
    displayName?: string | null;
    /**
     * 名前(本名)
     * @type {string}
     * @memberof SessionUsersListOut
     */
    userRealName?: string | null;
    /**
     * 補足
     * @type {string}
     * @memberof SessionUsersListOut
     */
    extraInfo?: string | null;
    /**
     * 所属組織名
     * @type {string}
     * @memberof SessionUsersListOut
     */
    organizationName?: string | null;
    /**
     * 都道府県
     * @type {string}
     * @memberof SessionUsersListOut
     */
    prefectureName?: string | null;
    /**
     * 卒業予定
     * @type {Date}
     * @memberof SessionUsersListOut
     */
    graduationSchedule?: Date | null;
    /**
     * 学籍番号
     * @type {string}
     * @memberof SessionUsersListOut
     */
    studentNumber?: string | null;
    /**
     * 検定試験
     * @type {number}
     * @memberof SessionUsersListOut
     */
    certificationExam?: number | null;
    /**
     * セッションステータス
     * @type {number}
     * @memberof SessionUsersListOut
     */
    sessionStatus?: number | null;
}

/**
 * Check if a given object implements the SessionUsersListOut interface.
 */
export function instanceOfSessionUsersListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "joinedAt" in value;
    isInstance = isInstance && "sessionUserStatus" in value;

    return isInstance;
}

export function SessionUsersListOutFromJSON(json: any): SessionUsersListOut {
    return SessionUsersListOutFromJSONTyped(json, false);
}

export function SessionUsersListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionUsersListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': json['username'],
        'joinedAt': (new Date(json['joinedAt'])),
        'sessionUserStatus': SessionUserStatusFromJSON(json['sessionUserStatus']),
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'userRealName': !exists(json, 'userRealName') ? undefined : json['userRealName'],
        'extraInfo': !exists(json, 'extraInfo') ? undefined : json['extraInfo'],
        'organizationName': !exists(json, 'organizationName') ? undefined : json['organizationName'],
        'prefectureName': !exists(json, 'prefectureName') ? undefined : json['prefectureName'],
        'graduationSchedule': !exists(json, 'graduationSchedule') ? undefined : (json['graduationSchedule'] === null ? null : new Date(json['graduationSchedule'])),
        'studentNumber': !exists(json, 'studentNumber') ? undefined : json['studentNumber'],
        'certificationExam': !exists(json, 'certificationExam') ? undefined : json['certificationExam'],
        'sessionStatus': !exists(json, 'sessionStatus') ? undefined : json['sessionStatus'],
    };
}

export function SessionUsersListOutToJSON(value?: SessionUsersListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'joinedAt': (value.joinedAt.toISOString()),
        'sessionUserStatus': SessionUserStatusToJSON(value.sessionUserStatus),
        'displayName': value.displayName,
        'userRealName': value.userRealName,
        'extraInfo': value.extraInfo,
        'organizationName': value.organizationName,
        'prefectureName': value.prefectureName,
        'graduationSchedule': value.graduationSchedule === undefined ? undefined : (value.graduationSchedule === null ? null : value.graduationSchedule.toISOString().substring(0,10)),
        'studentNumber': value.studentNumber,
        'certificationExam': value.certificationExam,
        'sessionStatus': value.sessionStatus,
    };
}

