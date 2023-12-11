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
 * 使用可能PG言語
 * @export
 * @interface AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages
 */
export interface AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages {
    /**
     * 
     * @type {number}
     * @memberof AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages
     */
    isSql: boolean;
}

/**
 * Check if a given object implements the AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages interface.
 */
export function instanceOfAppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "isSql" in value;

    return isInstance;
}

export function AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguagesFromJSON(json: any): AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages {
    return AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguagesFromJSONTyped(json, false);
}

export function AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'isSql': json['isSql'],
    };
}

export function AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguagesToJSON(value?: AppSchemasGeneralSessionsGeneralSessionDetailOutAvailablePgLanguages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'isSql': value.isSql,
    };
}

