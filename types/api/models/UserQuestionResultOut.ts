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
import type { QuestionResultStatus } from './QuestionResultStatus';
import {
    QuestionResultStatusFromJSON,
    QuestionResultStatusFromJSONTyped,
    QuestionResultStatusToJSON,
} from './QuestionResultStatus';

/**
 * 
 * @export
 * @interface UserQuestionResultOut
 */
export interface UserQuestionResultOut {
    /**
     * QuestionResult ID
     * @type {number}
     * @memberof UserQuestionResultOut
     */
    id: number;
    /**
     * コンテンツID
     * @type {number}
     * @memberof UserQuestionResultOut
     */
    contentId: number;
    /**
     * 問題名
     * @type {string}
     * @memberof UserQuestionResultOut
     */
    questionTitle: string;
    /**
     * 言語
     * @type {string}
     * @memberof UserQuestionResultOut
     */
    pgLang?: string | null;
    /**
     * イベント問題の提出か
     * @type {boolean}
     * @memberof UserQuestionResultOut
     */
    isEventSubmission: boolean;
    /**
     * カテゴリ名
     * @type {string}
     * @memberof UserQuestionResultOut
     */
    contentCategoryName: string;
    /**
     * トピック名
     * @type {string}
     * @memberof UserQuestionResultOut
     */
    contentTopicName: string;
    /**
     * 難易度
     * @type {number}
     * @memberof UserQuestionResultOut
     */
    difficulty: number;
    /**
     * 
     * @type {QuestionResultStatus}
     * @memberof UserQuestionResultOut
     */
    questionResultStatus: QuestionResultStatus;
    /**
     * 開始日時
     * @type {Date}
     * @memberof UserQuestionResultOut
     */
    startedAt: Date;
    /**
     * 正解日時
     * @type {Date}
     * @memberof UserQuestionResultOut
     */
    passedAt?: Date | null;
    /**
     * 
     * @type {ContentOrganizationDivision}
     * @memberof UserQuestionResultOut
     */
    contentOrganizationDivision: ContentOrganizationDivision;
    /**
     * セッションID
     * @type {number}
     * @memberof UserQuestionResultOut
     */
    sessionId?: number | null;
    /**
     * イベント名
     * @type {string}
     * @memberof UserQuestionResultOut
     */
    eventName?: string | null;
}

/**
 * Check if a given object implements the UserQuestionResultOut interface.
 */
export function instanceOfUserQuestionResultOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "questionTitle" in value;
    isInstance = isInstance && "isEventSubmission" in value;
    isInstance = isInstance && "contentCategoryName" in value;
    isInstance = isInstance && "contentTopicName" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "questionResultStatus" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "contentOrganizationDivision" in value;

    return isInstance;
}

export function UserQuestionResultOutFromJSON(json: any): UserQuestionResultOut {
    return UserQuestionResultOutFromJSONTyped(json, false);
}

export function UserQuestionResultOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserQuestionResultOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'contentId': json['contentId'],
        'questionTitle': json['questionTitle'],
        'pgLang': !exists(json, 'pgLang') ? undefined : json['pgLang'],
        'isEventSubmission': json['isEventSubmission'],
        'contentCategoryName': json['contentCategoryName'],
        'contentTopicName': json['contentTopicName'],
        'difficulty': json['difficulty'],
        'questionResultStatus': QuestionResultStatusFromJSON(json['questionResultStatus']),
        'startedAt': (new Date(json['startedAt'])),
        'passedAt': !exists(json, 'passedAt') ? undefined : (json['passedAt'] === null ? null : new Date(json['passedAt'])),
        'contentOrganizationDivision': ContentOrganizationDivisionFromJSON(json['contentOrganizationDivision']),
        'sessionId': !exists(json, 'sessionId') ? undefined : json['sessionId'],
        'eventName': !exists(json, 'eventName') ? undefined : json['eventName'],
    };
}

export function UserQuestionResultOutToJSON(value?: UserQuestionResultOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'contentId': value.contentId,
        'questionTitle': value.questionTitle,
        'pgLang': value.pgLang,
        'isEventSubmission': value.isEventSubmission,
        'contentCategoryName': value.contentCategoryName,
        'contentTopicName': value.contentTopicName,
        'difficulty': value.difficulty,
        'questionResultStatus': QuestionResultStatusToJSON(value.questionResultStatus),
        'startedAt': (value.startedAt.toISOString()),
        'passedAt': value.passedAt === undefined ? undefined : (value.passedAt === null ? null : value.passedAt.toISOString()),
        'contentOrganizationDivision': ContentOrganizationDivisionToJSON(value.contentOrganizationDivision),
        'sessionId': value.sessionId,
        'eventName': value.eventName,
    };
}

