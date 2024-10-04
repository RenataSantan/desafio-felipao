let nomeHeroi = "Renata"
let experiencia = 8100

if (experiencia <= 1000){
    experiencia = "Ferro"
}

else if (experiencia >= 1001 && experiencia <= 2000){
    experiencia = "Bronze"
}

else if (experiencia >= 2001 && experiencia <= 5000){
    experiencia = "Prata"
}

else if (experiencia >= 5001 && experiencia <= 7000){
    experiencia = "Ouro"
}

else if (experiencia >=7001 && experiencia <= 8000){
    experiencia = "Platina"
}

else if (experiencia>= 8001 && experiencia <= 9000){
    experiencia = "Ascendente"
}

else if (experiencia>= 9001 && experiencia <= 10000){
    experiencia = "Imortal"
}

else if (experiencia >= 10001){
    experiencia = "Radiante"
}

console.log ("O Herói de nome " + nomeHeroi + ", está no nível de " + experiencia)