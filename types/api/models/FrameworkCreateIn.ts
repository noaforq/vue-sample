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
 * @interface FrameworkCreateIn
 */
export interface FrameworkCreateIn {
    /**
     * 
     * @type {string}
     * @memberof FrameworkCreateIn
     */
    name: string;
}

/**
 * Check if a given object implements the FrameworkCreateIn interface.
 */
export function instanceOfFrameworkCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function FrameworkCreateInFromJSON(json: any): FrameworkCreateIn {
    return FrameworkCreateInFromJSONTyped(json, false);
}

export function FrameworkCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function FrameworkCreateInToJSON(value?: FrameworkCreateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

