<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row id="my-cv-text">
        <v-flex sm2></v-flex>
          <v-flex sm8>
            <h2>This Website</h2>
            The website is based on a serverless architecture with focus on high scalability, very low load and response times and minimal costs.
            Of course it's not neccessary for a personal website to handle thousands of concurrant requests, but this website should be a showcase 
            for a serverless Single Page Application and the architecture can be used for web apps handling thousands of people from all over the world.
            <br><br>

            <h3>Architecture</h3>
            <b>Fronted:</b> 
            To reach this goals the front end architecture is based on a Single Page Application (SPA) with Vue.js and the Progressive Web App (PWA) concept.
            The frontend and all assets are served from Azure Blob Storage which means that no server is needed to serve the HMTL, JavaScript and CSS files.
            Because the blob storage is bound to a region (e.g. West Europe --> Amsterdam) there is a latency delay if visitors browse the site from 
            Asia or Oceania. By using a CDN we can easily come around this issue by caching the files accross servers all over the world.<br>
            I know that the site is quite <b>colorful</b>, but a) I didn't want to have a standard design and b) I focused on having a high 
            contrast ratio (AAA: 7.0) on every site so that the text is still very user friendly to read. 
            <br><br>
            <b>Backend/API:</b>
            The backend/API is hold very slim and serverless by using Azure Functions and Azure Logic App. Those service scale automatically and 
            I have zero maintenance since Microsoft is doing all the security patches, monitoring, scaling and load distribution for those services.
            <br>
            For login to the backend I use Azure AD B2C which handles the authentication and holds all the user accounts. The data storage itself is
            implemented with CosmosDB. Again both service autoscale and I don't need to take care of the management of them.
            <br><br>
            <h3>Costs</h3>
            The costs are minimal. At least as long as there are just a few thousand visitors per week. At the moment the total costs per month are 
            €xx and is composed of: 
            <br><br>

            <v-flex md8>
              <v-card>
                <v-toolbar color="purple" dark>
                  <v-toolbar-title>Costs per month</v-toolbar-title>
                </v-toolbar>
                <v-list two-line subheader>
                  <v-list-tile v-for="item in items" :key="item.title" avatar :href="item.link" target="_blank">
                    <v-list-tile-avatar>
                      <!--<v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>-->
                      <v-avatar
                        :tile="false"
                        :size="39"
                        color="grey lighten-4"
                      >
                        <img :src="loadImage(item.image)" alt="avatar">
                      </v-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      {{ item.costs }}
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-divider inset></v-divider>
                  <v-list-tile avatar class="green lighten-3">
                    <v-list-tile-avatar>
                      <!--<v-icon :class="items2.iconClass">{{ items2.icon }}</v-icon>-->
                      <v-avatar
                        :tile="false"
                        :size="39"
                        color="grey lighten-4"
                      >
                        <img src="@/assets/azure.png" alt="avatar">
                      </v-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title><b>{{ items2.title }}</b></v-list-tile-title>
                      <v-list-tile-sub-title>{{ items2.subtitle }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <b>1.20 €</b>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
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
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Azure Blob Storage', image: 'azure-blob-storage.png', link: 'https://azure.microsoft.com/en-us/services/storage/blobs/', subtitle: '1000 MB, 10.000 write operations, 100.000 read operations ', costs: '0.10 €' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Azure Logic App', image: 'azure-logic-app.png', link: 'https://azure.microsoft.com/en-us/services/logic-apps/', subtitle: '50 calls (emails) per day, 2 standard connectors, 100 MB data storage', costs: '0.29 €' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Azure Functions', image: 'azure-function.jpg', link: 'https://azure.microsoft.com/en-us/services/functions/', subtitle: '15.000 keep alive calls with 300ms, 100.000 proxy calls with 50ms', costs: '0.00 €' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Azure CDN', image: 'azure-cdn.png', link: 'https://azure.microsoft.com/en-us/services/cdn/', subtitle: '10.000 website calls via CDN with 5MB data transmission each', costs: '1.81 €' },
          /* { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Azure CosmosDB', image: 'azure-cosmos-db.png', link: 'https://azure.microsoft.com/en-us/services/cosmos-db/', subtitle: 'xxxxx', costs: '0.05 €' }, */
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Azure AD B2C', image: 'azure-ad-b2c.png', link: 'https://azure.microsoft.com/en-us/services/active-directory-b2c/', subtitle: '50.000 users, 50.000 authentications', costs: '0.00 €' }
        ],
        items2: {
          icon: 'assignment',
          iconClass: 'blue white--text',
          title: 'Total costs',
          subtitle: 'per months for hosting this website',
          image: '@/assets/azure.png'
        }
      }
    },
    methods: {
      loadImage (imgName) {
        return require('@/assets/' + imgName)
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
  background-color: #faecfd;
  color: #611382;
  height: 100%;
}
#my-cv-text {
  margin-top: 20px;
  text-align: justify;
  font-size: 1.15em;
}
</style>
