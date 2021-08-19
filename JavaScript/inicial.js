function Avancar(){
 var escolher = prompt("Aperte 1 para Chackmon, 2 para o Labramon e 3 para o Storabimon.")
 while(true) {
     
    if (escolher == 1) {
       return location = ('../HTML/fase1.html');
    
    }else if ( escolher == 2){
        return location = ('../HTML/Labramon1.html');
    
    }else if (escolher == 3){
        return location = ('../HTML/Storabimon.html');
        break;
    } else {
        alert ("Numero invalido")
        escolher = prompt("Aperte 1 para Chackmon, 2 para o Labramon e 3 para o Storabimon.")
        }
    }
}