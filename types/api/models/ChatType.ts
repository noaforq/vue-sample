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
 * チャットタイプ
 * @export
 */
export const ChatType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type ChatType = typeof ChatType[keyof typeof ChatType];


export function ChatTypeFromJSON(json: any): ChatType {
    return ChatTypeFromJSONTyped(json, false);
}

export function ChatTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatType {
    return json as ChatType;
}

export function ChatTypeToJSON(value?: ChatType | null): any {
    return value as any;
}
