    function escolha(){
        var escolha = prompt ('Aperte 1 para treinar e 2 para derrotar a Lilithmon')
        while(true)
        
        if (escolha == 1 ){
            return location = ('../HTML/labramon4.html');
        
        }else if (escolha == 2 ){
            return location = ('../HTML/labramongameOver3.html');
            break;
        
        }else{
            alert ('Escolha invalida')
            escolha = prompt ('Aperte 1 para treinar e 2 para derrotar a Lilithmon')
        }
    }