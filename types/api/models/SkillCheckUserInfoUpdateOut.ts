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
 * @interface SkillCheckUserInfoUpdateOut
 */
export interface SkillCheckUserInfoUpdateOut {
    /**
     * ID
     * @type {number}
     * @memberof SkillCheckUserInfoUpdateOut
     */
    id: number;
    /**
     * 名前(表示名)
     * @type {string}
     * @memberof SkillCheckUserInfoUpdateOut
     */
    displayName: string;
    /**
     * 補足情報
     * @type {string}
     * @memberof SkillCheckUserInfoUpdateOut
     */
    extraInfo: string;
}

/**
 * Check if a given object implements the SkillCheckUserInfoUpdateOut interface.
 */
export function instanceOfSkillCheckUserInfoUpdateOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "extraInfo" in value;

    return isInstance;
}

export function SkillCheckUserInfoUpdateOutFromJSON(json: any): SkillCheckUserInfoUpdateOut {
    return SkillCheckUserInfoUpdateOutFromJSONTyped(json, false);
}

export function SkillCheckUserInfoUpdateOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkillCheckUserInfoUpdateOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'displayName': json['displayName'],
        'extraInfo': json['extraInfo'],
    };
}

export function SkillCheckUserInfoUpdateOutToJSON(value?: SkillCheckUserInfoUpdateOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'displayName': value.displayName,
        'extraInfo': value.extraInfo,
    };
}

