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
            modalFabric: function (type) {
                switch (type) {
                    case 'row':
                        this.makeModal('row', this.deleteRow);
                        break;
                    default:
                        this.makeModal('table', this.deleteEntireTable);
                }
            },
            makeModal: function (text, func) {
                document.getElementById('confirmModal').innerHTML =
                    "<div class=\"alert-box modal-open fade show\">" +
                    "<h1 class=\"modal-header\">Attention!</h1>" +
                    "<div class=\"modal-body\">" +
                    "<p class=\"alert-box-text\">Are you sure you want to delete the whole " + text + "?</p>" +
                    "</div>" +
                    "<div class=\"modal-footer\">" +
                    "</div>" +
                    "</div>";
                document.getElementById('confirmModal').querySelector('.modal-footer').appendChild(this.createButtonControl('No', this.toggle, document.getElementById('confirmModal')));
                document.getElementById('confirmModal').querySelector('.modal-footer').appendChild(this.createButtonControl('Ok', func));

                this.toggle(document.getElementById('confirmModal'));
            },
            createButtonControl: function(label, cb, options) {
                if (label) {
                    const el = document.createElement('button');
                    el.classList.add('btn');
                    el.innerText = label;
                    el.onclick = () => {
                        return cb.call(null, options)
                    };
                    return el;
                }
            },
            deleteRow: function() {
                let storedActions = JSON.parse(localStorage.getItem("newRowData"));
                let filteredActions = storedActions.filter(function (storedActions) {
                    return +storedActions.id !== +rowID;
                });
                localStorage.setItem('newRowData', JSON.stringify(filteredActions));
                this.clearTable();
                let returnArr = arr = JSON.parse(localStorage.getItem("newRowData")) || [];
                for (let i = 0; i < returnArr.length; i++) {
                    this.fillTableWithRows(
                        returnArr[i].date,
                        returnArr[i].name,
                        returnArr[i].projectID,
                        returnArr[i].client,
                        returnArr[i].comment,
                        returnArr[i].id)
                }
                this.toggle(containerConfirmAlertBox);
            },
            deleteEntireTable: function() {
                this.clearTable();
                localStorage.removeItem('newRowData');
                arr = [];
                this.toggle(containerConfirmAlertBox);
            },
            clearTable: function() {
                let tBody = tableData.getElementsByTagName('tbody')[0];
                while (tBody.childNodes.length > 2) {
                    tBody.removeChild(tBody.firstChild);
                }
            },
            fillTableWithRows: function(date, name, projectID, client, comment, id) {
                let newRow = tableData.insertRow(1);
                newRow.innerHTML =
                    "<td>" + date + "</td>" +
                    "<td>" + name + "</td>" +
                    "<td>" + projectID + "</td>" +
                    "<td>" + client + "</td>" +
                    "<td>" + comment + "</td>" +
                    "<td><i class=\"fa fa-trash-o row-trash-btn\" onclick='returnRowToDeleteID()'></i></td>";
                newRow.setAttribute("id", id);
            }
        }
    };
</script>
<style src="./table.scss" scoped lang="scss"></style>

