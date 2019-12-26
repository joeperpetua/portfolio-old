var lange = "";
var tag;

$(document).ready(function(){

    //change lang on load
    
    // $('#lang option:selected').each(function() {
    //     lange = $( this ).val() + " ";
    // });
    /* console.log(lange); */
    /* changeLang(lange); */


    //change lang on select change

    $('#lang').change(function(){
        var lange = "";
        $('#lang option:selected').each(function() {
            lange = $( this ).val();
          });
        console.log(lange);
        changeLang(lange);
    })


    

    if(window.location.hash) {
        onHashChange();
    } else {
        // Fragment doesn't exist
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
});


function changeLang(lange){

    var langs = lange.split(' ');
    var url = 'http://www.joeperpetua.me/'+langs[0]+'';
    console.log(url);
    
    window.open(url, '_self');
}

