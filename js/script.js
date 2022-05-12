/*function nomeFunzione {




}*/

//esempio

let num1 = 15;
let num2 = 20;
let num3 = 5;
let num4 = 10;


/*function somma(param1, param2) {
    let result = param1 + param2;
    if (result >= 25) {
        console.log(result)
    } else {
        console.log('numero minore di 25')
    }

}

somma(num1,num2); 
somma(num2,num3);
somma(num1,num3);
somma(num1,num4); 
somma(num2,num4);
somma(num3,num4); */


/*function sottrazione(param1, param2) {
    const result = param1 - param2;
    if (result < 0) {
        console.log(result)
    } else if (result >= 10) {
        console.log(result)
    } else {
        console.log('numero minore di 10')
    }
}

sottrazione(num1,num2); 
sottrazione(num2,num3);
sottrazione(num1,num3);
sottrazione(num1,num4); 
sottrazione(num2,num4);
sottrazione(num3,num4); */

//dichiarazione di funziona
function somma(param1, param2, param3) {
    const result = param1 + param2 +param3;
    return result;
}

//funzione espressa 
let miaFunc = function() {
    return
}

function stampa(arg1) {
    console.log('Il risultato è' + arg1);
} //utilizzo la funzione dichiarazione se voglio che la mia funzione sia sempre esistente


(function() {
    console.log('funzione auto-invoke');
})() 

/*var printFunc = function(arg1) {
    console.log('Il risultato è' + arg1)
}*/ //si utilizza questo tipo di funzione, solo se voglio che la mia funzione sia visualizzabile solo da un certo punto

let r = somma(num1, num2, num3);
stampa(r);

let num = 25;

function func() {
    let str = document.getElementById('nome').value;
    console.dir(str)
   

}

func()
//non stampa 'sono della func' perché il valore 'str' non è stato dichiarato nel blocco

/*let x = func();
console.log(num);
console.log(str);*/




