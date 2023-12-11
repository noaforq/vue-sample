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
 * @interface CompanyMemberListOut
 */
export interface CompanyMemberListOut {
    /**
     * 
     * @type {number}
     * @memberof CompanyMemberListOut
     */
    id: number;
    /**
     * 先輩社員名
     * @type {string}
     * @memberof CompanyMemberListOut
     */
    name: string;
    /**
     * 顔写真
     * @type {string}
     * @memberof CompanyMemberListOut
     */
    image: string;
    /**
     * 役職
     * @type {string}
     * @memberof CompanyMemberListOut
     */
    position: string;
    /**
     * 入社日
     * @type {Date}
     * @memberof CompanyMemberListOut
     */
    joinYear?: Date | null;
    /**
     * インタビュー内容
     * @type {string}
     * @memberof CompanyMemberListOut
     */
    interview: string;
    /**
     * 先輩から一言
     * @type {string}
     * @memberof CompanyMemberListOut
     */
    word: string;
}

/**
 * Check if a given object implements the CompanyMemberListOut interface.
 */
export function instanceOfCompanyMemberListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "position" in value;
    isInstance = isInstance && "interview" in value;
    isInstance = isInstance && "word" in value;

    return isInstance;
}

export function CompanyMemberListOutFromJSON(json: any): CompanyMemberListOut {
    return CompanyMemberListOutFromJSONTyped(json, false);
}

export function CompanyMemberListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyMemberListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'image': json['image'],
        'position': json['position'],
        'joinYear': !exists(json, 'joinYear') ? undefined : (json['joinYear'] === null ? null : new Date(json['joinYear'])),
        'interview': json['interview'],
        'word': json['word'],
    };
}

export function CompanyMemberListOutToJSON(value?: CompanyMemberListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'image': value.image,
        'position': value.position,
        'joinYear': value.joinYear === undefined ? undefined : (value.joinYear === null ? null : value.joinYear.toISOString().substring(0,10)),
        'interview': value.interview,
        'word': value.word,
    };
}

