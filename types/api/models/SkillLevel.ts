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
 * スキルレベル(求人)
 * @export
 */
export const SkillLevel = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type SkillLevel = typeof SkillLevel[keyof typeof SkillLevel];


export function SkillLevelFromJSON(json: any): SkillLevel {
    return SkillLevelFromJSONTyped(json, false);
}

export function SkillLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkillLevel {
    return json as SkillLevel;
}

export function SkillLevelToJSON(value?: SkillLevel | null): any {
    return value as any;
}

