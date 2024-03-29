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
 * @interface UpdateUser
 */
export interface UpdateUser {
    /**
     * 
     * @type {number}
     * @memberof UpdateUser
     */
    userId: number;
    /**
     * 
     * @type {SchoolUserType}
     * @memberof UpdateUser
     */
    schoolUserType: SchoolUserType;
}

/**
 * Check if a given object implements the UpdateUser interface.
 */
export function instanceOfUpdateUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "schoolUserType" in value;

    return isInstance;
}

export function UpdateUserFromJSON(json: any): UpdateUser {
    return UpdateUserFromJSONTyped(json, false);
}

export function UpdateUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'schoolUserType': SchoolUserTypeFromJSON(json['schoolUserType']),
    };
}

export function UpdateUserToJSON(value?: UpdateUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'schoolUserType': SchoolUserTypeToJSON(value.schoolUserType),
    };
}

