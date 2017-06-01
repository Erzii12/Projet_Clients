function FonctionBoutonAjout(){
    var nodeNom = document.getElementById("NomAjout").value;
    var nodePrenom = document.getElementById("PrenomAjout").value;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    document.getElementById("tblClients").appendChild(tr);
    tr.setAttribute("id", nodeNom + nodePrenom);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.innerHTML = nodeNom;
    td2.innerHTML = nodePrenom; 
    var nodeNomComplet = nodeNom + " " + nodePrenom;
    var option1 = document.createElement("option");
    document.getElementById("listeDeroulante").appendChild(option1);
    option1.innerHTML = nodeNomComplet;
}
function afficher() {
    var Informations = document.getElementById("listeDeroulante").value;
    var table = new Array();
    table = Informations.split(" ");
    var AffichageNom = table[0];
    var AffichagePrenom = table[1];
    document.getElementById("NomASupprimer").value = AffichageNom;
    document.getElementById("PrenomASupprimer").value = AffichagePrenom;
}
function supprimerNomPrenom() {
    var SupprimerNom = document.getElementById("NomASupprimer").value;
    var SupprimerPrenom = document.getElementById("PrenomASupprimer").value;
    var Informations = SupprimerNom + SupprimerPrenom;
    var element = document.getElementById(Informations);
    element.parentNode.removeChild(element);
    var InfoListeDeroulante = document.getElementById("listeDeroulante");
    InfoListeDeroulante.remove(InfoListeDeroulante.selectedIndex);
}