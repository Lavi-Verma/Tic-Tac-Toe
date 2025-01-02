
function Restart(){
    window.location="index.html"
}
let w=document.getElementById('winner')
let currentplayer="O"
let game=true

function cell0(){
    let d =document.getElementById('cell0')
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }
}
    
}
function cell1(){
    let d=document.getElementById('cell1')
    
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
     currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }
}
}

function cell2(){
    let d=document.getElementById('cell2')
   
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }
}
}
function cell3(){
    let d=document.getElementById('cell3')
    
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }
}
}
function cell4(){
    let d=document.getElementById('cell4')
   
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }
}
}
function cell5(){
    let d=document.getElementById('cell5')
    
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }
}
}
function cell6(){
    let d=document.getElementById('cell6')
    
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }
}
}
function cell7(){
    let d=document.getElementById('cell7')
    
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }  
}
}
function cell8(){
    let d=document.getElementById('cell8')
    
    if(game==true){
    if(currentplayer=="O"){
        d.innerHTML="O"
        checkWin();
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        checkWin();
        currentplayer="O"
    }
}
}

function checkWin(){
    let c0=document.getElementById('cell0').innerHTML
    let c1=document.getElementById('cell1').innerHTML
    let c2=document.getElementById('cell2').innerHTML
    let c3=document.getElementById('cell3').innerHTML
    let c4=document.getElementById('cell4').innerHTML
    let c5=document.getElementById('cell5').innerHTML
    let c6=document.getElementById('cell6').innerHTML
    let c7=document.getElementById('cell7').innerHTML
    let c8=document.getElementById('cell8').innerHTML

     if(c0==currentplayer&&c1==currentplayer&&c2==currentplayer
        ||c3==currentplayer&&c4==currentplayer&&c5==currentplayer
        ||c6==currentplayer&&c7==currentplayer&&c8==currentplayer
        ||c0==currentplayer&&c3==currentplayer&&c6==currentplayer
        ||c1==currentplayer&&c4==currentplayer&&c7==currentplayer
        ||c2==currentplayer&&c5==currentplayer&&c8==currentplayer
        ||c0==currentplayer&&c4==currentplayer&&c8==currentplayer
        ||c2==currentplayer&&c4==currentplayer&&c6==currentplayer){
        w.innerHTML= '<img src="https://i.pinimg.com/736x/40/f4/3c/40f43c9c869dc37e9a385bc7b1da77dd.jpg" width="500px" height="300px"/>'
    
        game=false
    }
    
    }

