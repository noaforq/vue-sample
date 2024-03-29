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


import * as runtime from '../runtime';
import type {
  PgLangSampleCodeListOut,
  ValidationError,
} from '../models/index';
import {
    PgLangSampleCodeListOutFromJSON,
    PgLangSampleCodeListOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface GetPgLangSampleCodeListRequest {
    pgLangId: number;
}

/**
 * 
 */
export class CommonSampleCodesApi extends runtime.BaseAPI {

    /**
     * PG言語別サンプルコード一覧を取得 - 並び順: order昇順
     * PG言語別サンプルコード一覧取得
     */
    async getPgLangSampleCodeListRaw(requestParameters: GetPgLangSampleCodeListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PgLangSampleCodeListOut>>> {
        if (requestParameters.pgLangId === null || requestParameters.pgLangId === undefined) {
            throw new runtime.RequiredError('pgLangId','Required parameter requestParameters.pgLangId was null or undefined when calling getPgLangSampleCodeList.');
        }

        const queryParameters: any = {};

        if (requestParameters.pgLangId !== undefined) {
            queryParameters['pg_lang_id'] = requestParameters.pgLangId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/common/sample-codes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PgLangSampleCodeListOutFromJSON));
    }

    /**
     * PG言語別サンプルコード一覧を取得 - 並び順: order昇順
     * PG言語別サンプルコード一覧取得
     */
    async getPgLangSampleCodeList(requestParameters: GetPgLangSampleCodeListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PgLangSampleCodeListOut>> {
        const response = await this.getPgLangSampleCodeListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
