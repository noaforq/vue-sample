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
import type { QuestionType } from './QuestionType';
import {
    QuestionTypeFromJSON,
    QuestionTypeFromJSONTyped,
    QuestionTypeToJSON,
} from './QuestionType';

/**
 * 
 * @export
 * @interface QuestionContentOut
 */
export interface QuestionContentOut {
    /**
     * 
     * @type {string}
     * @memberof QuestionContentOut
     */
    questionTypeLabel?: string | null;
    /**
     * 目標時間
     * @type {number}
     * @memberof QuestionContentOut
     */
    targetTime?: number | null;
    /**
     * 
     * @type {QuestionType}
     * @memberof QuestionContentOut
     */
    questionType?: QuestionType | null;
}

/**
 * Check if a given object implements the QuestionContentOut interface.
 */
export function instanceOfQuestionContentOut(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuestionContentOutFromJSON(json: any): QuestionContentOut {
    return QuestionContentOutFromJSONTyped(json, false);
}

export function QuestionContentOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionContentOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionTypeLabel': !exists(json, 'questionTypeLabel') ? undefined : json['questionTypeLabel'],
        'targetTime': !exists(json, 'targetTime') ? undefined : json['targetTime'],
        'questionType': !exists(json, 'questionType') ? undefined : QuestionTypeFromJSON(json['questionType']),
    };
}

export function QuestionContentOutToJSON(value?: QuestionContentOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionTypeLabel': value.questionTypeLabel,
        'targetTime': value.targetTime,
        'questionType': QuestionTypeToJSON(value.questionType),
    };
}
