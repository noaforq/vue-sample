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
 * TechFul学校区分
 * @export
 */
export const TechFulSchoolDivision = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9
} as const;
export type TechFulSchoolDivision = typeof TechFulSchoolDivision[keyof typeof TechFulSchoolDivision];


export function TechFulSchoolDivisionFromJSON(json: any): TechFulSchoolDivision {
    return TechFulSchoolDivisionFromJSONTyped(json, false);
}

export function TechFulSchoolDivisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechFulSchoolDivision {
    return json as TechFulSchoolDivision;
}

export function TechFulSchoolDivisionToJSON(value?: TechFulSchoolDivision | null): any {
    return value as any;
}

