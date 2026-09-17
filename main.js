const apprenants = [
  {
    id: 1,
    nomComplet: "Sara Dev",
    ville: "Nador",
    resultats: [
      { jour: 1, exercicesTermines: 18, totalExercices: 20, challengeTermine: true },
      { jour: 2, exercicesTermines: 14, totalExercices: 20, challengeTermine: false }
    ]
  },
  {
    id: 2,
    nomComplet: "Yassine Code",
    ville: "Oujda",
    resultats: [
      { jour: 1, exercicesTermines: 12, totalExercices: 20, challengeTermine: false }
    ]
  }
];
function normaliserNom(nom) {
    return nom.trim().toLowerCase();
}
function validerResultat(jour, faits, total){
    if (jour < 1 || jour > 7){
        return false
    };
    if (faits < 0 total <= 0){
        return false 
    };
    if (faits > total){
return false 
    };
    return true;
}
function ajouterApprenant(liste, id, nomComplet, ville){
    if (liste.some(a => a.id === id)){
        return false
    }
    const nouveau = {id, nomComplet: nomComplet.trim(), ville: ville.trim(), resultats: []};
    liste.push(nouveau);
    return true;
}
