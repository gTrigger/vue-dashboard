<!--suppress ALL -->
<template>
    <section class="sidebar" id="sidebar">
        <div class="container-menu grid-item" id="menu">
            <img src="https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Decor-Furniture-Logo-8.png"
                 alt="Logo" class="logo">
            <div class="container-widget">
                <font-awesome-icon class="show-profile-btn" icon="user" @click="clickedOnMe"/>
                <font-awesome-icon class="show-profile-btn" icon="chart-bar" @click="clickedOnMe"/>
                <font-awesome-icon class="show-profile-btn" icon="table" @click="clickedOnMe"/>
            </div>
            <ul class="menu">
                <li v-for="btn in btns" class="menu-item-label">
                    <font-awesome-icon icon="home"/>
                    <a>{{btn.displayName}}</a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    const WIDGETS = [
        {name: 'user', icon: 'user', onClickAction: '@click="toggle(document.getElementById(\'descr\'))'},
        {name: 'graph', icon: 'chart-bar', onClickAction: '@click="toggle(document.getElementById(\'graph\')'},
        {name: 'table', icon: 'table', onClickAction: '@click="toggleTable"'}
    ];
    const MENU_LINKS = [
        {name: 'home', displayName: 'HOME', iconName: 'home'},
        {name: 'profile', displayName: 'PROFILE', iconName: 'user'},
        {name: 'lastactions', displayName: 'LAST ACTIONS', iconName: 'tasks'},
        {name: 'activity', displayName: 'ACTIVITY', iconName: 'calendar'},
        {name: 'support', displayName: 'SUPPORT', iconName: 'fa-commenting-o'},
        {name: 'settings', displayName: 'SETTINGS', iconName: 'fa-cogs'},
        {name: 'signout', displayName: 'SIGN OUT', iconName: 'fa-sign-out'}
    ];

    export default {
        name: 'sidebar',
        components: {
        },
        data () {
            return {
                btns: MENU_LINKS
            }
        },
        methods: {
            toggle: function (container) {
                container.classList.toggle("hidden");
            },
            toggleTable: function () {
                document.getElementById('table').classList.toggle("hidden");
                document.getElementById('welcome-cat').hidden = !document.getElementById('welcome-cat').hidden;
            },
            clickedOnMe: function () {
                this.$emit('clickedOnMe', this.$el.id);
            },
            alertAfterBeingClicked: function () {
                console.log("Omg, you clicked on " + id + "! Why oh why!")
            }
        }
    };

</script>
<style src="./sidebar.scss" scoped lang="scss">
</style>

