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
 * @interface AdvertisementBannerCreateIn
 */
export interface AdvertisementBannerCreateIn {
    /**
     * 画像1(336x280)ファイルURL
     * @type {string}
     * @memberof AdvertisementBannerCreateIn
     */
    image1336x280: string;
    /**
     * 画像2(120x600)ファイルURL
     * @type {string}
     * @memberof AdvertisementBannerCreateIn
     */
    image2120x600: string;
    /**
     * 画像3(600x120)ファイルURL
     * @type {string}
     * @memberof AdvertisementBannerCreateIn
     */
    image3600x120: string;
    /**
     * 画像4(1250x170)ファイルURL
     * @type {string}
     * @memberof AdvertisementBannerCreateIn
     */
    image41250x170: string;
}

/**
 * Check if a given object implements the AdvertisementBannerCreateIn interface.
 */
export function instanceOfAdvertisementBannerCreateIn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "image1336x280" in value;
    isInstance = isInstance && "image2120x600" in value;
    isInstance = isInstance && "image3600x120" in value;
    isInstance = isInstance && "image41250x170" in value;

    return isInstance;
}

export function AdvertisementBannerCreateInFromJSON(json: any): AdvertisementBannerCreateIn {
    return AdvertisementBannerCreateInFromJSONTyped(json, false);
}

export function AdvertisementBannerCreateInFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvertisementBannerCreateIn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image1336x280': json['image1336x280'],
        'image2120x600': json['image2120x600'],
        'image3600x120': json['image3600x120'],
        'image41250x170': json['image41250x170'],
    };
}

export function AdvertisementBannerCreateInToJSON(value?: AdvertisementBannerCreateIn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image1336x280': value.image1336x280,
        'image2120x600': value.image2120x600,
        'image3600x120': value.image3600x120,
        'image41250x170': value.image41250x170,
    };
}

