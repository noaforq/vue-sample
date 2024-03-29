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
 * @interface JobCreateWorkingHourIn
 */
export interface JobCreateWorkingHourIn {
    /**
     * 開始時間
     * @type {string}
     * @memberof JobCreateWorkingHourIn
     */
    startsAt: string;
    /**
     * 終了時間
     * @type {string}
     * @memberof JobCreateWorkingHourIn
     */
    endsAt: string;
}

/**
 * Check if a given object implements the JobCreateWorkingHourIn interface.
 */
export function instanceOfJobCreateWorkingHourIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "startsAt" in value;
    isInstance = isInstance && "endsAt" in value;

    return isInstance;
}

export function JobCreateWorkingHourInFromJSON(json: any): JobCreateWorkingHourIn {
    return JobCreateWorkingHourInFromJSONTyped(json, false);
}

export function JobCreateWorkingHourInFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobCreateWorkingHourIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startsAt': json['startsAt'],
        'endsAt': json['endsAt'],
    };
}

export function JobCreateWorkingHourInToJSON(value?: JobCreateWorkingHourIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startsAt': value.startsAt,
        'endsAt': value.endsAt,
    };
}

