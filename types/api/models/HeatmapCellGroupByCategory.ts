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
import type { HeatmapCellGroupByTopic } from './HeatmapCellGroupByTopic';
import {
    HeatmapCellGroupByTopicFromJSON,
    HeatmapCellGroupByTopicFromJSONTyped,
    HeatmapCellGroupByTopicToJSON,
} from './HeatmapCellGroupByTopic';

/**
 * 
 * @export
 * @interface HeatmapCellGroupByCategory
 */
export interface HeatmapCellGroupByCategory {
    /**
     * カテゴリID
     * @type {number}
     * @memberof HeatmapCellGroupByCategory
     */
    categoryId: number;
    /**
     * カテゴリ名
     * @type {string}
     * @memberof HeatmapCellGroupByCategory
     */
    category: string;
    /**
     * トピック別のセル結果
     * @type {Array<HeatmapCellGroupByTopic>}
     * @memberof HeatmapCellGroupByCategory
     */
    cellResultsByTopic: Array<HeatmapCellGroupByTopic>;
}

/**
 * Check if a given object implements the HeatmapCellGroupByCategory interface.
 */
export function instanceOfHeatmapCellGroupByCategory(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "categoryId" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "cellResultsByTopic" in value;

    return isInstance;
}

export function HeatmapCellGroupByCategoryFromJSON(json: any): HeatmapCellGroupByCategory {
    return HeatmapCellGroupByCategoryFromJSONTyped(json, false);
}

export function HeatmapCellGroupByCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeatmapCellGroupByCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categoryId': json['categoryId'],
        'category': json['category'],
        'cellResultsByTopic': ((json['cellResultsByTopic'] as Array<any>).map(HeatmapCellGroupByTopicFromJSON)),
    };
}

export function HeatmapCellGroupByCategoryToJSON(value?: HeatmapCellGroupByCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categoryId': value.categoryId,
        'category': value.category,
        'cellResultsByTopic': ((value.cellResultsByTopic as Array<any>).map(HeatmapCellGroupByTopicToJSON)),
    };
}

