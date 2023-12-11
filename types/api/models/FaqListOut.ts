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
import type { FaqCategory } from './FaqCategory';
import {
    FaqCategoryFromJSON,
    FaqCategoryFromJSONTyped,
    FaqCategoryToJSON,
} from './FaqCategory';
import type { FaqTarget } from './FaqTarget';
import {
    FaqTargetFromJSON,
    FaqTargetFromJSONTyped,
    FaqTargetToJSON,
} from './FaqTarget';

/**
 * 
 * @export
 * @interface FaqListOut
 */
export interface FaqListOut {
    /**
     * 
     * @type {number}
     * @memberof FaqListOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof FaqListOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof FaqListOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FaqListOut
     */
    title: string;
    /**
     * 
     * @type {FaqTarget}
     * @memberof FaqListOut
     */
    target: FaqTarget;
    /**
     * 
     * @type {FaqCategory}
     * @memberof FaqListOut
     */
    faqCategory: FaqCategory;
    /**
     * 
     * @type {string}
     * @memberof FaqListOut
     */
    content: string;
}

/**
 * Check if a given object implements the FaqListOut interface.
 */
export function instanceOfFaqListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "faqCategory" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function FaqListOutFromJSON(json: any): FaqListOut {
    return FaqListOutFromJSONTyped(json, false);
}

export function FaqListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): FaqListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'title': json['title'],
        'target': FaqTargetFromJSON(json['target']),
        'faqCategory': FaqCategoryFromJSON(json['faqCategory']),
        'content': json['content'],
    };
}

export function FaqListOutToJSON(value?: FaqListOut | null): any {
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
        'target': FaqTargetToJSON(value.target),
        'faqCategory': FaqCategoryToJSON(value.faqCategory),
        'content': value.content,
    };
}

