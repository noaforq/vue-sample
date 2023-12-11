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
import type { SelectionStep } from './SelectionStep';
import {
    SelectionStepFromJSON,
    SelectionStepFromJSONTyped,
    SelectionStepToJSON,
} from './SelectionStep';
import type { SkillLevel } from './SkillLevel';
import {
    SkillLevelFromJSON,
    SkillLevelFromJSONTyped,
    SkillLevelToJSON,
} from './SkillLevel';

/**
 * 
 * @export
 * @interface ScoutListOut
 */
export interface ScoutListOut {
    /**
     * 求人ID
     * @type {number}
     * @memberof ScoutListOut
     */
    jobId: number;
    /**
     * 企業名
     * @type {string}
     * @memberof ScoutListOut
     */
    companyName: string;
    /**
     * 勤務地
     * @type {string}
     * @memberof ScoutListOut
     */
    workLocation: string;
    /**
     * 職種名
     * @type {string}
     * @memberof ScoutListOut
     */
    occupation: string;
    /**
     * 
     * @type {SkillLevel}
     * @memberof ScoutListOut
     */
    skillLevel?: SkillLevel | null;
    /**
     * 使用言語
     * @type {Array<string>}
     * @memberof ScoutListOut
     */
    pgLangs: Array<string>;
    /**
     * 
     * @type {SelectionStep}
     * @memberof ScoutListOut
     */
    selectionStep: SelectionStep;
    /**
     * 紹介日
     * @type {Date}
     * @memberof ScoutListOut
     */
    introducedDate: Date;
}

/**
 * Check if a given object implements the ScoutListOut interface.
 */
export function instanceOfScoutListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jobId" in value;
    isInstance = isInstance && "companyName" in value;
    isInstance = isInstance && "workLocation" in value;
    isInstance = isInstance && "occupation" in value;
    isInstance = isInstance && "pgLangs" in value;
    isInstance = isInstance && "selectionStep" in value;
    isInstance = isInstance && "introducedDate" in value;

    return isInstance;
}

export function ScoutListOutFromJSON(json: any): ScoutListOut {
    return ScoutListOutFromJSONTyped(json, false);
}

export function ScoutListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoutListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jobId': json['jobId'],
        'companyName': json['companyName'],
        'workLocation': json['workLocation'],
        'occupation': json['occupation'],
        'skillLevel': !exists(json, 'skillLevel') ? undefined : SkillLevelFromJSON(json['skillLevel']),
        'pgLangs': json['pgLangs'],
        'selectionStep': SelectionStepFromJSON(json['selectionStep']),
        'introducedDate': (new Date(json['introducedDate'])),
    };
}

export function ScoutListOutToJSON(value?: ScoutListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jobId': value.jobId,
        'companyName': value.companyName,
        'workLocation': value.workLocation,
        'occupation': value.occupation,
        'skillLevel': SkillLevelToJSON(value.skillLevel),
        'pgLangs': value.pgLangs,
        'selectionStep': SelectionStepToJSON(value.selectionStep),
        'introducedDate': (value.introducedDate.toISOString().substring(0,10)),
    };
}
