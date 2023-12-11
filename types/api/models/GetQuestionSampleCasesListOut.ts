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
 * @interface GetQuestionSampleCasesListOut
 */
export interface GetQuestionSampleCasesListOut {
    /**
     * サンプルケースID
     * @type {number}
     * @memberof GetQuestionSampleCasesListOut
     */
    testCaseId: number;
    /**
     * 並び順
     * @type {number}
     * @memberof GetQuestionSampleCasesListOut
     */
    order: number;
    /**
     * 入力値
     * @type {string}
     * @memberof GetQuestionSampleCasesListOut
     */
    stdin: string;
    /**
     * 出力値
     * @type {string}
     * @memberof GetQuestionSampleCasesListOut
     */
    stdout: string;
}

/**
 * Check if a given object implements the GetQuestionSampleCasesListOut interface.
 */
export function instanceOfGetQuestionSampleCasesListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "testCaseId" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "stdin" in value;
    isInstance = isInstance && "stdout" in value;

    return isInstance;
}

export function GetQuestionSampleCasesListOutFromJSON(json: any): GetQuestionSampleCasesListOut {
    return GetQuestionSampleCasesListOutFromJSONTyped(json, false);
}

export function GetQuestionSampleCasesListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetQuestionSampleCasesListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'testCaseId': json['testCaseId'],
        'order': json['order'],
        'stdin': json['stdin'],
        'stdout': json['stdout'],
    };
}

export function GetQuestionSampleCasesListOutToJSON(value?: GetQuestionSampleCasesListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'testCaseId': value.testCaseId,
        'order': value.order,
        'stdin': value.stdin,
        'stdout': value.stdout,
    };
}
