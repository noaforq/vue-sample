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
/**
 * 
 * @export
 * @interface TechthonQuestionListOut
 */
export interface TechthonQuestionListOut {
    /**
     * コンテンツID
     * @type {number}
     * @memberof TechthonQuestionListOut
     */
    id: number;
    /**
     * ミッション番号
     * @type {string}
     * @memberof TechthonQuestionListOut
     */
    missionName: string;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof TechthonQuestionListOut
     */
    title: string;
    /**
     * コンテンツカテゴリ名
     * @type {string}
     * @memberof TechthonQuestionListOut
     */
    contentCategoryName: string;
    /**
     * コンテンツトピック名
     * @type {string}
     * @memberof TechthonQuestionListOut
     */
    contentTopicName: string;
}

/**
 * Check if a given object implements the TechthonQuestionListOut interface.
 */
export function instanceOfTechthonQuestionListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "missionName" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "contentCategoryName" in value;
    isInstance = isInstance && "contentTopicName" in value;

    return isInstance;
}

export function TechthonQuestionListOutFromJSON(json: any): TechthonQuestionListOut {
    return TechthonQuestionListOutFromJSONTyped(json, false);
}

export function TechthonQuestionListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonQuestionListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'missionName': json['missionName'],
        'title': json['title'],
        'contentCategoryName': json['contentCategoryName'],
        'contentTopicName': json['contentTopicName'],
    };
}

export function TechthonQuestionListOutToJSON(value?: TechthonQuestionListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'missionName': value.missionName,
        'title': value.title,
        'contentCategoryName': value.contentCategoryName,
        'contentTopicName': value.contentTopicName,
    };
}
