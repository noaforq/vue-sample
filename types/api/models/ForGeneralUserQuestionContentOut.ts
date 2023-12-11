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
import type { QuestionType } from './QuestionType';
import {
    QuestionTypeFromJSON,
    QuestionTypeFromJSONTyped,
    QuestionTypeToJSON,
} from './QuestionType';

/**
 * 
 * @export
 * @interface ForGeneralUserQuestionContentOut
 */
export interface ForGeneralUserQuestionContentOut {
    /**
     * 
     * @type {string}
     * @memberof ForGeneralUserQuestionContentOut
     */
    questionTypeLabel?: string | null;
    /**
     * 
     * @type {QuestionType}
     * @memberof ForGeneralUserQuestionContentOut
     */
    questionType?: QuestionType | null;
    /**
     * 目標解答時間(分)
     * @type {number}
     * @memberof ForGeneralUserQuestionContentOut
     */
    targetTime: number | null;
    /**
     * 合格率
     * @type {number}
     * @memberof ForGeneralUserQuestionContentOut
     */
    passRate: number;
    /**
     * 挑戦者数(問題を開いた人数)
     * @type {number}
     * @memberof ForGeneralUserQuestionContentOut
     */
    trialUserCount: number;
    /**
     * 
     * @type {QuestionResultStatus}
     * @memberof ForGeneralUserQuestionContentOut
     */
    questionResultStatus: QuestionResultStatus | null;
}

/**
 * Check if a given object implements the ForGeneralUserQuestionContentOut interface.
 */
export function instanceOfForGeneralUserQuestionContentOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "targetTime" in value;
    isInstance = isInstance && "passRate" in value;
    isInstance = isInstance && "trialUserCount" in value;
    isInstance = isInstance && "questionResultStatus" in value;

    return isInstance;
}

export function ForGeneralUserQuestionContentOutFromJSON(json: any): ForGeneralUserQuestionContentOut {
    return ForGeneralUserQuestionContentOutFromJSONTyped(json, false);
}

export function ForGeneralUserQuestionContentOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForGeneralUserQuestionContentOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionTypeLabel': !exists(json, 'questionTypeLabel') ? undefined : json['questionTypeLabel'],
        'questionType': !exists(json, 'questionType') ? undefined : QuestionTypeFromJSON(json['questionType']),
        'targetTime': json['targetTime'],
        'passRate': json['passRate'],
        'trialUserCount': json['trialUserCount'],
        'questionResultStatus': QuestionResultStatusFromJSON(json['questionResultStatus']),
    };
}

export function ForGeneralUserQuestionContentOutToJSON(value?: ForGeneralUserQuestionContentOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionTypeLabel': value.questionTypeLabel,
        'questionType': QuestionTypeToJSON(value.questionType),
        'targetTime': value.targetTime,
        'passRate': value.passRate,
        'trialUserCount': value.trialUserCount,
        'questionResultStatus': QuestionResultStatusToJSON(value.questionResultStatus),
    };
}

