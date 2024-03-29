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
 * @interface OccupationListOut
 */
export interface OccupationListOut {
    /**
     * 
     * @type {number}
     * @memberof OccupationListOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof OccupationListOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof OccupationListOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof OccupationListOut
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof OccupationListOut
     */
    order: number;
}

/**
 * Check if a given object implements the OccupationListOut interface.
 */
export function instanceOfOccupationListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "order" in value;

    return isInstance;
}

export function OccupationListOutFromJSON(json: any): OccupationListOut {
    return OccupationListOutFromJSONTyped(json, false);
}

export function OccupationListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): OccupationListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'name': json['name'],
        'order': json['order'],
    };
}

export function OccupationListOutToJSON(value?: OccupationListOut | null): any {
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
        'order': value.order,
    };
}

