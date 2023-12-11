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
 * @interface CommonContactsIn
 */
export interface CommonContactsIn {
    /**
     * 問い合わせ本文
     * @type {string}
     * @memberof CommonContactsIn
     */
    body: string;
    /**
     * 本名
     * @type {string}
     * @memberof CommonContactsIn
     */
    name: string | null;
    /**
     * メールアドレス
     * @type {string}
     * @memberof CommonContactsIn
     */
    email: string | null;
    /**
     * 件名
     * @type {string}
     * @memberof CommonContactsIn
     */
    title: string | null;
}

/**
 * Check if a given object implements the CommonContactsIn interface.
 */
export function instanceOfCommonContactsIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function CommonContactsInFromJSON(json: any): CommonContactsIn {
    return CommonContactsInFromJSONTyped(json, false);
}

export function CommonContactsInFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonContactsIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': json['body'],
        'name': json['name'],
        'email': json['email'],
        'title': json['title'],
    };
}

export function CommonContactsInToJSON(value?: CommonContactsIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': value.body,
        'name': value.name,
        'email': value.email,
        'title': value.title,
    };
}
