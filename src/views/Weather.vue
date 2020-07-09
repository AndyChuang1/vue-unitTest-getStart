<template>
  <div class="Weather">
    <h1 id="text">{{ weather }}</h1>
    <button id="getWeather" @click="getWeather()">Get Weather</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weather: '',
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      axios
        .get(
          'https://api.openweathermap.org/data/2.5/weather?id=1670651&appid=7dad838277c0cc8fdf1a241d7c180753&units=metric',
        )
        .then((res) => {
          const { data } = res;
          this.weather = data.weather[0].main;
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
