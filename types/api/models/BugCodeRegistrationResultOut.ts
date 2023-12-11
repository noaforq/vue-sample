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
import type { JudgeStatus } from './JudgeStatus';
import {
    JudgeStatusFromJSON,
    JudgeStatusFromJSONTyped,
    JudgeStatusToJSON,
} from './JudgeStatus';

/**
 * 
 * @export
 * @interface BugCodeRegistrationResultOut
 */
export interface BugCodeRegistrationResultOut {
    /**
     * 
     * @type {JudgeStatus}
     * @memberof BugCodeRegistrationResultOut
     */
    judgeStatus?: JudgeStatus | null;
    /**
     * 
     * @type {string}
     * @memberof BugCodeRegistrationResultOut
     */
    judgeStatusLabel?: string | null;
    /**
     * サンプルケースタイトル
     * @type {string}
     * @memberof BugCodeRegistrationResultOut
     */
    sampleCaseTitle: string;
    /**
     * 入力
     * @type {string}
     * @memberof BugCodeRegistrationResultOut
     */
    sampleCaseStdin: string;
    /**
     * 出力結果
     * @type {string}
     * @memberof BugCodeRegistrationResultOut
     */
    sampleCaseStdout: string;
    /**
     * エラー出力
     * @type {string}
     * @memberof BugCodeRegistrationResultOut
     */
    errorOutput?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BugCodeRegistrationResultOut
     */
    pgLangId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BugCodeRegistrationResultOut
     */
    sourceCode?: string | null;
}

/**
 * Check if a given object implements the BugCodeRegistrationResultOut interface.
 */
export function instanceOfBugCodeRegistrationResultOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sampleCaseTitle" in value;
    isInstance = isInstance && "sampleCaseStdin" in value;
    isInstance = isInstance && "sampleCaseStdout" in value;

    return isInstance;
}

export function BugCodeRegistrationResultOutFromJSON(json: any): BugCodeRegistrationResultOut {
    return BugCodeRegistrationResultOutFromJSONTyped(json, false);
}

export function BugCodeRegistrationResultOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): BugCodeRegistrationResultOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'judgeStatus': !exists(json, 'judgeStatus') ? undefined : JudgeStatusFromJSON(json['judgeStatus']),
        'judgeStatusLabel': !exists(json, 'judgeStatusLabel') ? undefined : json['judgeStatusLabel'],
        'sampleCaseTitle': json['sampleCaseTitle'],
        'sampleCaseStdin': json['sampleCaseStdin'],
        'sampleCaseStdout': json['sampleCaseStdout'],
        'errorOutput': !exists(json, 'errorOutput') ? undefined : json['errorOutput'],
        'pgLangId': !exists(json, 'pgLangId') ? undefined : json['pgLangId'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
    };
}

export function BugCodeRegistrationResultOutToJSON(value?: BugCodeRegistrationResultOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'judgeStatus': JudgeStatusToJSON(value.judgeStatus),
        'judgeStatusLabel': value.judgeStatusLabel,
        'sampleCaseTitle': value.sampleCaseTitle,
        'sampleCaseStdin': value.sampleCaseStdin,
        'sampleCaseStdout': value.sampleCaseStdout,
        'errorOutput': value.errorOutput,
        'pgLangId': value.pgLangId,
        'sourceCode': value.sourceCode,
    };
}

