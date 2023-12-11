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
import type { SchoolUserType } from './SchoolUserType';
import {
    SchoolUserTypeFromJSON,
    SchoolUserTypeFromJSONTyped,
    SchoolUserTypeToJSON,
} from './SchoolUserType';

/**
 * 
 * @export
 * @interface InvitationSchoolUserIn
 */
export interface InvitationSchoolUserIn {
    /**
     * メールアドレス
     * @type {string}
     * @memberof InvitationSchoolUserIn
     */
    email: string;
    /**
     * 
     * @type {SchoolUserType}
     * @memberof InvitationSchoolUserIn
     */
    schoolUserType: SchoolUserType;
    /**
     * 招待メール
     * @type {string}
     * @memberof InvitationSchoolUserIn
     */
    invitationMail: string;
}

/**
 * Check if a given object implements the InvitationSchoolUserIn interface.
 */
export function instanceOfInvitationSchoolUserIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "schoolUserType" in value;
    isInstance = isInstance && "invitationMail" in value;

    return isInstance;
}

export function InvitationSchoolUserInFromJSON(json: any): InvitationSchoolUserIn {
    return InvitationSchoolUserInFromJSONTyped(json, false);
}

export function InvitationSchoolUserInFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitationSchoolUserIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'schoolUserType': SchoolUserTypeFromJSON(json['schoolUserType']),
        'invitationMail': json['invitationMail'],
    };
}

export function InvitationSchoolUserInToJSON(value?: InvitationSchoolUserIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'schoolUserType': SchoolUserTypeToJSON(value.schoolUserType),
        'invitationMail': value.invitationMail,
    };
}
