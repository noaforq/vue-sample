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
import type { SchoolUserType } from './SchoolUserType';
import {
    SchoolUserTypeFromJSON,
    SchoolUserTypeFromJSONTyped,
    SchoolUserTypeToJSON,
} from './SchoolUserType';

/**
 * 
 * @export
 * @interface SchoolUserDetailOut
 */
export interface SchoolUserDetailOut {
    /**
     * 
     * @type {number}
     * @memberof SchoolUserDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof SchoolUserDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SchoolUserDetailOut
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolUserDetailOut
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolUserDetailOut
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolUserDetailOut
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolUserDetailOut
     */
    email: string;
    /**
     * 
     * @type {SchoolUserType}
     * @memberof SchoolUserDetailOut
     */
    schoolUserType: SchoolUserType;
    /**
     * アイコンURL
     * @type {string}
     * @memberof SchoolUserDetailOut
     */
    icon?: string | null;
}

/**
 * Check if a given object implements the SchoolUserDetailOut interface.
 */
export function instanceOfSchoolUserDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "schoolUserType" in value;

    return isInstance;
}

export function SchoolUserDetailOutFromJSON(json: any): SchoolUserDetailOut {
    return SchoolUserDetailOutFromJSONTyped(json, false);
}

export function SchoolUserDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchoolUserDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'createdBy': json['createdBy'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'username': json['username'],
        'email': json['email'],
        'schoolUserType': SchoolUserTypeFromJSON(json['schoolUserType']),
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
    };
}

export function SchoolUserDetailOutToJSON(value?: SchoolUserDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'createdBy': value.createdBy,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'username': value.username,
        'email': value.email,
        'schoolUserType': SchoolUserTypeToJSON(value.schoolUserType),
        'icon': value.icon,
    };
}

