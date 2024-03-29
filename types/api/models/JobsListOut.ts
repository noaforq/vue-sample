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
import type { AppSchemasGeneralJobsJobDetailOutJobDetailOut } from './AppSchemasGeneralJobsJobDetailOutJobDetailOut';
import {
    AppSchemasGeneralJobsJobDetailOutJobDetailOutFromJSON,
    AppSchemasGeneralJobsJobDetailOutJobDetailOutFromJSONTyped,
    AppSchemasGeneralJobsJobDetailOutJobDetailOutToJSON,
} from './AppSchemasGeneralJobsJobDetailOutJobDetailOut';

/**
 * 
 * @export
 * @interface JobsListOut
 */
export interface JobsListOut {
    /**
     * 総件数
     * @type {number}
     * @memberof JobsListOut
     */
    totalCount: number;
    /**
     * 次ページ有無
     * @type {boolean}
     * @memberof JobsListOut
     */
    hasNext: boolean;
    /**
     * 前ページ有無
     * @type {boolean}
     * @memberof JobsListOut
     */
    hasPrevious: boolean;
    /**
     * 求人データ
     * @type {Array<AppSchemasGeneralJobsJobDetailOutJobDetailOut>}
     * @memberof JobsListOut
     */
    jobs: Array<AppSchemasGeneralJobsJobDetailOutJobDetailOut>;
}

/**
 * Check if a given object implements the JobsListOut interface.
 */
export function instanceOfJobsListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalCount" in value;
    isInstance = isInstance && "hasNext" in value;
    isInstance = isInstance && "hasPrevious" in value;
    isInstance = isInstance && "jobs" in value;

    return isInstance;
}

export function JobsListOutFromJSON(json: any): JobsListOut {
    return JobsListOutFromJSONTyped(json, false);
}

export function JobsListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobsListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': json['totalCount'],
        'hasNext': json['hasNext'],
        'hasPrevious': json['hasPrevious'],
        'jobs': ((json['jobs'] as Array<any>).map(AppSchemasGeneralJobsJobDetailOutJobDetailOutFromJSON)),
    };
}

export function JobsListOutToJSON(value?: JobsListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'hasNext': value.hasNext,
        'hasPrevious': value.hasPrevious,
        'jobs': ((value.jobs as Array<any>).map(AppSchemasGeneralJobsJobDetailOutJobDetailOutToJSON)),
    };
}

