<style>
html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}
.rd-container {
    text-align: center;
    padding: 10rem 0;
}
</style>
<template>
    <div class="rd-container">
        <cov :audio="audio"></cov>
    </div>
</template>
<script>
// import cov from './components/audio.vue'
import cov from './components/covAudio.vue'

export default {
    data () {
        return {
            audio: {
                title: 'ninelie-Aimer',
                src: 'http://covteam.u.qiniudn.com/test2.mp3',
                poster: 'http://covteam.u.qiniudn.com/ka2.jpg',
                options: {
                    preload: false,
                    autoplay: false,
                    rate: 1,
                    loop: false,
                    volume: 0.5
                }
            }
        }
    },
    components: {
        cov
    }
}
</script>
