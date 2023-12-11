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
 * @interface JobPgLangsList
 */
export interface JobPgLangsList {
    /**
     * id
     * @type {number}
     * @memberof JobPgLangsList
     */
    id: number;
    /**
     * 言語名
     * @type {string}
     * @memberof JobPgLangsList
     */
    pgLangName: string;
}

/**
 * Check if a given object implements the JobPgLangsList interface.
 */
export function instanceOfJobPgLangsList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "pgLangName" in value;

    return isInstance;
}

export function JobPgLangsListFromJSON(json: any): JobPgLangsList {
    return JobPgLangsListFromJSONTyped(json, false);
}

export function JobPgLangsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobPgLangsList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'pgLangName': json['pgLangName'],
    };
}

export function JobPgLangsListToJSON(value?: JobPgLangsList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'pgLangName': value.pgLangName,
    };
}
