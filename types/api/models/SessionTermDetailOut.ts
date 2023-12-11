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
import type { TermHasSessionOut } from './TermHasSessionOut';
import {
    TermHasSessionOutFromJSON,
    TermHasSessionOutFromJSONTyped,
    TermHasSessionOutToJSON,
} from './TermHasSessionOut';

/**
 * 
 * @export
 * @interface SessionTermDetailOut
 */
export interface SessionTermDetailOut {
    /**
     * 
     * @type {number}
     * @memberof SessionTermDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof SessionTermDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SessionTermDetailOut
     */
    updatedAt: Date;
    /**
     * 規約タイトル
     * @type {string}
     * @memberof SessionTermDetailOut
     */
    title: string;
    /**
     * 本文
     * @type {string}
     * @memberof SessionTermDetailOut
     */
    content: string;
    /**
     * バージョン
     * @type {number}
     * @memberof SessionTermDetailOut
     */
    version: number;
    /**
     * 
     * @type {string}
     * @memberof SessionTermDetailOut
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof SessionTermDetailOut
     */
    updatedBy: string;
    /**
     * 
     * @type {Array<TermHasSessionOut>}
     * @memberof SessionTermDetailOut
     */
    sessions?: Array<TermHasSessionOut> | null;
    /**
     * 
     * @type {number}
     * @memberof SessionTermDetailOut
     */
    organizationId: number;
}

/**
 * Check if a given object implements the SessionTermDetailOut interface.
 */
export function instanceOfSessionTermDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "updatedBy" in value;
    isInstance = isInstance && "organizationId" in value;

    return isInstance;
}

export function SessionTermDetailOutFromJSON(json: any): SessionTermDetailOut {
    return SessionTermDetailOutFromJSONTyped(json, false);
}

export function SessionTermDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionTermDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'title': json['title'],
        'content': json['content'],
        'version': json['version'],
        'createdBy': json['createdBy'],
        'updatedBy': json['updatedBy'],
        'sessions': !exists(json, 'sessions') ? undefined : (json['sessions'] === null ? null : (json['sessions'] as Array<any>).map(TermHasSessionOutFromJSON)),
        'organizationId': json['organizationId'],
    };
}

export function SessionTermDetailOutToJSON(value?: SessionTermDetailOut | null): any {
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
        'content': value.content,
        'version': value.version,
        'createdBy': value.createdBy,
        'updatedBy': value.updatedBy,
        'sessions': value.sessions === undefined ? undefined : (value.sessions === null ? null : (value.sessions as Array<any>).map(TermHasSessionOutToJSON)),
        'organizationId': value.organizationId,
    };
}

