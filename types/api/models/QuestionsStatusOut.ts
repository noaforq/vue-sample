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
 * @interface QuestionsStatusOut
 */
export interface QuestionsStatusOut {
    /**
     * 問題を1度だけでも開いたことがある
     * @type {boolean}
     * @memberof QuestionsStatusOut
     */
    isAnswered: boolean;
}

/**
 * Check if a given object implements the QuestionsStatusOut interface.
 */
export function instanceOfQuestionsStatusOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isAnswered" in value;

    return isInstance;
}

export function QuestionsStatusOutFromJSON(json: any): QuestionsStatusOut {
    return QuestionsStatusOutFromJSONTyped(json, false);
}

export function QuestionsStatusOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionsStatusOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isAnswered': json['isAnswered'],
    };
}

export function QuestionsStatusOutToJSON(value?: QuestionsStatusOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isAnswered': value.isAnswered,
    };
}

