//{punto#1 Aggiungere i colori ad ogni categoria: 
//{punto#1 blue per gli animali, orange per i vegetali e viola per gli utenti.
//{punto#1 Prendete i colori da un altro array.
//.punto#2 voglio far corrispondere la const---> colori in ordine ad:
//. 1)animali   2)vegetali    3) users
//_punto#3 devo mappare array gigante per aggiungere i colori di array "colori"
//*punto#4 devo stampare tutto
//{punro#5 appendere alla select che contiene solo 'All' anche i tipi che trovo nelle iconePertipo}
//.punto#6 adesso devo far ritornare quello che clicco nella select con un metodo jQuery che si chiama "change()"
$(document).ready(function(){

    //*Questo é il mio array da inserire nel mio foglio html e su cui fare tutti i relativi cicli
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        }
    ];

    //{punto#1 mi creo una constante con i tre colori da assegnare ad ogni genere
    const colori = [
        'blue',
        'orange',
        'purple'
    ];
    console.log(colori);
    //.per rispondere al punto #2 devo ciclare sull array principale
    const iconeTipi = prendoPerTipo(icons);
    
    console.log(iconeTipi);


   //_#3 ----> MAPPO e per mappare esiste un metodo js5,
   //_questo metodi mi permette di confrontare l indici dei due array che devo "accoppiare"
   //_mi serve aggiungere i colori alle icone in base ai tipi
    const iconeEcolori = icons.map((element, index) => {
        const{type} = element;
        //_adesso che sono nel map cosa devo ritornare?
        //_ devo ritornare i colori
        return{
            ...element,
            colore: getColor(type)
        }
    });
    console.log(iconeEcolori);


    //*stampo tutto dentro il container -----> qua penso mi serva jQuery

    const doveStampo = $('#print-tutto');
    console.log(doveStampo);

    stampareTutto(iconeEcolori, doveStampo);


    //{#5}
    //salvo in una constante la select su cui devo appendere e stampare
    const doveStampareOpzioni = $('#selezione');
    stampoOpzioni(iconeTipi,doveStampareOpzioni);



    //.#6 rispondo al punto 6
    //utilizzo questo change su dove ho stampato le opzioni, funziona come un onclick
    doveStampareOpzioni.change(function(){
        const tipoSelezionato = $(this).val();
        console.log(tipoSelezionato);
        const filtroIcone = filtroValori(iconeEcolori, tipoSelezionato)
        console.log(filtroIcone);

        //adesso li passo la stampa dei filtri
        stampareTutto(filtroIcone, doveStampo);
    });

    function filtroValori(array, type){
        const filtroIcone = array.filter((element) => {
            return element.type == type;
        });

        //questo serve al momento che seleziono all non mi venga tutto vuoto ma al contrario tutto pieno
        //Come glielo dico?
        //se filtro icone é popopolato mi restituisce filtro icone
        //altrimenti HO CLICCATO ALL mi restituisce tutto l'array.
        if(filtroIcone.length > 0){
            return filtroIcone;
        }
        return array;
    }
});


//*#1 FUNZIONE CHE MI SERVE A FARE UN ARRAY DI ICONE PER TIPO
function prendoPerTipo(array) {
    const iconeTipi = [];
    array.forEach((element) => {
        //*devo inserire la condizione perché per pushare non lo deve includere
        // types.push(element.type)
        if (!iconeTipi.includes(element.type)) {
            iconeTipi.push(element.type);
        };

    });
    return iconeTipi;
}






//_Questa funzione mi serve per aggiungere all'array  iconeEtipi anche i colori
function getColor(genere){
    if(genere == 'animal'){
        return 'blue'
    }
    else if(genere == 'vegetable'){
        return 'orange'
    }
    return 'purple';
}

//* Creo la funzione per stampare le varie icone
function stampareTutto(miServeArray, doveDevoStampare){
    doveDevoStampare.html('');
    miServeArray.forEach((element) => {
        const {name,prefix,type,family,colore} = element;
        doveDevoStampare.append(
            //*qui posso cancellare la roba dall'html
            //* al posto delle classi ci appendo le cose destrutturate
            //*DOVE? All' interno del ciclo stesso nel template literal le inserisco
            `
            <div class="icon">
                <i class="${family} ${prefix}${name}" style="color:${colore}"></i>
                <p>${name}</p>
            </div>
            `
        );
    });
}


//{#5 Rispondo al punto numero 5}
function stampoOpzioni(array, select) {
    //la select corrisponde---> a dove appendo le opzioni e quindi le stampo
    //elemento su cui ciclare, qual é l'array su cui devo farlo? semplicemente
    //quello delle icone per tipo
    array.forEach((element) => {
        select.append(`
                <option value='${element}'>${element}</option>
            `);
    });
};

