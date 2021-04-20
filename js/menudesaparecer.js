let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function(){
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
        document.getElementById('logito').style.top = '8%';
    }else{
        document.getElementById('navbar').style.top = '-100px';
        document.getElementById('logito').style.top = '-300px';
    }
    
    ubicacionPrincipal = Desplazamiento_Actual;
}