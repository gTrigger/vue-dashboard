<template>
    <div class="container-table grid-item hidden" id="table">
        <h1>LAST ACTIONS</h1>
        <div class="table-actions" id="table-actions">
            <div class="container-searchbox">
                <form @submit="() => {return false;}">
                    <font-awesome-icon icon="search"/>
                    <input type="search" class="searchbox" id="table-searchbox" placeholder="Search..."
                           @keyup="tableSearch()">
                    <font-awesome-icon icon="search" class="search-cancel-btn" @click="clearSearchbox()"/>
                </form>
            </div>
            <div class="container-actions">
                <font-awesome-icon class="table-trash-btn" icon="trash-alt" @click="modalFabric('table')"/>
                <font-awesome-icon class="table-add-btn" icon="plus" @click="toggle(containerTableInput)"/>
            </div>
        </div>
        <br>
        <table align="center" class="table-data" id="table-data">
            <thead>
            <tr class="data-row-head">
                <th width="10%" valign="center">Date</th>
                <th width="20%" valign="center">Action Name</th>
                <th width="20%" valign="center">Project identifier</th>
                <th width="20%" valign="center">Client Name</th>
                <th width="20%" valign="center">Comment</th>
                <th width="5%" valign="center">Delete</th>
            </tr>
            </thead>

            <tbody>
            <tr class="data-row" style="display: none">
                <td>Date</td>
                <td>Action Name</td>
                <td>Project identifier</td>
                <td>Client Name</td>
                <td>Comment</td>
                <td>Delete</td>
            </tr>
            </tbody>

        </table>
        <div class="table-nav">
            <font-awesome-icon class="bottom-btn first-btn" icon="angle-double-left"/>
            <font-awesome-icon class="bottom-btn previous-btn" icon="angle-left"/>
            <font-awesome-icon class="bottom-btn next-btn" icon="angle-right"/>
            <font-awesome-icon class="bottom-btn last-btn" icon="angle-double-right"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'table',
        components: {
        },
        data () {
            return {
            }
        },
        methods: {
            toggle: function (container) {
                container.classList.toggle("hidden");
            },
            modalFabric: function(type) {
                switch (type) {
                    case 'row':
                        makeModal('row', deleteRow);
                        break;
                    default:
                        makeModal('table', deleteEntireTable);
                }
            }
        }
    };
</script>
<style src="./table.scss" scoped lang="scss"></style>

