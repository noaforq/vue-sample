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
import type { CompanyIndustryUpdateIn } from './CompanyIndustryUpdateIn';
import {
    CompanyIndustryUpdateInFromJSON,
    CompanyIndustryUpdateInFromJSONTyped,
    CompanyIndustryUpdateInToJSON,
} from './CompanyIndustryUpdateIn';
import type { CompanyPlanStatus } from './CompanyPlanStatus';
import {
    CompanyPlanStatusFromJSON,
    CompanyPlanStatusFromJSONTyped,
    CompanyPlanStatusToJSON,
} from './CompanyPlanStatus';
import type { CompanyPlanStatusNoTrial } from './CompanyPlanStatusNoTrial';
import {
    CompanyPlanStatusNoTrialFromJSON,
    CompanyPlanStatusNoTrialFromJSONTyped,
    CompanyPlanStatusNoTrialToJSON,
} from './CompanyPlanStatusNoTrial';

/**
 * 
 * @export
 * @interface CompanyUpdateIn
 */
export interface CompanyUpdateIn {
    /**
     * 
     * @type {string}
     * @memberof CompanyUpdateIn
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CompanyUpdateIn
     */
    formalName?: string | null;
    /**
     * ファイルアップロードAPIで取得(dir:company)
     * @type {string}
     * @memberof CompanyUpdateIn
     */
    logo?: string | null;
    /**
     * HPのURL
     * @type {string}
     * @memberof CompanyUpdateIn
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CompanyUpdateIn
     */
    email?: string | null;
    /**
     * 
     * @type {CompanyPlanStatus}
     * @memberof CompanyUpdateIn
     */
    scoutPlanStatus?: CompanyPlanStatus | null;
    /**
     * 
     * @type {CompanyPlanStatus}
     * @memberof CompanyUpdateIn
     */
    skillEvaluationPlanStatus?: CompanyPlanStatus | null;
    /**
     * 
     * @type {CompanyPlanStatusNoTrial}
     * @memberof CompanyUpdateIn
     */
    recruitPlanStatus?: CompanyPlanStatusNoTrial | null;
    /**
     * 
     * @type {CompanyPlanStatusNoTrial}
     * @memberof CompanyUpdateIn
     */
    eventPlanStatus?: CompanyPlanStatusNoTrial | null;
    /**
     * 
     * @type {Date}
     * @memberof CompanyUpdateIn
     */
    scoutPlanExpiresDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CompanyUpdateIn
     */
    skillEvaluationPlanExpiresDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CompanyUpdateIn
     */
    recruitPlanExpiresDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CompanyUpdateIn
     */
    eventPlanExpiresDate?: Date | null;
    /**
     * 
     * @type {Array<CompanyIndustryUpdateIn>}
     * @memberof CompanyUpdateIn
     */
    companyIndustry: Array<CompanyIndustryUpdateIn>;
}

/**
 * Check if a given object implements the CompanyUpdateIn interface.
 */
export function instanceOfCompanyUpdateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyIndustry" in value;

    return isInstance;
}

export function CompanyUpdateInFromJSON(json: any): CompanyUpdateIn {
    return CompanyUpdateInFromJSONTyped(json, false);
}

export function CompanyUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'formalName': !exists(json, 'formalName') ? undefined : json['formalName'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'scoutPlanStatus': !exists(json, 'scoutPlanStatus') ? undefined : CompanyPlanStatusFromJSON(json['scoutPlanStatus']),
        'skillEvaluationPlanStatus': !exists(json, 'skillEvaluationPlanStatus') ? undefined : CompanyPlanStatusFromJSON(json['skillEvaluationPlanStatus']),
        'recruitPlanStatus': !exists(json, 'recruitPlanStatus') ? undefined : CompanyPlanStatusNoTrialFromJSON(json['recruitPlanStatus']),
        'eventPlanStatus': !exists(json, 'eventPlanStatus') ? undefined : CompanyPlanStatusNoTrialFromJSON(json['eventPlanStatus']),
        'scoutPlanExpiresDate': !exists(json, 'scoutPlanExpiresDate') ? undefined : (json['scoutPlanExpiresDate'] === null ? null : new Date(json['scoutPlanExpiresDate'])),
        'skillEvaluationPlanExpiresDate': !exists(json, 'skillEvaluationPlanExpiresDate') ? undefined : (json['skillEvaluationPlanExpiresDate'] === null ? null : new Date(json['skillEvaluationPlanExpiresDate'])),
        'recruitPlanExpiresDate': !exists(json, 'recruitPlanExpiresDate') ? undefined : (json['recruitPlanExpiresDate'] === null ? null : new Date(json['recruitPlanExpiresDate'])),
        'eventPlanExpiresDate': !exists(json, 'eventPlanExpiresDate') ? undefined : (json['eventPlanExpiresDate'] === null ? null : new Date(json['eventPlanExpiresDate'])),
        'companyIndustry': ((json['companyIndustry'] as Array<any>).map(CompanyIndustryUpdateInFromJSON)),
    };
}

export function CompanyUpdateInToJSON(value?: CompanyUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'formalName': value.formalName,
        'logo': value.logo,
        'url': value.url,
        'email': value.email,
        'scoutPlanStatus': CompanyPlanStatusToJSON(value.scoutPlanStatus),
        'skillEvaluationPlanStatus': CompanyPlanStatusToJSON(value.skillEvaluationPlanStatus),
        'recruitPlanStatus': CompanyPlanStatusNoTrialToJSON(value.recruitPlanStatus),
        'eventPlanStatus': CompanyPlanStatusNoTrialToJSON(value.eventPlanStatus),
        'scoutPlanExpiresDate': value.scoutPlanExpiresDate === undefined ? undefined : (value.scoutPlanExpiresDate === null ? null : value.scoutPlanExpiresDate.toISOString().substring(0,10)),
        'skillEvaluationPlanExpiresDate': value.skillEvaluationPlanExpiresDate === undefined ? undefined : (value.skillEvaluationPlanExpiresDate === null ? null : value.skillEvaluationPlanExpiresDate.toISOString().substring(0,10)),
        'recruitPlanExpiresDate': value.recruitPlanExpiresDate === undefined ? undefined : (value.recruitPlanExpiresDate === null ? null : value.recruitPlanExpiresDate.toISOString().substring(0,10)),
        'eventPlanExpiresDate': value.eventPlanExpiresDate === undefined ? undefined : (value.eventPlanExpiresDate === null ? null : value.eventPlanExpiresDate.toISOString().substring(0,10)),
        'companyIndustry': ((value.companyIndustry as Array<any>).map(CompanyIndustryUpdateInToJSON)),
    };
}

