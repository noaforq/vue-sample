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
 * @interface JobContentIn
 */
export interface JobContentIn {
    /**
     * タイトル
     * @type {string}
     * @memberof JobContentIn
     */
    title: string;
    /**
     * 内容
     * @type {string}
     * @memberof JobContentIn
     */
    text: string;
    /**
     * 並び順
     * @type {number}
     * @memberof JobContentIn
     */
    order: number;
}

/**
 * Check if a given object implements the JobContentIn interface.
 */
export function instanceOfJobContentIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "order" in value;

    return isInstance;
}

export function JobContentInFromJSON(json: any): JobContentIn {
    return JobContentInFromJSONTyped(json, false);
}

export function JobContentInFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobContentIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'text': json['text'],
        'order': json['order'],
    };
}

export function JobContentInToJSON(value?: JobContentIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'text': value.text,
        'order': value.order,
    };
}

