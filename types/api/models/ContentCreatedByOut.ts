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
 * @interface ContentCreatedByOut
 */
export interface ContentCreatedByOut {
    /**
     * 
     * @type {string}
     * @memberof ContentCreatedByOut
     */
    createdBy: string;
}

/**
 * Check if a given object implements the ContentCreatedByOut interface.
 */
export function instanceOfContentCreatedByOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdBy" in value;

    return isInstance;
}

export function ContentCreatedByOutFromJSON(json: any): ContentCreatedByOut {
    return ContentCreatedByOutFromJSONTyped(json, false);
}

export function ContentCreatedByOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentCreatedByOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'],
    };
}

export function ContentCreatedByOutToJSON(value?: ContentCreatedByOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdBy': value.createdBy,
    };
}
