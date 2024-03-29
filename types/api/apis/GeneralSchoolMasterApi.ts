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
  GeneralSchoolDepartmentSearchIn,
  GeneralSchoolDepartmentSearchOut,
  GeneralSchoolMasterSearchIn,
  GeneralSchoolMasterSearchOut,
  ValidationError,
} from '../models/index';
import {
    GeneralSchoolDepartmentSearchInFromJSON,
    GeneralSchoolDepartmentSearchInToJSON,
    GeneralSchoolDepartmentSearchOutFromJSON,
    GeneralSchoolDepartmentSearchOutToJSON,
    GeneralSchoolMasterSearchInFromJSON,
    GeneralSchoolMasterSearchInToJSON,
    GeneralSchoolMasterSearchOutFromJSON,
    GeneralSchoolMasterSearchOutToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface SearchSchoolDepartmentsRequest {
    generalSchoolDepartmentSearchIn: GeneralSchoolDepartmentSearchIn;
}

export interface SearchSchoolMasterRequest {
    generalSchoolMasterSearchIn: GeneralSchoolMasterSearchIn;
}

/**
 * 
 */
export class GeneralSchoolMasterApi extends runtime.BaseAPI {

    /**
     * 学部・学科マスター検索 - 検索パラメータに従って学部・学科マスター検索 - 必要権限: [GENERAL_USER] - 検索パラメータ:     - 学校ID     - TechFUL学校区分         TechFUL学校区分をSchoolDivisionRelationで学校区分IDに変換         SchoolDeptInfoMasterを学校区分ID・学校IDで絞り込みした結果の学部ID・学科IDのセットを返す
     * 学部・学科マスター検索
     */
    async searchSchoolDepartmentsRaw(requestParameters: SearchSchoolDepartmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GeneralSchoolDepartmentSearchOut>>> {
        if (requestParameters.generalSchoolDepartmentSearchIn === null || requestParameters.generalSchoolDepartmentSearchIn === undefined) {
            throw new runtime.RequiredError('generalSchoolDepartmentSearchIn','Required parameter requestParameters.generalSchoolDepartmentSearchIn was null or undefined when calling searchSchoolDepartments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/general/school_master/department`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GeneralSchoolDepartmentSearchInToJSON(requestParameters.generalSchoolDepartmentSearchIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GeneralSchoolDepartmentSearchOutFromJSON));
    }

    /**
     * 学部・学科マスター検索 - 検索パラメータに従って学部・学科マスター検索 - 必要権限: [GENERAL_USER] - 検索パラメータ:     - 学校ID     - TechFUL学校区分         TechFUL学校区分をSchoolDivisionRelationで学校区分IDに変換         SchoolDeptInfoMasterを学校区分ID・学校IDで絞り込みした結果の学部ID・学科IDのセットを返す
     * 学部・学科マスター検索
     */
    async searchSchoolDepartments(requestParameters: SearchSchoolDepartmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GeneralSchoolDepartmentSearchOut>> {
        const response = await this.searchSchoolDepartmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 学校マスター検索 - 検索パラメータに従って学校マスター検索 - 必要権限: [GENERAL_USER] - 検索パラメータ:     - 学校名(フリガナ、カタカナ一文字　頭文字で検索)         - カタカナ以外の場合、ParameterError     - TechFUL学校区分         SchoolDivisionRelationで学校区分IDに変換         SchoolDeptInfoMasterを学校区分IDで絞り込みした結果の学校IDを返す
     * 学校マスター検索
     */
    async searchSchoolMasterRaw(requestParameters: SearchSchoolMasterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GeneralSchoolMasterSearchOut>>> {
        if (requestParameters.generalSchoolMasterSearchIn === null || requestParameters.generalSchoolMasterSearchIn === undefined) {
            throw new runtime.RequiredError('generalSchoolMasterSearchIn','Required parameter requestParameters.generalSchoolMasterSearchIn was null or undefined when calling searchSchoolMaster.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/general/school_master`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GeneralSchoolMasterSearchInToJSON(requestParameters.generalSchoolMasterSearchIn),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GeneralSchoolMasterSearchOutFromJSON));
    }

    /**
     * 学校マスター検索 - 検索パラメータに従って学校マスター検索 - 必要権限: [GENERAL_USER] - 検索パラメータ:     - 学校名(フリガナ、カタカナ一文字　頭文字で検索)         - カタカナ以外の場合、ParameterError     - TechFUL学校区分         SchoolDivisionRelationで学校区分IDに変換         SchoolDeptInfoMasterを学校区分IDで絞り込みした結果の学校IDを返す
     * 学校マスター検索
     */
    async searchSchoolMaster(requestParameters: SearchSchoolMasterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GeneralSchoolMasterSearchOut>> {
        const response = await this.searchSchoolMasterRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
