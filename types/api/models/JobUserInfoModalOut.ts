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
import type { CurrentJob } from './CurrentJob';
import {
    CurrentJobFromJSON,
    CurrentJobFromJSONTyped,
    CurrentJobToJSON,
} from './CurrentJob';
import type { JobHuntingType } from './JobHuntingType';
import {
    JobHuntingTypeFromJSON,
    JobHuntingTypeFromJSONTyped,
    JobHuntingTypeToJSON,
} from './JobHuntingType';
import type { ReferableUserStatus } from './ReferableUserStatus';
import {
    ReferableUserStatusFromJSON,
    ReferableUserStatusFromJSONTyped,
    ReferableUserStatusToJSON,
} from './ReferableUserStatus';
import type { SkillLevel } from './SkillLevel';
import {
    SkillLevelFromJSON,
    SkillLevelFromJSONTyped,
    SkillLevelToJSON,
} from './SkillLevel';
import type { UserUsedPgLangs } from './UserUsedPgLangs';
import {
    UserUsedPgLangsFromJSON,
    UserUsedPgLangsFromJSONTyped,
    UserUsedPgLangsToJSON,
} from './UserUsedPgLangs';

/**
 * ユーザー情報モーダル
 * スカウト承諾済みでないユーザーで表示
 * @export
 * @interface JobUserInfoModalOut
 */
export interface JobUserInfoModalOut {
    /**
     * ユーザID
     * @type {number}
     * @memberof JobUserInfoModalOut
     */
    id: number;
    /**
     * アカウント名
     * @type {string}
     * @memberof JobUserInfoModalOut
     */
    username?: string | null;
    /**
     * 名
     * @type {string}
     * @memberof JobUserInfoModalOut
     */
    firstName?: string | null;
    /**
     * 姓
     * @type {string}
     * @memberof JobUserInfoModalOut
     */
    lastName?: string | null;
    /**
     * 
     * @type {SkillLevel}
     * @memberof JobUserInfoModalOut
     */
    skillLevel?: SkillLevel | null;
    /**
     * 現住所
     * @type {string}
     * @memberof JobUserInfoModalOut
     */
    currentPrefectureCity?: string | null;
    /**
     * 
     * @type {CurrentJob}
     * @memberof JobUserInfoModalOut
     */
    currentJob?: CurrentJob | null;
    /**
     * 
     * @type {JobHuntingType}
     * @memberof JobUserInfoModalOut
     */
    jobHuntingType?: JobHuntingType | null;
    /**
     * 卒業年月
     * @type {Date}
     * @memberof JobUserInfoModalOut
     */
    schoolGraduationDate?: Date | null;
    /**
     * 希望職種
     * @type {Array<string>}
     * @memberof JobUserInfoModalOut
     */
    desiredOccupationName: Array<string>;
    /**
     * 希望勤務地
     * @type {Array<string>}
     * @memberof JobUserInfoModalOut
     */
    desiredPrefectureName: Array<string>;
    /**
     * 自己PR
     * @type {string}
     * @memberof JobUserInfoModalOut
     */
    selfPr?: string;
    /**
     * 
     * @type {Array<UserUsedPgLangs>}
     * @memberof JobUserInfoModalOut
     */
    userUsedPgLangs: Array<UserUsedPgLangs>;
    /**
     * アイコンURL
     * @type {string}
     * @memberof JobUserInfoModalOut
     */
    icon: string;
    /**
     * 
     * @type {ReferableUserStatus}
     * @memberof JobUserInfoModalOut
     */
    scoutStatus: ReferableUserStatus;
}

/**
 * Check if a given object implements the JobUserInfoModalOut interface.
 */
export function instanceOfJobUserInfoModalOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "desiredOccupationName" in value;
    isInstance = isInstance && "desiredPrefectureName" in value;
    isInstance = isInstance && "userUsedPgLangs" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "scoutStatus" in value;

    return isInstance;
}

export function JobUserInfoModalOutFromJSON(json: any): JobUserInfoModalOut {
    return JobUserInfoModalOutFromJSONTyped(json, false);
}

export function JobUserInfoModalOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobUserInfoModalOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'skillLevel': !exists(json, 'skillLevel') ? undefined : SkillLevelFromJSON(json['skillLevel']),
        'currentPrefectureCity': !exists(json, 'currentPrefectureCity') ? undefined : json['currentPrefectureCity'],
        'currentJob': !exists(json, 'currentJob') ? undefined : CurrentJobFromJSON(json['currentJob']),
        'jobHuntingType': !exists(json, 'jobHuntingType') ? undefined : JobHuntingTypeFromJSON(json['jobHuntingType']),
        'schoolGraduationDate': !exists(json, 'schoolGraduationDate') ? undefined : (json['schoolGraduationDate'] === null ? null : new Date(json['schoolGraduationDate'])),
        'desiredOccupationName': json['desiredOccupationName'],
        'desiredPrefectureName': json['desiredPrefectureName'],
        'selfPr': !exists(json, 'selfPr') ? undefined : json['selfPr'],
        'userUsedPgLangs': ((json['userUsedPgLangs'] as Array<any>).map(UserUsedPgLangsFromJSON)),
        'icon': json['icon'],
        'scoutStatus': ReferableUserStatusFromJSON(json['scoutStatus']),
    };
}

export function JobUserInfoModalOutToJSON(value?: JobUserInfoModalOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'skillLevel': SkillLevelToJSON(value.skillLevel),
        'currentPrefectureCity': value.currentPrefectureCity,
        'currentJob': CurrentJobToJSON(value.currentJob),
        'jobHuntingType': JobHuntingTypeToJSON(value.jobHuntingType),
        'schoolGraduationDate': value.schoolGraduationDate === undefined ? undefined : (value.schoolGraduationDate === null ? null : value.schoolGraduationDate.toISOString().substring(0,10)),
        'desiredOccupationName': value.desiredOccupationName,
        'desiredPrefectureName': value.desiredPrefectureName,
        'selfPr': value.selfPr,
        'userUsedPgLangs': ((value.userUsedPgLangs as Array<any>).map(UserUsedPgLangsToJSON)),
        'icon': value.icon,
        'scoutStatus': ReferableUserStatusToJSON(value.scoutStatus),
    };
}
