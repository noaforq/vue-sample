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
 * PDFマニュアル一覧取得
 * @export
 * @interface AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut
 */
export interface AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut {
    /**
     * ID
     * @type {number}
     * @memberof AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut
     */
    id: number;
    /**
     * 並び順
     * @type {number}
     * @memberof AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut
     */
    order: number;
    /**
     * タイトル
     * @type {string}
     * @memberof AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut
     */
    title: string;
    /**
     * ファイルURL
     * @type {string}
     * @memberof AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut
     */
    fileUrl: string;
}

/**
 * Check if a given object implements the AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut interface.
 */
export function instanceOfAppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "fileUrl" in value;

    return isInstance;
}

export function AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOutFromJSON(json: any): AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut {
    return AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOutFromJSONTyped(json, false);
}

export function AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'order': json['order'],
        'title': json['title'],
        'fileUrl': json['fileUrl'],
    };
}

export function AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOutToJSON(value?: AppSchemasCommonManualsGetPdfManualListOutGetPDFManualListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order': value.order,
        'title': value.title,
        'fileUrl': value.fileUrl,
    };
}

