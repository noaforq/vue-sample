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
 * @interface SessionRecordCSVIn
 */
export interface SessionRecordCSVIn {
    /**
     * CSV本文
     * @type {Array<any>}
     * @memberof SessionRecordCSVIn
     */
    csvBody: Array<any>;
}

/**
 * Check if a given object implements the SessionRecordCSVIn interface.
 */
export function instanceOfSessionRecordCSVIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "csvBody" in value;

    return isInstance;
}

export function SessionRecordCSVInFromJSON(json: any): SessionRecordCSVIn {
    return SessionRecordCSVInFromJSONTyped(json, false);
}

export function SessionRecordCSVInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionRecordCSVIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'csvBody': json['csvBody'],
    };
}

export function SessionRecordCSVInToJSON(value?: SessionRecordCSVIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'csvBody': value.csvBody,
    };
}

