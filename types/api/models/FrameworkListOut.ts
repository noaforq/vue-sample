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
 * @interface FrameworkListOut
 */
export interface FrameworkListOut {
    /**
     * 
     * @type {number}
     * @memberof FrameworkListOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof FrameworkListOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof FrameworkListOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FrameworkListOut
     */
    name: string;
}

/**
 * Check if a given object implements the FrameworkListOut interface.
 */
export function instanceOfFrameworkListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function FrameworkListOutFromJSON(json: any): FrameworkListOut {
    return FrameworkListOutFromJSONTyped(json, false);
}

export function FrameworkListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'name': json['name'],
    };
}

export function FrameworkListOutToJSON(value?: FrameworkListOut | null): any {
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
    };
}

