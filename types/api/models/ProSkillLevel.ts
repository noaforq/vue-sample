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
 * スキルレベル(Pro問題)
 * @export
 */
export const ProSkillLevel = {
    NUMBER_1: 1,
    NUMBER_4: 4,
    NUMBER_7: 7
} as const;
export type ProSkillLevel = typeof ProSkillLevel[keyof typeof ProSkillLevel];


export function ProSkillLevelFromJSON(json: any): ProSkillLevel {
    return ProSkillLevelFromJSONTyped(json, false);
}

export function ProSkillLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProSkillLevel {
    return json as ProSkillLevel;
}

export function ProSkillLevelToJSON(value?: ProSkillLevel | null): any {
    return value as any;
}

