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
 * @interface HeatmapCellGroupByTopic
 */
export interface HeatmapCellGroupByTopic {
    /**
     * トピックID
     * @type {number}
     * @memberof HeatmapCellGroupByTopic
     */
    topicId: number;
    /**
     * トピック名
     * @type {string}
     * @memberof HeatmapCellGroupByTopic
     */
    topic: string;
    /**
     * 初級問題正解数
     * @type {number}
     * @memberof HeatmapCellGroupByTopic
     */
    elementaryPassedCount: number;
    /**
     * 中級問題正解数
     * @type {number}
     * @memberof HeatmapCellGroupByTopic
     */
    intermediatePassedCount: number;
    /**
     * 上級問題正解数
     * @type {number}
     * @memberof HeatmapCellGroupByTopic
     */
    advancedPassedCount: number;
}

/**
 * Check if a given object implements the HeatmapCellGroupByTopic interface.
 */
export function instanceOfHeatmapCellGroupByTopic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "topicId" in value;
    isInstance = isInstance && "topic" in value;
    isInstance = isInstance && "elementaryPassedCount" in value;
    isInstance = isInstance && "intermediatePassedCount" in value;
    isInstance = isInstance && "advancedPassedCount" in value;

    return isInstance;
}

export function HeatmapCellGroupByTopicFromJSON(json: any): HeatmapCellGroupByTopic {
    return HeatmapCellGroupByTopicFromJSONTyped(json, false);
}

export function HeatmapCellGroupByTopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeatmapCellGroupByTopic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'topicId': json['topicId'],
        'topic': json['topic'],
        'elementaryPassedCount': json['elementaryPassedCount'],
        'intermediatePassedCount': json['intermediatePassedCount'],
        'advancedPassedCount': json['advancedPassedCount'],
    };
}

export function HeatmapCellGroupByTopicToJSON(value?: HeatmapCellGroupByTopic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'topicId': value.topicId,
        'topic': value.topic,
        'elementaryPassedCount': value.elementaryPassedCount,
        'intermediatePassedCount': value.intermediatePassedCount,
        'advancedPassedCount': value.advancedPassedCount,
    };
}

