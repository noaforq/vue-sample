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
import type { ProQuestionBestResult } from './ProQuestionBestResult';
import {
    ProQuestionBestResultFromJSON,
    ProQuestionBestResultFromJSONTyped,
    ProQuestionBestResultToJSON,
} from './ProQuestionBestResult';
import type { ProQuestionSubmissionHistoryBaseOut } from './ProQuestionSubmissionHistoryBaseOut';
import {
    ProQuestionSubmissionHistoryBaseOutFromJSON,
    ProQuestionSubmissionHistoryBaseOutFromJSONTyped,
    ProQuestionSubmissionHistoryBaseOutToJSON,
} from './ProQuestionSubmissionHistoryBaseOut';

/**
 * 
 * @export
 * @interface ProQuestionSubmitHistoryListOut
 */
export interface ProQuestionSubmitHistoryListOut {
    /**
     * 
     * @type {ProQuestionBestResult}
     * @memberof ProQuestionSubmitHistoryListOut
     */
    bestResult: ProQuestionBestResult;
    /**
     * 提出履歴一覧
     * @type {Array<ProQuestionSubmissionHistoryBaseOut>}
     * @memberof ProQuestionSubmitHistoryListOut
     */
    submitHistories: Array<ProQuestionSubmissionHistoryBaseOut>;
}

/**
 * Check if a given object implements the ProQuestionSubmitHistoryListOut interface.
 */
export function instanceOfProQuestionSubmitHistoryListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bestResult" in value;
    isInstance = isInstance && "submitHistories" in value;

    return isInstance;
}

export function ProQuestionSubmitHistoryListOutFromJSON(json: any): ProQuestionSubmitHistoryListOut {
    return ProQuestionSubmitHistoryListOutFromJSONTyped(json, false);
}

export function ProQuestionSubmitHistoryListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProQuestionSubmitHistoryListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bestResult': ProQuestionBestResultFromJSON(json['bestResult']),
        'submitHistories': ((json['submitHistories'] as Array<any>).map(ProQuestionSubmissionHistoryBaseOutFromJSON)),
    };
}

export function ProQuestionSubmitHistoryListOutToJSON(value?: ProQuestionSubmitHistoryListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bestResult': ProQuestionBestResultToJSON(value.bestResult),
        'submitHistories': ((value.submitHistories as Array<any>).map(ProQuestionSubmissionHistoryBaseOutToJSON)),
    };
}

