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
 * @interface TechthonTestCaseHintStatusOut
 */
export interface TechthonTestCaseHintStatusOut {
    /**
     * ヒントID
     * @type {number}
     * @memberof TechthonTestCaseHintStatusOut
     */
    id: number;
    /**
     * ヒント解放状況
     * @type {boolean}
     * @memberof TechthonTestCaseHintStatusOut
     */
    isOpened: boolean;
}

/**
 * Check if a given object implements the TechthonTestCaseHintStatusOut interface.
 */
export function instanceOfTechthonTestCaseHintStatusOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "isOpened" in value;

    return isInstance;
}

export function TechthonTestCaseHintStatusOutFromJSON(json: any): TechthonTestCaseHintStatusOut {
    return TechthonTestCaseHintStatusOutFromJSONTyped(json, false);
}

export function TechthonTestCaseHintStatusOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonTestCaseHintStatusOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'isOpened': json['isOpened'],
    };
}

export function TechthonTestCaseHintStatusOutToJSON(value?: TechthonTestCaseHintStatusOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'isOpened': value.isOpened,
    };
}

