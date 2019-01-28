<script>
    Vue.mixin({
        methods: {
            toggle: function (container) {
                container.classList.toggle("hidden");
            }
        }
    })
</script>