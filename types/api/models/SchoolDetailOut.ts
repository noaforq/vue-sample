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
import type { SchoolType } from './SchoolType';
import {
    SchoolTypeFromJSON,
    SchoolTypeFromJSONTyped,
    SchoolTypeToJSON,
} from './SchoolType';

/**
 * 
 * @export
 * @interface SchoolDetailOut
 */
export interface SchoolDetailOut {
    /**
     * 
     * @type {number}
     * @memberof SchoolDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof SchoolDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SchoolDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SchoolDetailOut
     */
    name: string;
    /**
     * 
     * @type {SchoolType}
     * @memberof SchoolDetailOut
     */
    schoolType: SchoolType;
    /**
     * 
     * @type {string}
     * @memberof SchoolDetailOut
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolDetailOut
     */
    hp: string;
}

/**
 * Check if a given object implements the SchoolDetailOut interface.
 */
export function instanceOfSchoolDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "schoolType" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "hp" in value;

    return isInstance;
}

export function SchoolDetailOutFromJSON(json: any): SchoolDetailOut {
    return SchoolDetailOutFromJSONTyped(json, false);
}

export function SchoolDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchoolDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'name': json['name'],
        'schoolType': SchoolTypeFromJSON(json['schoolType']),
        'image': json['image'],
        'hp': json['hp'],
    };
}

export function SchoolDetailOutToJSON(value?: SchoolDetailOut | null): any {
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
        'name': value.name,
        'schoolType': SchoolTypeToJSON(value.schoolType),
        'image': value.image,
        'hp': value.hp,
    };
}

