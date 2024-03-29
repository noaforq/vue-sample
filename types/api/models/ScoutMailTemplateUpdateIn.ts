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
 * @interface ScoutMailTemplateUpdateIn
 */
export interface ScoutMailTemplateUpdateIn {
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateUpdateIn
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateUpdateIn
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateUpdateIn
     */
    text?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ScoutMailTemplateUpdateIn
     */
    order?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof ScoutMailTemplateUpdateIn
     */
    isPublished?: boolean | null;
}

/**
 * Check if a given object implements the ScoutMailTemplateUpdateIn interface.
 */
export function instanceOfScoutMailTemplateUpdateIn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScoutMailTemplateUpdateInFromJSON(json: any): ScoutMailTemplateUpdateIn {
    return ScoutMailTemplateUpdateInFromJSONTyped(json, false);
}

export function ScoutMailTemplateUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoutMailTemplateUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'isPublished': !exists(json, 'isPublished') ? undefined : json['isPublished'],
    };
}

export function ScoutMailTemplateUpdateInToJSON(value?: ScoutMailTemplateUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'title': value.title,
        'text': value.text,
        'order': value.order,
        'isPublished': value.isPublished,
    };
}

