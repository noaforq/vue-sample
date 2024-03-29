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
 * @interface InfoListOut
 */
export interface InfoListOut {
    /**
     * ID
     * @type {number}
     * @memberof InfoListOut
     */
    id: number;
    /**
     * タイトル
     * @type {string}
     * @memberof InfoListOut
     */
    title: string;
    /**
     * 作成日時
     * @type {Date}
     * @memberof InfoListOut
     */
    createdAt: Date;
    /**
     * 既読フラグ
     * @type {boolean}
     * @memberof InfoListOut
     */
    isViewed: boolean;
}

/**
 * Check if a given object implements the InfoListOut interface.
 */
export function instanceOfInfoListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "isViewed" in value;

    return isInstance;
}

export function InfoListOutFromJSON(json: any): InfoListOut {
    return InfoListOutFromJSONTyped(json, false);
}

export function InfoListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): InfoListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'createdAt': (new Date(json['createdAt'])),
        'isViewed': json['isViewed'],
    };
}

export function InfoListOutToJSON(value?: InfoListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'createdAt': (value.createdAt.toISOString()),
        'isViewed': value.isViewed,
    };
}

