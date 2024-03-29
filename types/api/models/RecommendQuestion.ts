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
 * @interface RecommendQuestion
 */
export interface RecommendQuestion {
    /**
     * コンテンツID
     * @type {number}
     * @memberof RecommendQuestion
     */
    contentId: number;
    /**
     * 
     * @type {QuestionType}
     * @memberof RecommendQuestion
     */
    questionType: QuestionType;
    /**
     * 問題形式ラベル
     * @type {string}
     * @memberof RecommendQuestion
     */
    questionTypeLabel: string;
    /**
     * 挑戦者数
     * @type {number}
     * @memberof RecommendQuestion
     */
    challengerCount: number;
    /**
     * 合格者数
     * @type {number}
     * @memberof RecommendQuestion
     */
    passedCount: number;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof RecommendQuestion
     */
    title: string;
    /**
     * 目標解答時間
     * @type {number}
     * @memberof RecommendQuestion
     */
    targetTime: number;
    /**
     * 難易度
     * @type {number}
     * @memberof RecommendQuestion
     */
    difficulty: number;
    /**
     * カテゴリ名
     * @type {string}
     * @memberof RecommendQuestion
     */
    contentCategoryName: string;
    /**
     * トピック名
     * @type {string}
     * @memberof RecommendQuestion
     */
    contentTopicName: string;
}

/**
 * Check if a given object implements the RecommendQuestion interface.
 */
export function instanceOfRecommendQuestion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "questionType" in value;
    isInstance = isInstance && "questionTypeLabel" in value;
    isInstance = isInstance && "challengerCount" in value;
    isInstance = isInstance && "passedCount" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "targetTime" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "contentCategoryName" in value;
    isInstance = isInstance && "contentTopicName" in value;

    return isInstance;
}

export function RecommendQuestionFromJSON(json: any): RecommendQuestion {
    return RecommendQuestionFromJSONTyped(json, false);
}

export function RecommendQuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommendQuestion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contentId': json['contentId'],
        'questionType': QuestionTypeFromJSON(json['questionType']),
        'questionTypeLabel': json['questionTypeLabel'],
        'challengerCount': json['challengerCount'],
        'passedCount': json['passedCount'],
        'title': json['title'],
        'targetTime': json['targetTime'],
        'difficulty': json['difficulty'],
        'contentCategoryName': json['contentCategoryName'],
        'contentTopicName': json['contentTopicName'],
    };
}

export function RecommendQuestionToJSON(value?: RecommendQuestion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contentId': value.contentId,
        'questionType': QuestionTypeToJSON(value.questionType),
        'questionTypeLabel': value.questionTypeLabel,
        'challengerCount': value.challengerCount,
        'passedCount': value.passedCount,
        'title': value.title,
        'targetTime': value.targetTime,
        'difficulty': value.difficulty,
        'contentCategoryName': value.contentCategoryName,
        'contentTopicName': value.contentTopicName,
    };
}

