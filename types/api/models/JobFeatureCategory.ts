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
 * 求人特徴カテゴリ
 * @export
 */
export const JobFeatureCategory = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5
} as const;
export type JobFeatureCategory = typeof JobFeatureCategory[keyof typeof JobFeatureCategory];


export function JobFeatureCategoryFromJSON(json: any): JobFeatureCategory {
    return JobFeatureCategoryFromJSONTyped(json, false);
}

export function JobFeatureCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobFeatureCategory {
    return json as JobFeatureCategory;
}

export function JobFeatureCategoryToJSON(value?: JobFeatureCategory | null): any {
    return value as any;
}

