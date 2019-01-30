<template>
  <div class="table">
    <h1>LAST ACTIONS</h1>
    <b-table striped
             hover
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="items"
             :fields="fields"
    >
    </b-table>
  </div>
</template>

<script>
    import Vue from 'vue';
    import bTable from 'bootstrap-vue/es/components/table/table';
    import 'vue-bootstrap-datetimepicker/dist/vue-bootstrap-datetimepicker.min';

    Vue.component('b-table', bTable);

    export default {
        data () {
            return {
                sortBy: 'age',
                sortDesc: false,
                fields: [
                    { key: 'Action_name', sortable: true },
                    { key: 'id', sortable: true },
                    { key: 'Number', sortable: true },
                    { key: 'Comment', sortable: true },
                    { key: 'Date', sortable: true }
                ],
                items: [
                    { Date: '22.03.18', Comment: "", Number: 40, Action_name: 'Click once', id: '2' },
                    { Date: '22.03.18', Comment: "", Number: 21, Action_name: 'Hover', id: '3' },
                    { Date: '22.03.18', Comment: "Clicked on sidebar", Number: 89, Action_name: 'Double click', id: '1' },
                    { Date: '22.03.18', Comment: "Made it active", Number: 38, Action_name: 'Active', id: '4' },
                ]
            }
        }
    }
</script>
<style src="./table.scss" scoped lang="scss">
  @import "~bootstrap-vue/es/components/table/table.css";
</style>

