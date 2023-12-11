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
 * @interface EducationalMaterialListDetailOut
 */
export interface EducationalMaterialListDetailOut {
    /**
     * 
     * @type {number}
     * @memberof EducationalMaterialListDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof EducationalMaterialListDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof EducationalMaterialListDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialListDetailOut
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialListDetailOut
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialListDetailOut
     */
    updatedBy: string;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialListDetailOut
     */
    contentCategoryName: string;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialListDetailOut
     */
    contentTopicName: string;
    /**
     * 
     * @type {number}
     * @memberof EducationalMaterialListDetailOut
     */
    difficulty: number;
    /**
     * 
     * @type {boolean}
     * @memberof EducationalMaterialListDetailOut
     */
    isSharedBetweenSchools: boolean;
    /**
     * 
     * @type {EducationalMaterialType}
     * @memberof EducationalMaterialListDetailOut
     */
    materialType: EducationalMaterialType;
}

/**
 * Check if a given object implements the EducationalMaterialListDetailOut interface.
 */
export function instanceOfEducationalMaterialListDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "updatedBy" in value;
    isInstance = isInstance && "contentCategoryName" in value;
    isInstance = isInstance && "contentTopicName" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "isSharedBetweenSchools" in value;
    isInstance = isInstance && "materialType" in value;

    return isInstance;
}

export function EducationalMaterialListDetailOutFromJSON(json: any): EducationalMaterialListDetailOut {
    return EducationalMaterialListDetailOutFromJSONTyped(json, false);
}

export function EducationalMaterialListDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): EducationalMaterialListDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'title': json['title'],
        'createdBy': json['createdBy'],
        'updatedBy': json['updatedBy'],
        'contentCategoryName': json['contentCategoryName'],
        'contentTopicName': json['contentTopicName'],
        'difficulty': json['difficulty'],
        'isSharedBetweenSchools': json['isSharedBetweenSchools'],
        'materialType': EducationalMaterialTypeFromJSON(json['materialType']),
    };
}

export function EducationalMaterialListDetailOutToJSON(value?: EducationalMaterialListDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'title': value.title,
        'createdBy': value.createdBy,
        'updatedBy': value.updatedBy,
        'contentCategoryName': value.contentCategoryName,
        'contentTopicName': value.contentTopicName,
        'difficulty': value.difficulty,
        'isSharedBetweenSchools': value.isSharedBetweenSchools,
        'materialType': EducationalMaterialTypeToJSON(value.materialType),
    };
}

