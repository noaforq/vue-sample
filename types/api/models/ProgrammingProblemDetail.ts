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
import type { ContentOrganizationDivision } from './ContentOrganizationDivision';
import {
    ContentOrganizationDivisionFromJSON,
    ContentOrganizationDivisionFromJSONTyped,
    ContentOrganizationDivisionToJSON,
} from './ContentOrganizationDivision';
import type { QuestionType } from './QuestionType';
import {
    QuestionTypeFromJSON,
    QuestionTypeFromJSONTyped,
    QuestionTypeToJSON,
} from './QuestionType';

/**
 * 
 * @export
 * @interface ProgrammingProblemDetail
 */
export interface ProgrammingProblemDetail {
    /**
     * QuestionResult.id
     * @type {number}
     * @memberof ProgrammingProblemDetail
     */
    id?: number | null;
    /**
     * 問題名
     * @type {string}
     * @memberof ProgrammingProblemDetail
     */
    title?: string | null;
    /**
     * 
     * @type {QuestionType}
     * @memberof ProgrammingProblemDetail
     */
    questionType?: QuestionType | null;
    /**
     * 
     * @type {ContentOrganizationDivision}
     * @memberof ProgrammingProblemDetail
     */
    contentOrganizationDivision?: ContentOrganizationDivision | null;
    /**
     * 難易度
     * @type {number}
     * @memberof ProgrammingProblemDetail
     */
    difficulty?: number | null;
    /**
     * 使用言語
     * @type {string}
     * @memberof ProgrammingProblemDetail
     */
    pgLang?: string | null;
    /**
     * 解答所要時間(xx時xx分xx秒)
     * @type {number}
     * @memberof ProgrammingProblemDetail
     */
    elapsedTimeToPass?: number | null;
    /**
     * 提出回数
     * @type {number}
     * @memberof ProgrammingProblemDetail
     */
    submissionCount?: number | null;
    /**
     * 合格日時(yyyy/mm/dd)
     * @type {Date}
     * @memberof ProgrammingProblemDetail
     */
    passedAt?: Date | null;
    /**
     * コード
     * @type {string}
     * @memberof ProgrammingProblemDetail
     */
    sourceCode?: string | null;
    /**
     * コンテンツID
     * @type {number}
     * @memberof ProgrammingProblemDetail
     */
    contentId?: number | null;
    /**
     * セッションID
     * @type {number}
     * @memberof ProgrammingProblemDetail
     */
    sessionId?: number | null;
}

/**
 * Check if a given object implements the ProgrammingProblemDetail interface.
 */
export function instanceOfProgrammingProblemDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProgrammingProblemDetailFromJSON(json: any): ProgrammingProblemDetail {
    return ProgrammingProblemDetailFromJSONTyped(json, false);
}

export function ProgrammingProblemDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgrammingProblemDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'questionType': !exists(json, 'questionType') ? undefined : QuestionTypeFromJSON(json['questionType']),
        'contentOrganizationDivision': !exists(json, 'contentOrganizationDivision') ? undefined : ContentOrganizationDivisionFromJSON(json['contentOrganizationDivision']),
        'difficulty': !exists(json, 'difficulty') ? undefined : json['difficulty'],
        'pgLang': !exists(json, 'pgLang') ? undefined : json['pgLang'],
        'elapsedTimeToPass': !exists(json, 'elapsedTimeToPass') ? undefined : json['elapsedTimeToPass'],
        'submissionCount': !exists(json, 'submissionCount') ? undefined : json['submissionCount'],
        'passedAt': !exists(json, 'passedAt') ? undefined : (json['passedAt'] === null ? null : new Date(json['passedAt'])),
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
        'contentId': !exists(json, 'contentId') ? undefined : json['contentId'],
        'sessionId': !exists(json, 'sessionId') ? undefined : json['sessionId'],
    };
}

export function ProgrammingProblemDetailToJSON(value?: ProgrammingProblemDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'questionType': QuestionTypeToJSON(value.questionType),
        'contentOrganizationDivision': ContentOrganizationDivisionToJSON(value.contentOrganizationDivision),
        'difficulty': value.difficulty,
        'pgLang': value.pgLang,
        'elapsedTimeToPass': value.elapsedTimeToPass,
        'submissionCount': value.submissionCount,
        'passedAt': value.passedAt === undefined ? undefined : (value.passedAt === null ? null : value.passedAt.toISOString()),
        'sourceCode': value.sourceCode,
        'contentId': value.contentId,
        'sessionId': value.sessionId,
    };
}
