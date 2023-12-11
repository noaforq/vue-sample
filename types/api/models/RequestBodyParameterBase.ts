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
 * @interface RequestBodyParameterBase
 */
export interface RequestBodyParameterBase {
    /**
     * 
     * @type {number}
     * @memberof RequestBodyParameterBase
     */
    id: number;
    /**
     * キー
     * @type {string}
     * @memberof RequestBodyParameterBase
     */
    key: string;
    /**
     * バリュー
     * @type {string}
     * @memberof RequestBodyParameterBase
     */
    value: string;
}

/**
 * Check if a given object implements the RequestBodyParameterBase interface.
 */
export function instanceOfRequestBodyParameterBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function RequestBodyParameterBaseFromJSON(json: any): RequestBodyParameterBase {
    return RequestBodyParameterBaseFromJSONTyped(json, false);
}

export function RequestBodyParameterBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestBodyParameterBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'key': json['key'],
        'value': json['value'],
    };
}

export function RequestBodyParameterBaseToJSON(value?: RequestBodyParameterBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'key': value.key,
        'value': value.value,
    };
}
