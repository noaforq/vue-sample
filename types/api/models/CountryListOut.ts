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
 * @interface CountryListOut
 */
export interface CountryListOut {
    /**
     * 
     * @type {number}
     * @memberof CountryListOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof CountryListOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CountryListOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CountryListOut
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CountryListOut
     */
    code: string;
}

/**
 * Check if a given object implements the CountryListOut interface.
 */
export function instanceOfCountryListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function CountryListOutFromJSON(json: any): CountryListOut {
    return CountryListOutFromJSONTyped(json, false);
}

export function CountryListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountryListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'name': json['name'],
        'code': json['code'],
    };
}

export function CountryListOutToJSON(value?: CountryListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'name': value.name,
        'code': value.code,
    };
}
