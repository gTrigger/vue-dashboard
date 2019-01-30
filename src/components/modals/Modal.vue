<template>
    <div>
        <b-modal
                id="welcome-modal"
                title="Hey-o"
                ref="myModal"
        >
            <p class="my-4">Welcome to my first vue app. It's kind of raw and simple now, but i've tried to do my best</p>
        </b-modal>
    </div>
</template>

<script>
    import Vue from 'vue';
    import bModal from 'bootstrap-vue/es/components/modal/modal';

    Vue.component('b-modal', bModal);

    export default {
        name: 'welcomeModal',
        props: {
            refName: {
                type: String
            }
        },
        components: {
        },
        data () {
            return {
            }
        },
        methods: {

        },
        computed: {
        }
    };
</script>

<style>

</style>
