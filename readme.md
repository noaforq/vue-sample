# スカウト機能フロントリポジトリ

## 概要

TechFUL+の追加機能(Add-On)となる新スカウト機能のフロントのソースを管理するリポジトリとなります。
[Github: triple-four/techful-web](https://github.com/triple-four/techful-web)をベースに作成しています。

## ブランチ戦略・Pull Requestのルールについて

[Github: triple-four/scout-api](https://github.com/triple-four/scout-api)を参照してください。

## 作業の流れ

(1) `main` ブランチから作業用のブランチを切る

(2) (1)で切った作業用のブランチで開発を行い、スモークテストを行う

(3) `main` と `development` ブランチに向けたPull Requestを作成する

(4) (3) でPull Requestを作成すると、継続的インテグレーション(Continuous Integration; CI)により自動で単体テストがトリガされる
この単体テストが通った後、チームメンバにレビュを依頼する

(5) (4) のチームメンバによるレビュによりPull RequestがApproveされたら `main` にマージする

(6) `main` ブランチの内容が検証環境にデプロイされるので、同環境内で結合テスト(Integration Testing; IT)および統合テスト(End to End Test; E2E Testing) を行う

### 起動方法

コマンド プロンプト (Windows)もしくはターミナル (Mac)からこのreadme.mdがあるディレクトリまで移動して、

#### Windows

```ps
copy .env.example .env
docker compose up -d
```

#### Mac

```bash
cp .env.example .env
docker compose up -d
```
でOK！

コンテナ名には

```bash
docker exec -it scout-web bash
```

で入れます。

## API通信について

今回はAPI Aggregationを目的としたBackend for Frontend (BFF) を介して新スカウト機能およびTechFUL+側のAPIへアクセスします。
そのためのフロントエンド側のAPI通信を行うコードは [Github: OpenAPITools/openapi-generator](https://github.com/OpenAPITools/openapi-generator)で生成しています。

[Github: triple-four/scout-openapi-json-generator](https://github.com/triple-four/scout-openapi-json-generator) で `scout-web` 用の `openapi.json` を生成し、リポジトリ配下に配置した後、`scout-web` のコンテナに入って

```bash
make generate_api_fetch
```

を実行してください。

### リンタについて

```bash
yarn script-lint # TypeScriptスクリプトのリンタを実行
yarn style-lint  # SCSSスタイルのリンタを実行
```

### Google Chromeおよび派生ブラウザ(Chromium, Vivaldi, Brave, etc.)をお使いの方へ

[いっしきまさひこBLOG: Google Chromeでlocalhostへアクセスするとhttpsにリダイレクトされてしまう問題の解消方法](https://blog.masahiko.info/entry/2020/03/10/000025)

どうやら初期状態ではlocalhostへの接続が勝手にHTTPSに変換される (HSTS; HTTP Strict-Transport-Security) ので、上記手順で無効化してください。
