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
import type { TargetAudienceType } from './TargetAudienceType';
import {
    TargetAudienceTypeFromJSON,
    TargetAudienceTypeFromJSONTyped,
    TargetAudienceTypeToJSON,
} from './TargetAudienceType';

/**
 * 
 * @export
 * @interface CreatePDFManualOut
 */
export interface CreatePDFManualOut {
    /**
     * id
     * @type {number}
     * @memberof CreatePDFManualOut
     */
    id: number;
    /**
     * タイトル
     * @type {string}
     * @memberof CreatePDFManualOut
     */
    title: string;
    /**
     * ファイルURL
     * @type {string}
     * @memberof CreatePDFManualOut
     */
    fileUrl: string;
    /**
     * 表示順
     * @type {number}
     * @memberof CreatePDFManualOut
     */
    order: number;
    /**
     * 
     * @type {TargetAudienceType}
     * @memberof CreatePDFManualOut
     */
    target: TargetAudienceType;
    /**
     * 統合版か
     * @type {boolean}
     * @memberof CreatePDFManualOut
     */
    isIntegrated?: boolean;
}

/**
 * Check if a given object implements the CreatePDFManualOut interface.
 */
export function instanceOfCreatePDFManualOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "fileUrl" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "target" in value;

    return isInstance;
}

export function CreatePDFManualOutFromJSON(json: any): CreatePDFManualOut {
    return CreatePDFManualOutFromJSONTyped(json, false);
}

export function CreatePDFManualOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePDFManualOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'fileUrl': json['fileUrl'],
        'order': json['order'],
        'target': TargetAudienceTypeFromJSON(json['target']),
        'isIntegrated': !exists(json, 'isIntegrated') ? undefined : json['isIntegrated'],
    };
}

export function CreatePDFManualOutToJSON(value?: CreatePDFManualOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'fileUrl': value.fileUrl,
        'order': value.order,
        'target': TargetAudienceTypeToJSON(value.target),
        'isIntegrated': value.isIntegrated,
    };
}

