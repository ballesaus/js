var bgcolor = "#18191A"; var cardcolor = "#242526"; var hovercolor = "#3A3B3C"; var ptcolor="#E4E6EB"; var stcolor="#B0B3B8";
var x = document.createElement("mFHJw");
var zx=x.style;
zx["z-index"]="2147483646";
zx["text-shadow"]="1px 1px black";
zx["background-color"]=hovercolor;
zx["text-align"]="center";
zx["top"]="0px";
zx["right"]="0px";
zx["height"]="270px";
zx["width"]="570px";
zx["position"]="fixed";
zx["color"]=ptcolor;
zx["font-family"]="arial, helvetica";
zx["font-size"]="15px";
zx["box-shadow"]="0px 0px 16px 0px rgba(0,0,0,0.3)";
x.textContent="gorilla console v.1.1";
zx["border-radius"]="2.5px"
zx["overflow"]="hidden";
var lwrap=document.createElement("dkk");
lwrap.style["text-shadow"]="0px 0px 0px rgba(0,0,0,0)";
lwrap.style["text-align"]="left";
lwrap.style["background-color"]=cardcolor;
lwrap.style.position="absolute";
lwrap.style.overflow="hidden";
lwrap.style.width="100%";
lwrap.style.height="100%";
lwrap.style.top="20px";
lwrap.style.left="0px";
var con=document.createElement("input")
con.placeholder=">_";
con.style["font-family"]="arial, helvetica";
con.style.border="0";
con.style.position="absolute"
con.style.bottom="22px";
con.style["font-size"]="15px";
con.style["background-color"]=cardcolor;
con.style.color="inherit";
con.style.width="100%";
var log=document.createElement("ol");
log.style.width="100%";
log.style.position="absolute";
log.style.color="white";
log.style.bottom="30px";
log.style.left="-30px";
var _log = window.console ? window.console.log : function(){}; _log.history = []; console.log = function( ){ var args = Array.prototype.slice.call( arguments ); _log.history.push.apply( _log.history, args ); _log.apply( window.console, args );args.forEach(function( n, i ){
          
          new Audio('https://www.myinstants.com/media/sounds/hitmarker_2.mp3').play();lcolor();log.innerHTML+='<dt style="color:'+stcolor+';">'+JSON.stringify( n, undefined, 2 )+'</dt>';
          
      });
    }
window.onerror = function(msg, url, linenumber) {
ecolor();
new Audio('https://www.myinstants.com/media/sounds/hitmarker_2.mp3').play();
    log.innerHTML+='<dt style="color:'+"rgba(165,0,0,1)"+';">'+msg+'</dt>';
    return true;
}
document.body.appendChild(x);
x.appendChild(lwrap);
lwrap.appendChild(log);
lwrap.appendChild(con);

con.addEventListener("keyup", manageEnter);

function manageEnter(evt) {
  evt.preventDefault();
  if (evt.keyCode === 13) {
  if(con.value=="kill"){
  new Audio("https://www.myinstants.com/media/sounds/god-damn-1.mp3").play();
  [...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111));
  }
  
  		execute();
  }
}

async function ecolor(){ await new Promise(resolve => setTimeout(resolve, 0)); log.lastChild.style["transition-duration"]="0s"; log.lastChild.style["background-color"]="rgba(125,0,0,0.5)"; await new Promise(resolve => setTimeout(resolve, 10)); log.lastChild.style["transition-duration"]="1s"; log.lastChild.style["background-color"]="rgba(0,0,0,0)"; }
async function lcolor(){ await new Promise(resolve => setTimeout(resolve, 0)); log.lastChild.style["transition-duration"]="0s"; log.lastChild.style["background-color"]="rgba(125,125,125,0.5)"; await new Promise(resolve => setTimeout(resolve, 10)); log.lastChild.style["transition-duration"]="1s"; log.lastChild.style["background-color"]="rgba(0,0,0,0)"; }
console.log("running");
draggable(x); function draggable(el) { el.addEventListener('mousedown', function(e) { var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left); var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top); function mouseMoveHandler(e) { el.style.top = (e.clientY - offsetY) + 'px'; el.style.left = (e.clientX - offsetX) + 'px'; } function reset() { window.removeEventListener('mousemove', mouseMoveHandler); window.removeEventListener('mouseup', reset); } window.addEventListener('mousemove', mouseMoveHandler); window.addEventListener('mouseup', reset); }); }

function execute(){

console.log(eval(con.value.toString()));
}
