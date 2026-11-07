function adivinhaDado (dado){

    if (typeof dado === 'string'){
        console.log("Seu dado é uma STRING!");

    } else if (typeof dado ===  'number'){
        console.log("Seu dado é um NUMBER!");

    } else if (typeof dado ===  'boolean'){
        
        console.log("Seu dado é um boolean!");

    }
}

adivinhaDado(3);
adivinhaDado("lucas");
adivinhaDado(true);