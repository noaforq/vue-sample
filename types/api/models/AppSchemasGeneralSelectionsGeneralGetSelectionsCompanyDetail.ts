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
 * @interface AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
 */
export interface AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail {
    /**
     * ID
     * @type {number}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    id: number;
    /**
     * 企業名
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    name: string;
    /**
     * 企業正式名
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    formalName: string;
    /**
     * 企業ロゴURL
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    logo: string;
    /**
     * 企業イメージ写真URL
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    image: string;
    /**
     * HPのURL
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    url: string;
    /**
     * 共通メールアドレス
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    email: string;
    /**
     * 住所
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    address: string;
    /**
     * 従業員数
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    numOfEmployees: string;
    /**
     * 従業員平均年齢
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    averageAge: string;
    /**
     * 会社設立日
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    establishmentDate: string;
    /**
     * 会社資本金
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    capitalStock: string;
    /**
     * 主要株主
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    majorShareholder: string;
    /**
     * 売上
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    sales: string;
    /**
     * 採用実績
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    recruitmentRecord: string;
    /**
     * 企業紹介文
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    description: string;
    /**
     * 事業内容
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    businessDetails: string;
    /**
     * 企業理念
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    philosophy: string;
    /**
     * 代表者名
     * @type {string}
     * @memberof AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail
     */
    representative: string;
}

/**
 * Check if a given object implements the AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail interface.
 */
export function instanceOfAppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "formalName" in value;
    isInstance = isInstance && "logo" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "numOfEmployees" in value;
    isInstance = isInstance && "averageAge" in value;
    isInstance = isInstance && "establishmentDate" in value;
    isInstance = isInstance && "capitalStock" in value;
    isInstance = isInstance && "majorShareholder" in value;
    isInstance = isInstance && "sales" in value;
    isInstance = isInstance && "recruitmentRecord" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "businessDetails" in value;
    isInstance = isInstance && "philosophy" in value;
    isInstance = isInstance && "representative" in value;

    return isInstance;
}

export function AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetailFromJSON(json: any): AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail {
    return AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetailFromJSONTyped(json, false);
}

export function AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'formalName': json['formalName'],
        'logo': json['logo'],
        'image': json['image'],
        'url': json['url'],
        'email': json['email'],
        'address': json['address'],
        'numOfEmployees': json['numOfEmployees'],
        'averageAge': json['averageAge'],
        'establishmentDate': json['establishmentDate'],
        'capitalStock': json['capitalStock'],
        'majorShareholder': json['majorShareholder'],
        'sales': json['sales'],
        'recruitmentRecord': json['recruitmentRecord'],
        'description': json['description'],
        'businessDetails': json['businessDetails'],
        'philosophy': json['philosophy'],
        'representative': json['representative'],
    };
}

export function AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetailToJSON(value?: AppSchemasGeneralSelectionsGeneralGetSelectionsCompanyDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'formalName': value.formalName,
        'logo': value.logo,
        'image': value.image,
        'url': value.url,
        'email': value.email,
        'address': value.address,
        'numOfEmployees': value.numOfEmployees,
        'averageAge': value.averageAge,
        'establishmentDate': value.establishmentDate,
        'capitalStock': value.capitalStock,
        'majorShareholder': value.majorShareholder,
        'sales': value.sales,
        'recruitmentRecord': value.recruitmentRecord,
        'description': value.description,
        'businessDetails': value.businessDetails,
        'philosophy': value.philosophy,
        'representative': value.representative,
    };
}

