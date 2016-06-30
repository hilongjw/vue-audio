<style>
    .rd-container {
        width: 100%;
        height: 100%;
    }
    .rd-audio-player {
        position: absolute;
        height: 10rem;
        width: 10rem;
        display: flex;
        justify-content: flex-start;
        box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.29);
        top: 50%;
        left: 50%;
        margin: -5rem 0 0 -5rem;
    }
    .rd-audio-cover {
        position: relative;
        height: 100%;
        width: 10rem;
        background-size: cover;
        background-image: url(../assets/ka.jpg);
        flex-shrink: 0;
    }
    .rd-audio-player-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4rem;
        height: 4rem;
        background: rgba(0, 0, 0, 0.45);
        border: none;
        border-radius: 50%;
        padding: 1rem;
        margin: -2rem 0 0 -2rem;
        outline: none;
    }
    .rd-audio-player-icon {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -1rem 0 0 -.7rem;
    }
    .rd-audio-contrl {
        width: 0;
        display: flex;
        color: #666;
        height: 10rem;
        left: 0;
        bottom: 0;
        background: #fff;
        padding: .5rem;
        box-sizing: border-box;
        align-items: flex-end;
    }
    .rd-audio-slider-container {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 10rem;
    }
    .rd-audio-slider {
        position: relative;
        width: 100%;
    }
    .rd-audio-slider-rail {
        width: 100%;
        height: .1rem;
        background: #fff;
    }
    .rd-audio-slider-rail-inner {
        height: 100%;
        width: 0%;
        background: #03A9F4;
        transition: width 16ms;
    }
    .rd-audio-time.current,
    .rd-audio-time.duration {
        display: none;
    }
    .bounce-transition {
        animation-duration: .75s;
        animation-fill-mode: both;
    }
    .bounce-enter {
        animation-name: bounceIn;
    }
    .bounce-leave {
        animation-name: bounceOut;
    }
    @-webkit-keyframes bounceIn {
      from, 20%, 40%, 60%, 80%, to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }

      0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }

      20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }

      40% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
      }

      80% {
        -webkit-transform: scale3d(.97, .97, .97);
        transform: scale3d(.97, .97, .97);
      }

      to {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    @keyframes bounceIn {
      from, 20%, 40%, 60%, 80%, to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }

      0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }

      20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }

      40% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
      }

      80% {
        -webkit-transform: scale3d(.97, .97, .97);
        transform: scale3d(.97, .97, .97);
      }

      to {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
    @-webkit-keyframes bounceOut {
      20% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9);
      }

      50%, 55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }

      to {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }
    }

    @keyframes bounceOut {
      20% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9);
      }

      50%, 55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }

      to {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }
    }

@media all and (max-width: 768px) {
    .rd-audio-player {
        position: relative;
        top: 0;
        left: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .rd-audio-cover {
        position: relative;
        width: 100%;
        height: initial;
        background-size: cover;
        background-image: url(../assets/ka.jpg);
        padding-top: 100%;
    }
    .rd-audio-player-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4rem;
        height: 4rem;
        background: rgba(0, 0, 0, 0.45);
        border: none;
        border-radius: 50%;
        padding: 1rem;
        margin: -2rem 0 0 -2rem;
        outline: none;
    }
    .rd-audio-player-icon {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -1rem 0 0 -.7rem;
    }
    .rd-audio-contrl {
        position: fixed;
        display: flex;
        color: #fff;
        height: 4rem;
        width: 100%;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.63);
        box-shadow: 0 -3rem 6rem #000;
        padding: .5rem;
        box-sizing: border-box;
        align-items: flex-end;
    }
    .rd-audio-time {
        font-size: .8rem;
        padding: 0 .5rem;
        flex-shrink: 0;
    }
    .rd-audio-time.current,
    .rd-audio-time.duration {
        display: block;
    }
    .rd-audio-slider-container {
        position: relative;
        width: 100%;
        height: .8rem;
        padding-top: .3rem;
        box-sizing: border-box;
        margin: 0 .5rem;
    }
    .rd-audio-slider {
        position: relative;
        width: 100%;
    }
    .rd-audio-slider-rail {
        width: 100%;
        height: .1rem;
        background: rgba(255, 255, 255, 0.34);
    }
    .rd-audio-slider-rail-inner {
        height: 100%;
        width: 50%;
        background: #03A9F4;
    }
}
</style>

<template>
    <div class="rd-audio-player">
        <div class="rd-audio-cover" @click="touchCover">
            <button class="rd-audio-player-btn" transition="bounce" v-show="!state.playing">
                <img class="rd-audio-player-icon" src="../assets/play.svg">
            </button>
        </div>
        <div class="rd-audio-contrl">
            <div class="rd-audio-time current">{{current}}</div>
            <div class="rd-audio-slider-container" @click="touchSlider">
                <div class="rd-audio-slider">
                    <div class="rd-audio-slider-rail">
                        <div class="rd-audio-slider-rail-inner" :style="{ 'width': mu.state.progress + '%' }"></div>
                    </div>
                </div>
            </div>
            <div class="rd-audio-time duration">{{duration}}</div>
        </div>
    </div>
</template>

<script>
    import VueAudio from '../VueAudio.js'

    const pad = (val) => {
        val = Math.floor(val)
        if (val < 10) {
            return '0' + val
        }
        return val + ''
    }

    const timeParse = (sec) => {
        let min = 0
        min = Math.floor(sec / 60)
        sec = sec - min * 60
        return pad(min) + ':' + pad(sec)
    }

    export default {
        data () {
            return {
                mu: {
                    state: {
                        progress: 0
                    }
                },
                state: {
                    liked: false,
                    playing: false
                }
            }
        },
        computed: {
            current () {
                return timeParse(this.mu.state.currentTime)
            },
            duration () {
                return timeParse(this.mu.state.duration)
            }
        },
        ready () {
            this.init()
        },
        methods: {
            init () {
                this.mu = new VueAudio('http://covteam.u.qiniudn.com/test2.mp3', {
                    preload: true,
                    autoplay: false,
                    rate: 1,
                    loop: false,
                    volume: 0.5
                })
            },
            touchCover () {
                if (this.state.playing) {
                    this.pause()
                } else {
                    this.play()
                }
            },
            touchSlider (e) {
                let time
                time = e.layerX / e.target.offsetWidth * this.mu.state.duration
                this.mu.setTime(time)
            },
            play () {
                this.state.playing = true
                this.mu.play()
            },
            pause () {
                this.state.playing = false
                this.mu.pause()
            },
            volplus () {
                this.mu.setVolume(this.mu.state.volume + 0.1)
            },
            volminus () {
                this.mu.setVolume(this.mu.state.volume - 0.1)
            }
        }
    }
</script>