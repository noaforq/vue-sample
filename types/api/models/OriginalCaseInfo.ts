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
 * @interface OriginalCaseInfo
 */
export interface OriginalCaseInfo {
    /**
     * 順番
     * @type {number}
     * @memberof OriginalCaseInfo
     */
    order: number;
    /**
     * 標準入力
     * @type {string}
     * @memberof OriginalCaseInfo
     */
    stdin: string;
    /**
     * 期待出力
     * @type {string}
     * @memberof OriginalCaseInfo
     */
    expectedStdout: string;
}

/**
 * Check if a given object implements the OriginalCaseInfo interface.
 */
export function instanceOfOriginalCaseInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "stdin" in value;
    isInstance = isInstance && "expectedStdout" in value;

    return isInstance;
}

export function OriginalCaseInfoFromJSON(json: any): OriginalCaseInfo {
    return OriginalCaseInfoFromJSONTyped(json, false);
}

export function OriginalCaseInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OriginalCaseInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'order': json['order'],
        'stdin': json['stdin'],
        'expectedStdout': json['expectedStdout'],
    };
}

export function OriginalCaseInfoToJSON(value?: OriginalCaseInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order': value.order,
        'stdin': value.stdin,
        'expectedStdout': value.expectedStdout,
    };
}
