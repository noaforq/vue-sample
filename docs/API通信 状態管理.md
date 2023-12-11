# API通信 / 状態管理

## 概要

ここでは、API通信とstoreによる状態管理について記載します。

基本的に、propsによる受け渡しで状態を管理することで
`view-component` や `parts-component` などの表示やフロントのロジックに責務を持つコンポーネントを作ることによって
再利用性の高いコンポーネントの作成ができます。

基本的には、propsとcomponentの名前に関連性がある場合はpropsにする必要がある。

## API通信

api通信はFetchを利用して行います。

API通信は型ファイルを使用するために `openapi-generator-cli` を使用しています。

### 型ファイル生成方法

[Github: triple-four/scout-openapi-json-generator](https://github.com/triple-four/scout-openapi-json-generator) を使って、`scout-web` リポジトリルートに設置した後、

```bash
docker exec -it scout-web bash
# scout-webコンテナに入って
make generate_api_fetch
```


を実行することで、API通信に必要な型ファイルとインターフェースを自動生成することができます。

### 通信方法

`instantiateApi.ts` を参照してください。


## 参考

[props のバケツリレーって何が悪いんだっけ](https://scrapbox.io/fsubal/props_%E3%81%AE%E3%83%90%E3%82%B1%E3%83%84%E3%83%AA%E3%83%AC%E3%83%BC%E3%81%A3%E3%81%A6%E4%BD%95%E3%81%8C%E6%82%AA%E3%81%84%E3%82%93%E3%81%A0%E3%81%A3%E3%81%91)

[< 戻る](./00-getting-started.md)
