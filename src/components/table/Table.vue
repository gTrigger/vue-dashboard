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
    <form class="add-new-row" >
      <template>
        <!--<datepicker placeholder="Input action date"
                    clear-button
                    input-class="datepicker-input"
                    v-model="form.action_date"
                    format="dd.MM.yyyy"
                    @input="getDate"
        />-->
        <b-form-input type="date" placeholder="Input action date" v-model="form.action_date"/>
      </template>

      <template>
        <b-form-input type="text" placeholder="Input action name" v-model="form.action_name"/>
      </template>

      <template>
        <b-form-input type="text" placeholder="Input project id" v-model="form.project_ID"/>
      </template>

      <template>
        <b-form-input type="text" placeholder="Input client name" v-model="form.client_name"/>
      </template>

      <template>
        <b-form-input type="text" placeholder="Input comment" v-model="form.comment"/>
      </template>

      <template>
        <font-awesome-icon v-bind:icon="['fas', 'plus']" class="add-new-row-action" @click="submitNewRow"/>
      </template>
    </form>
    <br>
    <br>
    <b-table striped
             hover
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="tableItems"
             :fields="tableFields"
    >
      <template slot="action_btn" slot-scope="data">
        <font-awesome-icon v-bind:icon="['fas', 'trash-alt']" @click="deleteTableRow"/>
      </template>
    </b-table>
  </div>
</template>

<script>
    import Vue from 'vue';
    import bTable from 'bootstrap-vue/es/components/table/table';
    import 'vue-bootstrap-datetimepicker/dist/vue-bootstrap-datetimepicker.min';
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';

    Vue.component('b-form-input', bFormInput);
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
                    { key: 'client_name', sortable: true, label: 'Client name' },
                    { key: 'comment', sortable: true, label: 'Comment' },
                    { key: 'action_btn', sortable: false, label: 'Action'}
                ],
                tableItems: [
                    { action_date: '22.03.18', comment: "", client_name: 40, action_name: 'Click once', project_ID: '2' },
                    { action_date: '22.03.18', comment: "", client_name: 21, action_name: 'Hover', project_ID: '3' },
                    { action_date: '22.03.18', comment: "Clicked on sidebar", client_name: 89, action_name: 'Double click', project_ID: '1' },
                    { action_date: '22.03.18', comment: "Made it active", client_name: 38, action_name: 'Active', project_ID: '4' },
                ],
                form: {
                    action_date: '',
                    action_name: '',
                    project_ID: '',
                    client_name: '',
                    comment: ''
                }
            }
        },
        methods: {
            deleteTableRow: function(index) {
                let modifiedItemsArray = this.tableItems;
                modifiedItemsArray.splice(index, 1);
                this.$emit('update:items', modifiedItemsArray);
            },
            submitNewRow: function() {
                let modifiedItemsArray = this.tableItems;
                modifiedItemsArray.push({
                    action_date: this.form.action_date,
                    action_name: this.form.action_name,
                    project_ID: this.form.project_ID,
                    client_name: this.form.client_name,
                    comment: this.form.comment

                });
                this.$emit('update:items', modifiedItemsArray);
                this.form = {
                    action_date: '',
                    action_name: '',
                    project_ID: '',
                    client_name: '',
                    comment: ''
                };
                console.log(modifiedItemsArray);
                console.log(this.form.action_date);
            },
            getDate(value) {
                this.newEvent.startDate = moment(value + ":07", moment.ISO_8601).format("x");
            }
        },
        components: {
        }
    }
</script>
<style src="./table.scss" scoped lang="scss">
  @import "~bootstrap-vue/es/components/table/table.css";
</style>

