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
import type { TechthonDocumentBase } from './TechthonDocumentBase';
import {
    TechthonDocumentBaseFromJSON,
    TechthonDocumentBaseFromJSONTyped,
    TechthonDocumentBaseToJSON,
} from './TechthonDocumentBase';
import type { TechthonTestCaseBase } from './TechthonTestCaseBase';
import {
    TechthonTestCaseBaseFromJSON,
    TechthonTestCaseBaseFromJSONTyped,
    TechthonTestCaseBaseToJSON,
} from './TechthonTestCaseBase';

/**
 * 
 * @export
 * @interface AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
 */
export interface AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut {
    /**
     * 
     * @type {number}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    id: number;
    /**
     * ミッション番号
     * @type {number}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    missionNumber: number;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    title: string;
    /**
     * コンテンツトピックID
     * @type {number}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    contentTopicId: number;
    /**
     * レベル(難易度)
     * @type {number}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    difficulty: number;
    /**
     * 概要(説明)
     * @type {string}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    description: string;
    /**
     * 問題に登録されている資料
     * @type {Array<TechthonDocumentBase>}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    documents: Array<TechthonDocumentBase>;
    /**
     * テストケースリスト
     * @type {Array<TechthonTestCaseBase>}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    testCases: Array<TechthonTestCaseBase>;
    /**
     * コンテンツカテゴリID
     * @type {number}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    contentCategoryId: number;
    /**
     * コンテンツカテゴリ名
     * @type {string}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    contentCategoryName: string;
    /**
     * コンテンツトピック名
     * @type {string}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    contentTopicName: string;
    /**
     * 開始日時
     * @type {Date}
     * @memberof AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut
     */
    answerStartAt?: Date | null;
}

/**
 * Check if a given object implements the AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut interface.
 */
export function instanceOfAppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "missionNumber" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "contentTopicId" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "documents" in value;
    isInstance = isInstance && "testCases" in value;
    isInstance = isInstance && "contentCategoryId" in value;
    isInstance = isInstance && "contentCategoryName" in value;
    isInstance = isInstance && "contentTopicName" in value;

    return isInstance;
}

export function AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSON(json: any): AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut {
    return AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSONTyped(json, false);
}

export function AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'missionNumber': json['missionNumber'],
        'title': json['title'],
        'contentTopicId': json['contentTopicId'],
        'difficulty': json['difficulty'],
        'description': json['description'],
        'documents': ((json['documents'] as Array<any>).map(TechthonDocumentBaseFromJSON)),
        'testCases': ((json['testCases'] as Array<any>).map(TechthonTestCaseBaseFromJSON)),
        'contentCategoryId': json['contentCategoryId'],
        'contentCategoryName': json['contentCategoryName'],
        'contentTopicName': json['contentTopicName'],
        'answerStartAt': !exists(json, 'answerStartAt') ? undefined : (json['answerStartAt'] === null ? null : new Date(json['answerStartAt'])),
    };
}

export function AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOutToJSON(value?: AppSchemasManageTechthonQuestionsTechthonQuestionOutTechthonContentDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'missionNumber': value.missionNumber,
        'title': value.title,
        'contentTopicId': value.contentTopicId,
        'difficulty': value.difficulty,
        'description': value.description,
        'documents': ((value.documents as Array<any>).map(TechthonDocumentBaseToJSON)),
        'testCases': ((value.testCases as Array<any>).map(TechthonTestCaseBaseToJSON)),
        'contentCategoryId': value.contentCategoryId,
        'contentCategoryName': value.contentCategoryName,
        'contentTopicName': value.contentTopicName,
        'answerStartAt': value.answerStartAt === undefined ? undefined : (value.answerStartAt === null ? null : value.answerStartAt.toISOString()),
    };
}

