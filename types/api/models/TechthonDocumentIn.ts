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
/**
 * 
 * @export
 * @interface TechthonDocumentIn
 */
export interface TechthonDocumentIn {
    /**
     * 順番
     * @type {number}
     * @memberof TechthonDocumentIn
     */
    order: number;
    /**
     * ファイルURL
     * @type {string}
     * @memberof TechthonDocumentIn
     */
    fileUrl: string;
}

/**
 * Check if a given object implements the TechthonDocumentIn interface.
 */
export function instanceOfTechthonDocumentIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "fileUrl" in value;

    return isInstance;
}

export function TechthonDocumentInFromJSON(json: any): TechthonDocumentIn {
    return TechthonDocumentInFromJSONTyped(json, false);
}

export function TechthonDocumentInFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonDocumentIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'order': json['order'],
        'fileUrl': json['fileUrl'],
    };
}

export function TechthonDocumentInToJSON(value?: TechthonDocumentIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order': value.order,
        'fileUrl': value.fileUrl,
    };
}

