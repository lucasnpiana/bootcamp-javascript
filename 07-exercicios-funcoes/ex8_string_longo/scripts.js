function tamTexto(palavra) {
    if (palavra.length > 10) {
        console.log("Texto muito longo!");
    } else {
        console.log("Texto dentro do limite!");
    }
    console.log(palavra.length);
}

tamTexto("abecedariaaaaaaaaaao");
tamTexto("oi");