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
import type { StaffEventListDetailOut } from './StaffEventListDetailOut';
import {
    StaffEventListDetailOutFromJSON,
    StaffEventListDetailOutFromJSONTyped,
    StaffEventListDetailOutToJSON,
} from './StaffEventListDetailOut';

/**
 * 
 * @export
 * @interface EventListOut
 */
export interface EventListOut {
    /**
     * 
     * @type {number}
     * @memberof EventListOut
     */
    totalCount: number;
    /**
     * 
     * @type {boolean}
     * @memberof EventListOut
     */
    hasNext: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EventListOut
     */
    hasPrevious: boolean;
    /**
     * 
     * @type {Array<StaffEventListDetailOut>}
     * @memberof EventListOut
     */
    events: Array<StaffEventListDetailOut>;
}

/**
 * Check if a given object implements the EventListOut interface.
 */
export function instanceOfEventListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalCount" in value;
    isInstance = isInstance && "hasNext" in value;
    isInstance = isInstance && "hasPrevious" in value;
    isInstance = isInstance && "events" in value;

    return isInstance;
}

export function EventListOutFromJSON(json: any): EventListOut {
    return EventListOutFromJSONTyped(json, false);
}

export function EventListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': json['totalCount'],
        'hasNext': json['hasNext'],
        'hasPrevious': json['hasPrevious'],
        'events': ((json['events'] as Array<any>).map(StaffEventListDetailOutFromJSON)),
    };
}

export function EventListOutToJSON(value?: EventListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'hasNext': value.hasNext,
        'hasPrevious': value.hasPrevious,
        'events': ((value.events as Array<any>).map(StaffEventListDetailOutToJSON)),
    };
}

