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


/**
 * セッション種別
 * @export
 */
export const SessionType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type SessionType = typeof SessionType[keyof typeof SessionType];


export function SessionTypeFromJSON(json: any): SessionType {
    return SessionTypeFromJSONTyped(json, false);
}

export function SessionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionType {
    return json as SessionType;
}

export function SessionTypeToJSON(value?: SessionType | null): any {
    return value as any;
}
