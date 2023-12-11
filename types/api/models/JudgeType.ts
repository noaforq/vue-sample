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
 * ジャッジタイプ
 * ジャッジシステムから受け取った結果がどこで使用されたものかを判別するためのもの
 * @export
 */
export const JudgeType = {
    Question: 'question',
    QuestionSample: 'question_sample',
    Template: 'template',
    Verification: 'verification'
} as const;
export type JudgeType = typeof JudgeType[keyof typeof JudgeType];


export function JudgeTypeFromJSON(json: any): JudgeType {
    return JudgeTypeFromJSONTyped(json, false);
}

export function JudgeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): JudgeType {
    return json as JudgeType;
}

export function JudgeTypeToJSON(value?: JudgeType | null): any {
    return value as any;
}
