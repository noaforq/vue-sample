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
 * 得意言語
 * @export
 * @interface AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut
 */
export interface AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut {
    /**
     * 
     * @type {number}
     * @memberof AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut
     */
    name: string;
}

/**
 * Check if a given object implements the AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut interface.
 */
export function instanceOfAppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOutFromJSON(json: any): AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut {
    return AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOutFromJSONTyped(json, false);
}

export function AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOutToJSON(value?: AppSchemasGeneralUsersUserSkillInfoOutUserPreferredPgLanguageListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

