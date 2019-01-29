<!--suppress ALL -->
<template>
    <section class="sidebar" id="sidebar">
        <img src="https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Decor-Furniture-Logo-8.png"
                 alt="Logo" class="logo">
        <div class="container-widget">
            <font-awesome-icon
                v-for="widgetBtn in widgetBtns"
                size="2x"
                :icon="widgetBtn.icon"
                @click="()=>clickedOn(widgetBtn)"
            />
        </div>
        <ul class="menu">
            <li v-for="menuBtn in menuBtns" class="menu-item-label">
                <font-awesome-icon
                    :icon="menuBtn.iconName"
                />
                <a>
                    {{menuBtn.displayName}}
                </a>
            </li>
        </ul>
    </section>
</template>
<script>
    const WIDGETS = [
        {name: 'user', icon: 'user'},
        {name: 'graph', icon: 'chart-bar'},
        {name: 'table', icon: 'table'}
    ];
    const MENU_LINKS = [
        {name: 'home', displayName: 'HOME', iconName: 'home'},
        {name: 'profile', displayName: 'PROFILE', iconName: 'user'},
        {name: 'lastactions', displayName: 'LAST ACTIONS', iconName: 'home'},
        {name: 'activity', displayName: 'ACTIVITY', iconName: 'home'},
        {name: 'support', displayName: 'SUPPORT', iconName: 'home'},
        {name: 'settings', displayName: 'SETTINGS', iconName: 'home'},
        {name: 'signout', displayName: 'SIGN OUT', iconName: 'home'}
    ];

    export default {
        name: 'sidebar',
        components: {
        },
        data () {
            return {
                menuBtns: MENU_LINKS,
                widgetBtns: WIDGETS
            }
        },
        methods: {
            clickedOn: function(widgetBtn) {
                this.$emit('widget-btn-click', widgetBtn.name);
            }
        },
        computed: {
        }
    };

</script>
<style src="./sidebar.scss" scoped lang="scss">
</style>

