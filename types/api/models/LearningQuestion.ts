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
 * @interface LearningQuestion
 */
export interface LearningQuestion {
    /**
     * コンテンツID
     * @type {number}
     * @memberof LearningQuestion
     */
    id: number;
    /**
     * 
     * @type {QuestionType}
     * @memberof LearningQuestion
     */
    questionType: QuestionType;
    /**
     * 問題形式ラベル
     * @type {string}
     * @memberof LearningQuestion
     */
    questionTypeLabel: string;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof LearningQuestion
     */
    title: string;
    /**
     * 目標解答時間
     * @type {number}
     * @memberof LearningQuestion
     */
    targetTime: number;
    /**
     * 難易度
     * @type {number}
     * @memberof LearningQuestion
     */
    difficulty: number;
    /**
     * 
     * @type {QuestionResultStatus}
     * @memberof LearningQuestion
     */
    questionResultStatus: QuestionResultStatus;
    /**
     * 挑戦者数
     * @type {number}
     * @memberof LearningQuestion
     */
    challengerCount: number;
    /**
     * 合格者数
     * @type {number}
     * @memberof LearningQuestion
     */
    passedCount: number;
}

/**
 * Check if a given object implements the LearningQuestion interface.
 */
export function instanceOfLearningQuestion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "questionType" in value;
    isInstance = isInstance && "questionTypeLabel" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "targetTime" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "questionResultStatus" in value;
    isInstance = isInstance && "challengerCount" in value;
    isInstance = isInstance && "passedCount" in value;

    return isInstance;
}

export function LearningQuestionFromJSON(json: any): LearningQuestion {
    return LearningQuestionFromJSONTyped(json, false);
}

export function LearningQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LearningQuestion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'questionType': QuestionTypeFromJSON(json['questionType']),
        'questionTypeLabel': json['questionTypeLabel'],
        'title': json['title'],
        'targetTime': json['targetTime'],
        'difficulty': json['difficulty'],
        'questionResultStatus': QuestionResultStatusFromJSON(json['questionResultStatus']),
        'challengerCount': json['challengerCount'],
        'passedCount': json['passedCount'],
    };
}

export function LearningQuestionToJSON(value?: LearningQuestion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'questionType': QuestionTypeToJSON(value.questionType),
        'questionTypeLabel': value.questionTypeLabel,
        'title': value.title,
        'targetTime': value.targetTime,
        'difficulty': value.difficulty,
        'questionResultStatus': QuestionResultStatusToJSON(value.questionResultStatus),
        'challengerCount': value.challengerCount,
        'passedCount': value.passedCount,
    };
}

