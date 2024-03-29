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
 * ロケール
 * @export
 */
export const Locale = {
    Ja: 'ja',
    En: 'en'
} as const;
export type Locale = typeof Locale[keyof typeof Locale];


export function LocaleFromJSON(json: any): Locale {
    return LocaleFromJSONTyped(json, false);
}

export function LocaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Locale {
    return json as Locale;
}

export function LocaleToJSON(value?: Locale | null): any {
    return value as any;
}

