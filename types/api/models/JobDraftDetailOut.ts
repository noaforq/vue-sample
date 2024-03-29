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
import type { EmploymentManagementStatusOut } from './EmploymentManagementStatusOut';
import {
    EmploymentManagementStatusOutFromJSON,
    EmploymentManagementStatusOutFromJSONTyped,
    EmploymentManagementStatusOutToJSON,
} from './EmploymentManagementStatusOut';
import type { EmploymentStatus } from './EmploymentStatus';
import {
    EmploymentStatusFromJSON,
    EmploymentStatusFromJSONTyped,
    EmploymentStatusToJSON,
} from './EmploymentStatus';
import type { FrameworkOut } from './FrameworkOut';
import {
    FrameworkOutFromJSON,
    FrameworkOutFromJSONTyped,
    FrameworkOutToJSON,
} from './FrameworkOut';
import type { JobContentOut } from './JobContentOut';
import {
    JobContentOutFromJSON,
    JobContentOutFromJSONTyped,
    JobContentOutToJSON,
} from './JobContentOut';
import type { JobFeatureOut } from './JobFeatureOut';
import {
    JobFeatureOutFromJSON,
    JobFeatureOutFromJSONTyped,
    JobFeatureOutToJSON,
} from './JobFeatureOut';
import type { JobSelectionType } from './JobSelectionType';
import {
    JobSelectionTypeFromJSON,
    JobSelectionTypeFromJSONTyped,
    JobSelectionTypeToJSON,
} from './JobSelectionType';
import type { OccupationOut } from './OccupationOut';
import {
    OccupationOutFromJSON,
    OccupationOutFromJSONTyped,
    OccupationOutToJSON,
} from './OccupationOut';
import type { PassiveSmokingInitiative } from './PassiveSmokingInitiative';
import {
    PassiveSmokingInitiativeFromJSON,
    PassiveSmokingInitiativeFromJSONTyped,
    PassiveSmokingInitiativeToJSON,
} from './PassiveSmokingInitiative';
import type { PgLangSimpleOut } from './PgLangSimpleOut';
import {
    PgLangSimpleOutFromJSON,
    PgLangSimpleOutFromJSONTyped,
    PgLangSimpleOutToJSON,
} from './PgLangSimpleOut';
import type { PrefectureOut } from './PrefectureOut';
import {
    PrefectureOutFromJSON,
    PrefectureOutFromJSONTyped,
    PrefectureOutToJSON,
} from './PrefectureOut';
import type { Probation } from './Probation';
import {
    ProbationFromJSON,
    ProbationFromJSONTyped,
    ProbationToJSON,
} from './Probation';
import type { RecruitmentAndHiringStatusOut } from './RecruitmentAndHiringStatusOut';
import {
    RecruitmentAndHiringStatusOutFromJSON,
    RecruitmentAndHiringStatusOutFromJSONTyped,
    RecruitmentAndHiringStatusOutToJSON,
} from './RecruitmentAndHiringStatusOut';
import type { SalarySystem } from './SalarySystem';
import {
    SalarySystemFromJSON,
    SalarySystemFromJSONTyped,
    SalarySystemToJSON,
} from './SalarySystem';
import type { SelectionFlowOut } from './SelectionFlowOut';
import {
    SelectionFlowOutFromJSON,
    SelectionFlowOutFromJSONTyped,
    SelectionFlowOutToJSON,
} from './SelectionFlowOut';
import type { SkillLevel } from './SkillLevel';
import {
    SkillLevelFromJSON,
    SkillLevelFromJSONTyped,
    SkillLevelToJSON,
} from './SkillLevel';
import type { SkillOut } from './SkillOut';
import {
    SkillOutFromJSON,
    SkillOutFromJSONTyped,
    SkillOutToJSON,
} from './SkillOut';
import type { VocationalAbilityStatusOut } from './VocationalAbilityStatusOut';
import {
    VocationalAbilityStatusOutFromJSON,
    VocationalAbilityStatusOutFromJSONTyped,
    VocationalAbilityStatusOutToJSON,
} from './VocationalAbilityStatusOut';
import type { WorkingHourOut } from './WorkingHourOut';
import {
    WorkingHourOutFromJSON,
    WorkingHourOutFromJSONTyped,
    WorkingHourOutToJSON,
} from './WorkingHourOut';

/**
 * 
 * @export
 * @interface JobDraftDetailOut
 */
export interface JobDraftDetailOut {
    /**
     * 組織ID
     * @type {number}
     * @memberof JobDraftDetailOut
     */
    organizationId?: number | null;
    /**
     * 会社名
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    companyName: string;
    /**
     * 更新日時
     * @type {Date}
     * @memberof JobDraftDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {JobSelectionType}
     * @memberof JobDraftDetailOut
     */
    selectionType: JobSelectionType;
    /**
     * 選考種別ラベル
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    selectionTypeLabel: string;
    /**
     * 掲載開始日
     * @type {Date}
     * @memberof JobDraftDetailOut
     */
    postingStartsAt: Date;
    /**
     * 掲載終了日
     * @type {Date}
     * @memberof JobDraftDetailOut
     */
    postingEndsAt: Date;
    /**
     * 
     * @type {EmploymentStatus}
     * @memberof JobDraftDetailOut
     */
    employmentStatus: EmploymentStatus;
    /**
     * 雇用形態ラベル
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    employmentStatusLabel: string;
    /**
     * 卒業年度開始年
     * @type {number}
     * @memberof JobDraftDetailOut
     */
    graduationYearFrom?: number | null;
    /**
     * 卒業年度終了年
     * @type {number}
     * @memberof JobDraftDetailOut
     */
    graduationYearTo?: number | null;
    /**
     * 
     * @type {OccupationOut}
     * @memberof JobDraftDetailOut
     */
    occupation: OccupationOut;
    /**
     * 
     * @type {SkillLevel}
     * @memberof JobDraftDetailOut
     */
    skillLevel?: SkillLevel | null;
    /**
     * スキルレベルラベル
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    skillLevelLabel?: string;
    /**
     * 
     * @type {PassiveSmokingInitiative}
     * @memberof JobDraftDetailOut
     */
    passiveSmokingInitiative?: PassiveSmokingInitiative | null;
    /**
     * 集合場所における受動喫煙防止の取り組みラベル
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    passiveSmokingInitiativeLabel: string;
    /**
     * PG言語
     * @type {Array<PgLangSimpleOut>}
     * @memberof JobDraftDetailOut
     */
    pgLangs: Array<PgLangSimpleOut>;
    /**
     * フレームワークID
     * @type {Array<FrameworkOut>}
     * @memberof JobDraftDetailOut
     */
    frameworks: Array<FrameworkOut>;
    /**
     * スキルID
     * @type {Array<SkillOut>}
     * @memberof JobDraftDetailOut
     */
    skills: Array<SkillOut>;
    /**
     * 求人特徴ID
     * @type {Array<JobFeatureOut>}
     * @memberof JobDraftDetailOut
     */
    jobFeatures: Array<JobFeatureOut>;
    /**
     * 採用人数
     * @type {number}
     * @memberof JobDraftDetailOut
     */
    recruitmentNumbers?: number | null;
    /**
     * 都道府県
     * @type {Array<PrefectureOut>}
     * @memberof JobDraftDetailOut
     */
    prefectures: Array<PrefectureOut>;
    /**
     * 
     * @type {SalarySystem}
     * @memberof JobDraftDetailOut
     */
    salarySystem: SalarySystem;
    /**
     * 下限給与額
     * @type {number}
     * @memberof JobDraftDetailOut
     */
    salaryMin?: number | null;
    /**
     * 上限給与額
     * @type {number}
     * @memberof JobDraftDetailOut
     */
    salaryMax?: number | null;
    /**
     * 給与補足
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    salaryMemo: string;
    /**
     * 
     * @type {Array<WorkingHourOut>}
     * @memberof JobDraftDetailOut
     */
    workingHours?: Array<WorkingHourOut>;
    /**
     * 勤務時間補足
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    workingHourMemo: string;
    /**
     * タイトル
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    title: string;
    /**
     * 求人トップ画像
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    jobImage?: string;
    /**
     * 仕事内容
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    jobContent: string;
    /**
     * 対象となる方
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    target?: string;
    /**
     * 勤務地
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    workLocation: string;
    /**
     * 契約期間
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    contractPeriod: string;
    /**
     * 
     * @type {Probation}
     * @memberof JobDraftDetailOut
     */
    probation: Probation;
    /**
     * 試用期間ラベル
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    probationLabel: string;
    /**
     * 昇給
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    salaryIncrease?: string;
    /**
     * 賞与
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    bonus?: string;
    /**
     * 時間外勤務があるか
     * @type {boolean}
     * @memberof JobDraftDetailOut
     */
    hasOvertimeWorking: boolean;
    /**
     * 時間外勤務詳細
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    overtimeWorkingDetail?: string;
    /**
     * 休日・休暇
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    holiday: string;
    /**
     * 社会保険
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    socialInsurance: string;
    /**
     * 福利厚生
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    benefit?: string;
    /**
     * 選考フロー
     * @type {Array<SelectionFlowOut>}
     * @memberof JobDraftDetailOut
     */
    selectionFlows?: Array<SelectionFlowOut>;
    /**
     * 研修制度
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    trainingSystem?: string;
    /**
     * 選考方法
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    selectionMethod?: string;
    /**
     * 提出書類
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    submittedDocument?: string;
    /**
     * 問い合わせ先
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    contact?: string;
    /**
     * 企業PR
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    companyPr?: string;
    /**
     * 募集採用に関する状況詳細
     * @type {Array<RecruitmentAndHiringStatusOut>}
     * @memberof JobDraftDetailOut
     */
    recruitmentAndHiringStatuses?: Array<RecruitmentAndHiringStatusOut>;
    /**
     * 職業能力開発・向上に関する状況詳細
     * @type {Array<VocationalAbilityStatusOut>}
     * @memberof JobDraftDetailOut
     */
    vocationalAbilityStatuses?: Array<VocationalAbilityStatusOut>;
    /**
     * 企業における雇用管理に関する状況
     * @type {Array<EmploymentManagementStatusOut>}
     * @memberof JobDraftDetailOut
     */
    employmentManagementStatuses?: Array<EmploymentManagementStatusOut>;
    /**
     * 求人オリジナルコンテンツ
     * @type {Array<JobContentOut>}
     * @memberof JobDraftDetailOut
     */
    jobContents?: Array<JobContentOut>;
    /**
     * 求人ID
     * @type {number}
     * @memberof JobDraftDetailOut
     */
    jobId: number | null;
    /**
     * 求人下書ID
     * @type {number}
     * @memberof JobDraftDetailOut
     */
    jobDraftId: number;
    /**
     * 却下理由
     * @type {string}
     * @memberof JobDraftDetailOut
     */
    rejectedReason?: string;
}

/**
 * Check if a given object implements the JobDraftDetailOut interface.
 */
export function instanceOfJobDraftDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyName" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "selectionType" in value;
    isInstance = isInstance && "selectionTypeLabel" in value;
    isInstance = isInstance && "postingStartsAt" in value;
    isInstance = isInstance && "postingEndsAt" in value;
    isInstance = isInstance && "employmentStatus" in value;
    isInstance = isInstance && "employmentStatusLabel" in value;
    isInstance = isInstance && "occupation" in value;
    isInstance = isInstance && "passiveSmokingInitiativeLabel" in value;
    isInstance = isInstance && "pgLangs" in value;
    isInstance = isInstance && "frameworks" in value;
    isInstance = isInstance && "skills" in value;
    isInstance = isInstance && "jobFeatures" in value;
    isInstance = isInstance && "prefectures" in value;
    isInstance = isInstance && "salarySystem" in value;
    isInstance = isInstance && "salaryMemo" in value;
    isInstance = isInstance && "workingHourMemo" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "jobContent" in value;
    isInstance = isInstance && "workLocation" in value;
    isInstance = isInstance && "contractPeriod" in value;
    isInstance = isInstance && "probation" in value;
    isInstance = isInstance && "probationLabel" in value;
    isInstance = isInstance && "hasOvertimeWorking" in value;
    isInstance = isInstance && "holiday" in value;
    isInstance = isInstance && "socialInsurance" in value;
    isInstance = isInstance && "jobId" in value;
    isInstance = isInstance && "jobDraftId" in value;

    return isInstance;
}

export function JobDraftDetailOutFromJSON(json: any): JobDraftDetailOut {
    return JobDraftDetailOutFromJSONTyped(json, false);
}

export function JobDraftDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobDraftDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organizationId': !exists(json, 'organizationId') ? undefined : json['organizationId'],
        'companyName': json['companyName'],
        'updatedAt': (new Date(json['updatedAt'])),
        'selectionType': JobSelectionTypeFromJSON(json['selectionType']),
        'selectionTypeLabel': json['selectionTypeLabel'],
        'postingStartsAt': (new Date(json['postingStartsAt'])),
        'postingEndsAt': (new Date(json['postingEndsAt'])),
        'employmentStatus': EmploymentStatusFromJSON(json['employmentStatus']),
        'employmentStatusLabel': json['employmentStatusLabel'],
        'graduationYearFrom': !exists(json, 'graduationYearFrom') ? undefined : json['graduationYearFrom'],
        'graduationYearTo': !exists(json, 'graduationYearTo') ? undefined : json['graduationYearTo'],
        'occupation': OccupationOutFromJSON(json['occupation']),
        'skillLevel': !exists(json, 'skillLevel') ? undefined : SkillLevelFromJSON(json['skillLevel']),
        'skillLevelLabel': !exists(json, 'skillLevelLabel') ? undefined : json['skillLevelLabel'],
        'passiveSmokingInitiative': !exists(json, 'passiveSmokingInitiative') ? undefined : PassiveSmokingInitiativeFromJSON(json['passiveSmokingInitiative']),
        'passiveSmokingInitiativeLabel': json['passiveSmokingInitiativeLabel'],
        'pgLangs': ((json['pgLangs'] as Array<any>).map(PgLangSimpleOutFromJSON)),
        'frameworks': ((json['frameworks'] as Array<any>).map(FrameworkOutFromJSON)),
        'skills': ((json['skills'] as Array<any>).map(SkillOutFromJSON)),
        'jobFeatures': ((json['jobFeatures'] as Array<any>).map(JobFeatureOutFromJSON)),
        'recruitmentNumbers': !exists(json, 'recruitmentNumbers') ? undefined : json['recruitmentNumbers'],
        'prefectures': ((json['prefectures'] as Array<any>).map(PrefectureOutFromJSON)),
        'salarySystem': SalarySystemFromJSON(json['salarySystem']),
        'salaryMin': !exists(json, 'salaryMin') ? undefined : json['salaryMin'],
        'salaryMax': !exists(json, 'salaryMax') ? undefined : json['salaryMax'],
        'salaryMemo': json['salaryMemo'],
        'workingHours': !exists(json, 'workingHours') ? undefined : ((json['workingHours'] as Array<any>).map(WorkingHourOutFromJSON)),
        'workingHourMemo': json['workingHourMemo'],
        'title': json['title'],
        'jobImage': !exists(json, 'jobImage') ? undefined : json['jobImage'],
        'jobContent': json['jobContent'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'workLocation': json['workLocation'],
        'contractPeriod': json['contractPeriod'],
        'probation': ProbationFromJSON(json['probation']),
        'probationLabel': json['probationLabel'],
        'salaryIncrease': !exists(json, 'salaryIncrease') ? undefined : json['salaryIncrease'],
        'bonus': !exists(json, 'bonus') ? undefined : json['bonus'],
        'hasOvertimeWorking': json['hasOvertimeWorking'],
        'overtimeWorkingDetail': !exists(json, 'overtimeWorkingDetail') ? undefined : json['overtimeWorkingDetail'],
        'holiday': json['holiday'],
        'socialInsurance': json['socialInsurance'],
        'benefit': !exists(json, 'benefit') ? undefined : json['benefit'],
        'selectionFlows': !exists(json, 'selectionFlows') ? undefined : ((json['selectionFlows'] as Array<any>).map(SelectionFlowOutFromJSON)),
        'trainingSystem': !exists(json, 'trainingSystem') ? undefined : json['trainingSystem'],
        'selectionMethod': !exists(json, 'selectionMethod') ? undefined : json['selectionMethod'],
        'submittedDocument': !exists(json, 'submittedDocument') ? undefined : json['submittedDocument'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'companyPr': !exists(json, 'companyPr') ? undefined : json['companyPr'],
        'recruitmentAndHiringStatuses': !exists(json, 'recruitmentAndHiringStatuses') ? undefined : ((json['recruitmentAndHiringStatuses'] as Array<any>).map(RecruitmentAndHiringStatusOutFromJSON)),
        'vocationalAbilityStatuses': !exists(json, 'vocationalAbilityStatuses') ? undefined : ((json['vocationalAbilityStatuses'] as Array<any>).map(VocationalAbilityStatusOutFromJSON)),
        'employmentManagementStatuses': !exists(json, 'employmentManagementStatuses') ? undefined : ((json['employmentManagementStatuses'] as Array<any>).map(EmploymentManagementStatusOutFromJSON)),
        'jobContents': !exists(json, 'jobContents') ? undefined : ((json['jobContents'] as Array<any>).map(JobContentOutFromJSON)),
        'jobId': json['jobId'],
        'jobDraftId': json['jobDraftId'],
        'rejectedReason': !exists(json, 'rejectedReason') ? undefined : json['rejectedReason'],
    };
}

export function JobDraftDetailOutToJSON(value?: JobDraftDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organizationId': value.organizationId,
        'companyName': value.companyName,
        'updatedAt': (value.updatedAt.toISOString()),
        'selectionType': JobSelectionTypeToJSON(value.selectionType),
        'selectionTypeLabel': value.selectionTypeLabel,
        'postingStartsAt': (value.postingStartsAt.toISOString().substring(0,10)),
        'postingEndsAt': (value.postingEndsAt.toISOString().substring(0,10)),
        'employmentStatus': EmploymentStatusToJSON(value.employmentStatus),
        'employmentStatusLabel': value.employmentStatusLabel,
        'graduationYearFrom': value.graduationYearFrom,
        'graduationYearTo': value.graduationYearTo,
        'occupation': OccupationOutToJSON(value.occupation),
        'skillLevel': SkillLevelToJSON(value.skillLevel),
        'skillLevelLabel': value.skillLevelLabel,
        'passiveSmokingInitiative': PassiveSmokingInitiativeToJSON(value.passiveSmokingInitiative),
        'passiveSmokingInitiativeLabel': value.passiveSmokingInitiativeLabel,
        'pgLangs': ((value.pgLangs as Array<any>).map(PgLangSimpleOutToJSON)),
        'frameworks': ((value.frameworks as Array<any>).map(FrameworkOutToJSON)),
        'skills': ((value.skills as Array<any>).map(SkillOutToJSON)),
        'jobFeatures': ((value.jobFeatures as Array<any>).map(JobFeatureOutToJSON)),
        'recruitmentNumbers': value.recruitmentNumbers,
        'prefectures': ((value.prefectures as Array<any>).map(PrefectureOutToJSON)),
        'salarySystem': SalarySystemToJSON(value.salarySystem),
        'salaryMin': value.salaryMin,
        'salaryMax': value.salaryMax,
        'salaryMemo': value.salaryMemo,
        'workingHours': value.workingHours === undefined ? undefined : ((value.workingHours as Array<any>).map(WorkingHourOutToJSON)),
        'workingHourMemo': value.workingHourMemo,
        'title': value.title,
        'jobImage': value.jobImage,
        'jobContent': value.jobContent,
        'target': value.target,
        'workLocation': value.workLocation,
        'contractPeriod': value.contractPeriod,
        'probation': ProbationToJSON(value.probation),
        'probationLabel': value.probationLabel,
        'salaryIncrease': value.salaryIncrease,
        'bonus': value.bonus,
        'hasOvertimeWorking': value.hasOvertimeWorking,
        'overtimeWorkingDetail': value.overtimeWorkingDetail,
        'holiday': value.holiday,
        'socialInsurance': value.socialInsurance,
        'benefit': value.benefit,
        'selectionFlows': value.selectionFlows === undefined ? undefined : ((value.selectionFlows as Array<any>).map(SelectionFlowOutToJSON)),
        'trainingSystem': value.trainingSystem,
        'selectionMethod': value.selectionMethod,
        'submittedDocument': value.submittedDocument,
        'contact': value.contact,
        'companyPr': value.companyPr,
        'recruitmentAndHiringStatuses': value.recruitmentAndHiringStatuses === undefined ? undefined : ((value.recruitmentAndHiringStatuses as Array<any>).map(RecruitmentAndHiringStatusOutToJSON)),
        'vocationalAbilityStatuses': value.vocationalAbilityStatuses === undefined ? undefined : ((value.vocationalAbilityStatuses as Array<any>).map(VocationalAbilityStatusOutToJSON)),
        'employmentManagementStatuses': value.employmentManagementStatuses === undefined ? undefined : ((value.employmentManagementStatuses as Array<any>).map(EmploymentManagementStatusOutToJSON)),
        'jobContents': value.jobContents === undefined ? undefined : ((value.jobContents as Array<any>).map(JobContentOutToJSON)),
        'jobId': value.jobId,
        'jobDraftId': value.jobDraftId,
        'rejectedReason': value.rejectedReason,
    };
}

