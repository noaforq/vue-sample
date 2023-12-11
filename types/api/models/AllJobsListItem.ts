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
import type { EmploymentStatus } from './EmploymentStatus';
import {
    EmploymentStatusFromJSON,
    EmploymentStatusFromJSONTyped,
    EmploymentStatusToJSON,
} from './EmploymentStatus';
import type { SkillLevel } from './SkillLevel';
import {
    SkillLevelFromJSON,
    SkillLevelFromJSONTyped,
    SkillLevelToJSON,
} from './SkillLevel';

/**
 * 
 * @export
 * @interface AllJobsListItem
 */
export interface AllJobsListItem {
    /**
     * 求人ID(COMMON)
     * @type {number}
     * @memberof AllJobsListItem
     */
    jobId: number;
    /**
     * 企業ID(管理番号用)(STAFF)
     * @type {number}
     * @memberof AllJobsListItem
     */
    companyId: number;
    /**
     * 企業名(COMMON)
     * @type {string}
     * @memberof AllJobsListItem
     */
    companyName: string;
    /**
     * 職種名(COMMON)
     * @type {string}
     * @memberof AllJobsListItem
     */
    occupation: string;
    /**
     * 求人名(COMMON)
     * @type {string}
     * @memberof AllJobsListItem
     */
    title: string;
    /**
     * 勤務場所(HR)
     * @type {string}
     * @memberof AllJobsListItem
     */
    workLocation?: string;
    /**
     * 
     * @type {SkillLevel}
     * @memberof AllJobsListItem
     */
    requiredSkillLevel?: SkillLevel | null;
    /**
     * 必要言語(HR)
     * @type {Array<string>}
     * @memberof AllJobsListItem
     */
    requiredPgLangs: Array<string>;
    /**
     * 
     * @type {EmploymentStatus}
     * @memberof AllJobsListItem
     */
    employmentStatus?: EmploymentStatus | null;
    /**
     * 更新日(HR)
     * @type {Date}
     * @memberof AllJobsListItem
     */
    updatedAt: Date;
    /**
     * 作成日(STAFF)
     * @type {Date}
     * @memberof AllJobsListItem
     */
    createdAt: Date;
    /**
     * 応募条件(HR)
     * @type {string}
     * @memberof AllJobsListItem
     */
    target?: string;
    /**
     * 募集人数(STAFF)
     * @type {number}
     * @memberof AllJobsListItem
     */
    recruitmentNumbers?: number | null;
    /**
     * あしあと(STAFF)
     * @type {number}
     * @memberof AllJobsListItem
     */
    jobBrowsingCount: number;
    /**
     * お気に入り数(COMMON)
     * @type {number}
     * @memberof AllJobsListItem
     */
    favoriteCount: number;
    /**
     * 紹介ユーザー数(HR)
     * @type {number}
     * @memberof AllJobsListItem
     */
    scoutedCount: number;
    /**
     * 選考中(HR)
     * @type {number}
     * @memberof AllJobsListItem
     */
    inSelectionCount: number;
    /**
     * 内定数(HR)
     * @type {number}
     * @memberof AllJobsListItem
     */
    offeredCount: number;
    /**
     * 公開済みか(STAFF)
     * @type {boolean}
     * @memberof AllJobsListItem
     */
    isPublished: boolean;
    /**
     * 企業求人順番(管理番号用)(STAFF)
     * @type {number}
     * @memberof AllJobsListItem
     */
    companyJobOrder: number;
}

/**
 * Check if a given object implements the AllJobsListItem interface.
 */
export function instanceOfAllJobsListItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jobId" in value;
    isInstance = isInstance && "companyId" in value;
    isInstance = isInstance && "companyName" in value;
    isInstance = isInstance && "occupation" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "requiredPgLangs" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "jobBrowsingCount" in value;
    isInstance = isInstance && "favoriteCount" in value;
    isInstance = isInstance && "scoutedCount" in value;
    isInstance = isInstance && "inSelectionCount" in value;
    isInstance = isInstance && "offeredCount" in value;
    isInstance = isInstance && "isPublished" in value;
    isInstance = isInstance && "companyJobOrder" in value;

    return isInstance;
}

export function AllJobsListItemFromJSON(json: any): AllJobsListItem {
    return AllJobsListItemFromJSONTyped(json, false);
}

export function AllJobsListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllJobsListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jobId': json['jobId'],
        'companyId': json['companyId'],
        'companyName': json['companyName'],
        'occupation': json['occupation'],
        'title': json['title'],
        'workLocation': !exists(json, 'workLocation') ? undefined : json['workLocation'],
        'requiredSkillLevel': !exists(json, 'requiredSkillLevel') ? undefined : SkillLevelFromJSON(json['requiredSkillLevel']),
        'requiredPgLangs': json['requiredPgLangs'],
        'employmentStatus': !exists(json, 'employmentStatus') ? undefined : EmploymentStatusFromJSON(json['employmentStatus']),
        'updatedAt': (new Date(json['updatedAt'])),
        'createdAt': (new Date(json['createdAt'])),
        'target': !exists(json, 'target') ? undefined : json['target'],
        'recruitmentNumbers': !exists(json, 'recruitmentNumbers') ? undefined : json['recruitmentNumbers'],
        'jobBrowsingCount': json['jobBrowsingCount'],
        'favoriteCount': json['favoriteCount'],
        'scoutedCount': json['scoutedCount'],
        'inSelectionCount': json['inSelectionCount'],
        'offeredCount': json['offeredCount'],
        'isPublished': json['isPublished'],
        'companyJobOrder': json['companyJobOrder'],
    };
}

export function AllJobsListItemToJSON(value?: AllJobsListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jobId': value.jobId,
        'companyId': value.companyId,
        'companyName': value.companyName,
        'occupation': value.occupation,
        'title': value.title,
        'workLocation': value.workLocation,
        'requiredSkillLevel': SkillLevelToJSON(value.requiredSkillLevel),
        'requiredPgLangs': value.requiredPgLangs,
        'employmentStatus': EmploymentStatusToJSON(value.employmentStatus),
        'updatedAt': (value.updatedAt.toISOString().substring(0,10)),
        'createdAt': (value.createdAt.toISOString().substring(0,10)),
        'target': value.target,
        'recruitmentNumbers': value.recruitmentNumbers,
        'jobBrowsingCount': value.jobBrowsingCount,
        'favoriteCount': value.favoriteCount,
        'scoutedCount': value.scoutedCount,
        'inSelectionCount': value.inSelectionCount,
        'offeredCount': value.offeredCount,
        'isPublished': value.isPublished,
        'companyJobOrder': value.companyJobOrder,
    };
}
