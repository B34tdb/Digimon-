function escolha (){
    var escolha = prompt ('Digite 1 para que ele realize que tudo seja desfeito e isso nunca tenha acontecido ou 2 para que tudo volte como era antes')
    while (true)

    if (escolha == 1 ){
        return location = ('../HTML/Storabimonfinal2.html')
    
    }else if (escolha == 2 ){
        return location = ('../HTML/Storabimon.html')
        break;
    }else{
        alert ("Escolha invalida")
        escolha = prompt ('Digite 1 para que ele realize que tudo seja desfeito e isso nunca tenha acontecido ou 2 para que tudo volte como era antes')
    }
}