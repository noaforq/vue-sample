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
 * @interface CompanyOfficeUpdateIn
 */
export interface CompanyOfficeUpdateIn {
    /**
     * 事業所名
     * @type {string}
     * @memberof CompanyOfficeUpdateIn
     */
    name?: string | null;
    /**
     * 事業所住所
     * @type {string}
     * @memberof CompanyOfficeUpdateIn
     */
    address?: string | null;
}

/**
 * Check if a given object implements the CompanyOfficeUpdateIn interface.
 */
export function instanceOfCompanyOfficeUpdateIn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyOfficeUpdateInFromJSON(json: any): CompanyOfficeUpdateIn {
    return CompanyOfficeUpdateInFromJSONTyped(json, false);
}

export function CompanyOfficeUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyOfficeUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'address': !exists(json, 'address') ? undefined : json['address'],
    };
}

export function CompanyOfficeUpdateInToJSON(value?: CompanyOfficeUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'address': value.address,
    };
}

