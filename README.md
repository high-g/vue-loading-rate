# vue-loading-rate

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
3.　非同期処理群を`src/store.js`の`action`にて、`initLoading`を用意しているので、
下記の様にpromsArrの中に記述していく。
```
const promsArr = [
  // Promiseを返り値にもつ非同期処理を記載する
  sampleProc(1000),
  sampleProc(3000),
  sampleProc(5000),
  sampleProc(2000),
  sampleProc(6500),
  sampleProc(1500)
]
```
4.　Promiseの記述は下記の様にPromiseをreturnすることを想定。
```
return new Promise(resolve => {
  // 処理内容
  resolve()
})
```


### Vuexのstate
`progressRate` ：読み込み率が自動的に代入されます。  
`loadState` ：初期状態だと`false`、非同期処理が全て完了したタイミングで`true`
