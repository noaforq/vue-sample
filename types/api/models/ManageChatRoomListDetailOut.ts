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
/**
 * 
 * @export
 * @interface ManageChatRoomListDetailOut
 */
export interface ManageChatRoomListDetailOut {
    /**
     * チャットルームID
     * @type {number}
     * @memberof ManageChatRoomListDetailOut
     */
    id: number;
    /**
     * ユーザーアイコン画像URL
     * @type {string}
     * @memberof ManageChatRoomListDetailOut
     */
    icon: string;
    /**
     * チャットルーム名
     * @type {string}
     * @memberof ManageChatRoomListDetailOut
     */
    roomName: string;
    /**
     * サブチャットルーム名(本名)
     * @type {string}
     * @memberof ManageChatRoomListDetailOut
     */
    subRoomName: string;
    /**
     * チャット相手の種類
     * @type {string}
     * @memberof ManageChatRoomListDetailOut
     */
    chatPartnerType: string;
    /**
     * 未読数
     * @type {number}
     * @memberof ManageChatRoomListDetailOut
     */
    unreadCount: number;
    /**
     * 最終更新日時
     * @type {Date}
     * @memberof ManageChatRoomListDetailOut
     */
    lastSendTime: Date;
    /**
     * 退会アカウントか
     * @type {boolean}
     * @memberof ManageChatRoomListDetailOut
     */
    isDeletedAccount: boolean;
    /**
     * スカウト拒否アカウントか
     * @type {boolean}
     * @memberof ManageChatRoomListDetailOut
     */
    isScoutRefusalAccount: boolean;
}

/**
 * Check if a given object implements the ManageChatRoomListDetailOut interface.
 */
export function instanceOfManageChatRoomListDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "roomName" in value;
    isInstance = isInstance && "subRoomName" in value;
    isInstance = isInstance && "chatPartnerType" in value;
    isInstance = isInstance && "unreadCount" in value;
    isInstance = isInstance && "lastSendTime" in value;
    isInstance = isInstance && "isDeletedAccount" in value;
    isInstance = isInstance && "isScoutRefusalAccount" in value;

    return isInstance;
}

export function ManageChatRoomListDetailOutFromJSON(json: any): ManageChatRoomListDetailOut {
    return ManageChatRoomListDetailOutFromJSONTyped(json, false);
}

export function ManageChatRoomListDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageChatRoomListDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'icon': json['icon'],
        'roomName': json['roomName'],
        'subRoomName': json['subRoomName'],
        'chatPartnerType': json['chatPartnerType'],
        'unreadCount': json['unreadCount'],
        'lastSendTime': (new Date(json['lastSendTime'])),
        'isDeletedAccount': json['isDeletedAccount'],
        'isScoutRefusalAccount': json['isScoutRefusalAccount'],
    };
}

export function ManageChatRoomListDetailOutToJSON(value?: ManageChatRoomListDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'icon': value.icon,
        'roomName': value.roomName,
        'subRoomName': value.subRoomName,
        'chatPartnerType': value.chatPartnerType,
        'unreadCount': value.unreadCount,
        'lastSendTime': (value.lastSendTime.toISOString()),
        'isDeletedAccount': value.isDeletedAccount,
        'isScoutRefusalAccount': value.isScoutRefusalAccount,
    };
}

