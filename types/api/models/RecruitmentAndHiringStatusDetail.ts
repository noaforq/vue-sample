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
import type { RecruitmentAndHiringStatusItem } from './RecruitmentAndHiringStatusItem';
import {
    RecruitmentAndHiringStatusItemFromJSON,
    RecruitmentAndHiringStatusItemFromJSONTyped,
    RecruitmentAndHiringStatusItemToJSON,
} from './RecruitmentAndHiringStatusItem';

/**
 * 
 * @export
 * @interface RecruitmentAndHiringStatusDetail
 */
export interface RecruitmentAndHiringStatusDetail {
    /**
     * ID
     * @type {number}
     * @memberof RecruitmentAndHiringStatusDetail
     */
    id: number;
    /**
     * 
     * @type {RecruitmentAndHiringStatusItem}
     * @memberof RecruitmentAndHiringStatusDetail
     */
    item: RecruitmentAndHiringStatusItem | null;
    /**
     * 詳細
     * @type {string}
     * @memberof RecruitmentAndHiringStatusDetail
     */
    detail: string;
}

/**
 * Check if a given object implements the RecruitmentAndHiringStatusDetail interface.
 */
export function instanceOfRecruitmentAndHiringStatusDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "item" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function RecruitmentAndHiringStatusDetailFromJSON(json: any): RecruitmentAndHiringStatusDetail {
    return RecruitmentAndHiringStatusDetailFromJSONTyped(json, false);
}

export function RecruitmentAndHiringStatusDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecruitmentAndHiringStatusDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'item': RecruitmentAndHiringStatusItemFromJSON(json['item']),
        'detail': json['detail'],
    };
}

export function RecruitmentAndHiringStatusDetailToJSON(value?: RecruitmentAndHiringStatusDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'item': RecruitmentAndHiringStatusItemToJSON(value.item),
        'detail': value.detail,
    };
}

