export type Authorization = {
    token: string,
    strategy: string,
    tokenExpirationTimestamp: number,
}

/**
 * TechFUL+の認証情報を検証してあげる
 * @returns {Authorization} Authorization 認証情報
 */
export function getAuthorization(): Authorization
{
    const runtimeConfig = useRuntimeConfig();

    const token = useCookie(`auth._token.${runtimeConfig.public.applicationEnvironment}`).value ?? 'undefined';
    const strategy = useCookie('auth.strategy').value ?? 'undefined';
    const tokenExpirationTimestamp = Number(useCookie(`auth._token_expiration.${runtimeConfig.public.applicationEnvironment}`).value ?? 0);

    return {token, strategy, tokenExpirationTimestamp}
}
