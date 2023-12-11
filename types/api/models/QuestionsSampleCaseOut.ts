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
 * @interface QuestionsSampleCaseOut
 */
export interface QuestionsSampleCaseOut {
    /**
     * サンプルケースID
     * @type {number}
     * @memberof QuestionsSampleCaseOut
     */
    testCaseId: number;
    /**
     * 入力値 (省略表示時はnull)
     * @type {string}
     * @memberof QuestionsSampleCaseOut
     */
    stdin?: string | null;
    /**
     * 出力値 (省略表示時はnull)
     * @type {string}
     * @memberof QuestionsSampleCaseOut
     */
    stdout?: string | null;
    /**
     * 省略表示の際の入力値
     * @type {string}
     * @memberof QuestionsSampleCaseOut
     */
    shortenStdin?: string | null;
    /**
     * 省略表示の際の出力値
     * @type {string}
     * @memberof QuestionsSampleCaseOut
     */
    shortenStdout?: string | null;
    /**
     * 入力値_行数
     * @type {number}
     * @memberof QuestionsSampleCaseOut
     */
    stdinLineCount: number;
    /**
     * 入力値_行数
     * @type {number}
     * @memberof QuestionsSampleCaseOut
     */
    stdoutLineCount: number;
    /**
     * 説明
     * @type {string}
     * @memberof QuestionsSampleCaseOut
     */
    description?: string | null;
}

/**
 * Check if a given object implements the QuestionsSampleCaseOut interface.
 */
export function instanceOfQuestionsSampleCaseOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "testCaseId" in value;
    isInstance = isInstance && "stdinLineCount" in value;
    isInstance = isInstance && "stdoutLineCount" in value;

    return isInstance;
}

export function QuestionsSampleCaseOutFromJSON(json: any): QuestionsSampleCaseOut {
    return QuestionsSampleCaseOutFromJSONTyped(json, false);
}

export function QuestionsSampleCaseOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionsSampleCaseOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'testCaseId': json['testCaseId'],
        'stdin': !exists(json, 'stdin') ? undefined : json['stdin'],
        'stdout': !exists(json, 'stdout') ? undefined : json['stdout'],
        'shortenStdin': !exists(json, 'shortenStdin') ? undefined : json['shortenStdin'],
        'shortenStdout': !exists(json, 'shortenStdout') ? undefined : json['shortenStdout'],
        'stdinLineCount': json['stdinLineCount'],
        'stdoutLineCount': json['stdoutLineCount'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function QuestionsSampleCaseOutToJSON(value?: QuestionsSampleCaseOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'testCaseId': value.testCaseId,
        'stdin': value.stdin,
        'stdout': value.stdout,
        'shortenStdin': value.shortenStdin,
        'shortenStdout': value.shortenStdout,
        'stdinLineCount': value.stdinLineCount,
        'stdoutLineCount': value.stdoutLineCount,
        'description': value.description,
    };
}

