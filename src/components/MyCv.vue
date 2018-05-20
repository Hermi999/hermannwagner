<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row id="my-cv-text">
        <v-flex sm2></v-flex>
          <v-flex sm8>
            <h2>My CV</h2>
            You can find my CV embedded as image. On mobile devices you better <a href="static/cv.pdf" target="_blank">open it as PDF</a>.
            <br><br>

            <img id="cv" src="@/assets/cv.jpg">


            <v-card></v-card>
          </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.container{
  background-color: #fffcdf;
  color: #794534;
  height: 100%;
}
#my-cv-text {
  margin-top: 20px;
  text-align: center;
  font-size: 1.15em;
}

#cv {
  box-shadow: 1px 1px 22px black;
  width: 100%;
}
</style>
