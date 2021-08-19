function escolha (){
    var escolha = prompt (' Digite 1 para treinar ou 2 para ir em busca do Digimon')
    while (true)

    if (escolha == 1 ){
        return location = ("../HTML/Storabimon2.html")
    
    }else if (escolha == 2 ){
        return location = ('../HTML/gameOver.html')
        break;
    }else{
        alert ('Escolha Invalida')
        escolha = prompt (' Digite 1 para treinar ou 2 para ir em busca do Digimon')
    }
}