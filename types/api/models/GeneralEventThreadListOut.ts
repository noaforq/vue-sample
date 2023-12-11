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
 * @interface GeneralEventThreadListOut
 */
export interface GeneralEventThreadListOut {
    /**
     * スレッドID
     * @type {number}
     * @memberof GeneralEventThreadListOut
     */
    id: number;
    /**
     * 投稿者アカウント名
     * @type {string}
     * @memberof GeneralEventThreadListOut
     */
    username: string;
    /**
     * アイコンURL
     * @type {string}
     * @memberof GeneralEventThreadListOut
     */
    icon: string;
    /**
     * 本文
     * @type {string}
     * @memberof GeneralEventThreadListOut
     */
    body: string;
    /**
     * 
     * @type {Date}
     * @memberof GeneralEventThreadListOut
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the GeneralEventThreadListOut interface.
 */
export function instanceOfGeneralEventThreadListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function GeneralEventThreadListOutFromJSON(json: any): GeneralEventThreadListOut {
    return GeneralEventThreadListOutFromJSONTyped(json, false);
}

export function GeneralEventThreadListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralEventThreadListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': json['username'],
        'icon': json['icon'],
        'body': json['body'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function GeneralEventThreadListOutToJSON(value?: GeneralEventThreadListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'icon': value.icon,
        'body': value.body,
        'createdAt': (value.createdAt.toISOString()),
    };
}

