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
export const AppRoutersGeneralJobsGetJobsListOrdering = {
    PostingStartsAt: 'posting_starts_at',
    PostingStartsAtDesc: 'posting_starts_at_desc',
    FavoriteAddAtDesc: 'favorite_add_at_desc',
    IdDesc: 'id_desc'
} as const;
export type AppRoutersGeneralJobsGetJobsListOrdering = typeof AppRoutersGeneralJobsGetJobsListOrdering[keyof typeof AppRoutersGeneralJobsGetJobsListOrdering];


export function AppRoutersGeneralJobsGetJobsListOrderingFromJSON(json: any): AppRoutersGeneralJobsGetJobsListOrdering {
    return AppRoutersGeneralJobsGetJobsListOrderingFromJSONTyped(json, false);
}

export function AppRoutersGeneralJobsGetJobsListOrderingFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoutersGeneralJobsGetJobsListOrdering {
    return json as AppRoutersGeneralJobsGetJobsListOrdering;
}

export function AppRoutersGeneralJobsGetJobsListOrderingToJSON(value?: AppRoutersGeneralJobsGetJobsListOrdering | null): any {
    return value as any;
}

