window.addEventListener('scroll',function(){
    
    
    
    function fade(direction){
        
        var imagensita = document.querySelectorAll('.fade_'+direction);//tomamos los elementos con esa clase.
    

    for(var i = 0 ; i<imagensita.length; i++){
        
        
        var altura = window.innerHeight/1.1;//Capturamos la altura de la ventana, no importa que se reduzca. captura la nueva altura.
                
        var distancia = imagensita[i].getBoundingClientRect().top;

        imagensita[i].classList.add('transform_'+direction);

        if(distancia <= altura){

            imagensita[i].classList.add('aparece');


        }else{
            imagensita[i].classList.remove('aparece');
        }
                        
                        
    }
        
        
    }
    
    fade('up') 
    fade('left')
    fade('rigth')
    fade('padding')


})