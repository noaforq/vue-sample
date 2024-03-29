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
import type { TechthonDocumentIn } from './TechthonDocumentIn';
import {
    TechthonDocumentInFromJSON,
    TechthonDocumentInFromJSONTyped,
    TechthonDocumentInToJSON,
} from './TechthonDocumentIn';
import type { TechthonTestCaseIn } from './TechthonTestCaseIn';
import {
    TechthonTestCaseInFromJSON,
    TechthonTestCaseInFromJSONTyped,
    TechthonTestCaseInToJSON,
} from './TechthonTestCaseIn';

/**
 * 
 * @export
 * @interface TechthonContentDetailIn
 */
export interface TechthonContentDetailIn {
    /**
     * ミッション番号
     * @type {number}
     * @memberof TechthonContentDetailIn
     */
    missionNumber: number;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof TechthonContentDetailIn
     */
    title: string;
    /**
     * 問題タイトル英語
     * @type {string}
     * @memberof TechthonContentDetailIn
     */
    titleEn?: string;
    /**
     * コンテンツトピックID
     * @type {number}
     * @memberof TechthonContentDetailIn
     */
    contentTopicId: number;
    /**
     * レベル(難易度)
     * @type {number}
     * @memberof TechthonContentDetailIn
     */
    difficulty: number;
    /**
     * 概要(説明)
     * @type {string}
     * @memberof TechthonContentDetailIn
     */
    description: string;
    /**
     * 問題に登録されている資料
     * @type {Array<TechthonDocumentIn>}
     * @memberof TechthonContentDetailIn
     */
    documents: Array<TechthonDocumentIn>;
    /**
     * テストケースリスト
     * @type {Array<TechthonTestCaseIn>}
     * @memberof TechthonContentDetailIn
     */
    testCases: Array<TechthonTestCaseIn>;
}

/**
 * Check if a given object implements the TechthonContentDetailIn interface.
 */
export function instanceOfTechthonContentDetailIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "missionNumber" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "contentTopicId" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "documents" in value;
    isInstance = isInstance && "testCases" in value;

    return isInstance;
}

export function TechthonContentDetailInFromJSON(json: any): TechthonContentDetailIn {
    return TechthonContentDetailInFromJSONTyped(json, false);
}

export function TechthonContentDetailInFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonContentDetailIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'missionNumber': json['missionNumber'],
        'title': json['title'],
        'titleEn': !exists(json, 'titleEn') ? undefined : json['titleEn'],
        'contentTopicId': json['contentTopicId'],
        'difficulty': json['difficulty'],
        'description': json['description'],
        'documents': ((json['documents'] as Array<any>).map(TechthonDocumentInFromJSON)),
        'testCases': ((json['testCases'] as Array<any>).map(TechthonTestCaseInFromJSON)),
    };
}

export function TechthonContentDetailInToJSON(value?: TechthonContentDetailIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'missionNumber': value.missionNumber,
        'title': value.title,
        'titleEn': value.titleEn,
        'contentTopicId': value.contentTopicId,
        'difficulty': value.difficulty,
        'description': value.description,
        'documents': ((value.documents as Array<any>).map(TechthonDocumentInToJSON)),
        'testCases': ((value.testCases as Array<any>).map(TechthonTestCaseInToJSON)),
    };
}

