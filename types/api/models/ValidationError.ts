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
import type { ValidationErrorDetail } from './ValidationErrorDetail';
import {
    ValidationErrorDetailFromJSON,
    ValidationErrorDetailFromJSONTyped,
    ValidationErrorDetailToJSON,
} from './ValidationErrorDetail';

/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    errorCode: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    message: string;
    /**
     * 
     * @type {Array<ValidationErrorDetail>}
     * @memberof ValidationError
     */
    detail: Array<ValidationErrorDetail>;
}

/**
 * Check if a given object implements the ValidationError interface.
 */
export function instanceOfValidationError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errorCode" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function ValidationErrorFromJSON(json: any): ValidationError {
    return ValidationErrorFromJSONTyped(json, false);
}

export function ValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'message': json['message'],
        'detail': ((json['detail'] as Array<any>).map(ValidationErrorDetailFromJSON)),
    };
}

export function ValidationErrorToJSON(value?: ValidationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errorCode': value.errorCode,
        'message': value.message,
        'detail': ((value.detail as Array<any>).map(ValidationErrorDetailToJSON)),
    };
}

