<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div id="personal-img-wrapper">
          <img src="@/assets/hermann-wagner.jpg" alt="Hermann Wagner" id="personal-img">
        </div>

        <v-layout row wrap id="intro-text">
          <v-flex sm3></v-flex>
          <v-flex sm6>
            <span><b>I'm Hermann</b></span><br> <br>

            a highly motivated <b>System/Cloud Architect</b> and <b>Full Stack Developer</b> with a strong growth mindset and the ability to learn and adapt very fast. 
            <br><br>
            Currently I show C-Levels in Austria and Switzerland how they can benefit from the Microsoft Cloud (Azure) and achieve more for their organization. This includes all kinds of digital transformation workloads from IT infrastructure and serverless app development to IoT, Machine Learning and AI.
          </v-flex>
        </v-layout>
        
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        text: ''
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
#personal-img-wrapper {
  border: 3px solid white;
  border-radius: 250px;
  padding: 0px;
  overflow: hidden;
  height: 295px;
  width: 250px;
  margin-top:10%;
}
#personal-img {
  padding: 0px;
  margin: 0px;
  height: 295px;
  width: 250px;
}
#intro-text {
  margin-top: 20px;
  text-align: center;
  font-size: 1.3em;
}

</style>
