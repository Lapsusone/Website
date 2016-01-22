
onLine();
var input=document.getElementById('input');
input.focus();
var listeDevisesSource=document.getElementById('listeDevisesSource');
var listeDevisesCible=document.getElementById('listeDevisesCible');
var resultButton=document.getElementById('resultButton');
var disp=document.getElementById('disp');

//options(0,currencies.length);

resultButton.onclick=function() {
    var indexSource=listeDevisesSource.selectedIndex;
    var indexCible=listeDevisesCible.selectedIndex;
    var valeurSource=input.value;
    valeurSource=debugVirg(valeurSource);
    valeurSource=debugEspace(valeurSource);
    var valeurCible=calculValeurCible(valeurSource,indexCible,indexSource);
    Out=formatage(valeurSource)+' '+valeurSource,indexSource+' vaut '+formatage(valeurCible) +' '+valeurCible,indexCible;
    debug(valeurSource);
    disp.innerHTML=Out;
};

function options(index1,index2) {
    var push="";
    for(var i=index1 ;i<index2 ; i++ ) {
        push+='<option>'+currencies[i].name+'</option>';
    }
    listeDevisesSource.innerHTML=push;
    listeDevisesCible.innerHTML=push;
}

function calculValeurCible(valeur,index1,index2) {
    var temp=valeur*currencies[index1].taux/currencies[index2].taux;
    return temp;
}

function arrondi(nombre) {
    var temp=(parseInt(nombre*100+0.5))/100;
    return temp;
}

function pluriel(nombre,index) {
    if (nombre<2){
        return currencies[index].nom;
    }
    else if (nombre>=2) {
        return currencies[index].nomPluriel;
    }
}

function formatage(nombre) {
    var temp=arrondi(nombre);
    temp=''+temp;

    var indexPoint=temp.indexOf('.');
    var i=indexPoint-3;
    if (indexPoint===-1) {
        i=temp.length-3;
    }

    while (i>0) {
        var partieGauche=temp.substring(0,i);
        var partieDroite=temp.substring(i);
        i=i-3;
        temp=partieGauche+' '+partieDroite;
    }

    return temp;
}

function debug(nombre) {
    var numb=isNaN(nombre);
    if (numb===true) {
        Out="Veuillez entrer un nombre.";
    }
    else if (nombre<0) {
        Out="Veuillez entrer un nombre positif.";
    }
    else if (nombre===0) {
        Out="Conseil : Utilisez un nombre supérieur à 0.";
    }
}

function debugVirg(nombre) {
    var virg=nombre.indexOf(',');
    if(virg!==-1) {
        nombre=nombre.replace(",",".");
    }
    return nombre;
}
function debugEspace(nombre) {
    while(nombre.indexOf(' ')!==-1) {
        nombre=nombre.replace(" ","");
    }
    return nombre;
}

function onLine(){
    var ratesXHR = new XMLHttpRequest();
    var currenciesXHR = new XMLHttpRequest();
    var jsonCurrencies;
    var jsonRates;

    currenciesXHR.onreadystatechange = function () {
        if(currenciesXHR.readyState === 4 && currenciesXHR.status === 200)
            jsonCurrencies = JSON.parse(currenciesXHR.responseText);
    }
    ratesXHR.onreadystatechange = function() {
        if (ratesXHR.readyState === 4 && ratesXHR.status === 200) {
            jsonRates = JSON.parse(ratesXHR.responseText);
        }
    };

    currenciesXHR.open("GET","http://openexchangerates.org/api/currencies.json?app_id=88517c65c0ce429d900cc05823fffa91");
    currenciesXHR.send(null);
    ratesXHR.open("GET", "http://openexchangerates.org/api/latest.json?app_id=88517c65c0ce429d900cc05823fffa91");
    ratesXHR.send(null);

    console.log(getRates());
    console.log(jsonRates);
    console.log(getCurrencies(jsonCurrencies,jsonRates).length);
}

function getRates(xhr){
    var xhr = new XMLHttpRequest();
    var jsonRates;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('here');
            return JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "http://openexchangerates.org/api/latest.json?app_id=88517c65c0ce429d900cc05823fffa91");
    xhr.send(null);
}
function getCurrencies(names, rates) {
    var currencies = [];
    for(var code in names) {
        currencies.push({
            code: code,
            name: names[code],
            rate: rates[code]
        });
    }
    return currencies;
}

//currencies = getCurrencies(jsonContenantLesNoms, jsonContenantLesTaux);