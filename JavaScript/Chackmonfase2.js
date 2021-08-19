 function escolher() {
     var escolha = prompt ("escolha 1 para ir explorar o Digimundo, 2 para LIlithmon.");
     while(true)
     if (escolha == 1 ) {
         return location = ('../HTML/Fase2alter.html');
        
        } else if (escolha == 2){
         return location = ('../HTML/final2.html');
        break;
        } else {
            alert ('Escolha invalida')
            escolha = prompt ("escolha 1 para ir ao desert, 2 para LIlithmon.");
        }
 }