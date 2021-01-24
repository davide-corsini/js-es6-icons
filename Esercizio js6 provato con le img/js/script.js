$(document).ready(function(){

    const elenco = [
        // https://biografieonline.it/img/bio/Michael_Jordan_5.jpg
        {
            prefix: 'https://biografieonline.it',
            family: '/img/bio/',
            name: 'Michael_Jordan_5',
            formato: '.jpg',
            type: 'basket',
            title: 'jordan'
        },
        // https://gianlucadimarzio.com/application/files/7215/9515/0630/Del_Piero_Juventus_IMAGE.jpg
        {
            prefix: 'https://gianlucadimarzio.com',
            family: '/application/files/7215/9515/0630/',
            name: 'Del_Piero_Juventus_IMAGE',
            formato: '.jpg',
            type: 'soccer',
            title: 'Del Piero'
        },
        // https://alessandrogirola.files.wordpress.com/2014/01/ana-ivanovic-9.jpg
        {
            prefix: 'https://alessandrogirola.files.wordpress.com',
            family: '/2014/01/',
            name: 'ana-ivanovic-9',
            formato: '.jpg',
            type: 'tennis',
            title: 'ana ivanovic'
        },
        // https://img2.liberoquotidiano.it/upload/1582734666908.jpg
        {
            prefix: 'https://img2.liberoquotidiano.it',
            family: '/upload/',
            name: '1582734666908',
            formato: '.jpg',
            type: 'tennis',
            title: 'maria sharapova'
        },
        // https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2018/08/magic8.jpg
        {
            prefix: 'https://d1l5jyrrh5eluf.cloudfront.net',
            family: '/wp-content/uploads/2018/08/',
            name: 'magic8',
            formato: '.jpg',
            type: 'basket',
            title: 'Magic Johnson'
        },
        // https://cdn.theathletic.com/app/uploads/2020/05/18212538/Larry-Bird-e1589854367382-1024x683.jpg
        {
            prefix: 'https://cdn.theathletic.com',
            family: '/app/uploads/2020/05/18212538/',
            name: 'Larry-Bird-e1589854367382-1024x683',
            formato: '.jpg',
            type: 'basket',
            title: 'Larry Bird'
        },
        // https://tennishead.net/wp-content/uploads/2020/02/Roger-Federer-celebrates.jpg
        {
            prefix: 'https://tennishead.net',
            family: '/wp-content/uploads/2020/02/',
            name: 'Roger-Federer-celebrates',
            formato: '.jpg',
            type: 'tennis',
            title: 'roger federer'
        },
        // https://upload.wikimedia.org/wikipedia/commons/a/a7/LeBron_James_Lakers.jpg
        {
            prefix: 'https://upload.wikimedia.org',
            family: '/wikipedia/commons/a/a7/',
            name: 'LeBron_James_Lakers',
            formato: '.jpg',
            type: 'basket',
            title: 'lebron james'
        },
        // https://i2-prod.glasgowlive.co.uk/incoming/article18490767.ece/ALTERNATES/s1200c/0_GettyImages-97170984.jpg
        {
            prefix: 'https://i2-prod.glasgowlive.co.uk',
            family: '/incoming/article18490767.ece/ALTERNATES/s1200c/',
            name: '0_GettyImages-97170984',
            formato: '.jpg',
            type: 'soccer',
            title: 'steven gerrard'
        },
        // https://www.open.online/wp-content/uploads/2019/10/GOLF_20191019220430801.jpg
        {
            prefix: 'https://www.open.online',
            family: '/wp-content/uploads/2019/10/',
            name: 'GOLF_20191019220430801',
            formato: '.jpg',
            type: 'soccer',
            title: 'cristiano ronaldo'
        },
        // https://images.squarespace-cdn.com/content/v1/5357ea52e4b0b8b00879baf2/1515521482006-K4373RTD3MVKYIDY04YM/ke17ZwdGBToddI8pDm48kMW07nDPUi4QpkaiOZOMjjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmru5j-AQBePNiDV9hZLaF5Nv1eI2eQHYQ5hCOGwfHNc2oGbzw7ZizcAH76AsE0075/Kobe_Bryant_003.jpg
        {
            prefix: 'https://images.squarespace-cdn.com',
            family: '/content/v1/5357ea52e4b0b8b00879baf2/1515521482006-K4373RTD3MVKYIDY04YM/ke17ZwdGBToddI8pDm48kMW07nDPUi4QpkaiOZOMjjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmru5j-AQBePNiDV9hZLaF5Nv1eI2eQHYQ5hCOGwfHNc2oGbzw7ZizcAH76AsE0075/',
            name: 'Kobe_Bryant_003',
            formato: '.jpg',
            type: 'basket',
            title: 'kobe bryant'
        },
        // https://www.juventus.com/images/image/private/t_album/dev/orqkwovqmd0t2abjtxpx.jpg
        {
            prefix: 'https://www.juventus.com',
            family: '/images/image/private/t_album/dev/',
            name: 'orqkwovqmd0t2abjtxpx',
            formato: '.jpg',
            type: 'soccer',
            title: 'pavel nedved'
        },
        // https://upload.wikimedia.org/wikipedia/commons/b/be/Wayne_Rooney_vs_Everton_2009.jpg
        {
            prefix: 'https://upload.wikimedia.org',
            family: '/wikipedia/commons/b/be/',
            name: 'Wayne_Rooney_vs_Everton_2009',
            formato: '.jpg',
            type: 'soccer',
            title: 'wayne rooney'
        },
        // https://www.tennisworlditalia.com/imgb/67095/woodbridge-novak-djokovic-ha-commesso-un-grave-errore-inviando-quella-lettera-.jpg
        {
            prefix: 'https://www.tennisworlditalia.com',
            family: '/imgb/67095/',
            name: 'woodbridge-novak-djokovic-ha-commesso-un-grave-errore-inviando-quella-lettera-',
            formato: '.jpg',
            type: 'tennis',
            title: 'novak djokovic'
        },
        // https://www.rai.it/resizegd/320x-/dl/img/2014/06/1403765413008_medium_140625_183825_to250614est_0605.jpg
        {
            prefix: 'https://www.rai.it',
            family: '/resizegd/320x-/dl/img/2014/06/',
            name: '1403765413008_medium_140625_183825_to250614est_0605',
            formato: '.jpg',
            type: 'tennis',
            title: 'fabio fognini'
        },
        // https://www.nbareligion.com/wp-content/uploads/2016/12/steve-nash-suns.jpg
        {
            prefix: 'https://www.nbareligion.com',
            family: '/wp-content/uploads/2016/12/',
            name: 'steve-nash-suns',
            formato: '.jpg',
            type: 'basket',
            title: 'steve nash'
        },
        // https://upload.wikimedia.org/wikipedia/commons/2/27/Jason_Kidd_mavs_allison.jpg
        {
            prefix: 'https://upload.wikimedia.org',
            family: '/wikipedia/commons/2/27/',
            name: 'Jason_Kidd_mavs_allison',
            formato: '.jpg',
            type: 'basket',
            title: 'jason kidd'
        },
        
        // https://static.sky.it/images/skytg24/it/sport/giornata-mancini-calciatori-famosi/messi_getty.jpg.transform/hero-mobile/b237473a90cd027d059cf2040363cb9cde11c9cf/img.jpg
        {
            prefix: 'https://static.sky.it',
            family: '/images/skytg24/it/sport/',
            name: 'giornata-mancini-calciatori-famosi/messi_getty.jpg.transform/hero-mobile/b237473a90cd027d059cf2040363cb9cde11c9cf/img',
            formato: '.jpg',
            type: 'soccer',
            title: 'lionel messi'
        },
        // https://www.calcioefinanza.it/wp-content/uploads/2020/08/fbl-eur-c1-psg-training.jpg
        {
            prefix: 'https://www.calcioefinanza.it',
            family: '/wp-content/uploads/2020/08/',
            name: 'fbl-eur-c1-psg-training',
            formato: '.jpg',
            type: 'soccer',
            title: 'neymar'
        },
        // https://sport.periodicodaily.com/wp-content/uploads/2019/09/Francesco_Totti_esultanza-1024x683.jpeg
        {
            prefix: 'https://sport.periodicodaily.com',
            family: '/wp-content/uploads/2019/09/',
            name: 'Francesco_Totti_esultanza-1024x683',
            formato: '.jpeg',
            type: 'soccer',
            title: 'francesco totti'
        }
    ];

    elenco.forEach((element) => {
        const{type}= element;
        console.log(element.type);
    });

    const colori = [
        'linear-gradient(to left, rgba(255, 217, 0, 0.582), orange, yellow)',
        'linear-gradient(to top, rgba(209, 77, 77, 0.856), white, red)',
        'linear-gradient(to right, rgba(54, 105, 54, 0.459), green, lightgreen)'
    ];

    //adesso voglio che basket ---> orange, tennis---->red, soccer---->green
    //*                                          
    const imgType = prendoPerTipo(elenco);
    console.log(imgType);

    function prendoPerTipo(array){
        const imgTipo = [];
        array.forEach((element) => {
            if(!imgTipo.includes(element.type)){
                imgTipo.push(element.type);
            }
        });
        return imgTipo;
    }
    //*                                           

    //adesso devo mappare array principale ed aggiungere chiave colore
    //per aggiungere la chiave colore, posso anche scrivere una funzione getColor
    //.                                           
    const imgColore = elenco.map((element) =>{
        const{type}=element;
        return{
            ...element,
            color: getColor(type)
        }
    });

    console.log(imgColore);


    function getColor(sports){
        if(sports == 'basket'){
            return 'linear-gradient(to left, rgba(255, 217, 0, 0.582), orange, yellow)';
        }
        else if(sports == 'tennis'){
            return 'linear-gradient(to top, rgba(209, 77, 77, 0.856), white, red)';
        }
        return 'linear-gradient(to right, rgba(54, 105, 54, 0.459), green, lightgreen)';
    }
    //.                                           

    //adesso invece stampo tutto come?
    //mi creo una funzione in cui i valori sono array completo, che adesso corrisponde a imgColore + dove devo stampare nell html
    //partiamo con il salvare in una costante dove devo stampare
    //_                                           
    const doveStampo=$('#print-tutto');

    stampareTutto(imgColore, doveStampo);
    function stampareTutto(array, container){
        container.html('');
        array.forEach((element)=>{
            const{prefix, family, name, formato, type, title, color} = element;
            container.append(`
                <div class="immagine" style="background:${color}">
                    <img src="${prefix}${family}${name}${formato}" alt="">
                    <p class='title' style="color: black;">${title.toUpperCase()}</p>
                </div>
            `);
        });
    }
    //_                                           
    //adesso devo aggiungere nel mio html oltre ad ALL pure i tipi
    //mi salvo dove devo appendere e stampare in una const
    //Dopodiché mi creo una funzione in cui appendo per tipo alla select
    //*                                           
    const containerOptions = $('#selezione');

    //richiamo la mia funziona all array per imgType e containerOptions che sará dove appendo il tutto
    printForOptions(imgType, containerOptions);
    function printForOptions(array, select){
        array.forEach((element) =>  {
            select.append(`
                <option value='${element}'>${element}</option>
            `);
        });
    }
    //*                                           

    //adesso filtro le relative scelte/opzioni 
    //utilizzo il metodo change di jQuery

    //Mi prendo il containerOptions
    //.                                           
    containerOptions.change(function(){
        const option = $(this).val();
        console.log(option);

        const risultatoPerSelezione = filtroValori(imgColore, option);
        console.log(risultatoPerSelezione);
        stampareTutto(risultatoPerSelezione, doveStampo);
    });

    //adesso filtro i valori relativi
    //Questo quindi filtra i dati e va a vedere se sono di type giusto, quindi mi dovró creare una nuova funzione
    function filtroValori(array,type){
        const filtroImg = array.filter((element) => {
            return element.type == type;
        });
        if(filtroImg.length > 0){

            return filtroImg;
        }
        return array;
    }
    //.                                          

    











});