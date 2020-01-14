/**
 * @function changeSelect
 * @description Fonction qui affiche le formulaire adéquate et cacher l'autre
 * @param {undefined} undefined
 * @return {undefined} undefined
**/
function changeSelect () {
	var selecteur, etudiantForm, employeForm;
	// Récupération du select pour le type de formulaire d'inscription 
	selecteur = window.document.getElementById("profileType");
	// Récupération du formulaire étudiant
	etudiantForm = window.document.getElementById("studentForm");
	// Récupération du formulaire employé
	employeForm = window.document.getElementById("employeeForm");
	// Si la valeur du select est étudiant on affiche le formulaire étudiant et cache le formulaire employé
	if (selecteur.value === "student") {
		etudiantForm.style.display = "";
		employeForm.style.display = "none";
	// Si la valeur du select est employé on affiche le formulaire employé et cache le formulaire étudiant
	} else if (selecteur.value === "employee") {
		employeForm.style.display = "";
		etudiantForm.style.display = "none";
	}
	// On place un écouteur d'évenement pour les changement d'état du select pour le choix de formulaire
	selecteur.addEventListener("change", changeSelect, false);
}
/**
 * @function cleanForms
 * @description Fonction de mise en forme des formulaires
 * @param {undefined} undefined
 * @return {undefined} undefined
**/
function cleanForms () {
	var v;
	// Récupération de tous les input
	v = document.querySelectorAll('input');
	// Pour chaque input
	for (prop in v) {
		// Si l'input possède un id
		if (v[prop].id) {
			// On récupèrle la partie qui fait référence à la base de données
			name = v[prop].id.split("-")[1];
			// Si l'input n'est pas un numéro de téléphone
			if (name !== "tel_fixe" && name !== "tel_mobile") {
				// L'input est en saisie obligatoire
				v[prop].required = true;
				// en fonction de l'input trouvé
				switch (name) {
					case "annee" :
						// Maximum en 5ème années
						v[prop].max = 5;
						// Minimum en 1ère années
						v[prop].min = 1;
						// Un caractère maximum
						v[prop].pattern = "[0-5]{1}";
						break;
					case "nom" :
						// composé de caractère et de tirets
						v[prop].pattern = "[a-zA-Z-]+";
						// Placeholder de l'input
						v[prop].placeholder = "nom";
						break;
					case "prenom" :
						// composé de caractère et de tirets
						v[prop].pattern = "[a-zA-Z-]+";
						// Placeholder de l'input
						v[prop].placeholder = "prénom";
						break;
					case "matricule" :
						v[prop].maxLength = 10;
						// Placeholder de l'input
						v[prop].placeholder = "123456789A";
						// Composé de 9 chiffre et 1 caractère
						v[prop].pattern = "[0-9]{9}[A-Z]{1}";
						break;
					case "date_de_naissance" :
						v[prop].type = "calendar";
						// Placeholder de l'input
						v[prop].placeholder = "JJ/MM/AAAA";
						// Composé de 10 caractère maximum 
						v[prop].maxLength = 10;
						// De la forme "01/01/2000" "01.01.2000" "01-01-2000"
						v[prop].pattern = "(0[1-9]|[12][0-9]|3[01])[-/\.](0[1-9]|1[012])[-/\.](19[0-9][0-9]|20[0-9][0-9])";
						break;
					case "mot_de_passe" :
						// Composé de 8 caractère minimum avec minimum 1 chiffre, 1 Majuscule, 1 Minuscule
						v[prop].pattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}";
						break;
					case "confirmation_mot_de_passe" :
						// Composé de 8 caractère minimum avec minimum 1 chiffre, 1 Majuscule, 1 Minuscule
						v[prop].pattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}";
						break;
				}
			// Pour les numéro de téléphones	
			} else {
				// Maximum 12 caractères
				v[prop].maxLength = 12;
				// Commence par un + puis 11 caractère
				v[prop].pattern = "[+][0-9]{11}";
				// Placeholder des téléphones
				v[prop].placeholder = "+33 x xx xx xx xx";
			}
		}
	}
}
/**
 * @function main
 * @description Fonction principal du script
 * @param {undefined} undefined
 * @return {undefined} undefined
**/
function main () {
	// Mise en forme des formulaires
	cleanForms();
	// Mise en place initiale des formulaires
	changeSelect();
	
}
window.onload = main;
