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
 * @interface RandomAdvertisementDetailOut
 */
export interface RandomAdvertisementDetailOut {
    /**
     * 
     * @type {number}
     * @memberof RandomAdvertisementDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof RandomAdvertisementDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof RandomAdvertisementDetailOut
     */
    updatedAt: Date;
    /**
     * 画像
     * @type {string}
     * @memberof RandomAdvertisementDetailOut
     */
    image: string;
}

/**
 * Check if a given object implements the RandomAdvertisementDetailOut interface.
 */
export function instanceOfRandomAdvertisementDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "image" in value;

    return isInstance;
}

export function RandomAdvertisementDetailOutFromJSON(json: any): RandomAdvertisementDetailOut {
    return RandomAdvertisementDetailOutFromJSONTyped(json, false);
}

export function RandomAdvertisementDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): RandomAdvertisementDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'image': json['image'],
    };
}

export function RandomAdvertisementDetailOutToJSON(value?: RandomAdvertisementDetailOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'image': value.image,
    };
}
