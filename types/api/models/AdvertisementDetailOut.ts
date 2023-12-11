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
 * @interface AdvertisementDetailOut
 */
export interface AdvertisementDetailOut {
    /**
     * 
     * @type {number}
     * @memberof AdvertisementDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof AdvertisementDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AdvertisementDetailOut
     */
    updatedAt: Date;
    /**
     * 広告名(管理用)
     * @type {string}
     * @memberof AdvertisementDetailOut
     */
    title: string;
    /**
     * 掲載開始日時
     * @type {Date}
     * @memberof AdvertisementDetailOut
     */
    publicationStartAt: Date;
    /**
     * 掲載終了日時
     * @type {Date}
     * @memberof AdvertisementDetailOut
     */
    publicationEndAt: Date;
    /**
     * URL
     * @type {string}
     * @memberof AdvertisementDetailOut
     */
    url: string;
    /**
     * 画像1 (336x280)
     * @type {string}
     * @memberof AdvertisementDetailOut
     */
    image1336x280: string;
    /**
     * 画像2 (120x600)
     * @type {string}
     * @memberof AdvertisementDetailOut
     */
    image2120x600: string;
    /**
     * 画像3 (600x120)
     * @type {string}
     * @memberof AdvertisementDetailOut
     */
    image3600x120: string;
    /**
     * 画像4 (1250x170)
     * @type {string}
     * @memberof AdvertisementDetailOut
     */
    image41250x170: string;
    /**
     * 公開フラグ
     * @type {boolean}
     * @memberof AdvertisementDetailOut
     */
    isPublished: boolean;
    /**
     * 総クリック数（総閲覧数）
     * @type {number}
     * @memberof AdvertisementDetailOut
     */
    totalClickCount: number;
}

/**
 * Check if a given object implements the AdvertisementDetailOut interface.
 */
export function instanceOfAdvertisementDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "publicationStartAt" in value;
    isInstance = isInstance && "publicationEndAt" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "image1336x280" in value;
    isInstance = isInstance && "image2120x600" in value;
    isInstance = isInstance && "image3600x120" in value;
    isInstance = isInstance && "image41250x170" in value;
    isInstance = isInstance && "isPublished" in value;
    isInstance = isInstance && "totalClickCount" in value;

    return isInstance;
}

export function AdvertisementDetailOutFromJSON(json: any): AdvertisementDetailOut {
    return AdvertisementDetailOutFromJSONTyped(json, false);
}

export function AdvertisementDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvertisementDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'title': json['title'],
        'publicationStartAt': (new Date(json['publicationStartAt'])),
        'publicationEndAt': (new Date(json['publicationEndAt'])),
        'url': json['url'],
        'image1336x280': json['image1336x280'],
        'image2120x600': json['image2120x600'],
        'image3600x120': json['image3600x120'],
        'image41250x170': json['image41250x170'],
        'isPublished': json['isPublished'],
        'totalClickCount': json['totalClickCount'],
    };
}

export function AdvertisementDetailOutToJSON(value?: AdvertisementDetailOut | null): any {
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
        'title': value.title,
        'publicationStartAt': (value.publicationStartAt.toISOString()),
        'publicationEndAt': (value.publicationEndAt.toISOString()),
        'url': value.url,
        'image1336x280': value.image1336x280,
        'image2120x600': value.image2120x600,
        'image3600x120': value.image3600x120,
        'image41250x170': value.image41250x170,
        'isPublished': value.isPublished,
        'totalClickCount': value.totalClickCount,
    };
}
