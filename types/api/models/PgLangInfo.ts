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
 * @interface PgLangInfo
 */
export interface PgLangInfo {
    /**
     * プログラミング言語ID
     * @type {number}
     * @memberof PgLangInfo
     */
    id: number;
    /**
     * プログラミング言語名
     * @type {string}
     * @memberof PgLangInfo
     */
    name: string;
}

/**
 * Check if a given object implements the PgLangInfo interface.
 */
export function instanceOfPgLangInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function PgLangInfoFromJSON(json: any): PgLangInfo {
    return PgLangInfoFromJSONTyped(json, false);
}

export function PgLangInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PgLangInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function PgLangInfoToJSON(value?: PgLangInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}
