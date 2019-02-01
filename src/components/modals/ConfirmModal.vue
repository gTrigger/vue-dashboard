<template>
    <b-modal ref="thisModalRef"
             :modal-class="my-modal"
             size="lg"
             no-close-on-backdrop
             centered
             title="We need your confirmation"
    >
        <template>
            Are you sure you want to delete this {{thing}}? You can't undo it later.
        </template>
    </b-modal>
</template>
<script>
    export default {
        data () {
            return {
                thing: ''
            }
        },
        methods: {
            hideModal () {
                this.$refs.thisModalRef.hide()
            },
            showModal (thing) {
                switch(thing) {
                    case 'table':
                        this.thing="table";
                        break;
                    case 'row':
                        this.thing="row";
                        break;
                }
                this.$refs.thisModalRef.show()
            }
        }
    }
</script>
<style>
</style>