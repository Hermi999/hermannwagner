<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row id="my-cv-text">
        <v-flex sm2></v-flex>
          <v-flex sm8>
            <h2>Skills & Portolio</h2>
            <br>
            From the computer scientists perspective I’ve covered the following range of subjects in my jobs, studies and private projects:
            <br>

            <v-expansion-panel>
              <v-expansion-panel-content v-for="(item,i) in items" :key="i">
                <div slot="header">{{item.title}}</div>
                <v-card>
                  <v-card-text class="grey">{{item.text}}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: 'Software development processes',
            text: 'iterative Waterfall, Scrum, Kanban, Rapid prototyping, ASpice'
          },
          {
            title: 'Software planing, configuration and version management',
            text: 'IBM Request One, eASEE, Git, Subversion (SVN)'
          },
          {
            title: 'Platforms',
            text: 'Engine control units (embedded system), Amazon Web Services, Android, Desktop applications, Raspberry Pie, Linux, Windows, Real time operation systems'
          },
          {
            title: 'Requirements engineering',
            text: 'Stakeholder analysis, clarification, requirement specification incl. verification criteria, reviews, tracability, user stories, Gherkin, model-based, Doors (nextGen)'
          },
          {
            title: 'System and Software analysis and design',
            text: 'UML, SysML with IBM Rhapsody, Enterprise Architect, StarUML'
          },
          {
            title: 'Implementation',
            text: 'C, Ruby (on rails), JavaScript (also NodeJs), Python, Java, C++, model based / driven development'
          },
          {
            title: 'Website structure and design',
            text: 'HTML5, CSS3, HAML, GIMP'
          },
          {
            title: 'Software Testing',
            text: 'Debugging, unit tests, integration tests, regression testing, recorded testing, penetration testing, behavior and test driven development'
          },
          {
            title: 'Software Integration',
            text: 'Merging software packages, integrating more than 80 packages developed by individual teams into on deliverable program version, interface clarification and mapping'
          },
          {
            title: 'DevOps',
            text: 'Continuous testing, deployment and delivery (depends on industry), cloud infrastructure management (AWS), server monitoring and maintenance'
          },
          {
            title: 'Incident management',
            text: 'Problem analysis and escalation, 8D-reports'
          },
          {
            title: 'Quality',
            text: 'ISO26262, ASpice (incl. spot checks and assessments)'
          },
          {
            title: 'Reverse Engineering',
            text: 'Malware, embedded source code -> requirements, Unreal engine plugins'
          },
          {
            title: 'Information security',
            text: 'malware analysis (android, rootkit, trojans), penetration testing, exploit generation, code obfuscation, product security, corporate security, Security in automotive systems and intelligent transportation systems'
          },
          {
            title: 'Project management, knowledge transfer',
            text: 'customer/stakeholder analysis and meetings, planing software deliveries, tracking work packages, tracking quality goals, effort estimation, roll out of new processes, process definition, training of new employees, training of seniors'
          },
          {
            title: 'Special topics',
            text: 'Startups, Artificial intelligence and machine learning (ML), using computer games to generate synthetic data for ML algorithms, code obfuscation, RESTful Web services, Smart Homes, Predictive Maintenance, Game Engineering, Automotive Safety (redundancy, independence, periodic checks (e.g. watchdog), 100% code coverage, ASIL), Hardware Software Interface, System architectural views (static, dynamic, functional, technical, logical), AUTOSAR'
          }
        ]
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
  background-color: #dfffe0;
  color: #024405;
  height: 100%;
}
#my-cv-text {
  margin-top: 20px;
  text-align: center;
  font-size: 1.15em;
}
</style>
