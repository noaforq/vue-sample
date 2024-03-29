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
 * @interface AppSchemasGeneralJobsJobDetailOutPgLangDetail
 */
export interface AppSchemasGeneralJobsJobDetailOutPgLangDetail {
    /**
     * ID
     * @type {number}
     * @memberof AppSchemasGeneralJobsJobDetailOutPgLangDetail
     */
    id: number;
    /**
     * 名前
     * @type {string}
     * @memberof AppSchemasGeneralJobsJobDetailOutPgLangDetail
     */
    name: string;
}

/**
 * Check if a given object implements the AppSchemasGeneralJobsJobDetailOutPgLangDetail interface.
 */
export function instanceOfAppSchemasGeneralJobsJobDetailOutPgLangDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AppSchemasGeneralJobsJobDetailOutPgLangDetailFromJSON(json: any): AppSchemasGeneralJobsJobDetailOutPgLangDetail {
    return AppSchemasGeneralJobsJobDetailOutPgLangDetailFromJSONTyped(json, false);
}

export function AppSchemasGeneralJobsJobDetailOutPgLangDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralJobsJobDetailOutPgLangDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function AppSchemasGeneralJobsJobDetailOutPgLangDetailToJSON(value?: AppSchemasGeneralJobsJobDetailOutPgLangDetail | null): any {
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

