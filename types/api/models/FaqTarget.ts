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
 * 質問ターゲット
 * @export
 */
export const FaqTarget = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type FaqTarget = typeof FaqTarget[keyof typeof FaqTarget];


export function FaqTargetFromJSON(json: any): FaqTarget {
    return FaqTargetFromJSONTyped(json, false);
}

export function FaqTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): FaqTarget {
    return json as FaqTarget;
}

export function FaqTargetToJSON(value?: FaqTarget | null): any {
    return value as any;
}

