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
 * 退会理由種別
 * @export
 */
export const QuitReasonType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6
} as const;
export type QuitReasonType = typeof QuitReasonType[keyof typeof QuitReasonType];


export function QuitReasonTypeFromJSON(json: any): QuitReasonType {
    return QuitReasonTypeFromJSONTyped(json, false);
}

export function QuitReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuitReasonType {
    return json as QuitReasonType;
}

export function QuitReasonTypeToJSON(value?: QuitReasonType | null): any {
    return value as any;
}
