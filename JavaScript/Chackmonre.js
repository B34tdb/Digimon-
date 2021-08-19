function recomecar(){
    var reiniciar = prompt ('1 para jogar outras Historias')
    while (true)
    if (reiniciar == 1){
        return location ("../HTML/Digimon.html")
        break;
    }else{
        alert ('Escolha invalida')
        reiniciar = prompt ('1 para jogar outras Historias')
    }
}