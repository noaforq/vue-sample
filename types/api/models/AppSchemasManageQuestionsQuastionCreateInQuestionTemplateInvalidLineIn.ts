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
 * @interface AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn
 */
export interface AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn {
    /**
     * 開始行
     * @type {number}
     * @memberof AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn
     */
    startLine: number;
    /**
     * 終了行
     * @type {number}
     * @memberof AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn
     */
    endLine: number;
}

/**
 * Check if a given object implements the AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn interface.
 */
export function instanceOfAppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "startLine" in value;
    isInstance = isInstance && "endLine" in value;

    return isInstance;
}

export function AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineInFromJSON(json: any): AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn {
    return AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineInFromJSONTyped(json, false);
}

export function AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineInFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startLine': json['startLine'],
        'endLine': json['endLine'],
    };
}

export function AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineInToJSON(value?: AppSchemasManageQuestionsQuastionCreateInQuestionTemplateInvalidLineIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startLine': value.startLine,
        'endLine': value.endLine,
    };
}

