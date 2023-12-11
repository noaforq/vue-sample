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
import type { EducationalMaterialType } from './EducationalMaterialType';
import {
    EducationalMaterialTypeFromJSON,
    EducationalMaterialTypeFromJSONTyped,
    EducationalMaterialTypeToJSON,
} from './EducationalMaterialType';

/**
 * 
 * @export
 * @interface AppSchemasManageSessionsSessionContentListOutEducationalMaterialOut
 */
export interface AppSchemasManageSessionsSessionContentListOutEducationalMaterialOut {
    /**
     * 
     * @type {string}
     * @memberof AppSchemasManageSessionsSessionContentListOutEducationalMaterialOut
     */
    educationalMaterialTypeLabel?: string | null;
    /**
     * 
     * @type {EducationalMaterialType}
     * @memberof AppSchemasManageSessionsSessionContentListOutEducationalMaterialOut
     */
    educationalMaterialType?: EducationalMaterialType | null;
}

/**
 * Check if a given object implements the AppSchemasManageSessionsSessionContentListOutEducationalMaterialOut interface.
 */
export function instanceOfAppSchemasManageSessionsSessionContentListOutEducationalMaterialOut(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppSchemasManageSessionsSessionContentListOutEducationalMaterialOutFromJSON(json: any): AppSchemasManageSessionsSessionContentListOutEducationalMaterialOut {
    return AppSchemasManageSessionsSessionContentListOutEducationalMaterialOutFromJSONTyped(json, false);
}

export function AppSchemasManageSessionsSessionContentListOutEducationalMaterialOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasManageSessionsSessionContentListOutEducationalMaterialOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'educationalMaterialTypeLabel': !exists(json, 'educationalMaterialTypeLabel') ? undefined : json['educationalMaterialTypeLabel'],
        'educationalMaterialType': !exists(json, 'educationalMaterialType') ? undefined : EducationalMaterialTypeFromJSON(json['educationalMaterialType']),
    };
}

export function AppSchemasManageSessionsSessionContentListOutEducationalMaterialOutToJSON(value?: AppSchemasManageSessionsSessionContentListOutEducationalMaterialOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'educationalMaterialTypeLabel': value.educationalMaterialTypeLabel,
        'educationalMaterialType': EducationalMaterialTypeToJSON(value.educationalMaterialType),
    };
}

