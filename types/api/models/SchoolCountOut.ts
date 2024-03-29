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
 * @interface SchoolCountOut
 */
export interface SchoolCountOut {
    /**
     * 国立大学合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    nationalUniversityCount: number;
    /**
     * 公立大学合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    publicUniversityCount: number;
    /**
     * 私立大学合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    privateUniversityCount: number;
    /**
     * 高専合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    technicalSchoolCount: number;
    /**
     * 専門学校合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    technicalCollegeCount: number;
    /**
     * 高校合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    highSchoolCount: number;
    /**
     * 中学校合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    juniorHighSchoolCount: number;
    /**
     * 小学校合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    elementarySchoolCount: number;
    /**
     * スクール合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    schoolCount: number;
    /**
     * 大学（海外）合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    foreignUniversityCount: number;
    /**
     * 高校（海外）合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    foreignHighSchoolCount: number;
    /**
     * 中学校（海外）合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    foreignJuniorHighSchoolCount: number;
    /**
     * 学校登録合計数
     * @type {number}
     * @memberof SchoolCountOut
     */
    schoolTotalCount: number;
}

/**
 * Check if a given object implements the SchoolCountOut interface.
 */
export function instanceOfSchoolCountOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nationalUniversityCount" in value;
    isInstance = isInstance && "publicUniversityCount" in value;
    isInstance = isInstance && "privateUniversityCount" in value;
    isInstance = isInstance && "technicalSchoolCount" in value;
    isInstance = isInstance && "technicalCollegeCount" in value;
    isInstance = isInstance && "highSchoolCount" in value;
    isInstance = isInstance && "juniorHighSchoolCount" in value;
    isInstance = isInstance && "elementarySchoolCount" in value;
    isInstance = isInstance && "schoolCount" in value;
    isInstance = isInstance && "foreignUniversityCount" in value;
    isInstance = isInstance && "foreignHighSchoolCount" in value;
    isInstance = isInstance && "foreignJuniorHighSchoolCount" in value;
    isInstance = isInstance && "schoolTotalCount" in value;

    return isInstance;
}

export function SchoolCountOutFromJSON(json: any): SchoolCountOut {
    return SchoolCountOutFromJSONTyped(json, false);
}

export function SchoolCountOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchoolCountOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nationalUniversityCount': json['nationalUniversityCount'],
        'publicUniversityCount': json['publicUniversityCount'],
        'privateUniversityCount': json['privateUniversityCount'],
        'technicalSchoolCount': json['technicalSchoolCount'],
        'technicalCollegeCount': json['technicalCollegeCount'],
        'highSchoolCount': json['highSchoolCount'],
        'juniorHighSchoolCount': json['juniorHighSchoolCount'],
        'elementarySchoolCount': json['elementarySchoolCount'],
        'schoolCount': json['schoolCount'],
        'foreignUniversityCount': json['foreignUniversityCount'],
        'foreignHighSchoolCount': json['foreignHighSchoolCount'],
        'foreignJuniorHighSchoolCount': json['foreignJuniorHighSchoolCount'],
        'schoolTotalCount': json['schoolTotalCount'],
    };
}

export function SchoolCountOutToJSON(value?: SchoolCountOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nationalUniversityCount': value.nationalUniversityCount,
        'publicUniversityCount': value.publicUniversityCount,
        'privateUniversityCount': value.privateUniversityCount,
        'technicalSchoolCount': value.technicalSchoolCount,
        'technicalCollegeCount': value.technicalCollegeCount,
        'highSchoolCount': value.highSchoolCount,
        'juniorHighSchoolCount': value.juniorHighSchoolCount,
        'elementarySchoolCount': value.elementarySchoolCount,
        'schoolCount': value.schoolCount,
        'foreignUniversityCount': value.foreignUniversityCount,
        'foreignHighSchoolCount': value.foreignHighSchoolCount,
        'foreignJuniorHighSchoolCount': value.foreignJuniorHighSchoolCount,
        'schoolTotalCount': value.schoolTotalCount,
    };
}

