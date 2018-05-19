<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row id="my-cv-text">
        <v-flex sm2></v-flex>
          <v-flex sm8>
            <h2>Skills & Portolio</h2>
            <br><br>
            From the computer scientists perspective I’ve covered the following range of subjects in my jobs, studies and private projects:
            <br>
            Software development processes: iterative Waterfall, Scrum, Kanban, Rapid prototyping, ASpice
            Software planing, configuration and version management: IBM Request One, eASEE, Git, Subversion (SVN)
            Platforms: Engine control units (embedded system), Amazon Web Services, Android, Desktop applications, Raspberry Pie, Linux, Windows, Real time operation systems
            Requirements engineering: Stakeholder analysis, clarification, requirement specification incl. verification criteria, reviews, tracability, user stories, Gherkin, model-based, Doors (nextGen)
            System and Software analysis and design: UML, SysML with IBM Rhapsody, Enterprise Architect, StarUML
            Implementation: C, Ruby (on rails), JavaScript (also NodeJs), Python, Java, C++, model based / driven development
            Website structure and design: HTML5, CSS3, HAML, GIMP
            Software Testing: Debugging, unit tests, integration tests, regression testing, recorded testing, penetration testing, behavior and test driven development
            Software Integration: Merging software packages, integrating more than 80 packages developed by individual teams into on deliverable program version, interface clarification and mapping
            DevOps: Continuous testing, deployment and delivery (depends on industry), cloud infrastructure management (AWS), server monitoring and maintenance
            Incident management: problem analysis and escalation, 8D-reports
            Quality: ISO26262, ASpice (incl. spot checks and assessments)
            Reverse Engineering: malware, embedded source code -> requirements, Unreal engine plugins
            Information security: malware analysis (android, rootkit, trojans), penetration testing, exploit generation, code obfuscation, product security, corporate security, Security in automotive systems and intelligent transportation systems
            Project management, knowledge transfer: customer/stakeholder analysis and meetings, planing software deliveries, tracking work packages, tracking quality goals, effort estimation, roll out of new processes, process definition, training of new employees, training of seniors
            Special topics: Startups, Artificial intelligence and machine learning (ML), using computer games to generate synthetic data for ML algorithms, code obfuscation, RESTful Web services, Smart Homes, Predictive Maintenance, Game Engineering, Automotive Safety (redundancy, independence, periodic checks (e.g. watchdog), 100% code coverage, ASIL), Hardware Software Interface, System architectural views (static, dynamic, functional, technical, logical), AUTOSAR
            As you can see, I’ve been busy the last couple of years :). And I only mentioned the topics and tasks I’ve done at least for some weeks. You can check out a few of my projects on the portfolio page.
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
