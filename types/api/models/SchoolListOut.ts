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
import type { SchoolListDetailOut } from './SchoolListDetailOut';
import {
    SchoolListDetailOutFromJSON,
    SchoolListDetailOutFromJSONTyped,
    SchoolListDetailOutToJSON,
} from './SchoolListDetailOut';

/**
 * 
 * @export
 * @interface SchoolListOut
 */
export interface SchoolListOut {
    /**
     * 全件数
     * @type {number}
     * @memberof SchoolListOut
     */
    totalCount: number;
    /**
     * 前データが存在するか
     * @type {boolean}
     * @memberof SchoolListOut
     */
    hasPrevious: boolean;
    /**
     * 次データが存在するか
     * @type {boolean}
     * @memberof SchoolListOut
     */
    hasNext: boolean;
    /**
     * 
     * @type {Array<SchoolListDetailOut>}
     * @memberof SchoolListOut
     */
    schools: Array<SchoolListDetailOut>;
}

/**
 * Check if a given object implements the SchoolListOut interface.
 */
export function instanceOfSchoolListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalCount" in value;
    isInstance = isInstance && "hasPrevious" in value;
    isInstance = isInstance && "hasNext" in value;
    isInstance = isInstance && "schools" in value;

    return isInstance;
}

export function SchoolListOutFromJSON(json: any): SchoolListOut {
    return SchoolListOutFromJSONTyped(json, false);
}

export function SchoolListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchoolListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': json['totalCount'],
        'hasPrevious': json['hasPrevious'],
        'hasNext': json['hasNext'],
        'schools': ((json['schools'] as Array<any>).map(SchoolListDetailOutFromJSON)),
    };
}

export function SchoolListOutToJSON(value?: SchoolListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'hasPrevious': value.hasPrevious,
        'hasNext': value.hasNext,
        'schools': ((value.schools as Array<any>).map(SchoolListDetailOutToJSON)),
    };
}

