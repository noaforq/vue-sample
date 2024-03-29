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
 * @interface ExecuteTechthonContentOut
 */
export interface ExecuteTechthonContentOut {
    /**
     * 
     * @type {number}
     * @memberof ExecuteTechthonContentOut
     */
    id: number;
    /**
     * テストケース番号
     * @type {number}
     * @memberof ExecuteTechthonContentOut
     */
    order: number;
    /**
     * 採点結果
     * @type {string}
     * @memberof ExecuteTechthonContentOut
     */
    result: string;
    /**
     * スコア
     * @type {number}
     * @memberof ExecuteTechthonContentOut
     */
    score: number;
}

/**
 * Check if a given object implements the ExecuteTechthonContentOut interface.
 */
export function instanceOfExecuteTechthonContentOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "score" in value;

    return isInstance;
}

export function ExecuteTechthonContentOutFromJSON(json: any): ExecuteTechthonContentOut {
    return ExecuteTechthonContentOutFromJSONTyped(json, false);
}

export function ExecuteTechthonContentOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecuteTechthonContentOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'order': json['order'],
        'result': json['result'],
        'score': json['score'],
    };
}

export function ExecuteTechthonContentOutToJSON(value?: ExecuteTechthonContentOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order': value.order,
        'result': value.result,
        'score': value.score,
    };
}

