function ObterMedia(){
    const media = 3;
    let a = parseInt(document.getElementById("a").value); 
    let b = parseInt(document.getElementById("b").value); 
    let c = parseInt(document.getElementById("c").value);

    let calculo = (a + b + c) / media;

    document.getElementById("resultado").innerHTML = "Resultado: " + calculo;

}