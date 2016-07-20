function getCurrentShowTimeSeconds(){var e=new Date,I=endTime.getTime()-e.getTime();return I=Math.round(I/1e3),I>=0?I:0}function update(){var e=getCurrentShowTimeSeconds(),I=parseInt(e/3600),a=parseInt((e-3600*I)/60),t=e%60,n=parseInt(curShowTimeSeconds/3600),r=parseInt((curShowTimeSeconds-3600*n)/60),l=curShowTimeSeconds%60;t!=l&&(parseInt(n/10)!=parseInt(I/10)&&addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(n/10)),parseInt(n%10)!=parseInt(I%10)&&addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(n/10)),parseInt(r/10)!=parseInt(a/10)&&addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(r/10)),parseInt(r%10)!=parseInt(a%10)&&addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(r%10)),parseInt(l/10)!=parseInt(t/10)&&addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(l/10)),parseInt(l%10)!=parseInt(t%10)&&addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(t%10)),curShowTimeSeconds=e),updateBalls(),console.log(balls.length)}function updateBalls(){for(var e=0;e<balls.length;e++)balls[e].x+=balls[e].vx,balls[e].y+=balls[e].vy,balls[e].vy+=balls[e].g,balls[e].y>=WINDOW_HEIGHT-RADIUS&&(balls[e].y=WINDOW_HEIGHT-RADIUS,balls[e].vy=.75*-balls[e].vy);for(var I=0,e=0;e<balls.length;e++)balls[e].x+RADIUS>0&&balls[e].x-RADIUS<WINDOW_WIDTH&&(balls[I++]=balls[e]);for(;balls.length>I;)balls.pop()}function addBalls(e,I,a){for(var t=0;t<digit[a].length;t++)for(var n=0;n<digit[a][t].length;n++)if(1==digit[a][t][n]){var r={x:e+2*n*(RADIUS+1)+(RADIUS+1),y:I+2*t*(RADIUS+1)+(RADIUS+1),g:1.5+Math.random(),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random())),vy:-5,color:colors[Math.floor(Math.random()*colors.length)]};balls.push(r)}}function render(e){e.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);var I=parseInt(curShowTimeSeconds/3600),a=parseInt((curShowTimeSeconds-3600*I)/60),t=curShowTimeSeconds%60;renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(I/10),e),renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(I%10),e),renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,e),renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(a/10),e),renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(a%10),e),renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,e),renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(t/10),e),renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(t%10),e);for(var n=0;n<balls.length;n++)e.fillStyle=balls[n].color,e.beginPath(),e.arc(balls[n].x,balls[n].y,RADIUS,0,2*Math.PI,!0),e.closePath(),e.fill()}function renderDigit(e,I,a,t){t.fillStyle="rgb(0,102,153)";for(var n=0;n<digit[a].length;n++)for(var r=0;r<digit[a][n].length;r++)1==digit[a][n][r]&&(t.beginPath(),t.arc(e+2*r*(RADIUS+1)+(RADIUS+1),I+2*n*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI),t.closePath(),t.fill())}var WINDOW_WIDTH=290,WINDOW_HEIGHT=150,RADIUS=1,MARGIN_TOP=10,MARGIN_LEFT=5,endTime=new Date(2016,2,27,18,47,52),curShowTimeSeconds=0,balls=[],colors=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];window.onload=function(){WINDOW_WIDTH=document.getElementById("secondary").width,WINDOW_HEIGHT=document.getElementById("secondary").height,MARGIN_LEFT=Math.round(WINDOW_WIDTH/10),RADIUS=Math.round(4*WINDOW_WIDTH/5/108)-1,MARGIN_TOP=Math.round(WINDOW_HEIGHT/5);var e=document.getElementById("canvas"),I=e.getContext("2d");e.width=WINDOW_WIDTH,e.height=WINDOW_HEIGHT,curShowTimeSeconds=getCurrentShowTimeSeconds(),setInterval(function(){render(I),update()},50)};