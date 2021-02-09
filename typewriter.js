"use strict";

const theShow = document.querySelector("#typewriter") ;
let textC = document.querySelector("#typewriter").textContent ;
const iteration = textC.length ;
let prog = 0 ;

init();

function init () {
    console.log("brt");
    console.log(textC);
    document.querySelector("#typewriter").textContent = "" ;
    console.log("brt the loop starts");
    loop();

}

function loop (  ) {
    prog += 1 ;
    console.log(prog);
    theShow.textContent = textC.substring(0 , prog) ;
    

    if ( prog == iteration ) {
        console.log("its done");
    } else {
        setTimeout(loop,500)
    }

    /*theShow.textContent = */



}