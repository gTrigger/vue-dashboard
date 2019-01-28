<!--suppress ALL -->
<template>
    <section class="sidebar">
        <div class="container-menu grid-item" id="menu">
            <img src="https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Decor-Furniture-Logo-8.png"
                 alt="Logo" class="logo">
            <div class="container-widget">
                <font-awesome-icon class="show-profile-btn" icon="user" @click="toggle(document.getElementById('descr'))"/>
                <font-awesome-icon class="show-profile-btn" icon="chart-bar" @click="toggle(document.getElementById('graph'))"/>
                <font-awesome-icon class="show-profile-btn" icon="table" @click="toggleTable"/>
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
            }
        }
    };

</script>
<style src="./sidebar.scss" scoped lang="scss"></style>

