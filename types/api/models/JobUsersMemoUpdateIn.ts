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
 * @interface JobUsersMemoUpdateIn
 */
export interface JobUsersMemoUpdateIn {
    /**
     * 求人ユーザーメモ
     * @type {string}
     * @memberof JobUsersMemoUpdateIn
     */
    memo?: string;
}

/**
 * Check if a given object implements the JobUsersMemoUpdateIn interface.
 */
export function instanceOfJobUsersMemoUpdateIn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function JobUsersMemoUpdateInFromJSON(json: any): JobUsersMemoUpdateIn {
    return JobUsersMemoUpdateInFromJSONTyped(json, false);
}

export function JobUsersMemoUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobUsersMemoUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
    };
}

export function JobUsersMemoUpdateInToJSON(value?: JobUsersMemoUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'memo': value.memo,
    };
}

