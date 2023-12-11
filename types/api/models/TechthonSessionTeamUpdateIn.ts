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
 * @interface TechthonSessionTeamUpdateIn
 */
export interface TechthonSessionTeamUpdateIn {
    /**
     * チーム名
     * @type {string}
     * @memberof TechthonSessionTeamUpdateIn
     */
    teamName: string;
}

/**
 * Check if a given object implements the TechthonSessionTeamUpdateIn interface.
 */
export function instanceOfTechthonSessionTeamUpdateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "teamName" in value;

    return isInstance;
}

export function TechthonSessionTeamUpdateInFromJSON(json: any): TechthonSessionTeamUpdateIn {
    return TechthonSessionTeamUpdateInFromJSONTyped(json, false);
}

export function TechthonSessionTeamUpdateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonSessionTeamUpdateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamName': json['teamName'],
    };
}

export function TechthonSessionTeamUpdateInToJSON(value?: TechthonSessionTeamUpdateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teamName': value.teamName,
    };
}

