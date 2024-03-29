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
import type { EmploymentManagementStatusItem } from './EmploymentManagementStatusItem';
import {
    EmploymentManagementStatusItemFromJSON,
    EmploymentManagementStatusItemFromJSONTyped,
    EmploymentManagementStatusItemToJSON,
} from './EmploymentManagementStatusItem';

/**
 * 
 * @export
 * @interface EmploymentManagementStatusDetail
 */
export interface EmploymentManagementStatusDetail {
    /**
     * ID
     * @type {number}
     * @memberof EmploymentManagementStatusDetail
     */
    id: number;
    /**
     * 
     * @type {EmploymentManagementStatusItem}
     * @memberof EmploymentManagementStatusDetail
     */
    item: EmploymentManagementStatusItem | null;
    /**
     * 詳細
     * @type {string}
     * @memberof EmploymentManagementStatusDetail
     */
    detail: string;
}

/**
 * Check if a given object implements the EmploymentManagementStatusDetail interface.
 */
export function instanceOfEmploymentManagementStatusDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "item" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function EmploymentManagementStatusDetailFromJSON(json: any): EmploymentManagementStatusDetail {
    return EmploymentManagementStatusDetailFromJSONTyped(json, false);
}

export function EmploymentManagementStatusDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmploymentManagementStatusDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'item': EmploymentManagementStatusItemFromJSON(json['item']),
        'detail': json['detail'],
    };
}

export function EmploymentManagementStatusDetailToJSON(value?: EmploymentManagementStatusDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'item': EmploymentManagementStatusItemToJSON(value.item),
        'detail': value.detail,
    };
}

