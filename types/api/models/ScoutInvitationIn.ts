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
 * @interface ScoutInvitationIn
 */
export interface ScoutInvitationIn {
    /**
     * メッセージ
     * @type {string}
     * @memberof ScoutInvitationIn
     */
    message: string;
    /**
     * チャットルームURLテンプレート(python f-string), 'DOMAIN/techful/{chat_room_id}'
     * @type {string}
     * @memberof ScoutInvitationIn
     */
    chatRoomUrlTemplate: string;
}

/**
 * Check if a given object implements the ScoutInvitationIn interface.
 */
export function instanceOfScoutInvitationIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "chatRoomUrlTemplate" in value;

    return isInstance;
}

export function ScoutInvitationInFromJSON(json: any): ScoutInvitationIn {
    return ScoutInvitationInFromJSONTyped(json, false);
}

export function ScoutInvitationInFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScoutInvitationIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'chatRoomUrlTemplate': json['chatRoomUrlTemplate'],
    };
}

export function ScoutInvitationInToJSON(value?: ScoutInvitationIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'chatRoomUrlTemplate': value.chatRoomUrlTemplate,
    };
}

