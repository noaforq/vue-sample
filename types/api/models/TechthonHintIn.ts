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
 * @interface TechthonHintIn
 */
export interface TechthonHintIn {
    /**
     * 順番
     * @type {number}
     * @memberof TechthonHintIn
     */
    order: number;
    /**
     * 本文
     * @type {string}
     * @memberof TechthonHintIn
     */
    content: string;
    /**
     * 減点率
     * @type {number}
     * @memberof TechthonHintIn
     */
    decreaseRate: number;
}

/**
 * Check if a given object implements the TechthonHintIn interface.
 */
export function instanceOfTechthonHintIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "decreaseRate" in value;

    return isInstance;
}

export function TechthonHintInFromJSON(json: any): TechthonHintIn {
    return TechthonHintInFromJSONTyped(json, false);
}

export function TechthonHintInFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonHintIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'order': json['order'],
        'content': json['content'],
        'decreaseRate': json['decreaseRate'],
    };
}

export function TechthonHintInToJSON(value?: TechthonHintIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order': value.order,
        'content': value.content,
        'decreaseRate': value.decreaseRate,
    };
}
