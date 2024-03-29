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
 * @interface PgLangDetailOut
 */
export interface PgLangDetailOut {
    /**
     * 
     * @type {number}
     * @memberof PgLangDetailOut
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof PgLangDetailOut
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof PgLangDetailOut
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof PgLangDetailOut
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PgLangDetailOut
     */
    monacoName: string;
    /**
     * 
     * @type {string}
     * @memberof PgLangDetailOut
     */
    langCode: string;
    /**
     * 
     * @type {string}
     * @memberof PgLangDetailOut
     */
    extension: string;
    /**
     * 
     * @type {string}
     * @memberof PgLangDetailOut
     */
    template: string;
    /**
     * 
     * @type {boolean}
     * @memberof PgLangDetailOut
     */
    isSql: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PgLangDetailOut
     */
    useForBlankQuestion: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PgLangDetailOut
     */
    useForJudgementLang: boolean;
}

/**
 * Check if a given object implements the PgLangDetailOut interface.
 */
export function instanceOfPgLangDetailOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "monacoName" in value;
    isInstance = isInstance && "langCode" in value;
    isInstance = isInstance && "extension" in value;
    isInstance = isInstance && "template" in value;
    isInstance = isInstance && "isSql" in value;
    isInstance = isInstance && "useForBlankQuestion" in value;
    isInstance = isInstance && "useForJudgementLang" in value;

    return isInstance;
}

export function PgLangDetailOutFromJSON(json: any): PgLangDetailOut {
    return PgLangDetailOutFromJSONTyped(json, false);
}

export function PgLangDetailOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): PgLangDetailOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'name': json['name'],
        'monacoName': json['monacoName'],
        'langCode': json['langCode'],
        'extension': json['extension'],
        'template': json['template'],
        'isSql': json['isSql'],
        'useForBlankQuestion': json['useForBlankQuestion'],
        'useForJudgementLang': json['useForJudgementLang'],
    };
}

export function PgLangDetailOutToJSON(value?: PgLangDetailOut | null): any {
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
        'name': value.name,
        'monacoName': value.monacoName,
        'langCode': value.langCode,
        'extension': value.extension,
        'template': value.template,
        'isSql': value.isSql,
        'useForBlankQuestion': value.useForBlankQuestion,
        'useForJudgementLang': value.useForJudgementLang,
    };
}

