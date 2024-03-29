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
import type { QuestionResultStatus } from './QuestionResultStatus';
import {
    QuestionResultStatusFromJSON,
    QuestionResultStatusFromJSONTyped,
    QuestionResultStatusToJSON,
} from './QuestionResultStatus';

/**
 * 
 * @export
 * @interface QuestionBlankExecuteOut
 */
export interface QuestionBlankExecuteOut {
    /**
     * 
     * @type {QuestionResultStatus}
     * @memberof QuestionBlankExecuteOut
     */
    totalResult: QuestionResultStatus;
    /**
     * 解説
     * @type {string}
     * @memberof QuestionBlankExecuteOut
     */
    questionExplanation: string;
    /**
     * 各並び順における採点結果
     * @type {{ [key: string]: boolean; }}
     * @memberof QuestionBlankExecuteOut
     */
    blankResults: { [key: string]: boolean; };
}

/**
 * Check if a given object implements the QuestionBlankExecuteOut interface.
 */
export function instanceOfQuestionBlankExecuteOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalResult" in value;
    isInstance = isInstance && "questionExplanation" in value;
    isInstance = isInstance && "blankResults" in value;

    return isInstance;
}

export function QuestionBlankExecuteOutFromJSON(json: any): QuestionBlankExecuteOut {
    return QuestionBlankExecuteOutFromJSONTyped(json, false);
}

export function QuestionBlankExecuteOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionBlankExecuteOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalResult': QuestionResultStatusFromJSON(json['totalResult']),
        'questionExplanation': json['questionExplanation'],
        'blankResults': json['blankResults'],
    };
}

export function QuestionBlankExecuteOutToJSON(value?: QuestionBlankExecuteOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalResult': QuestionResultStatusToJSON(value.totalResult),
        'questionExplanation': value.questionExplanation,
        'blankResults': value.blankResults,
    };
}

