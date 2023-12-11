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
 * @interface SampleCodeUpdateIn
 */
export interface SampleCodeUpdateIn {
    /**
     * 
     * @type {number}
     * @memberof SampleCodeUpdateIn
     */
    pgLangId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SampleCodeUpdateIn
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SampleCodeUpdateIn
     */
    sourceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SampleCodeUpdateIn
     */
    stdin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SampleCodeUpdateIn
     */
    stdout?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SampleCodeUpdateIn
     */
    order?: number | null;
}

/**
 * Check if a given object implements the SampleCodeUpdateIn interface.
 */
export function instanceOfSampleCodeUpdateIn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SampleCodeUpdateInFromJSON(json: any): SampleCodeUpdateIn {
    return SampleCodeUpdateInFromJSONTyped(json, false);
}

export function SampleCodeUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SampleCodeUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pgLangId': !exists(json, 'pgLangId') ? undefined : json['pgLangId'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
        'stdin': !exists(json, 'stdin') ? undefined : json['stdin'],
        'stdout': !exists(json, 'stdout') ? undefined : json['stdout'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function SampleCodeUpdateInToJSON(value?: SampleCodeUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pgLangId': value.pgLangId,
        'title': value.title,
        'sourceCode': value.sourceCode,
        'stdin': value.stdin,
        'stdout': value.stdout,
        'order': value.order,
    };
}
