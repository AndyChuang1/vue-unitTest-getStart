<template>
  <div class="Reverse">
    <input type="text" v-model="inputData" />
    <div class="result">Reverse: {{ reverse }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputData: '',
    };
  },
  computed: {
    reverse() {
      return this.inputData
        .split('')
        .reverse()
        .join('');
    },
  },
};
</script>
