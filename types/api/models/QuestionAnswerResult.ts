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
 * 問題解答結果
 * @export
 */
export const QuestionAnswerResult = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5
} as const;
export type QuestionAnswerResult = typeof QuestionAnswerResult[keyof typeof QuestionAnswerResult];


export function QuestionAnswerResultFromJSON(json: any): QuestionAnswerResult {
    return QuestionAnswerResultFromJSONTyped(json, false);
}

export function QuestionAnswerResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionAnswerResult {
    return json as QuestionAnswerResult;
}

export function QuestionAnswerResultToJSON(value?: QuestionAnswerResult | null): any {
    return value as any;
}

