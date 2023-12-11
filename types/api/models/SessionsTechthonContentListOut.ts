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
import type { AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOut } from './AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOut';
import {
    AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOutFromJSON,
    AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOutFromJSONTyped,
    AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOutToJSON,
} from './AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOut';

/**
 * 
 * @export
 * @interface SessionsTechthonContentListOut
 */
export interface SessionsTechthonContentListOut {
    /**
     * セッションコンテンツID
     * @type {number}
     * @memberof SessionsTechthonContentListOut
     */
    id: number;
    /**
     * 順番
     * @type {number}
     * @memberof SessionsTechthonContentListOut
     */
    order: number;
    /**
     * 
     * @type {AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOut}
     * @memberof SessionsTechthonContentListOut
     */
    content: AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOut;
}

/**
 * Check if a given object implements the SessionsTechthonContentListOut interface.
 */
export function instanceOfSessionsTechthonContentListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function SessionsTechthonContentListOutFromJSON(json: any): SessionsTechthonContentListOut {
    return SessionsTechthonContentListOutFromJSONTyped(json, false);
}

export function SessionsTechthonContentListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionsTechthonContentListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'order': json['order'],
        'content': AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOutFromJSON(json['content']),
    };
}

export function SessionsTechthonContentListOutToJSON(value?: SessionsTechthonContentListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order': value.order,
        'content': AppSchemasGeneralSessionsTechthonGeneralSessionsTechthonContentListOutContentDetailOutToJSON(value.content),
    };
}
