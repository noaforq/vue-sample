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
 * @interface VideoManualDetailOut
 */
export interface VideoManualDetailOut {
    /**
     * 
     * @type {number}
     * @memberof VideoManualDetailOut
     */
    id: number;
    /**
     * 作成日(yyyy年mm月dd日)
     * @type {Date}
     * @memberof VideoManualDetailOut
     */
    createdAt: Date;
    /**
     * 最終更新日(yyyy年mm月dd日)
     * @type {Date}
     * @memberof VideoManualDetailOut
     */
    updatedAt: Date;
    /**
     * タイトル
     * @type {string}
     * @memberof VideoManualDetailOut
     */
    title: string;
    /**
     * 動画ファイルURL
     * @type {string}
     * @memberof VideoManualDetailOut
     */
    fileUrl: string;
    /**
     * 順番
     * @type {number}
     * @memberof VideoManualDetailOut
     */
    order: number;
    /**
     * 
     * @type {TargetAudienceType}
     * @memberof VideoManualDetailOut
     */
    target: TargetAudienceType;
}

/**
 * Check if a given object implements the VideoManualDetailOut interface.
 */
export function instanceOfVideoManualDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "fileUrl" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "target" in value;

    return isInstance;
}

export function VideoManualDetailOutFromJSON(json: any): VideoManualDetailOut {
    return VideoManualDetailOutFromJSONTyped(json, false);
}

export function VideoManualDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoManualDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'title': json['title'],
        'fileUrl': json['fileUrl'],
        'order': json['order'],
        'target': TargetAudienceTypeFromJSON(json['target']),
    };
}

export function VideoManualDetailOutToJSON(value?: VideoManualDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString().substring(0,10)),
        'updatedAt': (value.updatedAt.toISOString().substring(0,10)),
        'title': value.title,
        'fileUrl': value.fileUrl,
        'order': value.order,
        'target': TargetAudienceTypeToJSON(value.target),
    };
}

