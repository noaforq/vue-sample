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
 * An enumeration.
 * @export
 */
export const EventFilter = {
    Published: 'is_published',
    Sponsor: 'is_sponsor'
} as const;
export type EventFilter = typeof EventFilter[keyof typeof EventFilter];


export function EventFilterFromJSON(json: any): EventFilter {
    return EventFilterFromJSONTyped(json, false);
}

export function EventFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventFilter {
    return json as EventFilter;
}

export function EventFilterToJSON(value?: EventFilter | null): any {
    return value as any;
}

