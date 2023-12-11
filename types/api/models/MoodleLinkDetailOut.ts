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
 * @interface MoodleLinkDetailOut
 */
export interface MoodleLinkDetailOut {
    /**
     * 連携元(学校名学部名)
     * @type {string}
     * @memberof MoodleLinkDetailOut
     */
    linkedSource: string;
    /**
     * クライアントID(コンシューマー鍵)
     * @type {string}
     * @memberof MoodleLinkDetailOut
     */
    clientId: string;
    /**
     * 秘密鍵
     * @type {string}
     * @memberof MoodleLinkDetailOut
     */
    clientSecret: string;
    /**
     * 作成者
     * @type {string}
     * @memberof MoodleLinkDetailOut
     */
    createdBy: string;
    /**
     * 作成日時
     * @type {Date}
     * @memberof MoodleLinkDetailOut
     */
    createdAt: Date;
    /**
     * 学校ID
     * @type {number}
     * @memberof MoodleLinkDetailOut
     */
    schoolId: number;
}

/**
 * Check if a given object implements the MoodleLinkDetailOut interface.
 */
export function instanceOfMoodleLinkDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "linkedSource" in value;
    isInstance = isInstance && "clientId" in value;
    isInstance = isInstance && "clientSecret" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "schoolId" in value;

    return isInstance;
}

export function MoodleLinkDetailOutFromJSON(json: any): MoodleLinkDetailOut {
    return MoodleLinkDetailOutFromJSONTyped(json, false);
}

export function MoodleLinkDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoodleLinkDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linkedSource': json['linkedSource'],
        'clientId': json['clientId'],
        'clientSecret': json['clientSecret'],
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
        'schoolId': json['schoolId'],
    };
}

export function MoodleLinkDetailOutToJSON(value?: MoodleLinkDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linkedSource': value.linkedSource,
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
        'schoolId': value.schoolId,
    };
}

