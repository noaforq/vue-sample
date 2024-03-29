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
 * @interface QuestionTestCasesListOut
 */
export interface QuestionTestCasesListOut {
    /**
     * test_case_id
     * @type {number}
     * @memberof QuestionTestCasesListOut
     */
    id: number;
    /**
     * タイトル
     * @type {string}
     * @memberof QuestionTestCasesListOut
     */
    title: string;
    /**
     * サンプルケースか
     * @type {boolean}
     * @memberof QuestionTestCasesListOut
     */
    isSampleCase: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuestionTestCasesListOut
     */
    order: number;
    /**
     * 説明文
     * @type {string}
     * @memberof QuestionTestCasesListOut
     */
    description?: string;
    /**
     * 説明英語
     * @type {string}
     * @memberof QuestionTestCasesListOut
     */
    descriptionEn?: string;
    /**
     * 入力値
     * @type {string}
     * @memberof QuestionTestCasesListOut
     */
    stdin: string;
    /**
     * 出力値
     * @type {string}
     * @memberof QuestionTestCasesListOut
     */
    stdout: string;
    /**
     * 省略語入力値
     * @type {string}
     * @memberof QuestionTestCasesListOut
     */
    shortenStdin?: string | null;
    /**
     * 省略語出力値
     * @type {string}
     * @memberof QuestionTestCasesListOut
     */
    shortenStdout?: string | null;
    /**
     * 入力値_行数
     * @type {number}
     * @memberof QuestionTestCasesListOut
     */
    stdinLineCount: number;
    /**
     * 入力値_行数
     * @type {number}
     * @memberof QuestionTestCasesListOut
     */
    stdoutLineCount: number;
    /**
     * 省略されているか
     * @type {boolean}
     * @memberof QuestionTestCasesListOut
     */
    isOmitted: boolean;
}

/**
 * Check if a given object implements the QuestionTestCasesListOut interface.
 */
export function instanceOfQuestionTestCasesListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "isSampleCase" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "stdin" in value;
    isInstance = isInstance && "stdout" in value;
    isInstance = isInstance && "stdinLineCount" in value;
    isInstance = isInstance && "stdoutLineCount" in value;
    isInstance = isInstance && "isOmitted" in value;

    return isInstance;
}

export function QuestionTestCasesListOutFromJSON(json: any): QuestionTestCasesListOut {
    return QuestionTestCasesListOutFromJSONTyped(json, false);
}

export function QuestionTestCasesListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionTestCasesListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'isSampleCase': json['isSampleCase'],
        'order': json['order'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'descriptionEn': !exists(json, 'descriptionEn') ? undefined : json['descriptionEn'],
        'stdin': json['stdin'],
        'stdout': json['stdout'],
        'shortenStdin': !exists(json, 'shortenStdin') ? undefined : json['shortenStdin'],
        'shortenStdout': !exists(json, 'shortenStdout') ? undefined : json['shortenStdout'],
        'stdinLineCount': json['stdinLineCount'],
        'stdoutLineCount': json['stdoutLineCount'],
        'isOmitted': json['isOmitted'],
    };
}

export function QuestionTestCasesListOutToJSON(value?: QuestionTestCasesListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'isSampleCase': value.isSampleCase,
        'order': value.order,
        'description': value.description,
        'descriptionEn': value.descriptionEn,
        'stdin': value.stdin,
        'stdout': value.stdout,
        'shortenStdin': value.shortenStdin,
        'shortenStdout': value.shortenStdout,
        'stdinLineCount': value.stdinLineCount,
        'stdoutLineCount': value.stdoutLineCount,
        'isOmitted': value.isOmitted,
    };
}

