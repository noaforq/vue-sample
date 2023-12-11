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
 * @interface ManageChatFileListOut
 */
export interface ManageChatFileListOut {
    /**
     * チャットファイルID
     * @type {number}
     * @memberof ManageChatFileListOut
     */
    chatFileId: number;
    /**
     * チャットID
     * @type {number}
     * @memberof ManageChatFileListOut
     */
    chatId: number;
    /**
     * 作成日時
     * @type {Date}
     * @memberof ManageChatFileListOut
     */
    createdAt: Date;
    /**
     * ファイル名
     * @type {string}
     * @memberof ManageChatFileListOut
     */
    fileName: string;
    /**
     * ファイルURL
     * @type {string}
     * @memberof ManageChatFileListOut
     */
    file: string;
    /**
     * 有効期限
     * @type {Date}
     * @memberof ManageChatFileListOut
     */
    expiresAt: Date;
    /**
     * 送信者
     * @type {string}
     * @memberof ManageChatFileListOut
     */
    sender: string;
    /**
     * アイコンURL
     * @type {string}
     * @memberof ManageChatFileListOut
     */
    icon: string;
}

/**
 * Check if a given object implements the ManageChatFileListOut interface.
 */
export function instanceOfManageChatFileListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chatFileId" in value;
    isInstance = isInstance && "chatId" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "file" in value;
    isInstance = isInstance && "expiresAt" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "icon" in value;

    return isInstance;
}

export function ManageChatFileListOutFromJSON(json: any): ManageChatFileListOut {
    return ManageChatFileListOutFromJSONTyped(json, false);
}

export function ManageChatFileListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageChatFileListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chatFileId': json['chatFileId'],
        'chatId': json['chatId'],
        'createdAt': (new Date(json['createdAt'])),
        'fileName': json['fileName'],
        'file': json['file'],
        'expiresAt': (new Date(json['expiresAt'])),
        'sender': json['sender'],
        'icon': json['icon'],
    };
}

export function ManageChatFileListOutToJSON(value?: ManageChatFileListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chatFileId': value.chatFileId,
        'chatId': value.chatId,
        'createdAt': (value.createdAt.toISOString()),
        'fileName': value.fileName,
        'file': value.file,
        'expiresAt': (value.expiresAt.toISOString()),
        'sender': value.sender,
        'icon': value.icon,
    };
}

