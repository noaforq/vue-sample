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
import type { ChatType } from './ChatType';
import {
    ChatTypeFromJSON,
    ChatTypeFromJSONTyped,
    ChatTypeToJSON,
} from './ChatType';
import type { ManageChatSendFileIn } from './ManageChatSendFileIn';
import {
    ManageChatSendFileInFromJSON,
    ManageChatSendFileInFromJSONTyped,
    ManageChatSendFileInToJSON,
} from './ManageChatSendFileIn';

/**
 * 
 * @export
 * @interface ManageChatSendIn
 */
export interface ManageChatSendIn {
    /**
     * 
     * @type {ChatType}
     * @memberof ManageChatSendIn
     */
    chatType: ChatType;
    /**
     * メッセージ
     * @type {string}
     * @memberof ManageChatSendIn
     */
    message?: string;
    /**
     * 
     * @type {ManageChatSendFileIn}
     * @memberof ManageChatSendIn
     */
    file?: ManageChatSendFileIn | null;
}

/**
 * Check if a given object implements the ManageChatSendIn interface.
 */
export function instanceOfManageChatSendIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chatType" in value;

    return isInstance;
}

export function ManageChatSendInFromJSON(json: any): ManageChatSendIn {
    return ManageChatSendInFromJSONTyped(json, false);
}

export function ManageChatSendInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageChatSendIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chatType': ChatTypeFromJSON(json['chatType']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'file': !exists(json, 'file') ? undefined : ManageChatSendFileInFromJSON(json['file']),
    };
}

export function ManageChatSendInToJSON(value?: ManageChatSendIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chatType': ChatTypeToJSON(value.chatType),
        'message': value.message,
        'file': ManageChatSendFileInToJSON(value.file),
    };
}

