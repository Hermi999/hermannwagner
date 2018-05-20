<template>
  <v-app dark>
    <v-navigation-drawer
      id="left-nav"
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      width="200"
    >
      <v-list id="nav-items">
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to=item.link
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" :color="item.color"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!--
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        class="hidden-sm-and-down"
        icon 
        v-for="(item, i) in items" 
        :key="i"
        :to=item.link>
          <v-icon v-html="item.icon" :color="item.color"></v-icon>
      </v-btn>
      <!--
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
      -->
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <!--
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    -->
    <v-footer :fixed="fixed" height="auto" app class="footer">
      <v-btn fab dark small color="pink" id="btn-left" absolute left>
        <v-icon dark>arrow_back_ios</v-icon>
      </v-btn>
      <v-btn fab dark small color="pink" id="btn-right" absolute right>
        <v-icon dark>arrow_forward_ios</v-icon>
      </v-btn>
      <div id="footer-text">This website is a serverless Progressive Web App (PWA) and Single Page Application (SPA) based on Vue.js. </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'home',
        title: 'Home',
        link: '/',
        color: 'white'
      },
      {
        icon: 'mood',
        title: 'About me',
        link: 'aboutme',
        color: 'orange lighten-3'
      }, {
        icon: 'description',
        title: 'My CV',
        link: '/mycv',
        color: 'yellow lighten-3'
      }, {
        icon: 'style',
        title: 'Skills',
        link: '/skills',
        color: 'green lighten-3'
      }, {
        icon: 'mode_edit',
        title: 'Blog',
        link: '/blog',
        color: 'blue lighten-3'
      }, {
        icon: 'contact_mail',
        title: 'Contact',
        link: '/contact',
        color: 'red lighten-3'
      }, {
        icon: 'settings',
        title: 'This Website',
        link: '/technology',
        color: 'purple lighten-3'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Hermann Wagner'
    }
  },
  name: 'App'
}
</script>


<style>
  .content {
    background: url("/static/img/background.jpg") no-repeat center center fixed;
    background-size: cover; 
  }
  .footer {
    font-size: 0.85em;
    text-align: center;
    padding-top: 10px;
    display: block;
  }
  #footer-text {
    margin-bottom: 8px;
    margin-left: 5px;
    margin-right: 5px;
  }
  #btn-left {
    top: -50px;
    padding-left: 7px;
    display: none;
  }
  #btn-right {
    top: -50px;
    padding-left: 0px;
    display: none;
  }

</style>