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
 * @interface AnnualIncomeChoicesOut
 */
export interface AnnualIncomeChoicesOut {
    /**
     * 
     * @type {number}
     * @memberof AnnualIncomeChoicesOut
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AnnualIncomeChoicesOut
     */
    name: string;
}

/**
 * Check if a given object implements the AnnualIncomeChoicesOut interface.
 */
export function instanceOfAnnualIncomeChoicesOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AnnualIncomeChoicesOutFromJSON(json: any): AnnualIncomeChoicesOut {
    return AnnualIncomeChoicesOutFromJSONTyped(json, false);
}

export function AnnualIncomeChoicesOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnualIncomeChoicesOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function AnnualIncomeChoicesOutToJSON(value?: AnnualIncomeChoicesOut | null): any {
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

