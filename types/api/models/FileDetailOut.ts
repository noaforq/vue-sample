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
 * @interface FileDetailOut
 */
export interface FileDetailOut {
    /**
     * 
     * @type {string}
     * @memberof FileDetailOut
     */
    url: string;
}

/**
 * Check if a given object implements the FileDetailOut interface.
 */
export function instanceOfFileDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function FileDetailOutFromJSON(json: any): FileDetailOut {
    return FileDetailOutFromJSONTyped(json, false);
}

export function FileDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function FileDetailOutToJSON(value?: FileDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

