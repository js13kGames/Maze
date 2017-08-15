!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(new(n(1).default)).init()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=n(2),r=n(4),o=function(){function e(){var e=this;this.players=[],this.chrono=new r.default,this.init=function(){e.addPlayer("Albard"),e.addPlayer(),e.addPlayer(),e.addPlayer(),e.chrono.start(),e.render()},this.addPlayer=function(t){void 0===t&&(t="Player");var n=document.createElement("canvas");n.id="player-"+e.players.length,n.style.borderColor=i.default.playersColors[e.players.length],document.getElementById("game").appendChild(n),e.players.push({name:t,canvas:new a.default(n.id)})},this.removePlayer=function(t){var n=document.getElementById("game");n.removeChild(n.childNodes[t]),e.players[t].canvas=null,e.players.slice(t,0)},this.render=function(){e.players.map(function(e){return e.canvas.background()}),requestAnimationFrame(e.render)}}return e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=function(){function e(e){var t=this;this.orientation="landscape",this.resize=function(){var e=2*parseInt(getComputedStyle(t.canvas).getPropertyValue("border-width").slice(0,-2));t.canvas.width=window.innerWidth/2-e,t.canvas.height=window.innerHeight/2-e,t.orientation=t.canvas.width>=t.canvas.height?"landscape":"portrait"},this.background=function(){t.rectangle(i.default.backgroundColor)},this.rectangle=function(e,n,i,a,r){void 0===n&&(n=0),void 0===i&&(i=0),void 0===a&&(a=t.canvas.width),void 0===r&&(r=t.canvas.height),t.ctx.fillStyle=e,t.ctx.fillRect(n,i,a,r)},this.canvas=document.getElementById(e),this.ctx=this.canvas.getContext("2d"),window.addEventListener("resize",this.resize),this.resize()}return e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={backgroundColor:"#ecf0f1",playersColors:["#3498db","#e74c3c","#2ecc71","#f1c40f"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){var e=this;this.diffTime=0,this.stockedTime=0,this.isPaused=!1,this.chrono=document.getElementById("chrono"),this.start=function(){e.isPaused=!1,e.startTime=new Date,e.actualize()},this.actualize=function(){e.actualTime=new Date,e.diffTime=e.stockedTime+Math.abs(e.actualTime.getTime()-e.startTime.getTime()),e.display(),e.isPaused?e.stockedTime=e.diffTime:requestAnimationFrame(e.actualize)},this.display=function(){e.chrono.childNodes[1].textContent=((e.diffTime-e.diffTime%1e3)/1e3).toString(),e.chrono.childNodes[3].textContent=("00"+(e.diffTime%1e3).toString()).slice(-3,-1)},this.chrono.addEventListener("click",function(t){e.isPaused?e.start():e.isPaused=!0})}return e}();t.default=i}]);