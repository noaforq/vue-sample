# husky

TODO: まだスカウト用に変更できていない。

## huskyとは
コミットやプッシュ時に、任意のコマンドを自動で実行できる。  
今回は`push`時に`yarn lint`と`yarn test`を実行するように設定してます。  

## 導入

````sh
$ yarn install
$ yarn prepare
$ chmod 777 .husky/pre-push
````

`push`時に下記のような文字列が出力されたらOK
````sh
yarn run v1.22.19
$ yarn lint:js && yarn lint:style && yarn lint:prettier
$ eslint --ext ".js,.ts,.vue" --ignore-path .gitignore .
````

## 使い方
`push`の時のみターミナルでお願いします。

````sh
$ git push origin [ブランチ名]

# example
$ git push origin develop
````
