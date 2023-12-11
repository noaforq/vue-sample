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
 * @interface QuestionBlankDetail
 */
export interface QuestionBlankDetail {
    /**
     * 空欄ID
     * @type {number}
     * @memberof QuestionBlankDetail
     */
    id: number;
    /**
     * 順番
     * @type {number}
     * @memberof QuestionBlankDetail
     */
    order: number;
    /**
     * タイトル
     * @type {string}
     * @memberof QuestionBlankDetail
     */
    title: string;
    /**
     * 正解
     * @type {string}
     * @memberof QuestionBlankDetail
     */
    answer: string;
}

/**
 * Check if a given object implements the QuestionBlankDetail interface.
 */
export function instanceOfQuestionBlankDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "answer" in value;

    return isInstance;
}

export function QuestionBlankDetailFromJSON(json: any): QuestionBlankDetail {
    return QuestionBlankDetailFromJSONTyped(json, false);
}

export function QuestionBlankDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionBlankDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'order': json['order'],
        'title': json['title'],
        'answer': json['answer'],
    };
}

export function QuestionBlankDetailToJSON(value?: QuestionBlankDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order': value.order,
        'title': value.title,
        'answer': value.answer,
    };
}
