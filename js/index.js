function registrati() {
   let nome = document.getElementById('nome').value;
   let cognome = document.getElementById('cognome').value;
   let email = document.getElementById('email').value;
   let eta = document.getElementById('eta').value;
   stampaUtente(nome, cognome, email, eta);
}

function stampaUtente(nome, cognome, email, eta) {
    
    document.getElementById('detail_name').innerHTML = nome;
    document.getElementById('detail_lastname').innerHTML = cognome;
    document.getElementById('detail_age').innerHTML = eta;
    document.getElementById('detail_email').innerHTML = email;
    document.getElementById('detail_pension').innerHTML = calcolaPensione(eta); 


}

function calcolaPensione(eta) {
    let pensione = 70 - eta;
    return pensione


}



function somma() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = (num1) + (num2);
    stampaValore(result);

}

function sottrazione() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = (num1) - (num2);
    stampaValore(result);

}

function moltiplicazione() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = (num1) * (num2);
    stampaValore(result);

}

function divisione() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = (num1) / (num2);
    stampaValore(result);

}

function stampaValore(risultato) {
    document.getElementById('result').innerHTML = 'Il risultato è ' + risultato;
}