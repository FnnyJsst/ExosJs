
// // EXERCICE 1

let listeNombre1 = document.getElementsByName('nombre1');
let arrayNombre1 = [];
let nombre1;
let listeNombre2 = document.getElementsByName('nombre2')[0];
let bouton1 = document.getElementById('bouton1')

//extraire nombre1 et calculer le produit de nombre 1 et nombre 2
function extraireNombre1 () {
    let nombre2 = parseInt(listeNombre2.value);
    
    for (let i = 0; i < listeNombre1.length; i++) {
        if (listeNombre1[i].checked) {
            arrayNombre1.push(listeNombre1[i])
        }
    }
    nombre1 = parseInt(arrayNombre1[0].value);
   
    let produit = nombre1 * nombre2;
    return produit;
}

bouton1.addEventListener('mouseover', function() {
    let resultat = extraireNombre1 ()
    return alert(resultat);
})

// EXERCICE 2

//Déclaration des variables

// let italie = document.getElementsByName('italie');
// let allemagne = document.getElementsByName('allemagne');
// let espagne = document.getElementsByName('espagne');
let choix = document.getElementById('choix');
let bouton2 = document.getElementById('bouton2');
let countriesArray = [];
let visitedCountries = [];
let checkbox = [];
let inputs = document.getElementsByTagName("input");



function paysVisités () {
    // Vérifier si les inputs sont des checkbox
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'checkbox') {
            checkbox.push(inputs[i]);
        }
    }

    //Récupérer les checkbox cochées + leur name
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked && countriesArray.indexOf(checkbox[i].name) === -1) {
            countriesArray.push(checkbox[i].name);
        }
    }
    let countries = countriesArray.join(', ');
    return countries;
}

function affichageInput() {
let pays = paysVisités();
choix.setAttribute('value', pays);

}

bouton2.addEventListener('click', affichageInput);

// EXERCICE 3

// Mettre dernière ville en gras 
let liste = document.getElementById('liste');
let dernierElement = liste.lastElementChild;
let boutonGras = document.getElementById('gras');
let size;

function gras() {
    console.log(dernierElement);
    dernierElement.style.fontWeight = "600";
    return dernierElement;
}
boutonGras.addEventListener('click', gras);

// Supprimer la deuxième ville 
let boutonSupprimer = document.getElementById("suppression");

function supprimer() {
let marseille = document.getElementsByTagName("li")[1];
let suppression = liste.removeChild(marseille);
return suppression;
}

boutonSupprimer.addEventListener('click', supprimer);

// Afficher nombre total de villes
let boutonTotal = document.getElementById('longueur');

function total() {
    size = liste.childElementCount;
    alert("Le nombre total de villes est : " + size);
    return size;
} boutonTotal.addEventListener('click', total);

//Remplacer nom de la ville     
    function remplace() {
        let lyon = document.getElementsByTagName("li")[1]; 
    }

