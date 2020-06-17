var lange = "";
var tag;


window.onload = function(){

    //change lang on load
    
    // $('#lang option:selected').each(function() {
    //     lange = $( this ).val() + " ";
    // });
    /* console.log(lange); */
    /* changeLang(lange); */


    //change lang on select change

    // $('#lang').change(function(){
    //     var lange = "";
    //     $('#lang option:selected').each(function() {
    //         lange = $( this ).val();
    //       });
    //     console.log(lange);
    //     changeLang(lange);
    // })


    

    if(window.location.hash) {
        onHashChange();
    }

    $(window).on('hashchange', function() {
        onHashChange();
    });

    function onHashChange(){
        var tag = window.location.hash;
        /* console.log(tag); */
        $('.sidebar h2').removeClass('sel');

        if(tag === '#portfolio'){
            $('#portfolio').addClass('sel');
        }

        if(tag === '#about'){
            $('#about').addClass('sel');
        }

        if(tag === '#contact'){
            $('#contact').addClass('sel');
        }
        
    }


    $('.modal').modal();
    $('.parallax').parallax();
    $('select').formSelect();


    var lang1 = document.getElementsByClassName("wg-li")[1];
    var lang2 = document.getElementsByClassName("wg-li")[2];

    if(lang1 != undefined && lang2 != undefined){
        lang1.onclick = function(){ setFormLang() };
        lang2.onclick = function(){ setFormLang() };
    }

    // langModal();
    setFormLang();
}


// function changeLang(lange){

//     var langs = lange.split(' ');
//     var url = 'http://www.joeperpetua.me/'+langs[0]+'';
//     console.log(url);
    
//     window.open(url, '_self');
// }



function setFormLang() {
    var sel = $('.wgcurrent');
    if (sel != undefined) {
        var lang = sel[0].dataset.l;
    }

    if (lang === 'en') {
        var successMsg = 
        `
            <div class="container">
                <h3>Message sent correctly!<h3>
                <h4>You will get a reply soon<h4>
            </div>
            <button class="btn">Got it!</button>
        `;
    }

    if (lang === 'fr') {
        var successMsg = 
        `
            <div class="container">
                <h3>Message envoyé avec succès !<h3>
                <h4>Vous obtiendrez une response bientôt<h4>
            </div>
            <button class="btn">D'accord !</button>
        `;
    }

    if (lang === 'es') {
        var successMsg = 
        `
            <div class="container">
                <h3>Mensaje enviado satisfactoriamente!<h3>
                <h4>Pronto recibirá una respuesta.<h4>
            </div>
            <button class="btn">Ok!</button>
        `;
    }

    var form = document.querySelector('.pageclip-form')
    Pageclip.form(form, {
    onSubmit: function (event) { },
    onResponse: function (error, response) { },
    successTemplate: successMsg
    })

}

//display button to up
 
window.onscroll = function(){
        
    if(scrollY > 1000){
        $('#goUp').removeClass('bounceOutRight'); 
        $('#goUp').addClass('active animated bounceInRight'); 
    }

    if(scrollY < 1000){
        $('#goUp').addClass('bounceOutRight'); 
    }
}

//display language selection modal

// function langModal(){
//     var hash = window.location.hash;

//     if (hash === '#language'){
//         $('#language').modal('open');
//     }
// }

