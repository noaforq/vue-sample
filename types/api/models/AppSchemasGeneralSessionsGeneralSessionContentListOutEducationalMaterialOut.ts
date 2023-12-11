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
 * @interface AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut
 */
export interface AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut {
    /**
     * 
     * @type {string}
     * @memberof AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut
     */
    educationalMaterialTypeLabel?: string | null;
    /**
     * 
     * @type {EducationalMaterialType}
     * @memberof AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut
     */
    educationalMaterialType?: EducationalMaterialType | null;
}

/**
 * Check if a given object implements the AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut interface.
 */
export function instanceOfAppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOutFromJSON(json: any): AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut {
    return AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOutFromJSONTyped(json, false);
}

export function AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'educationalMaterialTypeLabel': !exists(json, 'educationalMaterialTypeLabel') ? undefined : json['educationalMaterialTypeLabel'],
        'educationalMaterialType': !exists(json, 'educationalMaterialType') ? undefined : EducationalMaterialTypeFromJSON(json['educationalMaterialType']),
    };
}

export function AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOutToJSON(value?: AppSchemasGeneralSessionsGeneralSessionContentListOutEducationalMaterialOut | null): any {
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

