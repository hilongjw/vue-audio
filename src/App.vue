<style>
html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
<template>
    <div class="rd-container">
        <cov></cov>
    </div>
</template>
<script>
import cov from './components/audio.vue'
export default {
    data () {
        return {
            a: 1
        }
    },
    components: {
        cov
    }
}
</script>
