/*

    /!\ Pour toute question concernant mon code ou pour une demande de màj :

        Vous pouvez me contacter par email ou par téléphone (attention numéro belge) :
        Jean-Christophe LEPOT
        jclepot@lepot.be
        +32 475/51.13.99

             _   _____                                 _        _
            | | / ____| ___   _ __    ___  ___  _ __  | |_     | |__    ___
         _  | || |     / _ \ | '_ \  / __|/ _ \| '_ \ | __|    | '_ \  / _ \
        | |_| || |____| (_) || | | || (__|  __/| |_) || |_     | |_) ||  __/
        \____/  \_____|\___/ |_| |_| \___|\___|| .___/ \__| () |_.__/  \___|
                                               | |
                                               |_|
                                           
        En ligne à l'adresse :
        http://jconcept.be/wild-circus/

        Et sur GitHub :
        https://github.com/JConcept/Wild-circus

*/
/*************************
    VARIABLES GLOBALES
**************************/
var $header = $('.content-header'),
    $hiddeHeader = $('.hidde-header');


/***************
    FONCTIONS
****************/
// Permet de cloner le header et de le mettre en "position: fixed" via une class dans le CSS
// Cette technique permet de ne pas devoir mettre en margin-top sur l'élément vidéo  
var fDuplicateHeader = function () {
    $header = $header.clone($header).addClass('fixed');
    $('#header-top').append($header);
    $header.append('<span class="hidde-header"></span>');
};

// @BUGFIX : sur ANDROID la vidéo ne se lance pas en autoplay => non pris en charge. 
// Pour lancer la vidéo, obligation de toucher l'écran pour la lancer, car l'évènement load ne fonctionne pas sur android.
//           http://stackoverflow.com/questions/9075520/how-to-autoplay-html5-mp4-video-on-android
var fvideoStartAndroid = function () {
    document.getElementById('video1').play();
    this.removeEventListener('touchstart', fvideoStartAndroid); // on supprime notre écouteur d'évènement
};

// Rabattre le header fixé
var fHideHeader = function () {
    $header.toggleClass('header-hidden');
    $('.hidde-header').toggleClass('header-hidde');
};

// Bouton lisez plus
var freadMore = function () {
    $('#equestrian blockquote').toggleClass('hidde');
};


/*************************
    APPEL DE FONCTIONS
**************************/
$(document).ready(function() {
    // Composant JQuery intégré comme demandé :
    // http://jquerycards.com/ui/dialogs-lightboxes/jquery-tosrus/
    $("#links a").tosrus({
        infinite : true,
        buttons  : true,
        pagination  : {
            add	 : true,
            type : 'thumbnails'
        }
    });
    
    fDuplicateHeader();

    $('.hidde-header').click(fHideHeader);

    $('#equestrian blockquote').click(freadMore);
});
window.addEventListener('touchstart', fvideoStartAndroid, false); // on lance la vidéo sur android au moment où on touche l'écran