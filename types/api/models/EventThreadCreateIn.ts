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
 * @interface EventThreadCreateIn
 */
export interface EventThreadCreateIn {
    /**
     * 
     * @type {string}
     * @memberof EventThreadCreateIn
     */
    body: string;
}

/**
 * Check if a given object implements the EventThreadCreateIn interface.
 */
export function instanceOfEventThreadCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "body" in value;

    return isInstance;
}

export function EventThreadCreateInFromJSON(json: any): EventThreadCreateIn {
    return EventThreadCreateInFromJSONTyped(json, false);
}

export function EventThreadCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventThreadCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': json['body'],
    };
}

export function EventThreadCreateInToJSON(value?: EventThreadCreateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': value.body,
    };
}
