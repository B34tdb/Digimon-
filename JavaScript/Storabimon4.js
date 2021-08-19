  function escolha (){
      var escolha = prompt ("Digite 1 para aceitar o acordo e 2 para Derrotar ela")
      while (true)

      if (escolha == 1){
          return location = ('../HTML/StorabimongameOver1.html')
      
        }else if (escolha == 2){
            return location = ('../HTML/Storabimonfinal.html')
            break;

        }else{
            alert ('Escolha Invalida')
            escolha = prompt ("Digite 1 para aceitar o acordo e 2 para Derrotar ela")
        }
  }