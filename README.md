vue-loading-rate
====
初期読み込みの時に利用する想定で、Promiseを返す非同期処理群の読み込み率の計算を行います。  
※これはコンポーネントではありません。Vuexを利用した機能です。

## Demo
https://high-g.github.io/vue-loading-rate/

## Install
src/store.jsのstate, mutation, actionや  
store.js内で利用している変数や関数をコピーして利用します。

## Usage
### 手順
0.　Vuexが利用できる開発環境を用意します。  

1.　init処理を行うコンポーネントのscript部で、下記を記述します。
```
import { mapState } from 'vuex'
```
2.　script部のcomputedで、以下の様に記述するとvuexの値を利用できます。
```
...mapState({
  progressRate: state => state.progressRate,
  loadState: state => state.loadState
}),
```

### Vuexのstate
`progressRate` ：読み込み率が自動的に代入されます。  
`loadState` ：初期状態だと`false`、非同期処理が全て完了したタイミングで`true`
