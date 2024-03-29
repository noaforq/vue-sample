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
 * @interface ScoringProIn
 */
export interface ScoringProIn {
    /**
     * 実行するpythonファイル名
     * @type {string}
     * @memberof ScoringProIn
     */
    runFileName: string;
}

/**
 * Check if a given object implements the ScoringProIn interface.
 */
export function instanceOfScoringProIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "runFileName" in value;

    return isInstance;
}

export function ScoringProInFromJSON(json: any): ScoringProIn {
    return ScoringProInFromJSONTyped(json, false);
}

export function ScoringProInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoringProIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'runFileName': json['runFileName'],
    };
}

export function ScoringProInToJSON(value?: ScoringProIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'runFileName': value.runFileName,
    };
}

