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
 * コンテンツ組織別区分
 * @export
 */
export const ContentOrganizationDivision = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type ContentOrganizationDivision = typeof ContentOrganizationDivision[keyof typeof ContentOrganizationDivision];


export function ContentOrganizationDivisionFromJSON(json: any): ContentOrganizationDivision {
    return ContentOrganizationDivisionFromJSONTyped(json, false);
}

export function ContentOrganizationDivisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentOrganizationDivision {
    return json as ContentOrganizationDivision;
}

export function ContentOrganizationDivisionToJSON(value?: ContentOrganizationDivision | null): any {
    return value as any;
}
