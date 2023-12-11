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
import type { ContentPackageLevel } from './ContentPackageLevel';
import {
    ContentPackageLevelFromJSON,
    ContentPackageLevelFromJSONTyped,
    ContentPackageLevelToJSON,
} from './ContentPackageLevel';

/**
 * 
 * @export
 * @interface ContentPackageCreateIn
 */
export interface ContentPackageCreateIn {
    /**
     * 
     * @type {string}
     * @memberof ContentPackageCreateIn
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ContentPackageCreateIn
     */
    description: string;
    /**
     * 
     * @type {ContentPackageLevel}
     * @memberof ContentPackageCreateIn
     */
    contentPackageLevel: ContentPackageLevel;
    /**
     * 
     * @type {boolean}
     * @memberof ContentPackageCreateIn
     */
    isCompanyPackage: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ContentPackageCreateIn
     */
    isSchoolPackage: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContentPackageCreateIn
     */
    memo: string;
}

/**
 * Check if a given object implements the ContentPackageCreateIn interface.
 */
export function instanceOfContentPackageCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "contentPackageLevel" in value;
    isInstance = isInstance && "isCompanyPackage" in value;
    isInstance = isInstance && "isSchoolPackage" in value;
    isInstance = isInstance && "memo" in value;

    return isInstance;
}

export function ContentPackageCreateInFromJSON(json: any): ContentPackageCreateIn {
    return ContentPackageCreateInFromJSONTyped(json, false);
}

export function ContentPackageCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentPackageCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': json['description'],
        'contentPackageLevel': ContentPackageLevelFromJSON(json['contentPackageLevel']),
        'isCompanyPackage': json['isCompanyPackage'],
        'isSchoolPackage': json['isSchoolPackage'],
        'memo': json['memo'],
    };
}

export function ContentPackageCreateInToJSON(value?: ContentPackageCreateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'contentPackageLevel': ContentPackageLevelToJSON(value.contentPackageLevel),
        'isCompanyPackage': value.isCompanyPackage,
        'isSchoolPackage': value.isSchoolPackage,
        'memo': value.memo,
    };
}

