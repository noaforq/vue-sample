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
 * @interface ChatTemplateDetailOut
 */
export interface ChatTemplateDetailOut {
    /**
     * 
     * @type {number}
     * @memberof ChatTemplateDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof ChatTemplateDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ChatTemplateDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ChatTemplateDetailOut
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ChatTemplateDetailOut
     */
    message: string;
}

/**
 * Check if a given object implements the ChatTemplateDetailOut interface.
 */
export function instanceOfChatTemplateDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function ChatTemplateDetailOutFromJSON(json: any): ChatTemplateDetailOut {
    return ChatTemplateDetailOutFromJSONTyped(json, false);
}

export function ChatTemplateDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatTemplateDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'title': json['title'],
        'message': json['message'],
    };
}

export function ChatTemplateDetailOutToJSON(value?: ChatTemplateDetailOut | null): any {
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
        'title': value.title,
        'message': value.message,
    };
}

