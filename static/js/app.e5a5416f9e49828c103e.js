webpackJsonp([2,0],[function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var o=i(30),a=s(o),n=i(28),r=s(n);new a["default"]({el:"body",components:{App:r["default"]}})},,,,,,,function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(11),a=s(o),n=i(12),r=s(n),d=function(){function t(e){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];(0,a["default"])(this,t);var s=!0;void 0!==i.preload&&i.preload===!1&&(s=!1),this.tmp={src:e,options:i},this.state={preload:s,startLoad:!1,failed:!1,"try":3,tried:0,playing:!1,paused:!1,playbackRate:1,progress:0,currentTime:0,duration:0,volume:.5},this.hook={progress:[]},this.state.preload&&this.init(e,i)}return(0,r["default"])(t,[{key:"init",value:function(t){var e=this,i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return this.state.startLoad=!0,this.state.tried===this.state["try"]?void(this.state.failed=!0):(this.$Audio=new window.Audio(t),this.$Audio.addEventListener("error",function(){e.state.tried++,e.init(t,i)}),i.autoplay&&this.play(),i.rate&&(this.$Audio.playbackRate=i.rate),i.loop&&(this.$Audio.loop=!0),i.volume&&this.setVolume(i.volume),void this.loadState())}},{key:"loadState",value:function(){var t=this;this.$Audio.addEventListener("progress",function(e){t.state.loaded=Math.round(1e4*t.$Audio.buffered.end(0)/t.$Audio.duration)/100})}},{key:"updateState",value:function(t){var e=this;this.state.currentTime=Math.round(100*this.$Audio.currentTime)/100,this.state.duration=Math.round(100*this.$Audio.duration)/100,this.state.progress=Math.round(1e4*this.state.currentTime/this.state.duration)/100,this.hook.progress.forEach(function(t){t(e.state.progress)})}},{key:"progress",value:function(t){this.hook.progress.push(t)}},{key:"play",value:function(){var t=this;this.state.startLoad?!this.state.playing&&this.$Audio.readyState>=2?(this.$Audio.play(),this.state.paused=!1,this.state.playing=!0,this.$Audio.addEventListener("timeupdate",this.updateState.bind(this))):this.$Audio.addEventListener("loadeddata",function(){t.play()}):(this.init(this.tmp.src,this.tmp.options),this.$Audio.addEventListener("loadeddata",function(){t.play()}))}},{key:"pause",value:function(){this.$Audio.pause(),this.state.paused=!0,this.state.playing=!1,this.$Audio.removeEventListener("timeupdate",this.updateState)}},{key:"setVolume",value:function(t){t>-.01&&t<=1&&(this.state.volume=Math.round(100*t)/100,this.$Audio.volume=this.state.volume)}},{key:"setTime",value:function(t){return!(t<0&&t>this.state.duration)&&void(this.$Audio.currentTime=t)}}]),t}();e["default"]=d},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(29),a=s(o);e["default"]={data:function(){return{audio:{title:"ninelie-Aimer",src:"http://covteam.u.qiniudn.com/test2.mp3",poster:"http://covteam.u.qiniudn.com/ka2.jpg",options:{preload:!1,autoplay:!1,rate:1,loop:!1,volume:.5}}}},components:{cov:a["default"]}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(7),a=s(o),n=function(t){return t=Math.floor(t),t<10?"0"+t:t+""},r=function(t){var e=0;return e=Math.floor(t/60),t-=60*e,n(e)+":"+n(t)};e["default"]={props:{audio:Object},data:function(){return{mu:{state:{progress:0}},state:{moving:!1,liked:!1,playing:!1},slider:{progress:0,rail:{$el:null,x:0,width:0},dot:{$el:null,width:0,x:0}}}},computed:{timer:function(){return r(this.mu.state.duration-this.mu.state.currentTime)}},ready:function(){this.init(),window.document.body.addEventListener("mousemove",this.movement,!1),window.document.body.addEventListener("mouseup",this.leaveMove,!1)},beforeDestroy:function(){window.document.body.removeEventListener("mousemove",this.movement),window.document.body.removeEventListener("mouseup",this.leaveMove)},methods:{init:function(){this.mu=new a["default"](this.audio.src,this.audio.options),this.mu.progress(this.progress)},progress:function(t){this.state.moving||(this.slider.progress=t)},touchCover:function(){this.state.playing?this.pause():this.play()},touchSlider:function(t){var e=void 0;e=t.layerX/t.target.offsetWidth*this.mu.state.duration,this.mu.setTime(e)},play:function(){this.state.playing=!0,this.mu.play()},pause:function(){this.state.playing=!1,this.mu.pause()},volplus:function(){this.mu.setVolume(this.mu.state.volume+.1)},volminus:function(){this.mu.setVolume(this.mu.state.volume-.1)},initSlider:function(){var t=this.$el.getElementsByClassName("rd-audio-slider-rail")[0],e=this.$el.getElementsByClassName("rd-audio-slider-dot")[0],i=t.getBoundingClientRect(),s=e.getBoundingClientRect();this.slider.rail.$el=t,this.slider.dot.$el=e,this.slider.rail.x=i.left,this.slider.rail.width=i.width,this.slider.dot.x=s.left,this.slider.dot.width=s.width},touchDot:function(t){this.initSlider(),this.state.moving=!0},movement:function(t){if(this.state.moving){var e=t.pageX-.5*this.slider.dot.width-this.slider.rail.x,i=e/this.slider.rail.width*100;i>0&&i<100&&(this.slider.progress=i)}},leaveMove:function(t){if(this.state.moving){this.state.moving=!1;var e=this.slider.progress*this.mu.state.duration/100;this.mu.setTime(e)}}}}},,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){t.exports=" <div class=rd-container> <cov :audio=audio></cov> </div> "},function(t,e){t.exports=" <div class=rd-audio-player-container> <div class=rd-audio-player-wrapper> <div class=rd-audio-cover :style=\"{ 'background-image': audio.poster ? 'url(' + audio.poster + ')' : 'none' }\" @click=touchCover> <button class=rd-audio-play-btn> <svg class=rd-audio-play-btn-icon v-show=!state.playing viewBox=\"0 0 179 207\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <title>Triangle 1</title> <desc>Created with Sketch.</desc> <defs></defs> <g id=Page-1 stroke=none stroke-width=1 fill=#ccc fill-rule=evenodd> <path d=\"M3,202 L3,5 L174,103.5 L3,202 Z\" id=Triangle-1 stroke=#3e3e3e stroke-width=5 fill=#3e3e3e></path> </g> </svg> <svg class=\"rd-audio-play-btn-icon pause\" v-show=state.playing viewBox=\"0 0 205 205\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <title>Slice 1</title> <desc>Created with Sketch.</desc> <defs> <rect id=pause-1 x=51 y=22 width=36 height=161></rect> <mask id=pause-mask-2 maskContentUnits=userSpaceOnUse maskUnits=objectBoundingBox x=0 y=0 width=36 height=161 fill=white> <use xlink:href=#pause-1></use> </mask> <rect id=pause-3 x=120 y=22 width=36 height=161></rect> <mask id=pause-mask-4 maskContentUnits=userSpaceOnUse maskUnits=objectBoundingBox x=0 y=0 width=36 height=161 fill=white> <use xlink:href=#pause-3></use> </mask> </defs> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd> <use id=Rectangle-1 stroke=#979797 mask=url(#pause-mask-2) stroke-width=2 fill=#3e3e3e xlink:href=#pause-1></use> <use id=Rectangle-1 stroke=#979797 mask=url(#pause-mask-4) stroke-width=2 fill=#3e3e3e xlink:href=#pause-3></use> </g> </svg> </button> </div> <div class=rd-audio-contrl-wrapper> <div class=rd-audio-title> <span>{{audio.title}}</span> </div> <div class=rd-audio-slider> <div class=rd-audio-slider-rail> <div class=rd-audio-slider-dot @mousedown=touchDot :style=\"{ 'left': slider.progress + '%' }\"></div> </div> <div class=rd-audio-slider-time>{{timer}}</div> </div> </div> </div> </div> "},function(t,e,i){var s,o;i(24),s=i(8),o=i(26),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,i){var s,o;i(25),s=i(9),o=i(27),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}]);
//# sourceMappingURL=app.e5a5416f9e49828c103e.js.map