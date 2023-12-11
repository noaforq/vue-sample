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
 * @interface TechthonServerInfoOut
 */
export interface TechthonServerInfoOut {
    /**
     * 
     * @type {number}
     * @memberof TechthonServerInfoOut
     */
    id: number;
    /**
     * 貸し出すサーバーのIPアドレス
     * @type {string}
     * @memberof TechthonServerInfoOut
     */
    ipAddress: string;
    /**
     * 貸し出すサーバーのログインユーザーID
     * @type {string}
     * @memberof TechthonServerInfoOut
     */
    serverId: string;
    /**
     * 貸し出すサーバのログインパスワード
     * @type {string}
     * @memberof TechthonServerInfoOut
     */
    password: string;
}

/**
 * Check if a given object implements the TechthonServerInfoOut interface.
 */
export function instanceOfTechthonServerInfoOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ipAddress" in value;
    isInstance = isInstance && "serverId" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function TechthonServerInfoOutFromJSON(json: any): TechthonServerInfoOut {
    return TechthonServerInfoOutFromJSONTyped(json, false);
}

export function TechthonServerInfoOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TechthonServerInfoOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ipAddress': json['ipAddress'],
        'serverId': json['serverId'],
        'password': json['password'],
    };
}

export function TechthonServerInfoOutToJSON(value?: TechthonServerInfoOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'ipAddress': value.ipAddress,
        'serverId': value.serverId,
        'password': value.password,
    };
}

