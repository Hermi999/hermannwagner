<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row id="my-cv-text">
        <v-flex sm2></v-flex>
          <v-flex sm8>
            <h2>Blog</h2>
            <br><br>
            <b>COMING SOON ...</b>
          </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

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
  background-color: #d8eeff;
  color: #093a61;
  height: 100%;
}
#my-cv-text {
  margin-top: 20px;
  text-align: center;
  font-size: 1.15em;
}
</style>
