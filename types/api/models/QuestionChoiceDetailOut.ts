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
 * @interface QuestionChoiceDetailOut
 */
export interface QuestionChoiceDetailOut {
    /**
     * 
     * @type {number}
     * @memberof QuestionChoiceDetailOut
     */
    id: number;
    /**
     * 順番
     * @type {number}
     * @memberof QuestionChoiceDetailOut
     */
    order: number;
    /**
     * 正解選択肢
     * @type {boolean}
     * @memberof QuestionChoiceDetailOut
     */
    isCorrect: boolean;
    /**
     * 表示テキスト
     * @type {string}
     * @memberof QuestionChoiceDetailOut
     */
    text: string;
    /**
     * 選択肢画像
     * @type {string}
     * @memberof QuestionChoiceDetailOut
     */
    image: string;
}

/**
 * Check if a given object implements the QuestionChoiceDetailOut interface.
 */
export function instanceOfQuestionChoiceDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "isCorrect" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "image" in value;

    return isInstance;
}

export function QuestionChoiceDetailOutFromJSON(json: any): QuestionChoiceDetailOut {
    return QuestionChoiceDetailOutFromJSONTyped(json, false);
}

export function QuestionChoiceDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionChoiceDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'order': json['order'],
        'isCorrect': json['isCorrect'],
        'text': json['text'],
        'image': json['image'],
    };
}

export function QuestionChoiceDetailOutToJSON(value?: QuestionChoiceDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order': value.order,
        'isCorrect': value.isCorrect,
        'text': value.text,
        'image': value.image,
    };
}
