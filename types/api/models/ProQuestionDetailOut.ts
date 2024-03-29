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
import type { EvaluationFunction } from './EvaluationFunction';
import {
    EvaluationFunctionFromJSON,
    EvaluationFunctionFromJSONTyped,
    EvaluationFunctionToJSON,
} from './EvaluationFunction';
import type { ProQuestionFileOut } from './ProQuestionFileOut';
import {
    ProQuestionFileOutFromJSON,
    ProQuestionFileOutFromJSONTyped,
    ProQuestionFileOutToJSON,
} from './ProQuestionFileOut';
import type { ProQuestionRankDivisionOut } from './ProQuestionRankDivisionOut';
import {
    ProQuestionRankDivisionOutFromJSON,
    ProQuestionRankDivisionOutFromJSONTyped,
    ProQuestionRankDivisionOutToJSON,
} from './ProQuestionRankDivisionOut';
import type { ProSkillLevel } from './ProSkillLevel';
import {
    ProSkillLevelFromJSON,
    ProSkillLevelFromJSONTyped,
    ProSkillLevelToJSON,
} from './ProSkillLevel';
import type { Result } from './Result';
import {
    ResultFromJSON,
    ResultFromJSONTyped,
    ResultToJSON,
} from './Result';
import type { SubmitType } from './SubmitType';
import {
    SubmitTypeFromJSON,
    SubmitTypeFromJSONTyped,
    SubmitTypeToJSON,
} from './SubmitType';

/**
 * 
 * @export
 * @interface ProQuestionDetailOut
 */
export interface ProQuestionDetailOut {
    /**
     * プロ問題ID
     * @type {number}
     * @memberof ProQuestionDetailOut
     */
    id: number;
    /**
     * 問題タイトル
     * @type {string}
     * @memberof ProQuestionDetailOut
     */
    title: string;
    /**
     * サブタイトル
     * @type {string}
     * @memberof ProQuestionDetailOut
     */
    subtitle: string;
    /**
     * 挑戦数
     * @type {number}
     * @memberof ProQuestionDetailOut
     */
    trialCount: number;
    /**
     * 
     * @type {ProSkillLevel}
     * @memberof ProQuestionDetailOut
     */
    level: ProSkillLevel;
    /**
     * 
     * @type {Result}
     * @memberof ProQuestionDetailOut
     */
    result?: Result | null;
    /**
     * Project概要
     * @type {string}
     * @memberof ProQuestionDetailOut
     */
    description: string;
    /**
     * チュートリアル(進め方)
     * @type {string}
     * @memberof ProQuestionDetailOut
     */
    tutorial: string;
    /**
     * データ概要
     * @type {string}
     * @memberof ProQuestionDetailOut
     */
    dataDescription: string;
    /**
     * ZIPファイル名
     * @type {string}
     * @memberof ProQuestionDetailOut
     */
    zipFileName: string;
    /**
     * ZIPファイルサイズ
     * @type {string}
     * @memberof ProQuestionDetailOut
     */
    zipFileSize: string;
    /**
     * 提供ファイル一覧
     * @type {Array<ProQuestionFileOut>}
     * @memberof ProQuestionDetailOut
     */
    providedFiles: Array<ProQuestionFileOut>;
    /**
     * 評価方法
     * @type {string}
     * @memberof ProQuestionDetailOut
     */
    evaluation: string;
    /**
     * 合格ライン(0.1~100.0)
     * @type {number}
     * @memberof ProQuestionDetailOut
     */
    passLine: number;
    /**
     * 
     * @type {EvaluationFunction}
     * @memberof ProQuestionDetailOut
     */
    evaluationFunction: EvaluationFunction;
    /**
     * 評価に使用する値
     * @type {number}
     * @memberof ProQuestionDetailOut
     */
    evaluationValue: number;
    /**
     * 
     * @type {SubmitType}
     * @memberof ProQuestionDetailOut
     */
    submitType: SubmitType;
    /**
     * ランク分け
     * @type {Array<ProQuestionRankDivisionOut>}
     * @memberof ProQuestionDetailOut
     */
    rankDivision?: Array<ProQuestionRankDivisionOut> | null;
}

/**
 * Check if a given object implements the ProQuestionDetailOut interface.
 */
export function instanceOfProQuestionDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "subtitle" in value;
    isInstance = isInstance && "trialCount" in value;
    isInstance = isInstance && "level" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "tutorial" in value;
    isInstance = isInstance && "dataDescription" in value;
    isInstance = isInstance && "zipFileName" in value;
    isInstance = isInstance && "zipFileSize" in value;
    isInstance = isInstance && "providedFiles" in value;
    isInstance = isInstance && "evaluation" in value;
    isInstance = isInstance && "passLine" in value;
    isInstance = isInstance && "evaluationFunction" in value;
    isInstance = isInstance && "evaluationValue" in value;
    isInstance = isInstance && "submitType" in value;

    return isInstance;
}

export function ProQuestionDetailOutFromJSON(json: any): ProQuestionDetailOut {
    return ProQuestionDetailOutFromJSONTyped(json, false);
}

export function ProQuestionDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProQuestionDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'subtitle': json['subtitle'],
        'trialCount': json['trialCount'],
        'level': ProSkillLevelFromJSON(json['level']),
        'result': !exists(json, 'result') ? undefined : ResultFromJSON(json['result']),
        'description': json['description'],
        'tutorial': json['tutorial'],
        'dataDescription': json['dataDescription'],
        'zipFileName': json['zipFileName'],
        'zipFileSize': json['zipFileSize'],
        'providedFiles': ((json['providedFiles'] as Array<any>).map(ProQuestionFileOutFromJSON)),
        'evaluation': json['evaluation'],
        'passLine': json['passLine'],
        'evaluationFunction': EvaluationFunctionFromJSON(json['evaluationFunction']),
        'evaluationValue': json['evaluationValue'],
        'submitType': SubmitTypeFromJSON(json['submitType']),
        'rankDivision': !exists(json, 'rankDivision') ? undefined : (json['rankDivision'] === null ? null : (json['rankDivision'] as Array<any>).map(ProQuestionRankDivisionOutFromJSON)),
    };
}

export function ProQuestionDetailOutToJSON(value?: ProQuestionDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'subtitle': value.subtitle,
        'trialCount': value.trialCount,
        'level': ProSkillLevelToJSON(value.level),
        'result': ResultToJSON(value.result),
        'description': value.description,
        'tutorial': value.tutorial,
        'dataDescription': value.dataDescription,
        'zipFileName': value.zipFileName,
        'zipFileSize': value.zipFileSize,
        'providedFiles': ((value.providedFiles as Array<any>).map(ProQuestionFileOutToJSON)),
        'evaluation': value.evaluation,
        'passLine': value.passLine,
        'evaluationFunction': EvaluationFunctionToJSON(value.evaluationFunction),
        'evaluationValue': value.evaluationValue,
        'submitType': SubmitTypeToJSON(value.submitType),
        'rankDivision': value.rankDivision === undefined ? undefined : (value.rankDivision === null ? null : (value.rankDivision as Array<any>).map(ProQuestionRankDivisionOutToJSON)),
    };
}

