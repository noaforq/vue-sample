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
 * @interface ManageChatSendFileIn
 */
export interface ManageChatSendFileIn {
    /**
     * ファイル名
     * @type {string}
     * @memberof ManageChatSendFileIn
     */
    fileName: string;
    /**
     * ファイルURL
     * @type {string}
     * @memberof ManageChatSendFileIn
     */
    file: string;
}

/**
 * Check if a given object implements the ManageChatSendFileIn interface.
 */
export function instanceOfManageChatSendFileIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "file" in value;

    return isInstance;
}

export function ManageChatSendFileInFromJSON(json: any): ManageChatSendFileIn {
    return ManageChatSendFileInFromJSONTyped(json, false);
}

export function ManageChatSendFileInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageChatSendFileIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileName': json['fileName'],
        'file': json['file'],
    };
}

export function ManageChatSendFileInToJSON(value?: ManageChatSendFileIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileName': value.fileName,
        'file': value.file,
    };
}

