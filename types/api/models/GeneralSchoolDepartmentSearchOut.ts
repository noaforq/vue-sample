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
 * 学部・学科マスター検索結果
 * @export
 * @interface GeneralSchoolDepartmentSearchOut
 */
export interface GeneralSchoolDepartmentSearchOut {
    /**
     * 学部ID
     * @type {number}
     * @memberof GeneralSchoolDepartmentSearchOut
     */
    facultyId: number;
    /**
     * 学部名
     * @type {string}
     * @memberof GeneralSchoolDepartmentSearchOut
     */
    facultyName: string;
    /**
     * 手入力フラグ（学部）
     * @type {boolean}
     * @memberof GeneralSchoolDepartmentSearchOut
     */
    facultyIsManual: boolean;
    /**
     * 学科ID
     * @type {number}
     * @memberof GeneralSchoolDepartmentSearchOut
     */
    departmentId: number;
    /**
     * 学科名
     * @type {string}
     * @memberof GeneralSchoolDepartmentSearchOut
     */
    departmentName: string;
    /**
     * 手入力フラグ（学科）
     * @type {boolean}
     * @memberof GeneralSchoolDepartmentSearchOut
     */
    departmentIsManual: boolean;
}

/**
 * Check if a given object implements the GeneralSchoolDepartmentSearchOut interface.
 */
export function instanceOfGeneralSchoolDepartmentSearchOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facultyId" in value;
    isInstance = isInstance && "facultyName" in value;
    isInstance = isInstance && "facultyIsManual" in value;
    isInstance = isInstance && "departmentId" in value;
    isInstance = isInstance && "departmentName" in value;
    isInstance = isInstance && "departmentIsManual" in value;

    return isInstance;
}

export function GeneralSchoolDepartmentSearchOutFromJSON(json: any): GeneralSchoolDepartmentSearchOut {
    return GeneralSchoolDepartmentSearchOutFromJSONTyped(json, false);
}

export function GeneralSchoolDepartmentSearchOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralSchoolDepartmentSearchOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facultyId': json['facultyId'],
        'facultyName': json['facultyName'],
        'facultyIsManual': json['facultyIsManual'],
        'departmentId': json['departmentId'],
        'departmentName': json['departmentName'],
        'departmentIsManual': json['departmentIsManual'],
    };
}

export function GeneralSchoolDepartmentSearchOutToJSON(value?: GeneralSchoolDepartmentSearchOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facultyId': value.facultyId,
        'facultyName': value.facultyName,
        'facultyIsManual': value.facultyIsManual,
        'departmentId': value.departmentId,
        'departmentName': value.departmentName,
        'departmentIsManual': value.departmentIsManual,
    };
}
