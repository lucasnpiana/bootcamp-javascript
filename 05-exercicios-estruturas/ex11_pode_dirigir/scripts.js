let idade = 19;
let cnh = true;

if (idade >= 18 && cnh == true){
    console.log('O condutor está apto a dirigir!')
} else if (idade >= 18 && cnh == false) {
    console.log('O condutor possui idade permitida, mas não possui CNH!')
} else {
    console.log('O condutor não possui nem CNH nem idade permitida!')
}
