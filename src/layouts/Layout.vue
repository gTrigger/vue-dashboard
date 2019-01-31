<template>
  <div id="page-layout">
    <div class="overlay">

      <div id="welcome-cat" v-if="isCatVisible">
        <img src="https://cdn170.picsart.com/upscale-246067230013212.png?r1024x1024" width="400px">
      </div>

      <div class="container-menu" id="menu">
            <app-sidebar v-on:widget-btn-click="toggleWidgetVisibility"/>
      </div>

      <div class="wrapper">

        <AppModal ref="modalRef"></AppModal>

        <div class="d-flex">

          <div class="container-descr" id="descr" v-if="isDescriptionVisible">
            <app-description/>
          </div>

          <div class="container-graph" id="graph" v-if="isGraphVisible">
            <app-graph/>
          </div>

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
import AppGraph from "../components/graph/Graph.vue";
import AppModal from "../components/modals/Modal.vue";
import Vue from 'vue';
import bModal from 'bootstrap-vue/es/components/modal/modal';

Vue.component('b-modal', bModal);

export default {
  name: 'Layout',
  data: function() {
      return {
          isTableVisible: false,
          isGraphVisible: false,
          isDescriptionVisible: false
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
          }
      },
      toggleWelcomeModalVisibility: function () {
          this.$refs.modalRef.showModal()
      }
  },
  mounted: function () {
      this.toggleWelcomeModalVisibility()
  },
  components: {
      AppGraph,
      AppSidebar,
      AppTable,
      AppDescription,
      AppModal
  },
  computed: {
      isCatVisible() {
          return !this.isTableVisible;
      }
  }
}
</script>

<style>
</style>
