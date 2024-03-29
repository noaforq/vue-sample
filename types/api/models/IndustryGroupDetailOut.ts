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
 * @interface IndustryGroupDetailOut
 */
export interface IndustryGroupDetailOut {
    /**
     * 業種ID
     * @type {number}
     * @memberof IndustryGroupDetailOut
     */
    id: number;
    /**
     * 業種名
     * @type {string}
     * @memberof IndustryGroupDetailOut
     */
    name: string;
}

/**
 * Check if a given object implements the IndustryGroupDetailOut interface.
 */
export function instanceOfIndustryGroupDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IndustryGroupDetailOutFromJSON(json: any): IndustryGroupDetailOut {
    return IndustryGroupDetailOutFromJSONTyped(json, false);
}

export function IndustryGroupDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndustryGroupDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function IndustryGroupDetailOutToJSON(value?: IndustryGroupDetailOut | null): any {
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

