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
import type { OriginalCaseResultHistory } from './OriginalCaseResultHistory';
import {
    OriginalCaseResultHistoryFromJSON,
    OriginalCaseResultHistoryFromJSONTyped,
    OriginalCaseResultHistoryToJSON,
} from './OriginalCaseResultHistory';
import type { PgLangInfo } from './PgLangInfo';
import {
    PgLangInfoFromJSON,
    PgLangInfoFromJSONTyped,
    PgLangInfoToJSON,
} from './PgLangInfo';
import type { TestCaseResultHistory } from './TestCaseResultHistory';
import {
    TestCaseResultHistoryFromJSON,
    TestCaseResultHistoryFromJSONTyped,
    TestCaseResultHistoryToJSON,
} from './TestCaseResultHistory';

/**
 * 
 * @export
 * @interface CodeSubmissionHistoryListOut
 */
export interface CodeSubmissionHistoryListOut {
    /**
     * 問題テスト実行結果ID
     * @type {number}
     * @memberof CodeSubmissionHistoryListOut
     */
    id: number;
    /**
     * 解答日時
     * @type {Date}
     * @memberof CodeSubmissionHistoryListOut
     */
    createdAt: Date;
    /**
     * サンプルケースかどうか
     * @type {boolean}
     * @memberof CodeSubmissionHistoryListOut
     */
    isSampleCase: boolean;
    /**
     * 
     * @type {PgLangInfo}
     * @memberof CodeSubmissionHistoryListOut
     */
    pgLang: PgLangInfo;
    /**
     * 合否
     * @type {boolean}
     * @memberof CodeSubmissionHistoryListOut
     */
    isPassed: boolean;
    /**
     * ソースコード
     * @type {string}
     * @memberof CodeSubmissionHistoryListOut
     */
    sourceCode: string;
    /**
     * テストケース別実行結果履歴
     * @type {Array<TestCaseResultHistory>}
     * @memberof CodeSubmissionHistoryListOut
     */
    testCaseResults: Array<TestCaseResultHistory>;
    /**
     * オリジナルサンプルケース別実行結果履歴
     * @type {Array<OriginalCaseResultHistory>}
     * @memberof CodeSubmissionHistoryListOut
     */
    originalCaseResults: Array<OriginalCaseResultHistory>;
}

/**
 * Check if a given object implements the CodeSubmissionHistoryListOut interface.
 */
export function instanceOfCodeSubmissionHistoryListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "isSampleCase" in value;
    isInstance = isInstance && "pgLang" in value;
    isInstance = isInstance && "isPassed" in value;
    isInstance = isInstance && "sourceCode" in value;
    isInstance = isInstance && "testCaseResults" in value;
    isInstance = isInstance && "originalCaseResults" in value;

    return isInstance;
}

export function CodeSubmissionHistoryListOutFromJSON(json: any): CodeSubmissionHistoryListOut {
    return CodeSubmissionHistoryListOutFromJSONTyped(json, false);
}

export function CodeSubmissionHistoryListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeSubmissionHistoryListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'isSampleCase': json['isSampleCase'],
        'pgLang': PgLangInfoFromJSON(json['pgLang']),
        'isPassed': json['isPassed'],
        'sourceCode': json['sourceCode'],
        'testCaseResults': ((json['testCaseResults'] as Array<any>).map(TestCaseResultHistoryFromJSON)),
        'originalCaseResults': ((json['originalCaseResults'] as Array<any>).map(OriginalCaseResultHistoryFromJSON)),
    };
}

export function CodeSubmissionHistoryListOutToJSON(value?: CodeSubmissionHistoryListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'isSampleCase': value.isSampleCase,
        'pgLang': PgLangInfoToJSON(value.pgLang),
        'isPassed': value.isPassed,
        'sourceCode': value.sourceCode,
        'testCaseResults': ((value.testCaseResults as Array<any>).map(TestCaseResultHistoryToJSON)),
        'originalCaseResults': ((value.originalCaseResults as Array<any>).map(OriginalCaseResultHistoryToJSON)),
    };
}
