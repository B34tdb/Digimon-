    function escolha (){
        var escolha = prompt ('Digite 1 para Destruir a Lilithmon, 2 para Destruir o Virus.')
        while (true)

        if (escolha == 1 ){
            return location = ('../HTML/Labramonfinal.html')

        }else if ( escolha == 2){
            return location = ('../HTML/LabramongameOver4.html')
            break;
        
        }else{
            alert ('Escolha Invalida')
            escolha = prompt ('Digite 1 para Destruir a Lilithmon, 2 para Destruir o Virus.')
        }

    }