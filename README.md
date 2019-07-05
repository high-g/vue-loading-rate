vue-loading-rate
====
初期読み込みの時に利用する想定で、Promiseを返す非同期処理群の読み込み率の計算を行います。  
※これはコンポーネントではありません。Vuexを利用した機能です。

## Demo
https://high-g.github.io/vue-loading-rate/

## Install
src/store.jsのstate, mutation, actionや  
store.js内で利用している変数や関数をコピーして利用

## Usage
### 手順
0.　Vuexが利用できる開発環境を用意  

1.　init処理を行うコンポーネントのscript部で、下記を記述
```
import { mapState } from 'vuex'
```
2.　script部のcomputedで、以下の様に記述するとvuexの値を利用できる
```
...mapState({
  progressRate: state => state.progressRate,
  loadState: state => state.loadState
}),
```
3.　`progressRate` に読み込み率が自動的に代入されるので、読み込み率を利用したアニメーション等を実装する時は、これを利用する。  

4.　`loadState` は、非同期処理が全て完了したタイミングで`true`になる。初期状態は`false`。
