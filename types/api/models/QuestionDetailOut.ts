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
import type { AppSchemasManageQuestionsQuestionDetailOutContentDetailOut } from './AppSchemasManageQuestionsQuestionDetailOutContentDetailOut';
import {
    AppSchemasManageQuestionsQuestionDetailOutContentDetailOutFromJSON,
    AppSchemasManageQuestionsQuestionDetailOutContentDetailOutFromJSONTyped,
    AppSchemasManageQuestionsQuestionDetailOutContentDetailOutToJSON,
} from './AppSchemasManageQuestionsQuestionDetailOutContentDetailOut';
import type { ContentDivision } from './ContentDivision';
import {
    ContentDivisionFromJSON,
    ContentDivisionFromJSONTyped,
    ContentDivisionToJSON,
} from './ContentDivision';
import type { QuestionBlankDetailOut } from './QuestionBlankDetailOut';
import {
    QuestionBlankDetailOutFromJSON,
    QuestionBlankDetailOutFromJSONTyped,
    QuestionBlankDetailOutToJSON,
} from './QuestionBlankDetailOut';
import type { QuestionChoiceDetailOut } from './QuestionChoiceDetailOut';
import {
    QuestionChoiceDetailOutFromJSON,
    QuestionChoiceDetailOutFromJSONTyped,
    QuestionChoiceDetailOutToJSON,
} from './QuestionChoiceDetailOut';
import type { QuestionFileDetailOut } from './QuestionFileDetailOut';
import {
    QuestionFileDetailOutFromJSON,
    QuestionFileDetailOutFromJSONTyped,
    QuestionFileDetailOutToJSON,
} from './QuestionFileDetailOut';
import type { QuestionTemplateDetailOut } from './QuestionTemplateDetailOut';
import {
    QuestionTemplateDetailOutFromJSON,
    QuestionTemplateDetailOutFromJSONTyped,
    QuestionTemplateDetailOutToJSON,
} from './QuestionTemplateDetailOut';
import type { QuestionType } from './QuestionType';
import {
    QuestionTypeFromJSON,
    QuestionTypeFromJSONTyped,
    QuestionTypeToJSON,
} from './QuestionType';

/**
 * 
 * @export
 * @interface QuestionDetailOut
 */
export interface QuestionDetailOut {
    /**
     * 
     * @type {number}
     * @memberof QuestionDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof QuestionDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof QuestionDetailOut
     */
    updatedAt: Date;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof QuestionDetailOut
     */
    title: string;
    /**
     * 問題タイトル英語
     * @type {string}
     * @memberof QuestionDetailOut
     */
    titleEn: string;
    /**
     * 問題文
     * @type {string}
     * @memberof QuestionDetailOut
     */
    text: string;
    /**
     * 問題文英語
     * @type {string}
     * @memberof QuestionDetailOut
     */
    textEn: string;
    /**
     * 目標回答時間
     * @type {number}
     * @memberof QuestionDetailOut
     */
    targetTime: number;
    /**
     * 難易度
     * @type {number}
     * @memberof QuestionDetailOut
     */
    difficulty: number;
    /**
     * 問題文要約
     * @type {string}
     * @memberof QuestionDetailOut
     */
    summary: string;
    /**
     * 問題画像URL
     * @type {string}
     * @memberof QuestionDetailOut
     */
    image: string;
    /**
     * SQL問題の初期実行コード
     * @type {string}
     * @memberof QuestionDetailOut
     */
    sqlSetup: string;
    /**
     * 解答の解説
     * @type {string}
     * @memberof QuestionDetailOut
     */
    answer: string;
    /**
     * 他学校にテストケースを公開するか
     * @type {boolean}
     * @memberof QuestionDetailOut
     */
    isSharedTestcase: boolean;
    /**
     * 問題文の企業閲覧を拒否
     * @type {boolean}
     * @memberof QuestionDetailOut
     */
    isRefusedBrowsing: boolean;
    /**
     * 検証済みか
     * @type {boolean}
     * @memberof QuestionDetailOut
     */
    isVerified: boolean;
    /**
     * 解答者にテストケースを見せるか
     * @type {boolean}
     * @memberof QuestionDetailOut
     */
    showTestcaseToAnswerer: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuestionDetailOut
     */
    contentTopicId: number;
    /**
     * コンテンツトピック名
     * @type {string}
     * @memberof QuestionDetailOut
     */
    contentTopicName: string;
    /**
     * 英語コンテンツトピック名
     * @type {string}
     * @memberof QuestionDetailOut
     */
    contentTopicNameEn: string;
    /**
     * 
     * @type {number}
     * @memberof QuestionDetailOut
     */
    contentCategoryId: number;
    /**
     * コンテンツカテゴリ名
     * @type {string}
     * @memberof QuestionDetailOut
     */
    contentCategoryName: string;
    /**
     * 英語コンテンツカテゴリ名
     * @type {string}
     * @memberof QuestionDetailOut
     */
    contentCategoryNameEn: string;
    /**
     * 登録タグ
     * @type {Array<string>}
     * @memberof QuestionDetailOut
     */
    contentTagNames: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof QuestionDetailOut
     */
    questionTypeLabel: string;
    /**
     * 
     * @type {QuestionType}
     * @memberof QuestionDetailOut
     */
    questionType: QuestionType;
    /**
     * 
     * @type {ContentDivision}
     * @memberof QuestionDetailOut
     */
    contentDivision: ContentDivision;
    /**
     * 
     * @type {string}
     * @memberof QuestionDetailOut
     */
    contentDivisionLabel: string;
    /**
     * 
     * @type {Array<QuestionChoiceDetailOut>}
     * @memberof QuestionDetailOut
     */
    questionChoices: Array<QuestionChoiceDetailOut>;
    /**
     * 
     * @type {Array<QuestionBlankDetailOut>}
     * @memberof QuestionDetailOut
     */
    questionBlanks: Array<QuestionBlankDetailOut>;
    /**
     * 
     * @type {Array<QuestionFileDetailOut>}
     * @memberof QuestionDetailOut
     */
    questionFiles: Array<QuestionFileDetailOut>;
    /**
     * 
     * @type {QuestionTemplateDetailOut}
     * @memberof QuestionDetailOut
     */
    questionTemplate?: QuestionTemplateDetailOut | null;
    /**
     * 
     * @type {AppSchemasManageQuestionsQuestionDetailOutContentDetailOut}
     * @memberof QuestionDetailOut
     */
    content: AppSchemasManageQuestionsQuestionDetailOutContentDetailOut;
}

/**
 * Check if a given object implements the QuestionDetailOut interface.
 */
export function instanceOfQuestionDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "titleEn" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "textEn" in value;
    isInstance = isInstance && "targetTime" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "summary" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "sqlSetup" in value;
    isInstance = isInstance && "answer" in value;
    isInstance = isInstance && "isSharedTestcase" in value;
    isInstance = isInstance && "isRefusedBrowsing" in value;
    isInstance = isInstance && "isVerified" in value;
    isInstance = isInstance && "showTestcaseToAnswerer" in value;
    isInstance = isInstance && "contentTopicId" in value;
    isInstance = isInstance && "contentTopicName" in value;
    isInstance = isInstance && "contentTopicNameEn" in value;
    isInstance = isInstance && "contentCategoryId" in value;
    isInstance = isInstance && "contentCategoryName" in value;
    isInstance = isInstance && "contentCategoryNameEn" in value;
    isInstance = isInstance && "contentTagNames" in value;
    isInstance = isInstance && "questionTypeLabel" in value;
    isInstance = isInstance && "questionType" in value;
    isInstance = isInstance && "contentDivision" in value;
    isInstance = isInstance && "contentDivisionLabel" in value;
    isInstance = isInstance && "questionChoices" in value;
    isInstance = isInstance && "questionBlanks" in value;
    isInstance = isInstance && "questionFiles" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function QuestionDetailOutFromJSON(json: any): QuestionDetailOut {
    return QuestionDetailOutFromJSONTyped(json, false);
}

export function QuestionDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'title': json['title'],
        'titleEn': json['titleEn'],
        'text': json['text'],
        'textEn': json['textEn'],
        'targetTime': json['targetTime'],
        'difficulty': json['difficulty'],
        'summary': json['summary'],
        'image': json['image'],
        'sqlSetup': json['sqlSetup'],
        'answer': json['answer'],
        'isSharedTestcase': json['isSharedTestcase'],
        'isRefusedBrowsing': json['isRefusedBrowsing'],
        'isVerified': json['isVerified'],
        'showTestcaseToAnswerer': json['showTestcaseToAnswerer'],
        'contentTopicId': json['contentTopicId'],
        'contentTopicName': json['contentTopicName'],
        'contentTopicNameEn': json['contentTopicNameEn'],
        'contentCategoryId': json['contentCategoryId'],
        'contentCategoryName': json['contentCategoryName'],
        'contentCategoryNameEn': json['contentCategoryNameEn'],
        'contentTagNames': json['contentTagNames'],
        'questionTypeLabel': json['questionTypeLabel'],
        'questionType': QuestionTypeFromJSON(json['questionType']),
        'contentDivision': ContentDivisionFromJSON(json['contentDivision']),
        'contentDivisionLabel': json['contentDivisionLabel'],
        'questionChoices': ((json['questionChoices'] as Array<any>).map(QuestionChoiceDetailOutFromJSON)),
        'questionBlanks': ((json['questionBlanks'] as Array<any>).map(QuestionBlankDetailOutFromJSON)),
        'questionFiles': ((json['questionFiles'] as Array<any>).map(QuestionFileDetailOutFromJSON)),
        'questionTemplate': !exists(json, 'questionTemplate') ? undefined : QuestionTemplateDetailOutFromJSON(json['questionTemplate']),
        'content': AppSchemasManageQuestionsQuestionDetailOutContentDetailOutFromJSON(json['content']),
    };
}

export function QuestionDetailOutToJSON(value?: QuestionDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'title': value.title,
        'titleEn': value.titleEn,
        'text': value.text,
        'textEn': value.textEn,
        'targetTime': value.targetTime,
        'difficulty': value.difficulty,
        'summary': value.summary,
        'image': value.image,
        'sqlSetup': value.sqlSetup,
        'answer': value.answer,
        'isSharedTestcase': value.isSharedTestcase,
        'isRefusedBrowsing': value.isRefusedBrowsing,
        'isVerified': value.isVerified,
        'showTestcaseToAnswerer': value.showTestcaseToAnswerer,
        'contentTopicId': value.contentTopicId,
        'contentTopicName': value.contentTopicName,
        'contentTopicNameEn': value.contentTopicNameEn,
        'contentCategoryId': value.contentCategoryId,
        'contentCategoryName': value.contentCategoryName,
        'contentCategoryNameEn': value.contentCategoryNameEn,
        'contentTagNames': value.contentTagNames,
        'questionTypeLabel': value.questionTypeLabel,
        'questionType': QuestionTypeToJSON(value.questionType),
        'contentDivision': ContentDivisionToJSON(value.contentDivision),
        'contentDivisionLabel': value.contentDivisionLabel,
        'questionChoices': ((value.questionChoices as Array<any>).map(QuestionChoiceDetailOutToJSON)),
        'questionBlanks': ((value.questionBlanks as Array<any>).map(QuestionBlankDetailOutToJSON)),
        'questionFiles': ((value.questionFiles as Array<any>).map(QuestionFileDetailOutToJSON)),
        'questionTemplate': QuestionTemplateDetailOutToJSON(value.questionTemplate),
        'content': AppSchemasManageQuestionsQuestionDetailOutContentDetailOutToJSON(value.content),
    };
}
