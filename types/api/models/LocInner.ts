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
 * @interface LocInner
 */
export interface LocInner {
}

/**
 * Check if a given object implements the LocInner interface.
 */
export function instanceOfLocInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocInnerFromJSON(json: any): LocInner {
    return LocInnerFromJSONTyped(json, false);
}

export function LocInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocInner {
    return json;
}

export function LocInnerToJSON(value?: LocInner | null): any {
    return value;
}

