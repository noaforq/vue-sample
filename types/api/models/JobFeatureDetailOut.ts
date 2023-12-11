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
import type { JobFeatureCategory } from './JobFeatureCategory';
import {
    JobFeatureCategoryFromJSON,
    JobFeatureCategoryFromJSONTyped,
    JobFeatureCategoryToJSON,
} from './JobFeatureCategory';

/**
 * 
 * @export
 * @interface JobFeatureDetailOut
 */
export interface JobFeatureDetailOut {
    /**
     * 
     * @type {number}
     * @memberof JobFeatureDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof JobFeatureDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof JobFeatureDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof JobFeatureDetailOut
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof JobFeatureDetailOut
     */
    isForFullTimeStaff: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JobFeatureDetailOut
     */
    isForNewGraduate: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JobFeatureDetailOut
     */
    isForPartTimeJob: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JobFeatureDetailOut
     */
    isForIntern: boolean;
    /**
     * 
     * @type {JobFeatureCategory}
     * @memberof JobFeatureDetailOut
     */
    jobFeatureCategory: JobFeatureCategory;
}

/**
 * Check if a given object implements the JobFeatureDetailOut interface.
 */
export function instanceOfJobFeatureDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "isForFullTimeStaff" in value;
    isInstance = isInstance && "isForNewGraduate" in value;
    isInstance = isInstance && "isForPartTimeJob" in value;
    isInstance = isInstance && "isForIntern" in value;
    isInstance = isInstance && "jobFeatureCategory" in value;

    return isInstance;
}

export function JobFeatureDetailOutFromJSON(json: any): JobFeatureDetailOut {
    return JobFeatureDetailOutFromJSONTyped(json, false);
}

export function JobFeatureDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobFeatureDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'name': json['name'],
        'isForFullTimeStaff': json['isForFullTimeStaff'],
        'isForNewGraduate': json['isForNewGraduate'],
        'isForPartTimeJob': json['isForPartTimeJob'],
        'isForIntern': json['isForIntern'],
        'jobFeatureCategory': JobFeatureCategoryFromJSON(json['jobFeatureCategory']),
    };
}

export function JobFeatureDetailOutToJSON(value?: JobFeatureDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'name': value.name,
        'isForFullTimeStaff': value.isForFullTimeStaff,
        'isForNewGraduate': value.isForNewGraduate,
        'isForPartTimeJob': value.isForPartTimeJob,
        'isForIntern': value.isForIntern,
        'jobFeatureCategory': JobFeatureCategoryToJSON(value.jobFeatureCategory),
    };
}
