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
import type { CompanyDocumentType } from './CompanyDocumentType';
import {
    CompanyDocumentTypeFromJSON,
    CompanyDocumentTypeFromJSONTyped,
    CompanyDocumentTypeToJSON,
} from './CompanyDocumentType';

/**
 * 
 * @export
 * @interface CompanyDocumentListOut
 */
export interface CompanyDocumentListOut {
    /**
     * 
     * @type {number}
     * @memberof CompanyDocumentListOut
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CompanyDocumentListOut
     */
    title: string;
    /**
     * 
     * @type {CompanyDocumentType}
     * @memberof CompanyDocumentListOut
     */
    companyDocumentType: CompanyDocumentType;
    /**
     * 組織名
     * @type {string}
     * @memberof CompanyDocumentListOut
     */
    companyName: string;
}

/**
 * Check if a given object implements the CompanyDocumentListOut interface.
 */
export function instanceOfCompanyDocumentListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "companyDocumentType" in value;
    isInstance = isInstance && "companyName" in value;

    return isInstance;
}

export function CompanyDocumentListOutFromJSON(json: any): CompanyDocumentListOut {
    return CompanyDocumentListOutFromJSONTyped(json, false);
}

export function CompanyDocumentListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyDocumentListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'companyDocumentType': CompanyDocumentTypeFromJSON(json['companyDocumentType']),
        'companyName': json['companyName'],
    };
}

export function CompanyDocumentListOutToJSON(value?: CompanyDocumentListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'companyDocumentType': CompanyDocumentTypeToJSON(value.companyDocumentType),
        'companyName': value.companyName,
    };
}

