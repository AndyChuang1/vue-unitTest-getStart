<template>
  <div class="detail">
    <h1 class="hello" v-if="isAdmin">Hello {{ msg }} !</h1>
    <h1 v-else>Please Login</h1>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    msg: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
