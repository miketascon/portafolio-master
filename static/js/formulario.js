var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#trabajo'),
    $post = $('.Work-item').first();//este linea es con el objetivo de
    //obtener el primer elemento de los Work-item a clonar

if(localStorage.getItem('autosave')){//pregunta si hay algo guardado en el setting ausave del usuario
    $titulo.val(sessionStorage.getItem('titulo'));//toma el valor de titulo que haya en la sessionstorage y lo asigna a titulo del formulario
    $url.val(sessionStorage.getItem('url'));
}

//setInterval permite que una función se ejecute en un intervalo de tiempo, el cual se especifica en milisegundos
var id = setInterval(function(){
    sessionStorage.setItem('titulo', $titulo.val());
    sessionStorage.setItem('url', $url.val());
},1000);
function mostrarFormulario()
{
    $form.slideToggle();//muestra u oculta el formulario,cuando se hace clic en el botón publicar
    $list.slideToggle();//muestra u oculta los work.items,cuando se hace clic en el botón publicar 
    return false;
}

function agregarPost()
{
    var url = $url.val(),
        titulo = $titulo.val(),
        $clone = $post.clone();//aqui se clona o copia el item que deseo cambiar para agregar

        $clone.find('.Work-imageContainer figcaption')
            .text(titulo);//en el primer elemento de los workitems copiado
            //cambio el figcaption de la clase .Work-imageContainer
            //y pego el título nuevo
        $clone.hide();//oculto el ítem clonado
        $titulo.val('');//pongo los elementos del formulario en vacio
        $url.val('');
        mostrarFormulario();
        $list.prepend($clone);//esto lo que hace es agregar a la lista de primero el post
        $('.Work-item:first-child').css({"margin-top": "5.5em"}); //de esta forma se incluye código CSS en JQUERY
        $clone.fadeIn();//esto genera una animación

    return false; //de esta forma el evento SUBMIT no se ejecuta
}

//Eventos
$button.click(mostrarFormulario);
$form.on("submit", agregarPost);
