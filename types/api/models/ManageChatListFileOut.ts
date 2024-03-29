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
 * @interface ManageChatListFileOut
 */
export interface ManageChatListFileOut {
    /**
     * ファイル名
     * @type {string}
     * @memberof ManageChatListFileOut
     */
    fileName: string;
    /**
     * ファイルURL
     * @type {string}
     * @memberof ManageChatListFileOut
     */
    file: string;
    /**
     * 有効期限
     * @type {Date}
     * @memberof ManageChatListFileOut
     */
    expiresAt: Date;
    /**
     * 有効期限切れか
     * @type {boolean}
     * @memberof ManageChatListFileOut
     */
    isExpired: boolean;
    /**
     * 削除済みか
     * @type {boolean}
     * @memberof ManageChatListFileOut
     */
    isDeleted: boolean;
}

/**
 * Check if a given object implements the ManageChatListFileOut interface.
 */
export function instanceOfManageChatListFileOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "file" in value;
    isInstance = isInstance && "expiresAt" in value;
    isInstance = isInstance && "isExpired" in value;
    isInstance = isInstance && "isDeleted" in value;

    return isInstance;
}

export function ManageChatListFileOutFromJSON(json: any): ManageChatListFileOut {
    return ManageChatListFileOutFromJSONTyped(json, false);
}

export function ManageChatListFileOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageChatListFileOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileName': json['fileName'],
        'file': json['file'],
        'expiresAt': (new Date(json['expiresAt'])),
        'isExpired': json['isExpired'],
        'isDeleted': json['isDeleted'],
    };
}

export function ManageChatListFileOutToJSON(value?: ManageChatListFileOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileName': value.fileName,
        'file': value.file,
        'expiresAt': (value.expiresAt.toISOString()),
        'isExpired': value.isExpired,
        'isDeleted': value.isDeleted,
    };
}

