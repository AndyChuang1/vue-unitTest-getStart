<template>
  <div class="about">
    <h1>This is an about page</h1>
    <label>Name : </label>
    <input v-model="name" />
    <button class="submit" v-on:click="isAdmin = !isAdmin">{{ btnMsg }}</button>
    <Detail :msg="name" :isAdmin="isAdmin"></Detail>
  </div>
</template>
<script>
import Detail from '@/components/About/Detail.vue';

export default {
  components: {
    Detail,
  },
  data() {
    return {
      name: '',
      isAdmin: false,
    };
  },
  computed: {
    btnMsg() {
      return this.isAdmin ? 'logout' : 'login';
    },
  },
};
</script>
<style lang="scss" scoped>
.submit {
  margin-left: 1rem;
}
</style>
