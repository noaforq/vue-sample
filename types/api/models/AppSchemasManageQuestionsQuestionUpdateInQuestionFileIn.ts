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
 * @interface AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn
 */
export interface AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn {
    /**
     * ファイル名
     * @type {string}
     * @memberof AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn
     */
    filename: string;
    /**
     * 問題画像URL
     * @type {string}
     * @memberof AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn
     */
    url: string;
}

/**
 * Check if a given object implements the AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn interface.
 */
export function instanceOfAppSchemasManageQuestionsQuestionUpdateInQuestionFileIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "filename" in value;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function AppSchemasManageQuestionsQuestionUpdateInQuestionFileInFromJSON(json: any): AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn {
    return AppSchemasManageQuestionsQuestionUpdateInQuestionFileInFromJSONTyped(json, false);
}

export function AppSchemasManageQuestionsQuestionUpdateInQuestionFileInFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filename': json['filename'],
        'url': json['url'],
    };
}

export function AppSchemasManageQuestionsQuestionUpdateInQuestionFileInToJSON(value?: AppSchemasManageQuestionsQuestionUpdateInQuestionFileIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filename': value.filename,
        'url': value.url,
    };
}
