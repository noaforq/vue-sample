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
 * 募集採用に関する状況
 * @export
 */
export const RecruitmentAndHiringStatusItem = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type RecruitmentAndHiringStatusItem = typeof RecruitmentAndHiringStatusItem[keyof typeof RecruitmentAndHiringStatusItem];


export function RecruitmentAndHiringStatusItemFromJSON(json: any): RecruitmentAndHiringStatusItem {
    return RecruitmentAndHiringStatusItemFromJSONTyped(json, false);
}

export function RecruitmentAndHiringStatusItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecruitmentAndHiringStatusItem {
    return json as RecruitmentAndHiringStatusItem;
}

export function RecruitmentAndHiringStatusItemToJSON(value?: RecruitmentAndHiringStatusItem | null): any {
    return value as any;
}
