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
 * 電話番号タイプ
 * @export
 */
export const PhoneNumberType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type PhoneNumberType = typeof PhoneNumberType[keyof typeof PhoneNumberType];


export function PhoneNumberTypeFromJSON(json: any): PhoneNumberType {
    return PhoneNumberTypeFromJSONTyped(json, false);
}

export function PhoneNumberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumberType {
    return json as PhoneNumberType;
}

export function PhoneNumberTypeToJSON(value?: PhoneNumberType | null): any {
    return value as any;
}

