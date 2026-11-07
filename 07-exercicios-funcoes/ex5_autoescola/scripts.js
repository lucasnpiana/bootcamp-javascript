function podeEntrar (idade) {
    if (idade >= 18){
        console.log("Pode entrar!")
    } else{
        console.log("Não pode entrar!")
    }
}

console.log(podeEntrar(19));
console.log(podeEntrar(18));
console.log(podeEntrar(12));