function escolher(){
var resposta = prompt ('Aperte 1 para- O vento, 2 para - O tempo, 3- O pó')
while (true)

if (resposta == 1 ){
    return location = ("../HTML/gameoverCha.html");

}else if (resposta == 2 ){
    return location = ("../HTML/fase2asegundaevolucao.html");

}else if (resposta == 3){
    return location = ("../HTML/gameoverCha.html");
    break;
    
}else {
        alert ('Resposta invalida')
        resposta = prompt ('Aperte 1 para- O vento, 2 para - O tempo, 3- O pó')
}
}