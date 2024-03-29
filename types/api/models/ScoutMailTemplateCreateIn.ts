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
 * @interface ScoutMailTemplateCreateIn
 */
export interface ScoutMailTemplateCreateIn {
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateCreateIn
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateCreateIn
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateCreateIn
     */
    text: string;
    /**
     * 
     * @type {number}
     * @memberof ScoutMailTemplateCreateIn
     */
    order: number;
    /**
     * 
     * @type {boolean}
     * @memberof ScoutMailTemplateCreateIn
     */
    isPublished: boolean;
}

/**
 * Check if a given object implements the ScoutMailTemplateCreateIn interface.
 */
export function instanceOfScoutMailTemplateCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "isPublished" in value;

    return isInstance;
}

export function ScoutMailTemplateCreateInFromJSON(json: any): ScoutMailTemplateCreateIn {
    return ScoutMailTemplateCreateInFromJSONTyped(json, false);
}

export function ScoutMailTemplateCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoutMailTemplateCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'title': json['title'],
        'text': json['text'],
        'order': json['order'],
        'isPublished': json['isPublished'],
    };
}

export function ScoutMailTemplateCreateInToJSON(value?: ScoutMailTemplateCreateIn | null): any {
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

