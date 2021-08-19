function escolher (){
 var escolher = prompt('1para Fugir 2 para lutar?');
while (true)
if (escolher == 1 ){
    return location = ('../HTML/gameOver.html');
}else if (escolher == 2){
    return location = ("../HTML/ChackmongameOver2.html");
    break;
}else{
    alert ("escolha Invalida")
    escolher = prompt('1para Fugir 2 para lutar?');
}
}