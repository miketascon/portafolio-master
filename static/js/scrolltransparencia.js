$(document).ready(function(){
    onscroll = function(){
        var menuTransparency = $(document).scrollTop();
        if (menuTransparency >= 60){
        $('.MainMenu').addClass('MainMenu-scrolled');
        }
        else {
            $('.MainMenu').removeClass('MainMenu-scrolled');
        }
    }

    }
)