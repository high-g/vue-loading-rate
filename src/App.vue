<template>
  <div id="app">
    <p>ロード進捗率：{{ progressRate }}</p>
    <p v-if="loadState">ロードが完了しました。</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      progressRate: state => state.progressRate,
      loadState: state => state.loadState
    }),
  },
  created() {
    this.$store.dispatch('initLoading');
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
