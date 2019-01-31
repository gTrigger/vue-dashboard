<template>
    <b-modal ref="thisModalRef"
             :modal-class="my-modal"
             size="lg"
             no-close-on-backdrop
             centered
             title="Hey there!"
    >
        Welcome to my first vue-app. It's a little bit raw and simple, but i've tried to do my best!
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