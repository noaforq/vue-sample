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
 * @interface UpdatePasswordIn
 */
export interface UpdatePasswordIn {
    /**
     * 現在のパスワード
     * @type {string}
     * @memberof UpdatePasswordIn
     */
    oldPassword: string;
    /**
     * 新しいパスワード
     * @type {string}
     * @memberof UpdatePasswordIn
     */
    newPassword: string;
    /**
     * 新しいパスワード（確認用）
     * @type {string}
     * @memberof UpdatePasswordIn
     */
    newPasswordConfirm: string;
}

/**
 * Check if a given object implements the UpdatePasswordIn interface.
 */
export function instanceOfUpdatePasswordIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "oldPassword" in value;
    isInstance = isInstance && "newPassword" in value;
    isInstance = isInstance && "newPasswordConfirm" in value;

    return isInstance;
}

export function UpdatePasswordInFromJSON(json: any): UpdatePasswordIn {
    return UpdatePasswordInFromJSONTyped(json, false);
}

export function UpdatePasswordInFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePasswordIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'oldPassword': json['oldPassword'],
        'newPassword': json['newPassword'],
        'newPasswordConfirm': json['newPasswordConfirm'],
    };
}

export function UpdatePasswordInToJSON(value?: UpdatePasswordIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'oldPassword': value.oldPassword,
        'newPassword': value.newPassword,
        'newPasswordConfirm': value.newPasswordConfirm,
    };
}
