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
 * @interface PrefectureOut
 */
export interface PrefectureOut {
    /**
     * 都道府県ID
     * @type {number}
     * @memberof PrefectureOut
     */
    id: number;
    /**
     * 名前
     * @type {string}
     * @memberof PrefectureOut
     */
    name: string;
}

/**
 * Check if a given object implements the PrefectureOut interface.
 */
export function instanceOfPrefectureOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function PrefectureOutFromJSON(json: any): PrefectureOut {
    return PrefectureOutFromJSONTyped(json, false);
}

export function PrefectureOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrefectureOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function PrefectureOutToJSON(value?: PrefectureOut | null): any {
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

