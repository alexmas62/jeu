let toto = "Toto";
const tata = "Tata";

let string = "Chaine de caractères";
let number = 10.45;
let boolean = true; // false

let a = 5;
let b = 3;
let c = a + b;
let d = c + a;
let e = "8";

let test = a > b;
let testDeux = a < b;
let testTrois = c === e;
let testQuatre = c !== e;

console.log(typeof a);
console.log(typeof e);

let testCinq = a + b === 8 && e === "8" && b === 3; // && = ET => Si une condition est fausse, revoie FALSE
let testSix = a + b === 8 || e === 8; // || = OU => Si au moins une condition est vraie, renvoie TRUE

if (false) {
    console.log("Salut !");
}

if (a === 5) {
    console.log("a est bien égal à 5");
}

if (testTrois) {
    console.log("Le Test 3 est valide")
} else {
    console.log("Les Test 3 n'est pas valide")
}

if (testTrois) {
    console.log("Le Test 3 est valide")
} else if (testSix) {
    console.log("Le test 3 n'est pas valide, mais le 6 oui");
} else {
    console.log("Aucun des tests n'est valide...");
}

// let age = prompt("Quel âge avez-vous ?");

// if (age >= 18) {
//     alert('Vous êtes majeur ! Petit coquin ;)');
// } else {
//     alert("Tu es trop jeune pour ça, mon petit ! :(");
//     document.querySelector("body").innerHTML = "";
//     // window.location = "https://www.google.com";
// }

// let question = prompt("Quel est votre langage préféré ?");

// if (question == "JavaScript") {
//     alert("C'est cool");

// } else if (question == "PHP") {
//     alert("C'est vraiment bien !");

// } else if (question == "C#") {
//     alert("C'est bof !");

// } else if (question == "Python") {
//     alert("Ca déchire !");

// } else {
//     alert("Je ne connais pas ce langage...");
// }

// switch (question) {
//     case "JavaScript":
//         alert("C'est cool");
//         break;
//     case "PHP":
//         alert("C'est vraiment bien !");
//         break;
//     case "C#":
//         alert("C'est bof...");
//         break;
//     case "Python":
//         alert("C'est génial !");
//         break;
//     default:
//         alert("Je ne connais pas ce langage");
// }

let nbr = 0;

// Boucle while

while (nbr <= 5) {
    console.log(nbr);
    nbr++;
}

let apprenants = [
    "Soufiane",
    "Marine",
    "François",
    "Thomas",
    "Loïc",
    25,
    nbr,
    true,
];

// let random = (Math.floor(Math.random() * apprenants.length));

// alert(apprenants[random]);


// Boucle for

// for(let i = 0; i < apprenants.length; i++) {
//     console.log("Bonjour, " + apprenants[i]);
// }

console.log("-------------");


let animaux = [
    "Chien",
    "Chat",
    "Oiseau",
    "Cheval",
    "Poisson"
];

animaux.pop() // Retire le dernier élément du tableau
animaux.push("Dinosaure") // Ajoute un nouvel élément au vout du tableau
animaux.splice(2, 0, "Gorille", "Caniche", "Farfadet"); // Param 1 = Index de début | Param 2 = étendue de ce qu'on retire | param 3, 4 ,5 .... ce qu'on veut ajouter.

let clem = {
    prenom: "Clément",
    nom: "Markey",
    dateDeNaissance: "27/06/1994",
    mains: 2,
    jambes: 3
}

let adeline = {
    prenom: "Adeline",
    nom: "Dupont",
    dateDeNaissance: "05/06/1997",
    mains: 2,
    jambes: 2
}

function Humain(prenom, nom, yeux, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.yeux = yeux;
    this.age = age;

    this.direSonPrenom = function () {
        console.log("Bonjour, je suis " + this.prenom);
    }
}

let corentin = new Humain("Corentin", "Kowalsky", "Bleus", 19);
let justine = new Humain("Justine", "Fontaine", "Noisette", 24)

// console.log(corentin);
// console.log(justine);

// if (corentin.age > justine.age) {
//     console.log("Corentin est plus vieux que Justine")
// } else {
//     console.log("Justine est plus vieille que Corentin")
// }

function Animal(race, pattes, peau, regime, ailes, oreilles) {
    this.race = race;
    this.pattes = pattes;
    this.peau = peau;
    this.regime = regime;
    this.ailes = ailes;
    this.oreilles = oreilles;

    this.attaquer = function (cible) {
        console.log("Le " + this.race + " vient d'attaquer le " + cible.race + " !!")
    }
}

let chat = new Animal("Chat", 4, "poilue", "carnivore", 0, "pointues");
let chien = new Animal("Chien", 4, "poilue", "omnivore", 0, "arrondies");

// ------------------- //

function Personnage(nom, classe, atq, pv) {
    this.nom = nom;
    this.classe = classe;
    this.attaque = atq;
    this.pv = pv;

    this.attaquer = function (cible) {
        let chance = Math.floor(Math.random() * 5) + 1;
        console.log(chance);
        let crit = 0;
        let degats = this.attaque + crit;


        console.log(this.nom + " attaque le " + cible.nom + " !!");

        if (chance === 1) {
            crit = this.attaque * 0.70
            degats = Math.floor(this.attaque + crit);
            console.log("WTF LES AMIS !! Coup critique !")
        }

        console.log(cible.nom + " perd " + degats + " PVs !");
        cible.pv = cible.pv - degats;
        console.log("Il reste " + cible.pv + " PVs au " + cible.nom);
        if (cible.pv <= 0) {
            alert(this.nom + " a vaincu le " + cible.nom + " ennemi")
        }
    }
}

let gandalf = new Personnage("Gandalf", "Mage", 12, 50);
let troll = new Personnage("Grudu", "Troll", 7, 250);