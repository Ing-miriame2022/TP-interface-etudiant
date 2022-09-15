//fonction pour ajouter mes élement dans les tablau de matieres

var button=document.getElementById("ajoute");
var liste =document.getElementById("liste");
var note=document.getElementById("note");
var matiere=document.getElementById("matiere");

button.addEventListener(
    'click',
    function(){
       const HTML = `
           <td>${matiere.value}</td>
           <td>${note.value}</td>
            <td></td>
       `
       liste.innerHTML= liste.innerHTML+'<tr>'+ HTML +'</tr>';
       note.value='';
        matiere.value = ''

   }
);

var enregistre=document.getElementById("enregistre");
var liste2=document.getElementById("liste2")
var nom=document.getElementById("nom");
var prenom=document.getElementById("prenom");
var matricule=document.getElementById("matricule");
var parcours=document.getElementById("parcour");
var age=document.getElementById("age");
var poids=document.getElementById("poids");
var taille=document.getElementById("taille");
var lieu=document.getElementById("lieu_naissance")
var sexe1=document.getElementById("femme")
var sexe2=document.getElementById("homme")


var table = document.getElementById("tableId");
//var rows = table.getElementsByTagName("tr");

//fonction pour ajouter un nouvel étudaint dans le tableau
enregistre.addEventListener(
    'click',
    function () {

        // get table height
        var trId = document.getElementById("tableId").rows.length;

        var _id = 'line_' + trId; // unique identifier for each table line

        //get all the radio box with name sex, we only need the one selected
        var radioButtons = document.querySelectorAll('input[name="sexe"]');
        let sex;

        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                sex = radioButton.value;
                break;
            }
        }

        const HTML = `
        <td>${nom.value}</td>
        <td>${prenom.value}</td>
        <td>${matricule.value}</td>
        <td>${parcours.value}</td>
        <td>${age.value}</td>
        <td>${poids.value}</td>
        <td>${taille.value}</td>
        <td>${lieu.value}</td>
        <td>${sex}</td>
       
        <td> <button onclick="Supprimer(this)"> Supprimer </button>
             <button onclick="Modifier(this)"> Modifier </button>
      
        `

        //first check if _id is already in the datble, if that is the case, then you will not add it, you will only update the value in the table :) :)

        liste2.innerHTML = liste2.innerHTML + '<tr id=' + _id+'>'+ HTML +'</tr>';
        nom.value='';
        prenom.value='';
        matricule.value='';
        parcours.value='';
        age.value='';
        poids.value='';
       taille.value='';
    }
);


//fonction pour supprimer
//var button=document.getElementById("ajoute");
//var liste =document.getElementById("liste");
//var note=document.getElementById("note");
//var matiere=document.getElementById("matiere");

//button.action(
//    'click',
//    function(){
//        const HTML = `
//            <td>${matiere.value}</td>
//            <td>${note.value}</td>
//            <td></td>
//        `
//        let listeDel=note.removeChild(button);
      
//    }
//);



function Supprimer(line)
{
    
    var row = line.parentNode.parentNode;
    row.parentNode.removeChild(row);
        
}


function Modifier(line) {
    var row = line.parentNode.parentNode;

    // list all the attribut 
    document.getElementById("nom").value = row.cells[0].innerHTML;
    document.getElementById("prenom").value = row.cells[1].innerHTML;
    document.getElementById("matricule").value = row.cells[2].innerHTML;
    document.getElementById("parcour").value = row.cells[3].innerHTML;
    document.getElementById("age").value = row.cells[4].innerHTML;
    document.getElementById("poids").value = row.cells[5].innerHTML;
    document.getElementById("taille").value = row.cells[6].innerHTML;
    document.getElementById("lieu_naissance").value = row.cells[7].innerHTML;


    document.getElementById(row.cells[8].innerHTML) = row.cells[8].innerHTML;
  

}