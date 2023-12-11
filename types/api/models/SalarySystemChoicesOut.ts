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
 * @interface SalarySystemChoicesOut
 */
export interface SalarySystemChoicesOut {
    /**
     * 
     * @type {number}
     * @memberof SalarySystemChoicesOut
     */
    value: number;
    /**
     * 
     * @type {string}
     * @memberof SalarySystemChoicesOut
     */
    label: string;
}

/**
 * Check if a given object implements the SalarySystemChoicesOut interface.
 */
export function instanceOfSalarySystemChoicesOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "label" in value;

    return isInstance;
}

export function SalarySystemChoicesOutFromJSON(json: any): SalarySystemChoicesOut {
    return SalarySystemChoicesOutFromJSONTyped(json, false);
}

export function SalarySystemChoicesOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalarySystemChoicesOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'label': json['label'],
    };
}

export function SalarySystemChoicesOutToJSON(value?: SalarySystemChoicesOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'label': value.label,
    };
}

