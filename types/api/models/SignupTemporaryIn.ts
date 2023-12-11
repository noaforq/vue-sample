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
 * @interface SignupTemporaryIn
 */
export interface SignupTemporaryIn {
    /**
     * ユーザー名
     * @type {string}
     * @memberof SignupTemporaryIn
     */
    username: string;
    /**
     * メールアドレス
     * @type {string}
     * @memberof SignupTemporaryIn
     */
    email: string;
    /**
     * パスワード
     * @type {string}
     * @memberof SignupTemporaryIn
     */
    password: string;
}

/**
 * Check if a given object implements the SignupTemporaryIn interface.
 */
export function instanceOfSignupTemporaryIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function SignupTemporaryInFromJSON(json: any): SignupTemporaryIn {
    return SignupTemporaryInFromJSONTyped(json, false);
}

export function SignupTemporaryInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignupTemporaryIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'email': json['email'],
        'password': json['password'],
    };
}

export function SignupTemporaryInToJSON(value?: SignupTemporaryIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'email': value.email,
        'password': value.password,
    };
}

