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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AppSchemasGeneralJobsJobDetailOutJobFeatureDetail
 */
export interface AppSchemasGeneralJobsJobDetailOutJobFeatureDetail {
    /**
     * ID
     * @type {number}
     * @memberof AppSchemasGeneralJobsJobDetailOutJobFeatureDetail
     */
    id: number;
    /**
     * 名前
     * @type {string}
     * @memberof AppSchemasGeneralJobsJobDetailOutJobFeatureDetail
     */
    name: string;
}

/**
 * Check if a given object implements the AppSchemasGeneralJobsJobDetailOutJobFeatureDetail interface.
 */
export function instanceOfAppSchemasGeneralJobsJobDetailOutJobFeatureDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AppSchemasGeneralJobsJobDetailOutJobFeatureDetailFromJSON(json: any): AppSchemasGeneralJobsJobDetailOutJobFeatureDetail {
    return AppSchemasGeneralJobsJobDetailOutJobFeatureDetailFromJSONTyped(json, false);
}

export function AppSchemasGeneralJobsJobDetailOutJobFeatureDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralJobsJobDetailOutJobFeatureDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function AppSchemasGeneralJobsJobDetailOutJobFeatureDetailToJSON(value?: AppSchemasGeneralJobsJobDetailOutJobFeatureDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

