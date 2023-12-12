
// Exercice 1

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




