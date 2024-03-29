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
 * @interface AppSchemasManageJobsJobAccessLogOutUserListOut
 */
export interface AppSchemasManageJobsJobAccessLogOutUserListOut {
    /**
     * ユーザーID
     * @type {number}
     * @memberof AppSchemasManageJobsJobAccessLogOutUserListOut
     */
    userId: number;
    /**
     * ユーザー名
     * @type {string}
     * @memberof AppSchemasManageJobsJobAccessLogOutUserListOut
     */
    username: string;
    /**
     * 最終アクセス日
     * @type {Date}
     * @memberof AppSchemasManageJobsJobAccessLogOutUserListOut
     */
    lastAccessed: Date;
}

/**
 * Check if a given object implements the AppSchemasManageJobsJobAccessLogOutUserListOut interface.
 */
export function instanceOfAppSchemasManageJobsJobAccessLogOutUserListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "lastAccessed" in value;

    return isInstance;
}

export function AppSchemasManageJobsJobAccessLogOutUserListOutFromJSON(json: any): AppSchemasManageJobsJobAccessLogOutUserListOut {
    return AppSchemasManageJobsJobAccessLogOutUserListOutFromJSONTyped(json, false);
}

export function AppSchemasManageJobsJobAccessLogOutUserListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasManageJobsJobAccessLogOutUserListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'username': json['username'],
        'lastAccessed': (new Date(json['lastAccessed'])),
    };
}

export function AppSchemasManageJobsJobAccessLogOutUserListOutToJSON(value?: AppSchemasManageJobsJobAccessLogOutUserListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'username': value.username,
        'lastAccessed': (value.lastAccessed.toISOString().substring(0,10)),
    };
}

