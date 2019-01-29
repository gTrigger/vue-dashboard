<template>
  <div>
    <b-table :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="items"
             :fields="fields">
    </b-table>
  </div>
</template>

<script>
    import Vue from 'vue';
    import bTable from 'bootstrap-vue/es/components/table/table';

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
                    { key: 'Comment', sortable: true }
                ],
                items: [
                    { Comment: "", Number: 40, Action_name: 'Click once', id: '2' },
                    { Comment: "", Number: 21, Action_name: 'Hover', id: '3' },
                    { Comment: "Clicked on sidebar", Number: 89, Action_name: 'Double click', id: '1' },
                    { Comment: "Made it active", Number: 38, Action_name: 'Active', id: '4' }
                ]
            }
        }
    }
</script>
<style src="./table.scss" scoped lang="scss">
  @import "~bootstrap-vue/es/components/table/table.css";
</style>

