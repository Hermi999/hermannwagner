<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row id="about-me-text">
        <v-flex sm2></v-flex>
          <v-flex sm8>
            <h2>Motivation</h2>
            Hi! My name is Hermann and I’m a passionate Software Engineer and System/Cloud Architect currently located in Dublin, Ireland.
            I've a strong growth mindset and really love to learn new things. 
            Although I’m very interested in cutting-edge technology my eager for knowledge is non-limited to technical topics. Startups, project, process and people management, agile methodologies, teaching, politics, environmentalism and natural sciences are topics I’ve been interested on in the last couple of years.           

            <br><br>

            <h2>Private</h2>
            In my free time I like to do all kinds of sports, like football, beach volleyball, running, cycling, workout, table tennis, squash, etc. 
            Additionally I spend my time with cooking and reading news, books and autobiographies. 
            <br><br>

            <h2>Career</h2>
            In August 2017 I moved to Dublin to join Microsoft's Inside Sales Organisation as so-called Technology Solutions Professional for the Microsoft Cloud (Azure). 
            Basically this means that I help Account Executives and Customer Success Managers in removing technical blockers and showing customer why 
            Azure offers the right solutions and services for them. This includes high-level presentations for C-Levels and management, product demos 
            (Azure includes over 300 services), architectural design for Cloud Services, setting up proof of concepts and training of my peers and colleagues.
            <br><br>
            As a former software designer, programmer and system architect for BMW engine control units I also have more than 6 years of experience in distributed 
            software development in the automotive industry. The Robert Bosch AG in Vienna was my first job and I really learned a lot there. This includes
            project and process management, requirements engineering, SW development and testing, system architectural design, and many more. 
            <br><br>
            
            I can be really creative and I enjoy realizing innovative ideas and building new things. This is why I deeply got involved with the Startup Community 
            in 2015 and founded my own company together with a friend. "Airbnb for Test and Measurement devices" - An online marketplace where 
            companies can sell and rent expensive test and measurement equipment. We called it Rentog. Although we had really good ideas, got funding from an Accelerator 
            and worked about 80 hours per week, unfortunately we had to shut it down after 2 years. Nevertheless working two years as CTO / Full Stack Developer for Rentog 
            gave me valuable insights in the Startup world and I learned a ton. You can read more about the reasons why Rentog failed on <a target="_blank" href="https://www.linkedin.com/pulse/my-startup-failed-what-ive-learned-from-hermann-wagner/">my LinkedIn post</a>.  

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
  background-color: #ffd28e;
  color: #6b3102;
  height: 100%;
}
#about-me-text {
  margin-top: 20px;
  text-align: justify;
  font-size: 1.15em;
}
</style>
