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
import type { EmploymentManagementStatusIn } from './EmploymentManagementStatusIn';
import {
    EmploymentManagementStatusInFromJSON,
    EmploymentManagementStatusInFromJSONTyped,
    EmploymentManagementStatusInToJSON,
} from './EmploymentManagementStatusIn';
import type { EmploymentStatus } from './EmploymentStatus';
import {
    EmploymentStatusFromJSON,
    EmploymentStatusFromJSONTyped,
    EmploymentStatusToJSON,
} from './EmploymentStatus';
import type { JobContentIn } from './JobContentIn';
import {
    JobContentInFromJSON,
    JobContentInFromJSONTyped,
    JobContentInToJSON,
} from './JobContentIn';
import type { JobCreateWorkingHourIn } from './JobCreateWorkingHourIn';
import {
    JobCreateWorkingHourInFromJSON,
    JobCreateWorkingHourInFromJSONTyped,
    JobCreateWorkingHourInToJSON,
} from './JobCreateWorkingHourIn';
import type { JobSelectionType } from './JobSelectionType';
import {
    JobSelectionTypeFromJSON,
    JobSelectionTypeFromJSONTyped,
    JobSelectionTypeToJSON,
} from './JobSelectionType';
import type { PassiveSmokingInitiative } from './PassiveSmokingInitiative';
import {
    PassiveSmokingInitiativeFromJSON,
    PassiveSmokingInitiativeFromJSONTyped,
    PassiveSmokingInitiativeToJSON,
} from './PassiveSmokingInitiative';
import type { Probation } from './Probation';
import {
    ProbationFromJSON,
    ProbationFromJSONTyped,
    ProbationToJSON,
} from './Probation';
import type { RecruitmentAndHiringStatusIn } from './RecruitmentAndHiringStatusIn';
import {
    RecruitmentAndHiringStatusInFromJSON,
    RecruitmentAndHiringStatusInFromJSONTyped,
    RecruitmentAndHiringStatusInToJSON,
} from './RecruitmentAndHiringStatusIn';
import type { SalarySystem } from './SalarySystem';
import {
    SalarySystemFromJSON,
    SalarySystemFromJSONTyped,
    SalarySystemToJSON,
} from './SalarySystem';
import type { SkillLevel } from './SkillLevel';
import {
    SkillLevelFromJSON,
    SkillLevelFromJSONTyped,
    SkillLevelToJSON,
} from './SkillLevel';
import type { VocationalAbilityStatusIn } from './VocationalAbilityStatusIn';
import {
    VocationalAbilityStatusInFromJSON,
    VocationalAbilityStatusInFromJSONTyped,
    VocationalAbilityStatusInToJSON,
} from './VocationalAbilityStatusIn';

/**
 * 
 * @export
 * @interface JobDraftCreateIn
 */
export interface JobDraftCreateIn {
    /**
     * 掲載開始日
     * @type {Date}
     * @memberof JobDraftCreateIn
     */
    postingStartsAt: Date;
    /**
     * 掲載終了日
     * @type {Date}
     * @memberof JobDraftCreateIn
     */
    postingEndsAt: Date;
    /**
     * 
     * @type {EmploymentStatus}
     * @memberof JobDraftCreateIn
     */
    employmentStatus: EmploymentStatus;
    /**
     * 卒業年度開始年
     * @type {number}
     * @memberof JobDraftCreateIn
     */
    graduationYearFrom?: number | null;
    /**
     * 卒業年度終了年
     * @type {number}
     * @memberof JobDraftCreateIn
     */
    graduationYearTo?: number | null;
    /**
     * 職種ID
     * @type {number}
     * @memberof JobDraftCreateIn
     */
    occupationId: number;
    /**
     * 
     * @type {SkillLevel}
     * @memberof JobDraftCreateIn
     */
    skillLevel?: SkillLevel | null;
    /**
     * 
     * @type {PassiveSmokingInitiative}
     * @memberof JobDraftCreateIn
     */
    passiveSmokingInitiative: PassiveSmokingInitiative;
    /**
     * PG言語ID
     * @type {Array<number>}
     * @memberof JobDraftCreateIn
     */
    pgLangIds?: Array<number>;
    /**
     * フレームワークID
     * @type {Array<number>}
     * @memberof JobDraftCreateIn
     */
    frameworkIds?: Array<number>;
    /**
     * スキルID
     * @type {Array<number>}
     * @memberof JobDraftCreateIn
     */
    skillIds?: Array<number>;
    /**
     * 求人特徴ID
     * @type {Array<number>}
     * @memberof JobDraftCreateIn
     */
    jobFeatureIds?: Array<number>;
    /**
     * 採用人数
     * @type {number}
     * @memberof JobDraftCreateIn
     */
    recruitmentNumbers?: number | null;
    /**
     * 都道府県ID
     * @type {Array<number>}
     * @memberof JobDraftCreateIn
     */
    prefectureIds?: Array<number>;
    /**
     * 
     * @type {SalarySystem}
     * @memberof JobDraftCreateIn
     */
    salarySystem: SalarySystem;
    /**
     * 下限給与額
     * @type {number}
     * @memberof JobDraftCreateIn
     */
    salaryMin: number;
    /**
     * 上限給与額
     * @type {number}
     * @memberof JobDraftCreateIn
     */
    salaryMax: number;
    /**
     * 給与補足
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    salaryMemo: string;
    /**
     * 
     * @type {Array<JobCreateWorkingHourIn>}
     * @memberof JobDraftCreateIn
     */
    workingHours?: Array<JobCreateWorkingHourIn>;
    /**
     * 勤務時間補足
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    workingHourMemo: string;
    /**
     * タイトル
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    title: string;
    /**
     * 求人トップ画像
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    jobImage?: string;
    /**
     * 仕事内容
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    jobContent: string;
    /**
     * 対象となる方
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    target?: string;
    /**
     * 勤務地
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    workLocation: string;
    /**
     * 契約期間
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    contractPeriod: string;
    /**
     * 
     * @type {Probation}
     * @memberof JobDraftCreateIn
     */
    probation: Probation;
    /**
     * 昇給
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    salaryIncrease?: string;
    /**
     * 賞与
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    bonus?: string;
    /**
     * 時間外勤務があるか
     * @type {boolean}
     * @memberof JobDraftCreateIn
     */
    hasOvertimeWorking: boolean;
    /**
     * 時間外勤務詳細
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    overtimeWorkingDetail?: string;
    /**
     * 休日・休暇
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    holiday: string;
    /**
     * 社会保険
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    socialInsurance: string;
    /**
     * 福利厚生
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    benefit?: string;
    /**
     * 選考フロー
     * @type {Array<string>}
     * @memberof JobDraftCreateIn
     */
    selectionFlows?: Array<string>;
    /**
     * 研修制度
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    trainingSystem?: string;
    /**
     * 選考方法
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    selectionMethod?: string;
    /**
     * 提出書類
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    submittedDocument?: string;
    /**
     * 問い合わせ先
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    contact?: string;
    /**
     * 企業PR
     * @type {string}
     * @memberof JobDraftCreateIn
     */
    companyPr?: string;
    /**
     * 募集採用に関する状況詳細
     * @type {Array<RecruitmentAndHiringStatusIn>}
     * @memberof JobDraftCreateIn
     */
    recruitmentAndHiringStatuses?: Array<RecruitmentAndHiringStatusIn>;
    /**
     * 職業能力開発・向上に関する状況詳細
     * @type {Array<VocationalAbilityStatusIn>}
     * @memberof JobDraftCreateIn
     */
    vocationalAbilityStatuses?: Array<VocationalAbilityStatusIn>;
    /**
     * 企業における雇用管理に関する状況
     * @type {Array<EmploymentManagementStatusIn>}
     * @memberof JobDraftCreateIn
     */
    employmentManagementStatuses?: Array<EmploymentManagementStatusIn>;
    /**
     * 求人オリジナルコンテンツ
     * @type {Array<JobContentIn>}
     * @memberof JobDraftCreateIn
     */
    jobContents?: Array<JobContentIn>;
    /**
     * 求人ID
     * @type {number}
     * @memberof JobDraftCreateIn
     */
    jobId?: number | null;
    /**
     * 省略時は自組織に設定
     * @type {number}
     * @memberof JobDraftCreateIn
     */
    organizationId?: number | null;
    /**
     * 
     * @type {JobSelectionType}
     * @memberof JobDraftCreateIn
     */
    selectionType: JobSelectionType;
}

/**
 * Check if a given object implements the JobDraftCreateIn interface.
 */
export function instanceOfJobDraftCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "postingStartsAt" in value;
    isInstance = isInstance && "postingEndsAt" in value;
    isInstance = isInstance && "employmentStatus" in value;
    isInstance = isInstance && "occupationId" in value;
    isInstance = isInstance && "passiveSmokingInitiative" in value;
    isInstance = isInstance && "salarySystem" in value;
    isInstance = isInstance && "salaryMin" in value;
    isInstance = isInstance && "salaryMax" in value;
    isInstance = isInstance && "salaryMemo" in value;
    isInstance = isInstance && "workingHourMemo" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "jobContent" in value;
    isInstance = isInstance && "workLocation" in value;
    isInstance = isInstance && "contractPeriod" in value;
    isInstance = isInstance && "probation" in value;
    isInstance = isInstance && "hasOvertimeWorking" in value;
    isInstance = isInstance && "holiday" in value;
    isInstance = isInstance && "socialInsurance" in value;
    isInstance = isInstance && "selectionType" in value;

    return isInstance;
}

export function JobDraftCreateInFromJSON(json: any): JobDraftCreateIn {
    return JobDraftCreateInFromJSONTyped(json, false);
}

export function JobDraftCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobDraftCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'postingStartsAt': (new Date(json['postingStartsAt'])),
        'postingEndsAt': (new Date(json['postingEndsAt'])),
        'employmentStatus': EmploymentStatusFromJSON(json['employmentStatus']),
        'graduationYearFrom': !exists(json, 'graduationYearFrom') ? undefined : json['graduationYearFrom'],
        'graduationYearTo': !exists(json, 'graduationYearTo') ? undefined : json['graduationYearTo'],
        'occupationId': json['occupationId'],
        'skillLevel': !exists(json, 'skillLevel') ? undefined : SkillLevelFromJSON(json['skillLevel']),
        'passiveSmokingInitiative': PassiveSmokingInitiativeFromJSON(json['passiveSmokingInitiative']),
        'pgLangIds': !exists(json, 'pgLangIds') ? undefined : json['pgLangIds'],
        'frameworkIds': !exists(json, 'frameworkIds') ? undefined : json['frameworkIds'],
        'skillIds': !exists(json, 'skillIds') ? undefined : json['skillIds'],
        'jobFeatureIds': !exists(json, 'jobFeatureIds') ? undefined : json['jobFeatureIds'],
        'recruitmentNumbers': !exists(json, 'recruitmentNumbers') ? undefined : json['recruitmentNumbers'],
        'prefectureIds': !exists(json, 'prefectureIds') ? undefined : json['prefectureIds'],
        'salarySystem': SalarySystemFromJSON(json['salarySystem']),
        'salaryMin': json['salaryMin'],
        'salaryMax': json['salaryMax'],
        'salaryMemo': json['salaryMemo'],
        'workingHours': !exists(json, 'workingHours') ? undefined : ((json['workingHours'] as Array<any>).map(JobCreateWorkingHourInFromJSON)),
        'workingHourMemo': json['workingHourMemo'],
        'title': json['title'],
        'jobImage': !exists(json, 'jobImage') ? undefined : json['jobImage'],
        'jobContent': json['jobContent'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'workLocation': json['workLocation'],
        'contractPeriod': json['contractPeriod'],
        'probation': ProbationFromJSON(json['probation']),
        'salaryIncrease': !exists(json, 'salaryIncrease') ? undefined : json['salaryIncrease'],
        'bonus': !exists(json, 'bonus') ? undefined : json['bonus'],
        'hasOvertimeWorking': json['hasOvertimeWorking'],
        'overtimeWorkingDetail': !exists(json, 'overtimeWorkingDetail') ? undefined : json['overtimeWorkingDetail'],
        'holiday': json['holiday'],
        'socialInsurance': json['socialInsurance'],
        'benefit': !exists(json, 'benefit') ? undefined : json['benefit'],
        'selectionFlows': !exists(json, 'selectionFlows') ? undefined : json['selectionFlows'],
        'trainingSystem': !exists(json, 'trainingSystem') ? undefined : json['trainingSystem'],
        'selectionMethod': !exists(json, 'selectionMethod') ? undefined : json['selectionMethod'],
        'submittedDocument': !exists(json, 'submittedDocument') ? undefined : json['submittedDocument'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'companyPr': !exists(json, 'companyPr') ? undefined : json['companyPr'],
        'recruitmentAndHiringStatuses': !exists(json, 'recruitmentAndHiringStatuses') ? undefined : ((json['recruitmentAndHiringStatuses'] as Array<any>).map(RecruitmentAndHiringStatusInFromJSON)),
        'vocationalAbilityStatuses': !exists(json, 'vocationalAbilityStatuses') ? undefined : ((json['vocationalAbilityStatuses'] as Array<any>).map(VocationalAbilityStatusInFromJSON)),
        'employmentManagementStatuses': !exists(json, 'employmentManagementStatuses') ? undefined : ((json['employmentManagementStatuses'] as Array<any>).map(EmploymentManagementStatusInFromJSON)),
        'jobContents': !exists(json, 'jobContents') ? undefined : ((json['jobContents'] as Array<any>).map(JobContentInFromJSON)),
        'jobId': !exists(json, 'jobId') ? undefined : json['jobId'],
        'organizationId': !exists(json, 'organizationId') ? undefined : json['organizationId'],
        'selectionType': JobSelectionTypeFromJSON(json['selectionType']),
    };
}

export function JobDraftCreateInToJSON(value?: JobDraftCreateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'postingStartsAt': (value.postingStartsAt.toISOString().substring(0,10)),
        'postingEndsAt': (value.postingEndsAt.toISOString().substring(0,10)),
        'employmentStatus': EmploymentStatusToJSON(value.employmentStatus),
        'graduationYearFrom': value.graduationYearFrom,
        'graduationYearTo': value.graduationYearTo,
        'occupationId': value.occupationId,
        'skillLevel': SkillLevelToJSON(value.skillLevel),
        'passiveSmokingInitiative': PassiveSmokingInitiativeToJSON(value.passiveSmokingInitiative),
        'pgLangIds': value.pgLangIds,
        'frameworkIds': value.frameworkIds,
        'skillIds': value.skillIds,
        'jobFeatureIds': value.jobFeatureIds,
        'recruitmentNumbers': value.recruitmentNumbers,
        'prefectureIds': value.prefectureIds,
        'salarySystem': SalarySystemToJSON(value.salarySystem),
        'salaryMin': value.salaryMin,
        'salaryMax': value.salaryMax,
        'salaryMemo': value.salaryMemo,
        'workingHours': value.workingHours === undefined ? undefined : ((value.workingHours as Array<any>).map(JobCreateWorkingHourInToJSON)),
        'workingHourMemo': value.workingHourMemo,
        'title': value.title,
        'jobImage': value.jobImage,
        'jobContent': value.jobContent,
        'target': value.target,
        'workLocation': value.workLocation,
        'contractPeriod': value.contractPeriod,
        'probation': ProbationToJSON(value.probation),
        'salaryIncrease': value.salaryIncrease,
        'bonus': value.bonus,
        'hasOvertimeWorking': value.hasOvertimeWorking,
        'overtimeWorkingDetail': value.overtimeWorkingDetail,
        'holiday': value.holiday,
        'socialInsurance': value.socialInsurance,
        'benefit': value.benefit,
        'selectionFlows': value.selectionFlows,
        'trainingSystem': value.trainingSystem,
        'selectionMethod': value.selectionMethod,
        'submittedDocument': value.submittedDocument,
        'contact': value.contact,
        'companyPr': value.companyPr,
        'recruitmentAndHiringStatuses': value.recruitmentAndHiringStatuses === undefined ? undefined : ((value.recruitmentAndHiringStatuses as Array<any>).map(RecruitmentAndHiringStatusInToJSON)),
        'vocationalAbilityStatuses': value.vocationalAbilityStatuses === undefined ? undefined : ((value.vocationalAbilityStatuses as Array<any>).map(VocationalAbilityStatusInToJSON)),
        'employmentManagementStatuses': value.employmentManagementStatuses === undefined ? undefined : ((value.employmentManagementStatuses as Array<any>).map(EmploymentManagementStatusInToJSON)),
        'jobContents': value.jobContents === undefined ? undefined : ((value.jobContents as Array<any>).map(JobContentInToJSON)),
        'jobId': value.jobId,
        'organizationId': value.organizationId,
        'selectionType': JobSelectionTypeToJSON(value.selectionType),
    };
}

