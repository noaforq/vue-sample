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


/**
 * 問題形式
 * @export
 */
export const QuestionType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5
} as const;
export type QuestionType = typeof QuestionType[keyof typeof QuestionType];


export function QuestionTypeFromJSON(json: any): QuestionType {
    return QuestionTypeFromJSONTyped(json, false);
}

export function QuestionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionType {
    return json as QuestionType;
}

export function QuestionTypeToJSON(value?: QuestionType | null): any {
    return value as any;
}
