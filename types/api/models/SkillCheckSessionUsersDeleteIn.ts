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
 * @interface SkillCheckSessionUsersDeleteIn
 */
export interface SkillCheckSessionUsersDeleteIn {
    /**
     * セッション参加ユーザーID
     * @type {Array<number>}
     * @memberof SkillCheckSessionUsersDeleteIn
     */
    sessionUserIds: Array<number>;
}

/**
 * Check if a given object implements the SkillCheckSessionUsersDeleteIn interface.
 */
export function instanceOfSkillCheckSessionUsersDeleteIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionUserIds" in value;

    return isInstance;
}

export function SkillCheckSessionUsersDeleteInFromJSON(json: any): SkillCheckSessionUsersDeleteIn {
    return SkillCheckSessionUsersDeleteInFromJSONTyped(json, false);
}

export function SkillCheckSessionUsersDeleteInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkillCheckSessionUsersDeleteIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionUserIds': json['sessionUserIds'],
    };
}

export function SkillCheckSessionUsersDeleteInToJSON(value?: SkillCheckSessionUsersDeleteIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionUserIds': value.sessionUserIds,
    };
}

