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
import type { EventPurpose } from './EventPurpose';
import {
    EventPurposeFromJSON,
    EventPurposeFromJSONTyped,
    EventPurposeToJSON,
} from './EventPurpose';

/**
 * 
 * @export
 * @interface EventUpdateIn
 */
export interface EventUpdateIn {
    /**
     * 
     * @type {string}
     * @memberof EventUpdateIn
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventUpdateIn
     */
    theme?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventUpdateIn
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventUpdateIn
     */
    image?: string | null;
    /**
     * 
     * @type {EventPurpose}
     * @memberof EventUpdateIn
     */
    purpose?: EventPurpose | null;
    /**
     * 
     * @type {boolean}
     * @memberof EventUpdateIn
     */
    showRanking?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EventUpdateIn
     */
    isPublic?: boolean;
}

/**
 * Check if a given object implements the EventUpdateIn interface.
 */
export function instanceOfEventUpdateIn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventUpdateInFromJSON(json: any): EventUpdateIn {
    return EventUpdateInFromJSONTyped(json, false);
}

export function EventUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'theme': !exists(json, 'theme') ? undefined : json['theme'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'purpose': !exists(json, 'purpose') ? undefined : EventPurposeFromJSON(json['purpose']),
        'showRanking': !exists(json, 'showRanking') ? undefined : json['showRanking'],
        'isPublic': !exists(json, 'isPublic') ? undefined : json['isPublic'],
    };
}

export function EventUpdateInToJSON(value?: EventUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'theme': value.theme,
        'description': value.description,
        'image': value.image,
        'purpose': EventPurposeToJSON(value.purpose),
        'showRanking': value.showRanking,
        'isPublic': value.isPublic,
    };
}
