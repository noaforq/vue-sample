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
 * チャットルームタイプ
 * @export
 */
export const ChatRoomType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type ChatRoomType = typeof ChatRoomType[keyof typeof ChatRoomType];


export function ChatRoomTypeFromJSON(json: any): ChatRoomType {
    return ChatRoomTypeFromJSONTyped(json, false);
}

export function ChatRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatRoomType {
    return json as ChatRoomType;
}

export function ChatRoomTypeToJSON(value?: ChatRoomType | null): any {
    return value as any;
}

