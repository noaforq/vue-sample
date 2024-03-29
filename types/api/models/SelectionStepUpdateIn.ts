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

/**
 * 
 * @export
 * @interface SelectionStepUpdateIn
 */
export interface SelectionStepUpdateIn {
    /**
     * 
     * @type {SelectionStep}
     * @memberof SelectionStepUpdateIn
     */
    selectionStep: SelectionStep;
}

/**
 * Check if a given object implements the SelectionStepUpdateIn interface.
 */
export function instanceOfSelectionStepUpdateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "selectionStep" in value;

    return isInstance;
}

export function SelectionStepUpdateInFromJSON(json: any): SelectionStepUpdateIn {
    return SelectionStepUpdateInFromJSONTyped(json, false);
}

export function SelectionStepUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectionStepUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'selectionStep': SelectionStepFromJSON(json['selectionStep']),
    };
}

export function SelectionStepUpdateInToJSON(value?: SelectionStepUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'selectionStep': SelectionStepToJSON(value.selectionStep),
    };
}

