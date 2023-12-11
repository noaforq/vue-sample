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
 * @interface QuestionPublishIn
 */
export interface QuestionPublishIn {
    /**
     * content_id
     * @type {number}
     * @memberof QuestionPublishIn
     */
    id: number;
    /**
     * 公開フラグ
     * @type {boolean}
     * @memberof QuestionPublishIn
     */
    isPublished: boolean;
}

/**
 * Check if a given object implements the QuestionPublishIn interface.
 */
export function instanceOfQuestionPublishIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "isPublished" in value;

    return isInstance;
}

export function QuestionPublishInFromJSON(json: any): QuestionPublishIn {
    return QuestionPublishInFromJSONTyped(json, false);
}

export function QuestionPublishInFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionPublishIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'isPublished': json['isPublished'],
    };
}

export function QuestionPublishInToJSON(value?: QuestionPublishIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'isPublished': value.isPublished,
    };
}

