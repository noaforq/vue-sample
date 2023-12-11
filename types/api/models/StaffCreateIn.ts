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
 * @interface StaffCreateIn
 */
export interface StaffCreateIn {
    /**
     * 
     * @type {string}
     * @memberof StaffCreateIn
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCreateIn
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCreateIn
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCreateIn
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCreateIn
     */
    email: string;
}

/**
 * Check if a given object implements the StaffCreateIn interface.
 */
export function instanceOfStaffCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function StaffCreateInFromJSON(json: any): StaffCreateIn {
    return StaffCreateInFromJSONTyped(json, false);
}

export function StaffCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaffCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'username': json['username'],
        'password': json['password'],
        'email': json['email'],
    };
}

export function StaffCreateInToJSON(value?: StaffCreateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'username': value.username,
        'password': value.password,
        'email': value.email,
    };
}
