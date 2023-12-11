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
import type { EducationalMaterialListForEventDetailOut } from './EducationalMaterialListForEventDetailOut';
import {
    EducationalMaterialListForEventDetailOutFromJSON,
    EducationalMaterialListForEventDetailOutFromJSONTyped,
    EducationalMaterialListForEventDetailOutToJSON,
} from './EducationalMaterialListForEventDetailOut';

/**
 * 
 * @export
 * @interface EducationalMaterialListForEventOut
 */
export interface EducationalMaterialListForEventOut {
    /**
     * 全件数
     * @type {number}
     * @memberof EducationalMaterialListForEventOut
     */
    totalCount: number;
    /**
     * 前データが存在するか
     * @type {boolean}
     * @memberof EducationalMaterialListForEventOut
     */
    hasPrevious: boolean;
    /**
     * 次データが存在するか
     * @type {boolean}
     * @memberof EducationalMaterialListForEventOut
     */
    hasNext: boolean;
    /**
     * 
     * @type {Array<EducationalMaterialListForEventDetailOut>}
     * @memberof EducationalMaterialListForEventOut
     */
    educationalMaterials: Array<EducationalMaterialListForEventDetailOut>;
}

/**
 * Check if a given object implements the EducationalMaterialListForEventOut interface.
 */
export function instanceOfEducationalMaterialListForEventOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalCount" in value;
    isInstance = isInstance && "hasPrevious" in value;
    isInstance = isInstance && "hasNext" in value;
    isInstance = isInstance && "educationalMaterials" in value;

    return isInstance;
}

export function EducationalMaterialListForEventOutFromJSON(json: any): EducationalMaterialListForEventOut {
    return EducationalMaterialListForEventOutFromJSONTyped(json, false);
}

export function EducationalMaterialListForEventOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): EducationalMaterialListForEventOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': json['totalCount'],
        'hasPrevious': json['hasPrevious'],
        'hasNext': json['hasNext'],
        'educationalMaterials': ((json['educationalMaterials'] as Array<any>).map(EducationalMaterialListForEventDetailOutFromJSON)),
    };
}

export function EducationalMaterialListForEventOutToJSON(value?: EducationalMaterialListForEventOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'hasPrevious': value.hasPrevious,
        'hasNext': value.hasNext,
        'educationalMaterials': ((value.educationalMaterials as Array<any>).map(EducationalMaterialListForEventDetailOutToJSON)),
    };
}

