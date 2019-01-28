<template>
  <div id="page-layout">
    <div class="container-welcome-alert-box hidden" id="welcomeModal" role="dialog">
    </div>
    <div class="container-confirm-alert-box hidden" id="confirmModal" role="dialog">
    </div>
    <div class="overlay">
      <div id="welcome-cat" class="not-hidden">
        <img src="https://cdn170.picsart.com/upscale-246067230013212.png?r1024x1024" width="400px">
      </div>
      <div class="wrapper">
        <div class="container-menu grid-item" id="menu">
            <sidebar/>
        </div>
        <div class="container-descr grid-item hidden" id="descr">
        </div>
        <div class="container-graph grid-item hidden" id="graph">
        </div>
        <div class="container-table grid-item hidden" id="table">
            <table/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar.vue';
import Table from '../components/table/Table.vue';
import ConfirmModal from '../components/table/Table.vue';

export default {
  name: 'Layout',
  components: {
      Sidebar,
      Table
  }
}
</script>

<style scoped src="../assets/css/main.css">
</style>
