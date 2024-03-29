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
 * @interface CompanyUserUpdateIn
 */
export interface CompanyUserUpdateIn {
    /**
     * 
     * @type {string}
     * @memberof CompanyUserUpdateIn
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CompanyUserUpdateIn
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CompanyUserUpdateIn
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CompanyUserUpdateIn
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CompanyUserUpdateIn
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CompanyUserUpdateIn
     */
    icon: string;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyUserUpdateIn
     */
    hasScoutPlanPermissions?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyUserUpdateIn
     */
    hasSkillEvaluationPlanPermissions?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyUserUpdateIn
     */
    hasRecruitPlanPermissions?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyUserUpdateIn
     */
    hasEventPlanPermissions?: boolean | null;
}

/**
 * Check if a given object implements the CompanyUserUpdateIn interface.
 */
export function instanceOfCompanyUserUpdateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "icon" in value;

    return isInstance;
}

export function CompanyUserUpdateInFromJSON(json: any): CompanyUserUpdateIn {
    return CompanyUserUpdateInFromJSONTyped(json, false);
}

export function CompanyUserUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyUserUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'icon': json['icon'],
        'hasScoutPlanPermissions': !exists(json, 'hasScoutPlanPermissions') ? undefined : json['hasScoutPlanPermissions'],
        'hasSkillEvaluationPlanPermissions': !exists(json, 'hasSkillEvaluationPlanPermissions') ? undefined : json['hasSkillEvaluationPlanPermissions'],
        'hasRecruitPlanPermissions': !exists(json, 'hasRecruitPlanPermissions') ? undefined : json['hasRecruitPlanPermissions'],
        'hasEventPlanPermissions': !exists(json, 'hasEventPlanPermissions') ? undefined : json['hasEventPlanPermissions'],
    };
}

export function CompanyUserUpdateInToJSON(value?: CompanyUserUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'username': value.username,
        'password': value.password,
        'email': value.email,
        'icon': value.icon,
        'hasScoutPlanPermissions': value.hasScoutPlanPermissions,
        'hasSkillEvaluationPlanPermissions': value.hasSkillEvaluationPlanPermissions,
        'hasRecruitPlanPermissions': value.hasRecruitPlanPermissions,
        'hasEventPlanPermissions': value.hasEventPlanPermissions,
    };
}

