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
 * @interface RecruitmentAndHiringStatusIn
 */
export interface RecruitmentAndHiringStatusIn {
    /**
     * 
     * @type {RecruitmentAndHiringStatusItem}
     * @memberof RecruitmentAndHiringStatusIn
     */
    item: RecruitmentAndHiringStatusItem;
    /**
     * 募集採用に関する状況詳細
     * @type {string}
     * @memberof RecruitmentAndHiringStatusIn
     */
    detail?: string;
}

/**
 * Check if a given object implements the RecruitmentAndHiringStatusIn interface.
 */
export function instanceOfRecruitmentAndHiringStatusIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "item" in value;

    return isInstance;
}

export function RecruitmentAndHiringStatusInFromJSON(json: any): RecruitmentAndHiringStatusIn {
    return RecruitmentAndHiringStatusInFromJSONTyped(json, false);
}

export function RecruitmentAndHiringStatusInFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecruitmentAndHiringStatusIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item': RecruitmentAndHiringStatusItemFromJSON(json['item']),
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
    };
}

export function RecruitmentAndHiringStatusInToJSON(value?: RecruitmentAndHiringStatusIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item': RecruitmentAndHiringStatusItemToJSON(value.item),
        'detail': value.detail,
    };
}
