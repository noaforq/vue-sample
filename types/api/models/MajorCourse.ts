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
 * 専攻の種類(文理区分)
 * @export
 */
export const MajorCourse = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type MajorCourse = typeof MajorCourse[keyof typeof MajorCourse];


export function MajorCourseFromJSON(json: any): MajorCourse {
    return MajorCourseFromJSONTyped(json, false);
}

export function MajorCourseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MajorCourse {
    return json as MajorCourse;
}

export function MajorCourseToJSON(value?: MajorCourse | null): any {
    return value as any;
}

