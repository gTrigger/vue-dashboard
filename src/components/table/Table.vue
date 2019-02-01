<template>
  <div class="table">
    <h1>LAST ACTIONS</h1>
    <br>
    <!--<div class="table-top-actions">
      <font-awesome-icon v-bind:icon="['fas', 'plus']" @click=""/>
      &nbsp;
      &nbsp;
      <font-awesome-icon v-bind:icon="['fas', 'trash-alt']" @click=""/>
    </div>-->
    <b-table :fields="addNewRowFields"
    >
      <template slot="action-date" slot-scope="data">
        <input type="datetime-local"/>
      </template>
      <template slot="action_btn" slot-scope="data">
        <font-awesome-icon v-bind:icon="['fas', 'plus']"/>
      </template>
    </b-table>
    <b-table striped
             hover
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="tableItems"
             :fields="tableFields"
    >
      <template slot="action_btn" slot-scope="data">
        <font-awesome-icon v-bind:icon="['fas', 'trash-alt']"/>
      </template>
    </b-table>
  </div>
</template>

<script>
    import Vue from 'vue';
    import bTable from 'bootstrap-vue/es/components/table/table';
    import 'vue-bootstrap-datetimepicker/dist/vue-bootstrap-datetimepicker.min';
    import AppConfirmModal from '../modals/ConfirmModal';

    Vue.component('b-table', bTable);

    export default {
        data () {
            return {
                sortBy: 'age',
                sortDesc: false,
                tableFields: [
                    { key: 'action_date', sortable: true, label: 'Action date' },
                    { key: 'action_name', sortable: true, label: 'Action' },
                    { key: 'project_ID', sortable: true, label: 'Project ID' },
                    { key: 'client_name', sortable: true, label: 'Client date' },
                    { key: 'comment', sortable: true, label: 'Comment' },
                    { key: 'action_btn', sortable: false, label: 'Action'}
                ],
                tableItems: [
                    { action_date: '22.03.18', comment: "", client_name: 40, action_name: 'Click once', project_ID: '2' },
                    { action_date: '22.03.18', comment: "", client_name: 21, action_name: 'Hover', project_ID: '3' },
                    { action_date: '22.03.18', comment: "Clicked on sidebar", client_name: 89, action_name: 'Double click', project_ID: '1' },
                    { action_date: '22.03.18', comment: "Made it active", client_name: 38, action_name: 'Active', project_ID: '4' },
                ],
                addNewRowFields: [
                    { key: 'action_date', sortable: true, label: 'Action date' },
                    { key: 'action_name', sortable: true, label: 'Action' },
                    { key: 'project_ID', sortable: true, label: 'Project ID' },
                    { key: 'client_name', sortable: true, label: 'Client date' },
                    { key: 'comment', sortable: true, label: 'Comment' },
                    { key: 'action-btn', sortable: false, label: 'Action'}
                ],
                addNewRowItems: [
                    { action_date: '', comment: '', client_name: '', action_name: '', project_ID: '' },
                ]
            }
        },
        methods: {
            deleteTableRow: function() {

            }
        },
        components: {
            AppConfirmModal
        }
    }
</script>
<style src="./table.scss" scoped lang="scss">
  @import "~bootstrap-vue/es/components/table/table.css";
</style>

