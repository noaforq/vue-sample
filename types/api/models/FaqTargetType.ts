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
 * An enumeration.
 * @export
 */
export const FaqTargetType = {
    User: 'user',
    School: 'school',
    Company: 'company'
} as const;
export type FaqTargetType = typeof FaqTargetType[keyof typeof FaqTargetType];


export function FaqTargetTypeFromJSON(json: any): FaqTargetType {
    return FaqTargetTypeFromJSONTyped(json, false);
}

export function FaqTargetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FaqTargetType {
    return json as FaqTargetType;
}

export function FaqTargetTypeToJSON(value?: FaqTargetType | null): any {
    return value as any;
}

