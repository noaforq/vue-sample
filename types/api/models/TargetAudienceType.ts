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
 * チュートリアル目標ユーザータイプ
 * 1: 一般ユーザー向け, 2: 学校ユーザー向け, 3: 企業ユーザー向け
 * @export
 */
export const TargetAudienceType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type TargetAudienceType = typeof TargetAudienceType[keyof typeof TargetAudienceType];


export function TargetAudienceTypeFromJSON(json: any): TargetAudienceType {
    return TargetAudienceTypeFromJSONTyped(json, false);
}

export function TargetAudienceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetAudienceType {
    return json as TargetAudienceType;
}

export function TargetAudienceTypeToJSON(value?: TargetAudienceType | null): any {
    return value as any;
}

