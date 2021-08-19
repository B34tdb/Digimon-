function selecionar() {
    var escolha = prompt ('Aperte 1 para Treinar, 2 para Explorar')
    while (true) {

        if (escolha == 1 ){
            return location = ('../HTML/fase2.html');
            
        }else if (escolha ==2){
            return location = ("../HTML/fase2alter.html");
            break;
        }else {
            alert ("Escolha errada");
            escolha = prompt ('Aperte 1 para Treinar, 2 para Explorar');
        }
        }
}