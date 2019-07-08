import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let d = 0
const procArr = [] // 処理結果の格納配列

export default new Vuex.Store({
  state: {
    progressRate: 0,
    loadState: false
  },
  mutations: {
    /**
     * addProgressRate 進捗率
     */
    addProgressRate(state, num) {
      state.progressRate = num
    },

    /**
     * loadComplete ロード完了状態
     */
    loadComplete(state) {
      state.loadState = true
    },
  },
  actions: {
    /**
     * initLoading 初期読み込み時
     * @param commit
     * @returns {Promise<*>}
     */
    initLoading({ commit }) {
      const promsArr = [
        // Promiseを返り値にもつ非同期処理を記載する
        sampleProc(1000),
        sampleProc(3000),
        sampleProc(5000),
        sampleProc(2000),
        sampleProc(6500),
        sampleProc(1500)
      ]

      allProgress(promsArr, commit, () => {
        commit('loadComplete')
      })
    }
  }
})

/**
 * allProgress 進捗率管理
 * @param proms
 * @param progressCallBack
 * @param completeCallBack
 * @returns {Promise<[any, any, any, any, any, any, any, any, any, any] | never>}
 */
const allProgress = (proms, commit, completeCallBack) => {
  proms.forEach((p) => {
    p.then((res) => {
      calcProgress(res, proms, commit)
    })
  })
  return Promise.all(proms).then(() => {
    completeCallBack()
  })
}

/**
 * calcProgress 進捗率計算
 * @param res
 * @param promsArr
 * @param callBack
 */
const calcProgress = (res, promsArr, commit) => {
  d++
  procArr.push(res)
  commit('addProgressRate', d * 100 / (promsArr.length))
}


/***************************** サンプル処理ここから *****************************/

const sampleProc = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`waited ${ms}`)
      resolve()
    }, ms)
  })
}

/***************************** サンプル処理ここまで *****************************/