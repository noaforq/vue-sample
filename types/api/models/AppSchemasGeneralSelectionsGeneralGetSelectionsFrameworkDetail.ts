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
 * @interface AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail
 */
export interface AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail {
    /**
     * ID
     * @type {number}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail
     */
    id: number;
    /**
     * 名前
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail
     */
    name: string;
}

/**
 * Check if a given object implements the AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail interface.
 */
export function instanceOfAppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetailFromJSON(json: any): AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail {
    return AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetailFromJSONTyped(json, false);
}

export function AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetailToJSON(value?: AppSchemasGeneralSelectionsGeneralGetSelectionsFrameworkDetail | null): any {
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
