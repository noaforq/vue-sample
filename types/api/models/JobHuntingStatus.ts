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


/**
 * 就職活動状況
 * @export
 */
export const JobHuntingStatus = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5
} as const;
export type JobHuntingStatus = typeof JobHuntingStatus[keyof typeof JobHuntingStatus];


export function JobHuntingStatusFromJSON(json: any): JobHuntingStatus {
    return JobHuntingStatusFromJSONTyped(json, false);
}

export function JobHuntingStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobHuntingStatus {
    return json as JobHuntingStatus;
}

export function JobHuntingStatusToJSON(value?: JobHuntingStatus | null): any {
    return value as any;
}

