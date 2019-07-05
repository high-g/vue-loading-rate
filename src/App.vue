<template>
  <div id="app">
    <div class="load" v-if="!finish">
      <p >ロード進捗率：{{ progressRate }}%</p>
      <div class="rate">
        <div class="rate--bar" :style="calcRate"></div>
      </div>
    </div>
    <p v-if="finish">ロードが完了しました。</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      finish: false
    }
  },
  computed: {
    ...mapState({
      progressRate: state => state.progressRate,
      loadState: state => state.loadState
    }),
    calcRate() {
      return `width: ${this.progressRate}%`
    }
  },
  watch: {
    loadState(res) {
      if(res) {
        setTimeout(() => {
          this.finish = true
        }, 1000)
      }
    }
  },
  created() {
    this.$store.dispatch('initLoading');
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.rate {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}

.rate--bar {
  height: 10px;
  background: #000;
  transition: width .5s ease-in-out;
}
</style>
