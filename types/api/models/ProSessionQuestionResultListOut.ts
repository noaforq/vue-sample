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
import type { ProQuestionUserResultList } from './ProQuestionUserResultList';
import {
    ProQuestionUserResultListFromJSON,
    ProQuestionUserResultListFromJSONTyped,
    ProQuestionUserResultListToJSON,
} from './ProQuestionUserResultList';
import type { ProSkillLevel } from './ProSkillLevel';
import {
    ProSkillLevelFromJSON,
    ProSkillLevelFromJSONTyped,
    ProSkillLevelToJSON,
} from './ProSkillLevel';

/**
 * Proセッション問題成績(問題成績タブに必要な情報)
 * @export
 * @interface ProSessionQuestionResultListOut
 */
export interface ProSessionQuestionResultListOut {
    /**
     * セッション問題の登録順番
     * @type {number}
     * @memberof ProSessionQuestionResultListOut
     */
    sessionQuestionOrder: number;
    /**
     * 問題ID
     * @type {number}
     * @memberof ProSessionQuestionResultListOut
     */
    contentId: number;
    /**
     * 問題名
     * @type {string}
     * @memberof ProSessionQuestionResultListOut
     */
    questionTitle: string;
    /**
     * 
     * @type {ProSkillLevel}
     * @memberof ProSessionQuestionResultListOut
     */
    questionDifficulty: ProSkillLevel;
    /**
     * 問題トピック
     * @type {string}
     * @memberof ProSessionQuestionResultListOut
     */
    contentTopicName: string;
    /**
     * 問題挑戦数
     * @type {number}
     * @memberof ProSessionQuestionResultListOut
     */
    questionTrialCount: number;
    /**
     * 問題合格数
     * @type {number}
     * @memberof ProSessionQuestionResultListOut
     */
    questionPassedCount: number;
    /**
     * 対象問題を解いたユーザーの成績リスト
     * @type {Array<ProQuestionUserResultList>}
     * @memberof ProSessionQuestionResultListOut
     */
    questionUserResultList: Array<ProQuestionUserResultList>;
}

/**
 * Check if a given object implements the ProSessionQuestionResultListOut interface.
 */
export function instanceOfProSessionQuestionResultListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionQuestionOrder" in value;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "questionTitle" in value;
    isInstance = isInstance && "questionDifficulty" in value;
    isInstance = isInstance && "contentTopicName" in value;
    isInstance = isInstance && "questionTrialCount" in value;
    isInstance = isInstance && "questionPassedCount" in value;
    isInstance = isInstance && "questionUserResultList" in value;

    return isInstance;
}

export function ProSessionQuestionResultListOutFromJSON(json: any): ProSessionQuestionResultListOut {
    return ProSessionQuestionResultListOutFromJSONTyped(json, false);
}

export function ProSessionQuestionResultListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProSessionQuestionResultListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionQuestionOrder': json['sessionQuestionOrder'],
        'contentId': json['contentId'],
        'questionTitle': json['questionTitle'],
        'questionDifficulty': ProSkillLevelFromJSON(json['questionDifficulty']),
        'contentTopicName': json['contentTopicName'],
        'questionTrialCount': json['questionTrialCount'],
        'questionPassedCount': json['questionPassedCount'],
        'questionUserResultList': ((json['questionUserResultList'] as Array<any>).map(ProQuestionUserResultListFromJSON)),
    };
}

export function ProSessionQuestionResultListOutToJSON(value?: ProSessionQuestionResultListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionQuestionOrder': value.sessionQuestionOrder,
        'contentId': value.contentId,
        'questionTitle': value.questionTitle,
        'questionDifficulty': ProSkillLevelToJSON(value.questionDifficulty),
        'contentTopicName': value.contentTopicName,
        'questionTrialCount': value.questionTrialCount,
        'questionPassedCount': value.questionPassedCount,
        'questionUserResultList': ((value.questionUserResultList as Array<any>).map(ProQuestionUserResultListToJSON)),
    };
}

