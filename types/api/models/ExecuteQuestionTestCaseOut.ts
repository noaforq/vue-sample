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
 * @interface ExecuteQuestionTestCaseOut
 */
export interface ExecuteQuestionTestCaseOut {
    /**
     * テスト結果ID
     * @type {number}
     * @memberof ExecuteQuestionTestCaseOut
     */
    testResultId: number;
}

/**
 * Check if a given object implements the ExecuteQuestionTestCaseOut interface.
 */
export function instanceOfExecuteQuestionTestCaseOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "testResultId" in value;

    return isInstance;
}

export function ExecuteQuestionTestCaseOutFromJSON(json: any): ExecuteQuestionTestCaseOut {
    return ExecuteQuestionTestCaseOutFromJSONTyped(json, false);
}

export function ExecuteQuestionTestCaseOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecuteQuestionTestCaseOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'testResultId': json['testResultId'],
    };
}

export function ExecuteQuestionTestCaseOutToJSON(value?: ExecuteQuestionTestCaseOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'testResultId': value.testResultId,
    };
}

