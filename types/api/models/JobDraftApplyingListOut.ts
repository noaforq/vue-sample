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
 * @interface JobDraftApplyingListOut
 */
export interface JobDraftApplyingListOut {
    /**
     * 求人下書ID
     * @type {number}
     * @memberof JobDraftApplyingListOut
     */
    jobDraftId: number;
    /**
     * タイトル
     * @type {string}
     * @memberof JobDraftApplyingListOut
     */
    title: string;
    /**
     * 再申請かどうか
     * @type {boolean}
     * @memberof JobDraftApplyingListOut
     */
    isReapplied: boolean;
    /**
     * 職種
     * @type {string}
     * @memberof JobDraftApplyingListOut
     */
    occupationName: string;
    /**
     * 採用人数
     * @type {number}
     * @memberof JobDraftApplyingListOut
     */
    recruitmentNumbers?: number | null;
    /**
     * 企業名
     * @type {string}
     * @memberof JobDraftApplyingListOut
     */
    companyName: string;
    /**
     * 作成日
     * @type {Date}
     * @memberof JobDraftApplyingListOut
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the JobDraftApplyingListOut interface.
 */
export function instanceOfJobDraftApplyingListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jobDraftId" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "isReapplied" in value;
    isInstance = isInstance && "occupationName" in value;
    isInstance = isInstance && "companyName" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function JobDraftApplyingListOutFromJSON(json: any): JobDraftApplyingListOut {
    return JobDraftApplyingListOutFromJSONTyped(json, false);
}

export function JobDraftApplyingListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobDraftApplyingListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jobDraftId': json['jobDraftId'],
        'title': json['title'],
        'isReapplied': json['isReapplied'],
        'occupationName': json['occupationName'],
        'recruitmentNumbers': !exists(json, 'recruitmentNumbers') ? undefined : json['recruitmentNumbers'],
        'companyName': json['companyName'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function JobDraftApplyingListOutToJSON(value?: JobDraftApplyingListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jobDraftId': value.jobDraftId,
        'title': value.title,
        'isReapplied': value.isReapplied,
        'occupationName': value.occupationName,
        'recruitmentNumbers': value.recruitmentNumbers,
        'companyName': value.companyName,
        'createdAt': (value.createdAt.toISOString()),
    };
}

