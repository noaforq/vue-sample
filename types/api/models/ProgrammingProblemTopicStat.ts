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
import type { ProgrammingProblemDetail } from './ProgrammingProblemDetail';
import {
    ProgrammingProblemDetailFromJSON,
    ProgrammingProblemDetailFromJSONTyped,
    ProgrammingProblemDetailToJSON,
} from './ProgrammingProblemDetail';

/**
 * 
 * @export
 * @interface ProgrammingProblemTopicStat
 */
export interface ProgrammingProblemTopicStat {
    /**
     * QuestionTopic.id
     * @type {number}
     * @memberof ProgrammingProblemTopicStat
     */
    id: number;
    /**
     * トピック名
     * @type {string}
     * @memberof ProgrammingProblemTopicStat
     */
    name: string;
    /**
     * 表示順
     * @type {number}
     * @memberof ProgrammingProblemTopicStat
     */
    order: number;
    /**
     * 合格数
     * @type {number}
     * @memberof ProgrammingProblemTopicStat
     */
    passedCount: number;
    /**
     * 最高難易度
     * @type {number}
     * @memberof ProgrammingProblemTopicStat
     */
    highestDifficulty: number;
    /**
     * 初級問題詳細
     * @type {Array<ProgrammingProblemDetail>}
     * @memberof ProgrammingProblemTopicStat
     */
    elementaryDetail?: Array<ProgrammingProblemDetail> | null;
    /**
     * 中級問題詳細
     * @type {Array<ProgrammingProblemDetail>}
     * @memberof ProgrammingProblemTopicStat
     */
    intermediateDetail?: Array<ProgrammingProblemDetail> | null;
    /**
     * 上級問題詳細
     * @type {Array<ProgrammingProblemDetail>}
     * @memberof ProgrammingProblemTopicStat
     */
    advancedDetail?: Array<ProgrammingProblemDetail> | null;
    /**
     * 初級問題合格数
     * @type {number}
     * @memberof ProgrammingProblemTopicStat
     */
    elementaryPassedCount?: number | null;
    /**
     * 中級問題合格数
     * @type {number}
     * @memberof ProgrammingProblemTopicStat
     */
    intermediatePassedCount?: number | null;
    /**
     * 上級問題合格数
     * @type {number}
     * @memberof ProgrammingProblemTopicStat
     */
    advancedPassedCount?: number | null;
}

/**
 * Check if a given object implements the ProgrammingProblemTopicStat interface.
 */
export function instanceOfProgrammingProblemTopicStat(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "passedCount" in value;
    isInstance = isInstance && "highestDifficulty" in value;

    return isInstance;
}

export function ProgrammingProblemTopicStatFromJSON(json: any): ProgrammingProblemTopicStat {
    return ProgrammingProblemTopicStatFromJSONTyped(json, false);
}

export function ProgrammingProblemTopicStatFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProgrammingProblemTopicStat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'order': json['order'],
        'passedCount': json['passedCount'],
        'highestDifficulty': json['highestDifficulty'],
        'elementaryDetail': !exists(json, 'elementaryDetail') ? undefined : (json['elementaryDetail'] === null ? null : (json['elementaryDetail'] as Array<any>).map(ProgrammingProblemDetailFromJSON)),
        'intermediateDetail': !exists(json, 'intermediateDetail') ? undefined : (json['intermediateDetail'] === null ? null : (json['intermediateDetail'] as Array<any>).map(ProgrammingProblemDetailFromJSON)),
        'advancedDetail': !exists(json, 'advancedDetail') ? undefined : (json['advancedDetail'] === null ? null : (json['advancedDetail'] as Array<any>).map(ProgrammingProblemDetailFromJSON)),
        'elementaryPassedCount': !exists(json, 'elementaryPassedCount') ? undefined : json['elementaryPassedCount'],
        'intermediatePassedCount': !exists(json, 'intermediatePassedCount') ? undefined : json['intermediatePassedCount'],
        'advancedPassedCount': !exists(json, 'advancedPassedCount') ? undefined : json['advancedPassedCount'],
    };
}

export function ProgrammingProblemTopicStatToJSON(value?: ProgrammingProblemTopicStat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'order': value.order,
        'passedCount': value.passedCount,
        'highestDifficulty': value.highestDifficulty,
        'elementaryDetail': value.elementaryDetail === undefined ? undefined : (value.elementaryDetail === null ? null : (value.elementaryDetail as Array<any>).map(ProgrammingProblemDetailToJSON)),
        'intermediateDetail': value.intermediateDetail === undefined ? undefined : (value.intermediateDetail === null ? null : (value.intermediateDetail as Array<any>).map(ProgrammingProblemDetailToJSON)),
        'advancedDetail': value.advancedDetail === undefined ? undefined : (value.advancedDetail === null ? null : (value.advancedDetail as Array<any>).map(ProgrammingProblemDetailToJSON)),
        'elementaryPassedCount': value.elementaryPassedCount,
        'intermediatePassedCount': value.intermediatePassedCount,
        'advancedPassedCount': value.advancedPassedCount,
    };
}

