import { Configuration } from '../types/api'

/**
 * API通信を行うためのインターフェースのインスタンスを取得する
 * @param {typeof T} constructor 通信を行いたいAPIのインターフェースのクラス情報
 * @returns {T} API通信を行うためのインターフェースのインスタンス
 * @example
 * ```ts
 *     const exampleApiInterface = instantiateApiFactory(ExampleApi);
 *
 *     const exampleData = (await exampleApiInterface.getExample()).data;
 * ```
 */
export function instantiateApi<T>(constructor: { new(configuration: Configuration): T })
{
    const runtimeConfig = useRuntimeConfig()
    const apiUrl = runtimeConfig.public.apiUrl

    const apiTransactionConfiguration = new Configuration({
        basePath: apiUrl,
        headers: {
            // TODO: これは適当なBearer Tokenであるから、後でTechFUL+と繋ぎこみを行う
            'Authorization': 'Bearer 20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3NDksImV4cCI6MTcwMTE1MzgwMSwidG9rZW5fa2luZCI6MSwianRpIjoiZDM2ZjAzODU1NTQyNGM3OGI1NmMwMDRlMzc5ODk5N2IifQ.DPRNy4dGJ_ep_aUovAlpqGRN59fY1X4U4fRf-6OA01k',
        },
    })

    return new constructor(apiTransactionConfiguration);
}
