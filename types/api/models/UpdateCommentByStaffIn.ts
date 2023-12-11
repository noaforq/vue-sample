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
 * @interface UpdateCommentByStaffIn
 */
export interface UpdateCommentByStaffIn {
    /**
     * 
     * @type {string}
     * @memberof UpdateCommentByStaffIn
     */
    comment: string;
}

/**
 * Check if a given object implements the UpdateCommentByStaffIn interface.
 */
export function instanceOfUpdateCommentByStaffIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "comment" in value;

    return isInstance;
}

export function UpdateCommentByStaffInFromJSON(json: any): UpdateCommentByStaffIn {
    return UpdateCommentByStaffInFromJSONTyped(json, false);
}

export function UpdateCommentByStaffInFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCommentByStaffIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comment': json['comment'],
    };
}

export function UpdateCommentByStaffInToJSON(value?: UpdateCommentByStaffIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment': value.comment,
    };
}
