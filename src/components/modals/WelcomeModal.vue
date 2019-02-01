<template>
    <b-modal ref="thisModalRef"
             :modal-class="my-modal"
             size="lg"
             no-close-on-backdrop
             centered
             ok-only
             title="Hey there!"
    >
        <template>
            Welcome to my first vue-app. It's a little bit raw and simple, but i've tried to do my best!
        </template>
    </b-modal>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            hideModal () {
                this.$refs.thisModalRef.hide()
            },
            showModal () {
                this.$refs.thisModalRef.show()
            }
        }
    }
</script>
<style>
</style>