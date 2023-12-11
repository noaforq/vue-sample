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
import type { AppSchemasManageJobsJobAccessLogOutUserListOut } from './AppSchemasManageJobsJobAccessLogOutUserListOut';
import {
    AppSchemasManageJobsJobAccessLogOutUserListOutFromJSON,
    AppSchemasManageJobsJobAccessLogOutUserListOutFromJSONTyped,
    AppSchemasManageJobsJobAccessLogOutUserListOutToJSON,
} from './AppSchemasManageJobsJobAccessLogOutUserListOut';
import type { LogListOut } from './LogListOut';
import {
    LogListOutFromJSON,
    LogListOutFromJSONTyped,
    LogListOutToJSON,
} from './LogListOut';

/**
 * 
 * @export
 * @interface JobAccessLogOut
 */
export interface JobAccessLogOut {
    /**
     * ユーザー一覧
     * @type {Array<AppSchemasManageJobsJobAccessLogOutUserListOut>}
     * @memberof JobAccessLogOut
     */
    userList: Array<AppSchemasManageJobsJobAccessLogOutUserListOut>;
    /**
     * 掲載開始日
     * @type {Date}
     * @memberof JobAccessLogOut
     */
    postingStartsAt?: Date | null;
    /**
     * 掲載終了日
     * @type {Date}
     * @memberof JobAccessLogOut
     */
    postingEndsAt?: Date | null;
    /**
     * 週毎のアクセスログリスト
     * @type {Array<LogListOut>}
     * @memberof JobAccessLogOut
     */
    logList: Array<LogListOut>;
}

/**
 * Check if a given object implements the JobAccessLogOut interface.
 */
export function instanceOfJobAccessLogOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userList" in value;
    isInstance = isInstance && "logList" in value;

    return isInstance;
}

export function JobAccessLogOutFromJSON(json: any): JobAccessLogOut {
    return JobAccessLogOutFromJSONTyped(json, false);
}

export function JobAccessLogOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobAccessLogOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userList': ((json['userList'] as Array<any>).map(AppSchemasManageJobsJobAccessLogOutUserListOutFromJSON)),
        'postingStartsAt': !exists(json, 'postingStartsAt') ? undefined : (json['postingStartsAt'] === null ? null : new Date(json['postingStartsAt'])),
        'postingEndsAt': !exists(json, 'postingEndsAt') ? undefined : (json['postingEndsAt'] === null ? null : new Date(json['postingEndsAt'])),
        'logList': ((json['logList'] as Array<any>).map(LogListOutFromJSON)),
    };
}

export function JobAccessLogOutToJSON(value?: JobAccessLogOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userList': ((value.userList as Array<any>).map(AppSchemasManageJobsJobAccessLogOutUserListOutToJSON)),
        'postingStartsAt': value.postingStartsAt === undefined ? undefined : (value.postingStartsAt === null ? null : value.postingStartsAt.toISOString().substring(0,10)),
        'postingEndsAt': value.postingEndsAt === undefined ? undefined : (value.postingEndsAt === null ? null : value.postingEndsAt.toISOString().substring(0,10)),
        'logList': ((value.logList as Array<any>).map(LogListOutToJSON)),
    };
}

