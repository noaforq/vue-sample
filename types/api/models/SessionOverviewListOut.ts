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
 * セッション概要
 * @export
 * @interface SessionOverviewListOut
 */
export interface SessionOverviewListOut {
    /**
     * セッション概要
     * @type {string}
     * @memberof SessionOverviewListOut
     */
    sessionDescription: string;
    /**
     * 主催者
     * @type {string}
     * @memberof SessionOverviewListOut
     */
    hostName: string;
    /**
     * セッションテーマ
     * @type {string}
     * @memberof SessionOverviewListOut
     */
    sessionTheme: string;
}

/**
 * Check if a given object implements the SessionOverviewListOut interface.
 */
export function instanceOfSessionOverviewListOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionDescription" in value;
    isInstance = isInstance && "hostName" in value;
    isInstance = isInstance && "sessionTheme" in value;

    return isInstance;
}

export function SessionOverviewListOutFromJSON(json: any): SessionOverviewListOut {
    return SessionOverviewListOutFromJSONTyped(json, false);
}

export function SessionOverviewListOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionOverviewListOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionDescription': json['sessionDescription'],
        'hostName': json['hostName'],
        'sessionTheme': json['sessionTheme'],
    };
}

export function SessionOverviewListOutToJSON(value?: SessionOverviewListOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessionDescription': value.sessionDescription,
        'hostName': value.hostName,
        'sessionTheme': value.sessionTheme,
    };
}

