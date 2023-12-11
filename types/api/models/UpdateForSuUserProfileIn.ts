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

/**
 * 
 * @export
 * @interface UpdateForSuUserProfileIn
 */
export interface UpdateForSuUserProfileIn {
    /**
     * ユーザー名
     * @type {string}
     * @memberof UpdateForSuUserProfileIn
     */
    username: string;
    /**
     * メールアドレス
     * @type {string}
     * @memberof UpdateForSuUserProfileIn
     */
    email: string;
    /**
     * 性
     * @type {string}
     * @memberof UpdateForSuUserProfileIn
     */
    lastName: string;
    /**
     * 名
     * @type {string}
     * @memberof UpdateForSuUserProfileIn
     */
    firstName: string;
    /**
     * 表示名
     * @type {string}
     * @memberof UpdateForSuUserProfileIn
     */
    displayName: string;
    /**
     * 補足情報
     * @type {string}
     * @memberof UpdateForSuUserProfileIn
     */
    extraInfo: string;
    /**
     * 卒業年月日
     * @type {Date}
     * @memberof UpdateForSuUserProfileIn
     */
    graduationDate: Date | null;
    /**
     * 都道府県ID
     * @type {number}
     * @memberof UpdateForSuUserProfileIn
     */
    prefectureId: number | null;
    /**
     * 生年月日
     * @type {Date}
     * @memberof UpdateForSuUserProfileIn
     */
    birthday: Date | null;
    /**
     * よく使うプログラミング言語ID
     * @type {number}
     * @memberof UpdateForSuUserProfileIn
     */
    mostUsedPgLangId: number | null;
    /**
     * 
     * @type {CurrentJob}
     * @memberof UpdateForSuUserProfileIn
     */
    currentJob: CurrentJob | null;
}

/**
 * Check if a given object implements the UpdateForSuUserProfileIn interface.
 */
export function instanceOfUpdateForSuUserProfileIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "extraInfo" in value;
    isInstance = isInstance && "graduationDate" in value;
    isInstance = isInstance && "prefectureId" in value;
    isInstance = isInstance && "birthday" in value;
    isInstance = isInstance && "mostUsedPgLangId" in value;
    isInstance = isInstance && "currentJob" in value;

    return isInstance;
}

export function UpdateForSuUserProfileInFromJSON(json: any): UpdateForSuUserProfileIn {
    return UpdateForSuUserProfileInFromJSONTyped(json, false);
}

export function UpdateForSuUserProfileInFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateForSuUserProfileIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'email': json['email'],
        'lastName': json['lastName'],
        'firstName': json['firstName'],
        'displayName': json['displayName'],
        'extraInfo': json['extraInfo'],
        'graduationDate': (json['graduationDate'] === null ? null : new Date(json['graduationDate'])),
        'prefectureId': json['prefectureId'],
        'birthday': (json['birthday'] === null ? null : new Date(json['birthday'])),
        'mostUsedPgLangId': json['mostUsedPgLangId'],
        'currentJob': CurrentJobFromJSON(json['currentJob']),
    };
}

export function UpdateForSuUserProfileInToJSON(value?: UpdateForSuUserProfileIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'email': value.email,
        'lastName': value.lastName,
        'firstName': value.firstName,
        'displayName': value.displayName,
        'extraInfo': value.extraInfo,
        'graduationDate': (value.graduationDate === null ? null : value.graduationDate.toISOString().substring(0,10)),
        'prefectureId': value.prefectureId,
        'birthday': (value.birthday === null ? null : value.birthday.toISOString().substring(0,10)),
        'mostUsedPgLangId': value.mostUsedPgLangId,
        'currentJob': CurrentJobToJSON(value.currentJob),
    };
}
