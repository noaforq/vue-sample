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
import type { AppSchemasManageQuestionsQuestionUpdateInQuestionBlankIn } from './AppSchemasManageQuestionsQuestionUpdateInQuestionBlankIn';
import {
    AppSchemasManageQuestionsQuestionUpdateInQuestionBlankInFromJSON,
    AppSchemasManageQuestionsQuestionUpdateInQuestionBlankInFromJSONTyped,
    AppSchemasManageQuestionsQuestionUpdateInQuestionBlankInToJSON,
} from './AppSchemasManageQuestionsQuestionUpdateInQuestionBlankIn';
import type { AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceIn } from './AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceIn';
import {
    AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceInFromJSON,
    AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceInFromJSONTyped,
    AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceInToJSON,
} from './AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceIn';
import type { AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn } from './AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn';
import {
    AppSchemasManageQuestionsQuestionUpdateInQuestionFileInFromJSON,
    AppSchemasManageQuestionsQuestionUpdateInQuestionFileInFromJSONTyped,
    AppSchemasManageQuestionsQuestionUpdateInQuestionFileInToJSON,
} from './AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn';
import type { AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateIn } from './AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateIn';
import {
    AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateInFromJSON,
    AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateInFromJSONTyped,
    AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateInToJSON,
} from './AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateIn';
import type { AppSchemasManageQuestionsQuestionUpdateInTestCaseIn } from './AppSchemasManageQuestionsQuestionUpdateInTestCaseIn';
import {
    AppSchemasManageQuestionsQuestionUpdateInTestCaseInFromJSON,
    AppSchemasManageQuestionsQuestionUpdateInTestCaseInFromJSONTyped,
    AppSchemasManageQuestionsQuestionUpdateInTestCaseInToJSON,
} from './AppSchemasManageQuestionsQuestionUpdateInTestCaseIn';
import type { ContentDivision } from './ContentDivision';
import {
    ContentDivisionFromJSON,
    ContentDivisionFromJSONTyped,
    ContentDivisionToJSON,
} from './ContentDivision';
import type { QuestionType } from './QuestionType';
import {
    QuestionTypeFromJSON,
    QuestionTypeFromJSONTyped,
    QuestionTypeToJSON,
} from './QuestionType';

/**
 * 
 * @export
 * @interface QuestionUpdateIn
 */
export interface QuestionUpdateIn {
    /**
     * 問題タイトル
     * @type {string}
     * @memberof QuestionUpdateIn
     */
    title?: string | null;
    /**
     * 問題文
     * @type {string}
     * @memberof QuestionUpdateIn
     */
    text?: string | null;
    /**
     * 目標回答時間
     * @type {number}
     * @memberof QuestionUpdateIn
     */
    targetTime: number;
    /**
     * 
     * @type {QuestionType}
     * @memberof QuestionUpdateIn
     */
    questionType: QuestionType;
    /**
     * 難易度
     * @type {number}
     * @memberof QuestionUpdateIn
     */
    difficulty: number;
    /**
     * 問題文要約
     * @type {string}
     * @memberof QuestionUpdateIn
     */
    summary?: string;
    /**
     * SQL問題の初期実行コード
     * @type {string}
     * @memberof QuestionUpdateIn
     */
    sqlSetup?: string;
    /**
     * 問題画像URL
     * @type {string}
     * @memberof QuestionUpdateIn
     */
    image?: string;
    /**
     * 
     * @type {number}
     * @memberof QuestionUpdateIn
     */
    contentTopicId: number;
    /**
     * 登録タグ
     * @type {Array<string>}
     * @memberof QuestionUpdateIn
     */
    contentTagNames: Array<string>;
    /**
     * 
     * @type {ContentDivision}
     * @memberof QuestionUpdateIn
     */
    contentDivision: ContentDivision;
    /**
     * 企業に閲覧許可
     * @type {boolean}
     * @memberof QuestionUpdateIn
     */
    isRefusedBrowsing?: boolean;
    /**
     * 他学校に問題公開
     * @type {boolean}
     * @memberof QuestionUpdateIn
     */
    isSharedBetweenSchools?: boolean;
    /**
     * 解答者にテストケース公開
     * @type {boolean}
     * @memberof QuestionUpdateIn
     */
    showTestcaseToAnswerer?: boolean;
    /**
     * 他学校にテストケースを公開するか
     * @type {boolean}
     * @memberof QuestionUpdateIn
     */
    isSharedTestcase?: boolean;
    /**
     * 
     * @type {Array<AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceIn>}
     * @memberof QuestionUpdateIn
     */
    questionChoices?: Array<AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceIn> | null;
    /**
     * 解答
     * @type {string}
     * @memberof QuestionUpdateIn
     */
    answer?: string;
    /**
     * 
     * @type {Array<AppSchemasManageQuestionsQuestionUpdateInQuestionBlankIn>}
     * @memberof QuestionUpdateIn
     */
    questionBlanks?: Array<AppSchemasManageQuestionsQuestionUpdateInQuestionBlankIn> | null;
    /**
     * 
     * @type {Array<AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn>}
     * @memberof QuestionUpdateIn
     */
    questionFiles?: Array<AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn> | null;
    /**
     * 
     * @type {AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateIn}
     * @memberof QuestionUpdateIn
     */
    questionTemplate?: AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateIn | null;
    /**
     * 
     * @type {Array<AppSchemasManageQuestionsQuestionUpdateInTestCaseIn>}
     * @memberof QuestionUpdateIn
     */
    questionTestCases?: Array<AppSchemasManageQuestionsQuestionUpdateInTestCaseIn> | null;
}

/**
 * Check if a given object implements the QuestionUpdateIn interface.
 */
export function instanceOfQuestionUpdateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "targetTime" in value;
    isInstance = isInstance && "questionType" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "contentTopicId" in value;
    isInstance = isInstance && "contentTagNames" in value;
    isInstance = isInstance && "contentDivision" in value;

    return isInstance;
}

export function QuestionUpdateInFromJSON(json: any): QuestionUpdateIn {
    return QuestionUpdateInFromJSONTyped(json, false);
}

export function QuestionUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'targetTime': json['targetTime'],
        'questionType': QuestionTypeFromJSON(json['questionType']),
        'difficulty': json['difficulty'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'sqlSetup': !exists(json, 'sqlSetup') ? undefined : json['sqlSetup'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'contentTopicId': json['contentTopicId'],
        'contentTagNames': json['contentTagNames'],
        'contentDivision': ContentDivisionFromJSON(json['contentDivision']),
        'isRefusedBrowsing': !exists(json, 'isRefusedBrowsing') ? undefined : json['isRefusedBrowsing'],
        'isSharedBetweenSchools': !exists(json, 'isSharedBetweenSchools') ? undefined : json['isSharedBetweenSchools'],
        'showTestcaseToAnswerer': !exists(json, 'showTestcaseToAnswerer') ? undefined : json['showTestcaseToAnswerer'],
        'isSharedTestcase': !exists(json, 'isSharedTestcase') ? undefined : json['isSharedTestcase'],
        'questionChoices': !exists(json, 'questionChoices') ? undefined : (json['questionChoices'] === null ? null : (json['questionChoices'] as Array<any>).map(AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceInFromJSON)),
        'answer': !exists(json, 'answer') ? undefined : json['answer'],
        'questionBlanks': !exists(json, 'questionBlanks') ? undefined : (json['questionBlanks'] === null ? null : (json['questionBlanks'] as Array<any>).map(AppSchemasManageQuestionsQuestionUpdateInQuestionBlankInFromJSON)),
        'questionFiles': !exists(json, 'questionFiles') ? undefined : (json['questionFiles'] === null ? null : (json['questionFiles'] as Array<any>).map(AppSchemasManageQuestionsQuestionUpdateInQuestionFileInFromJSON)),
        'questionTemplate': !exists(json, 'questionTemplate') ? undefined : AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateInFromJSON(json['questionTemplate']),
        'questionTestCases': !exists(json, 'questionTestCases') ? undefined : (json['questionTestCases'] === null ? null : (json['questionTestCases'] as Array<any>).map(AppSchemasManageQuestionsQuestionUpdateInTestCaseInFromJSON)),
    };
}

export function QuestionUpdateInToJSON(value?: QuestionUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'text': value.text,
        'targetTime': value.targetTime,
        'questionType': QuestionTypeToJSON(value.questionType),
        'difficulty': value.difficulty,
        'summary': value.summary,
        'sqlSetup': value.sqlSetup,
        'image': value.image,
        'contentTopicId': value.contentTopicId,
        'contentTagNames': value.contentTagNames,
        'contentDivision': ContentDivisionToJSON(value.contentDivision),
        'isRefusedBrowsing': value.isRefusedBrowsing,
        'isSharedBetweenSchools': value.isSharedBetweenSchools,
        'showTestcaseToAnswerer': value.showTestcaseToAnswerer,
        'isSharedTestcase': value.isSharedTestcase,
        'questionChoices': value.questionChoices === undefined ? undefined : (value.questionChoices === null ? null : (value.questionChoices as Array<any>).map(AppSchemasManageQuestionsQuestionUpdateInQuestionChoiceInToJSON)),
        'answer': value.answer,
        'questionBlanks': value.questionBlanks === undefined ? undefined : (value.questionBlanks === null ? null : (value.questionBlanks as Array<any>).map(AppSchemasManageQuestionsQuestionUpdateInQuestionBlankInToJSON)),
        'questionFiles': value.questionFiles === undefined ? undefined : (value.questionFiles === null ? null : (value.questionFiles as Array<any>).map(AppSchemasManageQuestionsQuestionUpdateInQuestionFileInToJSON)),
        'questionTemplate': AppSchemasManageQuestionsQuestionUpdateInQuestionTemplateInToJSON(value.questionTemplate),
        'questionTestCases': value.questionTestCases === undefined ? undefined : (value.questionTestCases === null ? null : (value.questionTestCases as Array<any>).map(AppSchemasManageQuestionsQuestionUpdateInTestCaseInToJSON)),
    };
}

