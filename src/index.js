

// const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
// let score = 0
// let question = 1

// for(let i = 0 ; i<listeMots.length ; i++){
//     motUtilisateur = prompt(`Entrez le mot n'${question} : ` + listeMots[i])
//     if (motUtilisateur === listeMots[i]) {
//         score++
//         console.log()
//     }
// }
// console.log("Votre score est de " + score + " sur 3")

const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrases =["dragon", "fée", "warwick"]
let question = 1
let score = 0

let choix = prompt("Qu'elle liste de mot voulez vous: 'fantastique' ou 'réelle'?")

while (choix !== "fantastique" && choix !== "réelle") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'fantastique' ou 'réelle' ?")
}

if (choix === "réelle") {
    for (let i = 0; i < listeMots.length; i++) {
        motUtilisateur = prompt(`Entrez le mot n'${question} : ` + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
            console.log()
        }
          

    }
    console.log("Votre score est de " + score + " sur 3") 
}
else {
    for (let i = 0; i < listePhrases.length; i++) {
        motUtilisateur = prompt(`Entrez le mot n'${question} : ` + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {
            score++
            console.log()
        }
    }
    console.log("Votre score est de " + score + " sur 3") 
}