function FonctionBoutonAjout(){
    var nodeNom = document.getElementById("NomAjout").value;
    var nodePrenom = document.getElementById("PrenomAjout").value;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    document.getElementById("tblClients").appendChild(tr);
    tr.setAttribute("id", nodePrenom + nodeNom);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.innerHTML = nodeNom;
    td2.innerHTML = nodePrenom; 
    var nodeInformation = nodeNom + " " + nodePrenom;
    var OptionListeDeroulante = document.createElement("option");
    document.getElementById("listeDeroulante").appendChild(OptionListeDeroulante);
	OptionListeDeroulante.setAttribute("id",nodePrenom + nodeNom);
    OptionListeDeroulante.innerHTML = nodeInformation;
	document.getElementById("PrenomAjout").value = "";
	document.getElementById("NomAjout").value = "";
}
function afficher() {
    var Informations = document.getElementById("listeDeroulante").value;
    var table = new Array();
    table = Informations.split(" ");
    var AffichageNom = table[0];
    var AffichagePrenom = table[1];
    document.getElementById("PrenomASupprimer").value = AffichagePrenom;
    document.getElementById("NomASupprimer").value = AffichageNom;
	if(document.getElementById("PrenomASupprimer").value == "undefined")
		{
			document.getElementById("PrenomASupprimer").value = "";
		}
}
function supprimerNomPrenom() {
    var SupprimerNom = document.getElementById("PrenomASupprimer").value;
    var SupprimerPrenom = document.getElementById("NomASupprimer").value;
    var Informations = SupprimerNom +SupprimerPrenom;
    var element = document.getElementById(Informations);
    element.parentNode.removeChild(element);
    var ListeDeroulante = document.getElementById("listeDeroulante");
	ListeDeroulante.remove(ListeDeroulante.selectedIndex);
	document.getElementById("PrenomASupprimer").value = "";
	document.getElementById("NomASupprimer").value = "";
}