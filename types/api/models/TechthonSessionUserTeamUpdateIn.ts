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
 * @interface TechthonSessionUserTeamUpdateIn
 */
export interface TechthonSessionUserTeamUpdateIn {
    /**
     * ユーザーID
     * @type {number}
     * @memberof TechthonSessionUserTeamUpdateIn
     */
    userId: number;
}

/**
 * Check if a given object implements the TechthonSessionUserTeamUpdateIn interface.
 */
export function instanceOfTechthonSessionUserTeamUpdateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;

    return isInstance;
}

export function TechthonSessionUserTeamUpdateInFromJSON(json: any): TechthonSessionUserTeamUpdateIn {
    return TechthonSessionUserTeamUpdateInFromJSONTyped(json, false);
}

export function TechthonSessionUserTeamUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonSessionUserTeamUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
    };
}

export function TechthonSessionUserTeamUpdateInToJSON(value?: TechthonSessionUserTeamUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
    };
}

