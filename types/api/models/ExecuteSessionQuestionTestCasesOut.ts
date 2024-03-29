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
 * @interface ExecuteSessionQuestionTestCasesOut
 */
export interface ExecuteSessionQuestionTestCasesOut {
    /**
     * テスト結果ID
     * @type {number}
     * @memberof ExecuteSessionQuestionTestCasesOut
     */
    testResultId: number;
}

/**
 * Check if a given object implements the ExecuteSessionQuestionTestCasesOut interface.
 */
export function instanceOfExecuteSessionQuestionTestCasesOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "testResultId" in value;

    return isInstance;
}

export function ExecuteSessionQuestionTestCasesOutFromJSON(json: any): ExecuteSessionQuestionTestCasesOut {
    return ExecuteSessionQuestionTestCasesOutFromJSONTyped(json, false);
}

export function ExecuteSessionQuestionTestCasesOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecuteSessionQuestionTestCasesOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'testResultId': json['testResultId'],
    };
}

export function ExecuteSessionQuestionTestCasesOutToJSON(value?: ExecuteSessionQuestionTestCasesOut | null): any {
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

