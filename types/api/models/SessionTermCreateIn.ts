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
 * @interface SessionTermCreateIn
 */
export interface SessionTermCreateIn {
    /**
     * 規約タイトル
     * @type {string}
     * @memberof SessionTermCreateIn
     */
    title: string;
    /**
     * 本文
     * @type {string}
     * @memberof SessionTermCreateIn
     */
    content: string;
}

/**
 * Check if a given object implements the SessionTermCreateIn interface.
 */
export function instanceOfSessionTermCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function SessionTermCreateInFromJSON(json: any): SessionTermCreateIn {
    return SessionTermCreateInFromJSONTyped(json, false);
}

export function SessionTermCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionTermCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'content': json['content'],
    };
}

export function SessionTermCreateInToJSON(value?: SessionTermCreateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'content': value.content,
    };
}
