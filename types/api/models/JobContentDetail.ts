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
 * @interface JobContentDetail
 */
export interface JobContentDetail {
    /**
     * ID
     * @type {number}
     * @memberof JobContentDetail
     */
    id: number;
    /**
     * タイトル
     * @type {string}
     * @memberof JobContentDetail
     */
    title: string;
    /**
     * 内容
     * @type {string}
     * @memberof JobContentDetail
     */
    text: string;
    /**
     * 並び順
     * @type {number}
     * @memberof JobContentDetail
     */
    order: number;
}

/**
 * Check if a given object implements the JobContentDetail interface.
 */
export function instanceOfJobContentDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "order" in value;

    return isInstance;
}

export function JobContentDetailFromJSON(json: any): JobContentDetail {
    return JobContentDetailFromJSONTyped(json, false);
}

export function JobContentDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobContentDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'text': json['text'],
        'order': json['order'],
    };
}

export function JobContentDetailToJSON(value?: JobContentDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'text': value.text,
        'order': value.order,
    };
}
