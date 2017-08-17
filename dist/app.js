!function(t){function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}var e={};i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=1)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={backgroundColor:"#ecf0f1",wallsColor:"#ccc",playersColors:["rgba(231, 076, 060, 1.0)","rgba(052, 152, 219, 1.0)","rgba(046, 204, 113, 1.0)","rgba(241, 196, 015, 1.0)"]}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),new(e(2).default)},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(3),r=e(4),a=e(5),s=function(){function t(){var t=this;this.labyrinth=new a.default,this.canvas=new n.default(this.labyrinth),this.chrono=new r.default,this.players=[],this.resize=function(){t.canvas.canvas.width=window.innerWidth/2-4,t.canvas.canvas.height=window.innerHeight/2-4,t.canvas.orientation=t.canvas.canvas.width>=t.canvas.canvas.height?"landscape":"portrait",t.canvas.draw()},window.addEventListener("resize",this.resize),this.resize()}return t}();i.default=s},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(0),r=function(){function t(t){var i=this;this.canvas=document.getElementById("game"),this.ctx=this.canvas.getContext("2d"),this.orientation="landscape",this.draw=function(){i.drawBackground(),i.drawLabyrinth()},this.resize=function(){i.canvas.width=window.innerWidth/2-4,i.canvas.height=window.innerHeight/2-4,i.orientation=i.canvas.width>=i.canvas.height?"landscape":"portrait",i.draw()},this.drawBackground=function(){i.rectangle(n.default.backgroundColor)},this.drawLabyrinth=function(){i.labyrinth.grid.map(function(t,e){t.map(function(t,r){"block"==t.type&&i.rectangle(n.default.blocksColor,i.labyrinth.cellSize*r,i.labyrinth.cellSize*e,i.labyrinth.cellSize,i.labyrinth.cellSize),t.walls.map(function(t,a){t&&i.line(n.default.wallsColor,i.labyrinth.cellSize*(r+(1==a?1:0)),i.labyrinth.cellSize*(e+(2==a?1:0)),i.labyrinth.cellSize*(r+(3!=a?1:0)),i.labyrinth.cellSize*(e+(0!=a?1:0)))})})})},this.rectangle=function(t,e,n,r,a){void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=i.canvas.width),void 0===a&&(a=i.canvas.height),i.ctx.fillStyle=t,i.ctx.fillRect(e,n,r,a)},this.line=function(t,e,n,r,a){void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=0),void 0===a&&(a=0),i.ctx.strokeStyle=t,i.ctx.beginPath(),i.ctx.moveTo(e,n),i.ctx.lineTo(r,a),i.ctx.stroke()},this.labyrinth=t}return t}();i.default=r},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(){var t=this;this.diffTime=0,this.stockedTime=0,this.isPaused=!0,this.chrono=document.getElementById("chrono"),this.start=function(){t.isPaused=!1,t.startTime=new Date,t.actualize()},this.actualize=function(){t.diffTime=t.stockedTime+Math.abs((new Date).getTime()-t.startTime.getTime()),t.isPaused?t.stockedTime=t.diffTime:requestAnimationFrame(t.actualize),t.display()},this.display=function(){t.chrono.childNodes[1].textContent="",t.chrono.childNodes[3].textContent=((t.diffTime-t.diffTime%1e3)/1e3).toString(),t.chrono.childNodes[5].textContent=("00"+(t.diffTime%1e3).toString()+"0").slice(-4,-1)},this.chrono.addEventListener("click",function(i){t.isPaused?t.start():t.isPaused=!0})}return t}();i.default=n},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(6),r=function(){function t(t,i,e){void 0===t&&(t=60),void 0===i&&(i=30),void 0===e&&(e=15);var r=this;this.grid=[],this.updateGroupId=function(t,i){r.grid.map(function(e,n){e.map(function(e,n){e.id==i&&(e.id=t)})})},this.isGenerated=function(){for(var t=0;t<r.height;t++)for(var i=0;i<r.width;i++)if(r.grid[t][i].id!=r.grid[0][0].id)return!1;return!0},this.randInt=function(t,i){return Math.floor(Math.random()*(i-t+1))+t},this.width=t,this.height=i,this.cellSize=e;for(var a=0;a<this.height;a++){this.grid.push([]);for(var s=0;s<this.width;s++)this.grid[a].push(new n.default(s+a*this.width))}for(;!this.isGenerated();){var a=this.randInt(0,this.height-1),s=this.randInt(0,this.width-1),o=this.randInt(0,3);if(this.grid[a][s].walls[o]){var d=void 0;switch(o){case 0:d=this.grid[0==a?this.height-1:a-1][s];break;case 1:d=this.grid[a][s==this.width-1?0:s+1];break;case 2:d=this.grid[a==this.height-1?0:a+1][s];break;case 3:d=this.grid[a][0==s?this.width-1:s-1]}this.grid[a][s].id!=d.id&&(this.grid[a][s].walls[o]=!1,d.walls[(o+2)%4]=!1,this.updateGroupId(this.grid[a][s].id,d.id))}}}return t}();i.default=r},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t){this.walls=[!0,!0,!0,!0],this.id=t}return t}();i.default=n}]);