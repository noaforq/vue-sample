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
 * コンテンツタイプ
 * @export
 */
export const ContentType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ContentType = typeof ContentType[keyof typeof ContentType];


export function ContentTypeFromJSON(json: any): ContentType {
    return ContentTypeFromJSONTyped(json, false);
}

export function ContentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentType {
    return json as ContentType;
}

export function ContentTypeToJSON(value?: ContentType | null): any {
    return value as any;
}

