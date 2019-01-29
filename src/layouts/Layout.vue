<template>
  <div id="page-layout">
    <div class="container-welcome-alert-box hidden" id="welcomeModal" role="dialog">
    </div>
    <div class="container-confirm-alert-box hidden" id="confirmModal" role="dialog">
    </div>
    <div class="overlay">
      <div id="welcome-cat" v-if="isCatVisible">
        <img src="https://cdn170.picsart.com/upscale-246067230013212.png?r1024x1024" width="400px">
      </div>
      <div class="wrapper">
        <div class="container-menu" id="menu">
            <app-sidebar v-on:widget-btn-click="toggleWidgetVisibility"/>
        </div>
        <div class="container-descr" id="descr" v-if="isDescriptionVisible">
            <app-description/>
        </div>
        <div class="container-graph" id="graph" v-if="isGraphVisible">
            <app-graph/>
        </div>
        <div class="container-table" id="table" v-if="isTableVisible">
            <app-table/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from '../components/sidebar/Sidebar.vue';
import AppTable from '../components/table/Table.vue';
import AppDescription from '../components/description/Description.vue';
import AppGraph from "../components/graph/Graph.vue"

export default {
  name: 'Layout',
  data: function() {
      return {
          isTableVisible: true,
          isGraphVisible: true,
          isDescriptionVisible: true
      };
  },
  methods: {
      toggleWidgetVisibility: function(widgetBtnName) {
          switch (widgetBtnName) {
              case 'user':
                  this.isDescriptionVisible = !this.isDescriptionVisible;
                  break;
              case 'graph':
                  this.isGraphVisible = !this.isGraphVisible;
                  break;
              case 'table':
                  this.isTableVisible = !this.isTableVisible;
                  break;
              default: console.log("There's no default widget");
          }
      },

  },
  mounted: function () {
  },
  components: {
      AppGraph,
      AppSidebar,
      AppTable,
      AppDescription
  },
  computed: {
      isCatVisible() {
          return !this.isTableVisible;
      }
  }
}
</script>

<style scoped src="../assets/css/main.css">
</style>
