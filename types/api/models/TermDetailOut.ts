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
import type { TermType } from './TermType';
import {
    TermTypeFromJSON,
    TermTypeFromJSONTyped,
    TermTypeToJSON,
} from './TermType';

/**
 * 
 * @export
 * @interface TermDetailOut
 */
export interface TermDetailOut {
    /**
     * 
     * @type {number}
     * @memberof TermDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof TermDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof TermDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {TermType}
     * @memberof TermDetailOut
     */
    termType: TermType;
    /**
     * 
     * @type {string}
     * @memberof TermDetailOut
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof TermDetailOut
     */
    contentEn: string;
    /**
     * 
     * @type {number}
     * @memberof TermDetailOut
     */
    version: number;
}

/**
 * Check if a given object implements the TermDetailOut interface.
 */
export function instanceOfTermDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "termType" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "contentEn" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function TermDetailOutFromJSON(json: any): TermDetailOut {
    return TermDetailOutFromJSONTyped(json, false);
}

export function TermDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TermDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'termType': TermTypeFromJSON(json['termType']),
        'content': json['content'],
        'contentEn': json['contentEn'],
        'version': json['version'],
    };
}

export function TermDetailOutToJSON(value?: TermDetailOut | null): any {
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
        'termType': TermTypeToJSON(value.termType),
        'content': value.content,
        'contentEn': value.contentEn,
        'version': value.version,
    };
}
