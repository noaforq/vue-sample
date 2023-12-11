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
import type { ChatRoomType } from './ChatRoomType';
import {
    ChatRoomTypeFromJSON,
    ChatRoomTypeFromJSONTyped,
    ChatRoomTypeToJSON,
} from './ChatRoomType';
import type { ManageChatListDetailOut } from './ManageChatListDetailOut';
import {
    ManageChatListDetailOutFromJSON,
    ManageChatListDetailOutFromJSONTyped,
    ManageChatListDetailOutToJSON,
} from './ManageChatListDetailOut';

/**
 * 
 * @export
 * @interface ManageChatListOut
 */
export interface ManageChatListOut {
    /**
     * ユーザーアイコン画像URL
     * @type {string}
     * @memberof ManageChatListOut
     */
    icon: string;
    /**
     * チャットルーム名(ユーザー名)
     * @type {string}
     * @memberof ManageChatListOut
     */
    roomName: string;
    /**
     * サブチャットルーム名(本名)
     * @type {string}
     * @memberof ManageChatListOut
     */
    subRoomName: string;
    /**
     * 
     * @type {ChatRoomType}
     * @memberof ManageChatListOut
     */
    chatRoomType: ChatRoomType;
    /**
     * 退会済みか
     * @type {boolean}
     * @memberof ManageChatListOut
     */
    isDeletedAccount: boolean;
    /**
     * スカウト拒否しているか
     * @type {boolean}
     * @memberof ManageChatListOut
     */
    isScoutRefusalAccount: boolean;
    /**
     * 
     * @type {Array<ManageChatListDetailOut>}
     * @memberof ManageChatListOut
     */
    chats: Array<ManageChatListDetailOut>;
}

/**
 * Check if a given object implements the ManageChatListOut interface.
 */
export function instanceOfManageChatListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "roomName" in value;
    isInstance = isInstance && "subRoomName" in value;
    isInstance = isInstance && "chatRoomType" in value;
    isInstance = isInstance && "isDeletedAccount" in value;
    isInstance = isInstance && "isScoutRefusalAccount" in value;
    isInstance = isInstance && "chats" in value;

    return isInstance;
}

export function ManageChatListOutFromJSON(json: any): ManageChatListOut {
    return ManageChatListOutFromJSONTyped(json, false);
}

export function ManageChatListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageChatListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'icon': json['icon'],
        'roomName': json['roomName'],
        'subRoomName': json['subRoomName'],
        'chatRoomType': ChatRoomTypeFromJSON(json['chatRoomType']),
        'isDeletedAccount': json['isDeletedAccount'],
        'isScoutRefusalAccount': json['isScoutRefusalAccount'],
        'chats': ((json['chats'] as Array<any>).map(ManageChatListDetailOutFromJSON)),
    };
}

export function ManageChatListOutToJSON(value?: ManageChatListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'icon': value.icon,
        'roomName': value.roomName,
        'subRoomName': value.subRoomName,
        'chatRoomType': ChatRoomTypeToJSON(value.chatRoomType),
        'isDeletedAccount': value.isDeletedAccount,
        'isScoutRefusalAccount': value.isScoutRefusalAccount,
        'chats': ((value.chats as Array<any>).map(ManageChatListDetailOutToJSON)),
    };
}

