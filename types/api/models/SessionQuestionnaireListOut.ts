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
 * セッションアンケート
 * @export
 * @interface SessionQuestionnaireListOut
 */
export interface SessionQuestionnaireListOut {
    /**
     * GoogleForm編集ページURL
     * @type {string}
     * @memberof SessionQuestionnaireListOut
     */
    editGoogleFormLink: string;
    /**
     * アンケート説明文
     * @type {string}
     * @memberof SessionQuestionnaireListOut
     */
    interviewDescription: string;
    /**
     * GoogleForm回答ページURL
     * @type {string}
     * @memberof SessionQuestionnaireListOut
     */
    answerGoogleFormLink: string;
    /**
     * アンケートを表示有無
     * @type {boolean}
     * @memberof SessionQuestionnaireListOut
     */
    hasInterview: boolean | null;
}

/**
 * Check if a given object implements the SessionQuestionnaireListOut interface.
 */
export function instanceOfSessionQuestionnaireListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "editGoogleFormLink" in value;
    isInstance = isInstance && "interviewDescription" in value;
    isInstance = isInstance && "answerGoogleFormLink" in value;
    isInstance = isInstance && "hasInterview" in value;

    return isInstance;
}

export function SessionQuestionnaireListOutFromJSON(json: any): SessionQuestionnaireListOut {
    return SessionQuestionnaireListOutFromJSONTyped(json, false);
}

export function SessionQuestionnaireListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionQuestionnaireListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'editGoogleFormLink': json['editGoogleFormLink'],
        'interviewDescription': json['interviewDescription'],
        'answerGoogleFormLink': json['answerGoogleFormLink'],
        'hasInterview': json['hasInterview'],
    };
}

export function SessionQuestionnaireListOutToJSON(value?: SessionQuestionnaireListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'editGoogleFormLink': value.editGoogleFormLink,
        'interviewDescription': value.interviewDescription,
        'answerGoogleFormLink': value.answerGoogleFormLink,
        'hasInterview': value.hasInterview,
    };
}
