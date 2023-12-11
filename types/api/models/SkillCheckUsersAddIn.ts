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
 * @interface SkillCheckUsersAddIn
 */
export interface SkillCheckUsersAddIn {
    /**
     * 追加(登録)数
     * @type {number}
     * @memberof SkillCheckUsersAddIn
     */
    count: number;
}

/**
 * Check if a given object implements the SkillCheckUsersAddIn interface.
 */
export function instanceOfSkillCheckUsersAddIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;

    return isInstance;
}

export function SkillCheckUsersAddInFromJSON(json: any): SkillCheckUsersAddIn {
    return SkillCheckUsersAddInFromJSONTyped(json, false);
}

export function SkillCheckUsersAddInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkillCheckUsersAddIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
    };
}

export function SkillCheckUsersAddInToJSON(value?: SkillCheckUsersAddIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
    };
}
