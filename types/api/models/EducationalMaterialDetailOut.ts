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
 * @interface EducationalMaterialDetailOut
 */
export interface EducationalMaterialDetailOut {
    /**
     * 
     * @type {number}
     * @memberof EducationalMaterialDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof EducationalMaterialDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof EducationalMaterialDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialDetailOut
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialDetailOut
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialDetailOut
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialDetailOut
     */
    updatedBy: string;
    /**
     * 
     * @type {number}
     * @memberof EducationalMaterialDetailOut
     */
    contentCategoryId: number;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialDetailOut
     */
    contentCategoryName: string;
    /**
     * 
     * @type {number}
     * @memberof EducationalMaterialDetailOut
     */
    contentTopicId: number;
    /**
     * 
     * @type {number}
     * @memberof EducationalMaterialDetailOut
     */
    difficulty?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof EducationalMaterialDetailOut
     */
    contentTagNames: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof EducationalMaterialDetailOut
     */
    isSharedBetweenSchools: boolean;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialDetailOut
     */
    file: string;
    /**
     * 
     * @type {string}
     * @memberof EducationalMaterialDetailOut
     */
    materialType: string;
}

/**
 * Check if a given object implements the EducationalMaterialDetailOut interface.
 */
export function instanceOfEducationalMaterialDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "updatedBy" in value;
    isInstance = isInstance && "contentCategoryId" in value;
    isInstance = isInstance && "contentCategoryName" in value;
    isInstance = isInstance && "contentTopicId" in value;
    isInstance = isInstance && "contentTagNames" in value;
    isInstance = isInstance && "isSharedBetweenSchools" in value;
    isInstance = isInstance && "file" in value;
    isInstance = isInstance && "materialType" in value;

    return isInstance;
}

export function EducationalMaterialDetailOutFromJSON(json: any): EducationalMaterialDetailOut {
    return EducationalMaterialDetailOutFromJSONTyped(json, false);
}

export function EducationalMaterialDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): EducationalMaterialDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'title': json['title'],
        'description': json['description'],
        'createdBy': json['createdBy'],
        'updatedBy': json['updatedBy'],
        'contentCategoryId': json['contentCategoryId'],
        'contentCategoryName': json['contentCategoryName'],
        'contentTopicId': json['contentTopicId'],
        'difficulty': !exists(json, 'difficulty') ? undefined : json['difficulty'],
        'contentTagNames': json['contentTagNames'],
        'isSharedBetweenSchools': json['isSharedBetweenSchools'],
        'file': json['file'],
        'materialType': json['materialType'],
    };
}

export function EducationalMaterialDetailOutToJSON(value?: EducationalMaterialDetailOut | null): any {
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
        'description': value.description,
        'createdBy': value.createdBy,
        'updatedBy': value.updatedBy,
        'contentCategoryId': value.contentCategoryId,
        'contentCategoryName': value.contentCategoryName,
        'contentTopicId': value.contentTopicId,
        'difficulty': value.difficulty,
        'contentTagNames': value.contentTagNames,
        'isSharedBetweenSchools': value.isSharedBetweenSchools,
        'file': value.file,
        'materialType': value.materialType,
    };
}

