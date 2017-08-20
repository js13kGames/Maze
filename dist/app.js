!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={cellSize:24,endColor:"rgba(046, 204, 113, 0.25)",backgroundColor:"#ecf0f1",wallsColor:"#ccc",wallsWidth:2,playerSize:5,playersColors:["rgba(231, 076, 060, 1.0)","rgba(052, 152, 219, 1.0)","rgba(046, 204, 113, 1.0)","rgba(241, 196, 015, 1.0)"],playersControls:[[38,39,40,37],[90,68,83,81]]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),new(i(2).default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),r=i(4),l=i(7),a=i(5),o=function(){function t(){var t=this;this.chrono=new r.default,this.players=[],this.resize=function(){t.stop(),t.labyrinth=new a.default,t.cleanPlayers(),t.addPlayer("Albard"),t.addPlayer("Aziliz"),t.canvas=new n.default(t.labyrinth,t.players),t.start()},this.render=function(){t.canvas.draw(),t.start()},this.start=function(){t.loopID=window.requestAnimationFrame(t.render)},this.stop=function(){t.loopID&&window.cancelAnimationFrame(t.loopID)},this.addPlayer=function(e){t.players.push(new l.default(t.labyrinth,t.players.length,t.players.length,e))},this.cleanPlayers=function(){t.players=[]},window.addEventListener("resize",this.resize),this.resize()}return t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=function(){function t(t,e){void 0===e&&(e=[]);var i=this;this.canvas=document.getElementById("game"),this.ctx=this.canvas.getContext("2d"),this.draw=function(){i.clear(),i.drawLabyrinth(),i.drawPlayers()},this.clear=function(){i.ctx.clearRect(0,0,i.canvas.width,i.canvas.height)},this.drawLabyrinth=function(){i.labyrinth.grid.map(function(t,e){t.map(function(t,r){t.isEnd&&i.rectangle(n.default.endColor,i.labyrinth.cellSize*r,i.labyrinth.cellSize*e,i.labyrinth.cellSize,i.labyrinth.cellSize),t.walls.map(function(t,l){t&&i.line(n.default.wallsColor,n.default.wallsWidth,i.labyrinth.cellSize*(r+(1==l?1:0)),i.labyrinth.cellSize*(e+(2==l?1:0)),i.labyrinth.cellSize*(r+(3!=l?1:0)),i.labyrinth.cellSize*(e+(0!=l?1:0)))})})})},this.drawPlayers=function(){i.players.map(function(t){t.move(),i.circle(n.default.playersColors[t.id],1,t.x,t.y,t.size+1),i.circle(n.default.backgroundColor,1,t.x,t.y,t.size),i.circle(n.default.playersColors[t.id].substr(0,20)+"0.5)",1,t.x,t.y,t.size)})},this.font=function(t,e,n,r,l,a){void 0===n&&(n=0),void 0===r&&(r=0),void 0===l&&(l=12),void 0===a&&(a="Arial"),i.ctx.font=l.toString()+"px "+a,i.ctx.fillStyle=e,i.ctx.fillText(t,n,r)},this.circle=function(t,e,n,r,l){void 0===e&&(e=1),void 0===n&&(n=0),void 0===r&&(r=0),void 0===l&&(l=0),i.ctx.fillStyle=t,i.ctx.lineWidth=e,i.ctx.beginPath(),i.ctx.arc(n,r,l,0,2*Math.PI),i.ctx.fill()},this.rectangle=function(t,e,n,r,l){void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=i.canvas.width),void 0===l&&(l=i.canvas.height),i.ctx.fillStyle=t,i.ctx.fillRect(e,n,r,l)},this.line=function(t,e,n,r,l,a){void 0===e&&(e=1),void 0===n&&(n=0),void 0===r&&(r=0),void 0===l&&(l=0),void 0===a&&(a=0),i.ctx.strokeStyle=t,i.ctx.lineWidth=e,i.ctx.beginPath(),i.ctx.moveTo(n,r),i.ctx.lineTo(l,a),i.ctx.stroke()},this.players=e,this.labyrinth=t,this.canvas.width=Math.floor(window.innerWidth/n.default.cellSize)*n.default.cellSize,this.canvas.height=Math.floor(window.innerHeight/n.default.cellSize)*n.default.cellSize,this.draw()}return t}();e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){var t=this;this.diffTime=0,this.stockedTime=0,this.isPaused=!0,this.chrono=document.getElementById("chrono"),this.update=function(){t.isPaused?t.start():t.isPaused=!0},this.start=function(){t.isPaused=!1,t.startTime=new Date,t.actualize()},this.actualize=function(){t.diffTime=t.stockedTime+Math.abs((new Date).getTime()-t.startTime.getTime()),t.isPaused?t.stockedTime=t.diffTime:requestAnimationFrame(t.actualize),t.display()},this.display=function(){t.chrono.childNodes[1].textContent="",t.chrono.childNodes[3].textContent=((t.diffTime-t.diffTime%1e3)/1e3).toString(),t.chrono.childNodes[5].textContent=("00"+(t.diffTime%1e3).toString()+"0").slice(-4,-1)},this.chrono.addEventListener("click",function(e){t.update()}),document.addEventListener("keypress",function(e){13==e.keyCode&&t.update()})}return t}();e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=i(6),l=function(){function t(){var t=this;for(this.width=Math.floor(window.innerWidth/n.default.cellSize),this.height=Math.floor(window.innerHeight/n.default.cellSize),this.cellSize=n.default.cellSize,this.grid=[],this.createGrid=function(){for(var e=0;e<t.height;e++){t.grid.push([]);for(var i=0;i<t.width;i++)t.grid[e].push(new r.default(i+e*t.width))}},this.generateLabyrinth=function(){var e=t.randInt(0,t.height-1),i=t.randInt(0,t.width-1),n=t.randInt(0,3);if(!(0==e&&0==n||0==i&&3==n||e==t.height-1&&2==n||i==t.width-1&&1==n)&&t.grid[e][i].walls[n]){var r=void 0;switch(n){case 0:r=t.grid[0==e?t.height-1:e-1][i];break;case 1:r=t.grid[e][i==t.width-1?0:i+1];break;case 2:r=t.grid[e==t.height-1?0:e+1][i];break;case 3:r=t.grid[e][0==i?t.width-1:i-1]}t.grid[e][i].id!=r.id&&(t.grid[e][i].walls[n]=!1,r.walls[(n+2)%4]=!1,t.updateGroupId(t.grid[e][i].id,r.id))}},this.selectEnd=function(){t.grid[Math.floor(t.height/2)][Math.floor(t.width/2)].isEnd=!0},this.updateGroupId=function(e,i){t.grid.map(function(t,n){t.map(function(t,n){t.id==i&&(t.id=e)})})},this.isGenerated=function(){for(var e=0;e<t.height;e++)for(var i=0;i<t.width;i++)if(t.grid[e][i].id!=t.grid[0][0].id)return!1;return!0},this.randInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},this.createGrid();!this.isGenerated();)this.generateLabyrinth();this.selectEnd()}return t}();e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){var e=this;this.walls=[!0,!0,!0,!0],this.isEnd=!1,this.countWalls=function(){return e.walls.filter(function(t){return t}).length},this.id=t}return t}();e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=function(){function t(t,e,i,r,l,a){void 0===i&&(i=0),void 0===r&&(r=void 0),void 0===l&&(l=0),void 0===a&&(a=0);var o=this;this.size=n.default.playerSize,this.moves=[!1,!1,!1,!1],this.init=function(){document.addEventListener("keydown",function(t){t.keyCode==n.default.playersControls[o.config][0]&&(o.moves[0]=!0),t.keyCode==n.default.playersControls[o.config][1]&&(o.moves[1]=!0),t.keyCode==n.default.playersControls[o.config][2]&&(o.moves[2]=!0),t.keyCode==n.default.playersControls[o.config][3]&&(o.moves[3]=!0)}),document.addEventListener("keyup",function(t){t.keyCode==n.default.playersControls[o.config][0]&&(o.moves[0]=!1),t.keyCode==n.default.playersControls[o.config][1]&&(o.moves[1]=!1),t.keyCode==n.default.playersControls[o.config][2]&&(o.moves[2]=!1),t.keyCode==n.default.playersControls[o.config][3]&&(o.moves[3]=!1)})},this.move=function(){var t=o.getActualCell();o.moves[0]&&((o.y-o.size-n.default.wallsWidth/2)%o.labyrinth.cellSize==0?t.walls[0]||o.y--:o.y--),o.moves[1]&&((o.x+o.size)%o.labyrinth.cellSize==o.labyrinth.cellSize-1?t.walls[1]||o.x++:o.x++),o.moves[2]&&((o.y+o.size)%o.labyrinth.cellSize==o.labyrinth.cellSize-1?t.walls[2]||o.y++:o.y++),o.moves[3]&&((o.x-o.size-n.default.wallsWidth/2)%o.labyrinth.cellSize==0?t.walls[3]||o.x--:o.x--)},this.getActualCell=function(){return o.labyrinth.grid[Math.floor(o.y/o.labyrinth.cellSize)][Math.floor(o.x/o.labyrinth.cellSize)]},this.randInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},this.id=e,this.labyrinth=t,this.config=i,this.x=this.labyrinth.cellSize*(.5+this.randInt(0,this.labyrinth.width-1)),this.y=this.labyrinth.cellSize*(.5+this.randInt(0,this.labyrinth.height-1)),this.name=r||"Player "+(e+1).toString(),this.init()}return t}();e.default=r}]);