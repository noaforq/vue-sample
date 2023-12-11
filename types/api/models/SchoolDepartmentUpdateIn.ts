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
 * @interface SchoolDepartmentUpdateIn
 */
export interface SchoolDepartmentUpdateIn {
    /**
     * 組織名(学部、研究室)
     * @type {string}
     * @memberof SchoolDepartmentUpdateIn
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SchoolDepartmentUpdateIn
     */
    useSecurityOption?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SchoolDepartmentUpdateIn
     */
    customDomain?: string | null;
    /**
     * アカウント名接頭辞
     * @type {string}
     * @memberof SchoolDepartmentUpdateIn
     */
    slug: string;
}

/**
 * Check if a given object implements the SchoolDepartmentUpdateIn interface.
 */
export function instanceOfSchoolDepartmentUpdateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "slug" in value;

    return isInstance;
}

export function SchoolDepartmentUpdateInFromJSON(json: any): SchoolDepartmentUpdateIn {
    return SchoolDepartmentUpdateInFromJSONTyped(json, false);
}

export function SchoolDepartmentUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchoolDepartmentUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'useSecurityOption': !exists(json, 'useSecurityOption') ? undefined : json['useSecurityOption'],
        'customDomain': !exists(json, 'customDomain') ? undefined : json['customDomain'],
        'slug': json['slug'],
    };
}

export function SchoolDepartmentUpdateInToJSON(value?: SchoolDepartmentUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'useSecurityOption': value.useSecurityOption,
        'customDomain': value.customDomain,
        'slug': value.slug,
    };
}

