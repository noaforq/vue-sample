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
import type { FormatCheckResult } from './FormatCheckResult';
import {
    FormatCheckResultFromJSON,
    FormatCheckResultFromJSONTyped,
    FormatCheckResultToJSON,
} from './FormatCheckResult';

/**
 * 
 * @export
 * @interface QuestionFormatCheckResultOut
 */
export interface QuestionFormatCheckResultOut {
    /**
     * 通過したテストケース数
     * @type {number}
     * @memberof QuestionFormatCheckResultOut
     */
    passedFormatCheckCount: number;
    /**
     * 非通過のテストケース数
     * @type {number}
     * @memberof QuestionFormatCheckResultOut
     */
    failedFormatCheckCount: number;
    /**
     * 
     * @type {Array<FormatCheckResult>}
     * @memberof QuestionFormatCheckResultOut
     */
    formatCheckResults: Array<FormatCheckResult>;
}

/**
 * Check if a given object implements the QuestionFormatCheckResultOut interface.
 */
export function instanceOfQuestionFormatCheckResultOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "passedFormatCheckCount" in value;
    isInstance = isInstance && "failedFormatCheckCount" in value;
    isInstance = isInstance && "formatCheckResults" in value;

    return isInstance;
}

export function QuestionFormatCheckResultOutFromJSON(json: any): QuestionFormatCheckResultOut {
    return QuestionFormatCheckResultOutFromJSONTyped(json, false);
}

export function QuestionFormatCheckResultOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionFormatCheckResultOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'passedFormatCheckCount': json['passedFormatCheckCount'],
        'failedFormatCheckCount': json['failedFormatCheckCount'],
        'formatCheckResults': ((json['formatCheckResults'] as Array<any>).map(FormatCheckResultFromJSON)),
    };
}

export function QuestionFormatCheckResultOutToJSON(value?: QuestionFormatCheckResultOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'passedFormatCheckCount': value.passedFormatCheckCount,
        'failedFormatCheckCount': value.failedFormatCheckCount,
        'formatCheckResults': ((value.formatCheckResults as Array<any>).map(FormatCheckResultToJSON)),
    };
}

