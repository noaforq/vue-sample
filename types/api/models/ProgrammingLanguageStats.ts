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
 * @interface ProgrammingLanguageStats
 */
export interface ProgrammingLanguageStats {
    /**
     * 言語名
     * @type {string}
     * @memberof ProgrammingLanguageStats
     */
    name: string;
    /**
     * 回答回数
     * @type {number}
     * @memberof ProgrammingLanguageStats
     */
    count: number;
}

/**
 * Check if a given object implements the ProgrammingLanguageStats interface.
 */
export function instanceOfProgrammingLanguageStats(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "count" in value;

    return isInstance;
}

export function ProgrammingLanguageStatsFromJSON(json: any): ProgrammingLanguageStats {
    return ProgrammingLanguageStatsFromJSONTyped(json, false);
}

export function ProgrammingLanguageStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgrammingLanguageStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'count': json['count'],
    };
}

export function ProgrammingLanguageStatsToJSON(value?: ProgrammingLanguageStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'count': value.count,
    };
}

