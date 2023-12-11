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
 * @interface ScoutMailTemplateDetailOut
 */
export interface ScoutMailTemplateDetailOut {
    /**
     * 
     * @type {number}
     * @memberof ScoutMailTemplateDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof ScoutMailTemplateDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ScoutMailTemplateDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateDetailOut
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateDetailOut
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateDetailOut
     */
    text: string;
    /**
     * 
     * @type {number}
     * @memberof ScoutMailTemplateDetailOut
     */
    order: number;
    /**
     * 
     * @type {boolean}
     * @memberof ScoutMailTemplateDetailOut
     */
    isPublished: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateDetailOut
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof ScoutMailTemplateDetailOut
     */
    updatedBy: string;
}

/**
 * Check if a given object implements the ScoutMailTemplateDetailOut interface.
 */
export function instanceOfScoutMailTemplateDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "isPublished" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "updatedBy" in value;

    return isInstance;
}

export function ScoutMailTemplateDetailOutFromJSON(json: any): ScoutMailTemplateDetailOut {
    return ScoutMailTemplateDetailOutFromJSONTyped(json, false);
}

export function ScoutMailTemplateDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoutMailTemplateDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'name': json['name'],
        'title': json['title'],
        'text': json['text'],
        'order': json['order'],
        'isPublished': json['isPublished'],
        'createdBy': json['createdBy'],
        'updatedBy': json['updatedBy'],
    };
}

export function ScoutMailTemplateDetailOutToJSON(value?: ScoutMailTemplateDetailOut | null): any {
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
        'title': value.title,
        'text': value.text,
        'order': value.order,
        'isPublished': value.isPublished,
        'createdBy': value.createdBy,
        'updatedBy': value.updatedBy,
    };
}
