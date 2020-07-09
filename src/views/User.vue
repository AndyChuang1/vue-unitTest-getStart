<template>
  <div class="Weather">
    <h1 id="text">{{ Name }}</h1>
    <button id="getUser2" @click="getUser(2)">Get User2</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      Name: '',
    };
  },
  created() {
    this.getUser(1);
  },
  methods: {
    getUser(id) {
      axios
        .get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          const { data } = res;
          this.Name = data.username;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
