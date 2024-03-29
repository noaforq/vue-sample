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
import type { Email } from './Email';
import {
    EmailFromJSON,
    EmailFromJSONTyped,
    EmailToJSON,
} from './Email';

/**
 * 
 * @export
 * @interface StaffDetailOut
 */
export interface StaffDetailOut {
    /**
     * 
     * @type {number}
     * @memberof StaffDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof StaffDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof StaffDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof StaffDetailOut
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDetailOut
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDetailOut
     */
    username: string;
    /**
     * 
     * @type {Email}
     * @memberof StaffDetailOut
     */
    email: Email;
}

/**
 * Check if a given object implements the StaffDetailOut interface.
 */
export function instanceOfStaffDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function StaffDetailOutFromJSON(json: any): StaffDetailOut {
    return StaffDetailOutFromJSONTyped(json, false);
}

export function StaffDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaffDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'username': json['username'],
        'email': EmailFromJSON(json['email']),
    };
}

export function StaffDetailOutToJSON(value?: StaffDetailOut | null): any {
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
        'firstName': value.firstName,
        'lastName': value.lastName,
        'username': value.username,
        'email': EmailToJSON(value.email),
    };
}

