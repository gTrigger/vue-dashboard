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
        <div class="container-menu grid-item" id="menu">
            <app-sidebar/>
        </div>
        <div class="container-descr grid-item" id="descr" v-if="isDescriptionVisible" v-on:clickedonme="this.$data.isTableVisible=!this.$data.isTableVisible">
            <app-description/>
        </div>
        <div class="container-graph grid-item" id="graph" v-if="isGraphVisible">
            <app-graph/>
        </div>
        <div class="container-table grid-item" id="table" v-if="isTableVisible">
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
import AppGraph from "../components/graph/Graph.vue";

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
      clickedOnChild: function(id) {
          console.log("Omg, you clicked on my " + id + "! Why oh why!")
      }
  },
  mounted: function () {
        this.$on('clicked-on-me', this.clickedOnChild)
  },
  components: {
      AppGraph,
      AppSidebar,
      AppTable,
      AppDescription,
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
