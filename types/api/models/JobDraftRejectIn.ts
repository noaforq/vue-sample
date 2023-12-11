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
 * @interface JobDraftRejectIn
 */
export interface JobDraftRejectIn {
    /**
     * 却下理由
     * @type {string}
     * @memberof JobDraftRejectIn
     */
    rejectedReason: string;
}

/**
 * Check if a given object implements the JobDraftRejectIn interface.
 */
export function instanceOfJobDraftRejectIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rejectedReason" in value;

    return isInstance;
}

export function JobDraftRejectInFromJSON(json: any): JobDraftRejectIn {
    return JobDraftRejectInFromJSONTyped(json, false);
}

export function JobDraftRejectInFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobDraftRejectIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rejectedReason': json['rejectedReason'],
    };
}

export function JobDraftRejectInToJSON(value?: JobDraftRejectIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rejectedReason': value.rejectedReason,
    };
}

