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
 * @interface ResetPasswordIn
 */
export interface ResetPasswordIn {
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordIn
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordIn
     */
    newPassword: string;
}

/**
 * Check if a given object implements the ResetPasswordIn interface.
 */
export function instanceOfResetPasswordIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "token" in value;
    isInstance = isInstance && "newPassword" in value;

    return isInstance;
}

export function ResetPasswordInFromJSON(json: any): ResetPasswordIn {
    return ResetPasswordInFromJSONTyped(json, false);
}

export function ResetPasswordInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetPasswordIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': json['token'],
        'newPassword': json['newPassword'],
    };
}

export function ResetPasswordInToJSON(value?: ResetPasswordIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
        'newPassword': value.newPassword,
    };
}

