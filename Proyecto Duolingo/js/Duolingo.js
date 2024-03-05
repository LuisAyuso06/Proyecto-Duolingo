document.addEventListener('DOMContentLoaded', function() {

    let header=document.createElement('header')
    let navContent = ` <div class="Container-Encabezado">
                            <nav class="Div-Encabezado">
                                <img src="svg/banner.svg" alt="" width="180px" height="45px">
                                <div class="dropdown">
                                    <button class="BotonIdioma">IDIOMA DE LA PAGINA: ESPAÑOL
                                        <img src="svg/idioma.svg" alt="">
                                    </button>
                                    <div class="dropdown-content">
                                        <a href="#">Opción 1</a>
                                        <a href="#">Opción 2</a>
                                        <a href="#">Opción 3</a>
                                    </div>
                                </div>
                            </nav>
                        </div>`;

    header.innerHTML = navContent;
    document.body.appendChild(header);

    let section1 = document.createElement('section');
    let sectionContent = `<div class="contentImg">
                            <img src="svg/img1.svg" >
                        </div>
                        <div class="p1">
                            <h1 class="titulos">¡La forma divertida, efectiva y gratis de aprender un idioma!</h1>
                            <a href="#" class="buttonGeneral buttonVerde">Empieza Ahora</a>
                            <a href="#" class="buttonGeneral buttonClaro">Ya tengo Cuenta</a>
                        </div>`;
    
    section1.className = 'default view1'; // Asigna ambas clases separadas por un espacio
    section1.innerHTML = sectionContent;
    document.body.appendChild(section1);

    let slider = document.createElement('div');
    let sliderContet = `<button class="prev-btn"><i class="fa-solid fa-chevron-left"></i></button>
                        <div class="slider">
                            <div class="slide">
                                <img src="svg/usa.svg" alt="">
                                <p>Inglés</p>
                            </div>
                            <div class="slide">
                                <img src="svg/france.svg" alt="">
                                <p>Frances</p>
                            </div>
                            <div class="slide">
                                <img src="svg/aleman.svg" alt="">
                                <p>Alemán</p>
                            </div>
                            <div class="slide">
                                <img src="svg/italiano.svg" alt="">
                                <p>Italiano</p>
                            </div>
                            <div class="slide">
                                <img src="svg/portugues.svg" alt="">
                                <p>Postugués</p>
                            </div>
                            <div class="slide">
                                <img src="svg/catalan.svg" alt="">
                                <p>Catalán</p>
                            </div>
                            <div class="slide">
                                <img src="svg/ruso.svg" alt="">
                                <p>Ruso</p>
                            </div>
                            <div class="slide">
                                <img src="svg/sueco.svg" alt="">
                                <p>Sueco</p>
                            </div>
                            <!-- Agrega más slides para otros idiomas -->
                        </div>
                        <button class="next-btn"><i class="fa-solid fa-chevron-right"></i></button>`;
    slider.className = 'slider-container';
    slider.innerHTML = sliderContet;
    document.body.appendChild(slider);

    let section2 = document.createElement('section');
    let section2Content = `         <div class="p1">
                                        <h1 class="titulosVerde">divertido, efectivo y gratis </h1>
                                        <p>
                                            Aprender con Duolingo es divertido y <span> los estudios
                                                demuestran que funciona. </span>¡En nuestras lecciones
                                            cortas ganarás puntos y habilitarás nuevas unidades al mismo
                                            tiempo que desarrollas tus habilidades de comunicación en la
                                            vida real!
                                        </p>
                                    </div>
                                    <div class="contentImg">
                                        <img src="svg/img2.svg">
                                    </div>`;

    section2.className = 'default';
    section2.innerHTML = section2Content;
    document.body.appendChild(section2);

    let section3 = document.createElement('section');
    let section3Content = `<div class="contentImg">
                                <img src="svg/img3.svg">
                            </div>
                            <div class="p1">
                                <h1 class="titulosVerde">respaldado por la ciencia </h1>
                                <p>
                                    Gracias a la combinación de métodos de enseñanza respaldados
                                    por la ciencia y un contenido entretenido, creamos cursos
                                    que enseñan de forma eficiente a leer, escribir, entender y
                                    hablar en otros idiomas.
                                </p>
                            </div>`;

    section3.className = 'default';
    section3.innerHTML = section3Content;
    document.body.appendChild(section3);

    let section4 = document.createElement('section');
    let section4Content = `<div class="p1">
                                <h1 class="titulosVerde">mantén tu motivación </h1>
                                <p>
                                    Nuestras funcionalidades y desafíos son divertidos y hacen
                                    que aprender se sienta como un juego. ¡Vas a poder formar un
                                    hábito de aprendizaje sin esfuerzo! Y, por supuesto,
                                    recibirás recordatorios de nuestra adorable mascota, Duo, el
                                    búho.
                                </p>
                            </div>
                            <div class="contentImg">
                                <img src="svg/img4.svg">
                            </div>`;

    section4.className = 'default';
    section4.innerHTML = section4Content;
    document.body.appendChild(section4);

    let section5 = document.createElement('section');
    let section5Content = `<div class="contentImg">
                                <img src="svg/img5.svg">
                            </div>
                            <div class="p1">
                                <h1 class="titulosVerde">aprendizaje personalizado </h1>
                                <p>
                                    Al combinar lo mejor de la inteligencia artificial y las
                                    ciencias de idiomas, las lecciones se adaptan según tu
                                    desempeño para ayudarte a aprender al nivel adecuado y a tu
                                    propio ritmo.
                                </p>
                            </div>`;

    section5.className = 'default';
    section5.innerHTML = section5Content;
    document.body.appendChild(section5);


    let section6 = document.createElement('section');
    let section6Content = `<div class="contentImg">
                                <img src="svg/duo.svg">
                            </div>
                            <div class="p1">
                                <img src="svg/tituloDegradado.svg">
                                <a href="#" class="buttonGeneral buttonClaroAzul">Prueba 2
                                    Semanas Gratis</a>
                            </div>`;

    section6.className = 'default viewBlue';
    section6.innerHTML = section6Content;
    document.body.appendChild(section6);

    let section7 = document.createElement('section');
    let section7Content = `<div class="p1">
                            <h1 class="titulosVerde">duolingo english test </h1>
                            <p>
                                Nuestro examen de inglés es conveniente, rápido y económico.
                                El Duolingo English Test integra los últimos avances en la
                                ciencia e inteligencia artificial para dar a todas las
                                personas la posibilidad de elegir dónde y cuándo hacer el
                                examen y que puedan dar lo mejor de sí.
                            </p>

                            <a href="#" class="buttonGeneral buttonClaro">Certifica tu
                                inglés</a>
                        </div>
                        <div class="contentImg">
                            <img src="svg/img6.svg">
                        </div>`;

    section7.className = 'default';
    section7.innerHTML = section7Content;
    document.body.appendChild(section7);


    let section8 = document.createElement('section');
    let section8Content = ` <div class="contentImg">
                                <img src="svg/img7.svg">
                            </div>
                            <div class="p1">
                                <h1 class="titulosVerde">duolingo for schools </h1>
                                <p>
                                    Maestras y maestros: ¡estamos para ayudarlos! Nuestra
                                    herramienta gratuita ayuda a tus estudiantes a aprender
                                    idiomas a través de la app de Duolingo, tanto dentro como
                                    fuera del salón de clases.
                                </p>
                                <a href="#" class="buttonGeneral buttonClaro">POTENCIA TU SALÓN
                                    DE CLASES </a>
                            </div>`;

    section8.className = 'default';
    section8.innerHTML = section8Content;
    document.body.appendChild(section8);

    let section9 = document.createElement('section');
    let section9Content = `<div class="p1">
                                <h1 class="titulosVerde">duolingo abc </h1>
                                <p>
                                    ¡Desde aprender idiomas hasta alfabetismo! Con lecciones de
                                    fonética y cuentos divertidos, Duolingo ABC enseña a niños y
                                    niñas de entre 3 y 8 años a leer y escribir… ¡y es
                                    totalmente gratis!
                                </p>
                                <a href="#" class="buttonGeneral buttonClaro">CONOCE DUOLINGO
                                    ABC</a>
                            </div>
                            <div class="contentImg">
                                <img src="svg/img8.svg">
                            </div>`;

    section9.className = 'default';
    section9.innerHTML = section9Content;
    document.body.appendChild(section9);

    let section10 = document.createElement('section');
    let section10Content = `<div class="contentImg">
                                <img src="svg/math.svg">
                            </div>
                            <div class="p1">
                                <h1 class="titulosVerde">duolingo math</h1>
                                <p>
                                    ¡Prueba nuestras lecciones cortas y gratis para matemáticas!
                                    Con Duolingo Math, los estudiantes podrán adelantarse en sus
                                    clases de matemáticas y los adultos podrán practicar para
                                    mejorar su destreza matemática.
                                </p>
                                <a href="#" class="buttonGeneral buttonClaro">MEJORA EN
                                    MATEMÁTICA </a>
                            </div>`;

    section10.className = 'default';
    section10.innerHTML = section10Content;
    document.body.appendChild(section10);

    let footerheader = document.createElement('section');
    let footerHeaderContent = `<div class="footer-header">
                            <h1 class="titulosVerde titulosVerdeCenter">Aprende idiomas con
                                doulingo </h1>
                            <a href="#" class="buttonGeneral buttonVerde">Empieza Ahora</a>
                        </div>

                        <img src="svg/footer.svg">`;

    footerheader.className = 'footer';
    footerheader.innerHTML = footerHeaderContent;
    document.body.appendChild(footerheader);

    let footer = document.createElement('footer');
    let footerContent = `<div class="footer-body">
                        <ul>
                            <li><a href="#">Sobre nosotros</a></li>
                            <li><a href="#">Cursos</a></li>
                            <li><a href="#">Método de enseñanza</a></li>
                            <li><a href="#">Eficancia</a></li>
                            <li><a href="#">Equipo</a></li>
                            <li><a href="#">Investigación</a></li>
                            <li><a href="#">Empleo</a></li>
                            <li><a href="#">Guia para uso de marca</a></li>
                            <li><a href="#">Tienda</a></li>
                            <li><a href="#">Prensa</a></li>
                            <li><a href="#">Inversionistas</a></li>
                            <li><a href="#">Contáctanos</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Duolingo</a></li>
                            <li><a href="#">Duolingo for Schools</a></li>
                            <li><a href="#">Duolingo English Test</a></li>
                            <li><a href="#">Podcast</a></li>
                            <li><a href="#">Duolingo for Business</a></li>
                            <li><a href="#">Super Duolingo</a></li>
                            <li><a href="#">Regala Super Duolingo</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Aplicaciones</a></li>
                            <li><a href="#">Duolingo para Android</a></li>
                            <li><a href="#">Duolingo para iOS</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Ayuda y soporte</a></li>
                            <li><a href="#">App de Duolingo</a></li>
                            <li><a href="#">Schools</a></li>
                            <li><a href="#">Duolingo English Test</a></li>
                            <li><a href="#">Estado</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Terminos y privacidad</a></li>
                            <li><a href="#">Normas de la comunidad</a></li>
                            <li><a href="#">Terminos</a></li>
                            <li><a href="#">Privacidad</a></li>
                            <li><a href="#">Social</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                    <div class="footer-body languaje">
                        <div>
                            <p>Idioma de la pagina</p>
                            <ul>
                                <li><a href="#">Español</a></li>
                                <li><a href="#">Inglés</a></li>
                                <li><a href="#">Français</a></li>
                                <li><a href="#">Deutsch</a></li>
                                <li><a href="#">Italiano</a></li>
                                <li><a href="#">Português</a></li>
                                <li><a href="#">中文</a></li>
                                <li><a href="#">日本語</a></li>
                                <li><a href="#">한국어</a></li>
                                <li><a href="#">Русский</a></li>
                                <li><a href="#">हिन्दी</a></li>
                                <li><a href="#">العربية</a></li>
                                <li><a href="#">Nederlands</a></li>
                                <li><a href="#">Svenska</a></li>
                                <li><a href="#">Dansk</a></li>
                                <li><a href="#">Norsk</a></li>
                                <li><a href="#">Suomi</a></li>
                            </ul>
                        </div>
                    </div>`;

    footer.style.marginTop = '-1px';
    footer.innerHTML = footerContent;
    document.body.appendChild(footer);


    let styleDefault = document.createElement('style');
    let defaulStyle = `:root {
        --color-amarillo: #FFC100;
        --color-verde: #58CC02;
        --color-verdeContraste: #54ae10;
        --color-azul: #47BFF8;
        --color-azulFondo: #100f3e;
        --color-letra: #4B4B4B;
        --color-letraParrafo: #838383;
        --color-bordes: #e7e7e7;
        --fontPrincipal: "Feather Bold";
    }
    
    @font-face {
        font-family: "Feather Bold";
        src: url("https://db.onlinewebfonts.com/t/14936bb7a4b6575fd2eee80a3ab52cc2.eot");
        src: url("https://db.onlinewebfonts.com/t/14936bb7a4b6575fd2eee80a3ab52cc2.eot?#iefix")format("embedded-opentype"),
            url("https://db.onlinewebfonts.com/t/14936bb7a4b6575fd2eee80a3ab52cc2.woff2")format("woff2"),
            url("https://db.onlinewebfonts.com/t/14936bb7a4b6575fd2eee80a3ab52cc2.woff")format("woff"),
            url("https://db.onlinewebfonts.com/t/14936bb7a4b6575fd2eee80a3ab52cc2.ttf")format("truetype"),
            url("https://db.onlinewebfonts.com/t/14936bb7a4b6575fd2eee80a3ab52cc2.svg#Feather Bold")format("svg");
    }
    
    /* Estilos generales */
    body {
        font-family: var(--fontPrincipal);
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
    
    .container {
        width: 80%;
        /* Ancho del contenedor principal */
        margin: 0 auto;
        /* Centra el contenedor */
        max-width: 1200px;
        /* Ancho máximo del contenedor */
    }
    
    /* Estilos del encabezado */
    .header {
        background-color: #333;
        color: #fff;
        padding: 20px 0;
        width: 100%;
        /* Ajusta el ancho al 100% de la ventana */
        position: fixed;
        /* Fija el encabezado en la parte superior */
        top: 0;
        /* Sitúa el encabezado en la parte superior */
        z-index: 1000;
        /* Asegura que el encabezado esté por encima de otros elementos */
    }
    
    
    .header h1 {
        margin: 0;
        font-size: 2em;
        text-align: center;
    }
    
    .BotonIdioma {
        color: rgb(175, 175, 175);
        align-items: center;
        display: flex;
        white-space: nowrap;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: .8px;
        text-transform: uppercase;
        background: none;
        border: none;
        padding: 0;
        transition: filter .2s;
        cursor: pointer;
        display: inline-flex;
        outline: none;
        position: relative;
        touch-action: manipulation;
        transform: translateZ(0);
        padding: 10px 0;
    }
    
    .Container-Encabezado {
        background: rgb(255, 255, 255);
        border-bottom: 2px solid transparent;
        position: fixed;
        top: 0;
        width: 100%;
    }
    
    .Div-Encabezado {
        justify-content: space-between;
        margin: 0 auto;
        max-width: 988px;
        padding: 0;
        display: flex;
        align-items: center;
        height: 70px;
    }
    
    .default {
        max-width: 1200px;
        /* border: 1px solid red; */
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: nowrap;
    }
    
    .view1 {
        margin-top: 80px;
        /* Ajusta el margen superior para dejar espacio para el encabezado */
    }
    
    .p1 {
        text-align: center;
    }
    
    .p1 p {
        text-align: justify;
        max-width: 500px;
        color: var(--color-letraParrafo);
    }
    
    .p1 img {
        width: 600px;
        margin-bottom: 50px;
    }
    
    .p1 p span {
        color: var(--color-azul);
    }
    
    
    .contentImg {
        text-align: center;
    }
    
    .contentImg img {
        width: 500px;
    }
    
    .titulos {
        max-width: 500px;
        color: var(--color-letra);
        font-family: var(--fontPrincipal);
        font-size: 30px;
        text-align: justify;
        /* Justifica el texto */
        text-align-last: left;
        /* Alinea el último renglón a la izquierda */
    }
    
    .titulosVerde {
        max-width: 500px;
        color: var(--color-verde);
        font-family: var(--fontPrincipal);
        font-size: 50px;
        text-align: left;
    }
    
    .titulosBlanco {
        color: var(--color-bordes);
        font-family: var(--fontPrincipal);
        font-size: 40px;
        text-align: center;
        text-transform: uppercase;
        transform: skew(-20deg);
        /* ajusta el ángulo según lo necesites */
    }
    
    .titulosDegradado {
        font-family: var(--fontPrincipal);
        font-size: 60px;
        max-width: 800px !important;
        text-transform: uppercase;
        transform: skew(-20deg);
        /* Ajusta el ángulo según lo necesites */
        background: linear-gradient(to right, #26ED6F, #CD60FF);
        /* Ajusta los colores según lo necesites */
        -webkit-background-clip: text;
        /* Para navegadores basados en WebKit (Safari, Chrome, etc.) */
        background-clip: text;
        /* Estándar, funciona en Firefox e IE */
        color: transparent !important;
        /* Hace que el texto sea transparente, mostrando el degradado de fondo */
    }
    
    
    .buttonGeneral {
        display: block;
        /* Mostrar los enlaces como bloques para que estén uno debajo del otro */
        max-width: 250px;
        margin: auto;
        margin-bottom: 10px;
        /* Espacio entre los botones */
        padding: 12px 20px;
        /* Ajusta el relleno de los botones */
        text-decoration: none;
        /* Quita la subrayado predeterminado de los enlaces */
        border-radius: 12px;
        /* Ajusta la esquina redondeada de los botones */
        /* dar estilo como de 3d */
        transition: 0.1s;
        /* Agrega una transición suave al botón */
        font-family: var(--fontPrincipal);
        /* Establece la fuente del botón */
        /* capitalizar */
        text-transform: uppercase;
        font-size: 12px;
    }
    
    .buttonGeneral:hover {
        /* /hacer que el botón sea más oscuro al pasar el cursor sobre él */
        filter: brightness(90%);
    
    }
    
    .buttonVerde {
        background-color: var(--color-verde);
        color: #fff;
        /* Color del texto */
        box-shadow: 0 6px 0 var(--color-verdeContraste);
    }
    
    .buttonClaro {
        background-color: #fff;
        color: var(--color-azul);
        box-shadow: 0 5px 0 #f1f1f1;
        border: 3px solid #f1f1f1;
    }
    
    .buttonClaroAzul {
        background-color: #fff;
        color: var(--color-azulFondo);
        box-shadow: 0 5px 0 #d4caca;
        border: 2px solid #f1f1f1;
    }
    
    .viewBlue {
        background-color: var(--color-azulFondo);
        color: #fff;
        max-width: none !important;
        padding: 20px 0;
        text-align: center;
        padding: 200px 0;
    }
    
    /* Estilos del pie de página */
    .footer {
        flex-direction: column;
        justify-content: center !important;
        align-items: center !important;
        max-width: 100% !important;
        position: relative;
    }
    
    .footer img {
        padding: 0;
        margin: 0 auto;
        /* Alinea la imagen al centro horizontalmente */
        max-width: 100%;
        /* La imagen ocupará el 100% del ancho del contenedor padre */
        height: auto;
        /* La altura se ajustará automáticamente manteniendo la relación de aspecto */
        margin-top: 10px !important;
        /* Ajusta el margen superior de la imagen */
        display: block;
        /* Asegura que la imagen sea un bloque */
    }
    
    
    .footer .footer-header {
        text-align: center !important;
        position: absolute;
        top: 20%;
        /* Cambiado a 50% para centrar verticalmente */
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    
    .footer-body {
        display: flex;
        padding-top: 50px;
        justify-content: center !important;
        max-width: 100% !important;
        background-color: var(--color-verde);
    }
    
    .footer-body ul {
        list-style: none;
    }
    
    .footer-body ul li {
        margin: 0 10px;
        padding: 10px;
    }
    
    .footer-body ul li a {
        color: var(--color-bordes);
        text-decoration: none;
        font-size: 12px;
        padding: 10px 0;
        font-family: var(--fontPrincipal);
        filter: opacity(0.7);
        /* Ajusta la opacidad según sea necesario */
    }
    
    
    .footer-body ul li:first-child a {
        /* Estilos para el primer enlace de cada lista */
        font-size: 16px;
        color: var(--color-bordes);
        filter: opacity(1);
    }
    
    .languaje {
        display: flex;
        border-top: 2px solid var(--color-bordes);
        flex-direction: column;
    }
    
    .languaje div {
        max-width: 1200px;
        margin: auto;
    }
    
    .languaje ul {
        display: flex;
        flex-wrap: wrap;
    }
    
    .languaje p {
        color: var(--color-bordes);
    }
    
    .languaje ul li a {
        color: var(--color-bordes);
        text-decoration: none;
        font-size: 12px;
        padding: 10px 0;
        font-family: var(--fontPrincipal);
        filter: opacity(0.7);
        /* Ajusta la opacidad según sea necesario */
    }
    
    .languaje ul li:first-child a {
        color: var(--color-bordes);
        text-decoration: none;
        font-size: 12px;
        padding: 10px 0;
        font-family: var(--fontPrincipal);
        filter: opacity(0.7);
        /* Ajusta la opacidad según sea necesario */
    
    }
    
    .titulosVerdeCenter {
        text-align: center !important;
    }
    
    /* Estilo del dropdown */
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    /* Estilo del contenido del dropdown */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    
    /* Estilo de los enlaces dentro del dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    
    /* Estilo al pasar el cursor sobre los enlaces */
    .dropdown-content a:hover {
        background-color: #f1f1f1;
    }
    
    /* Mostrar el contenido del dropdown cuando el botón se haga clic */
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    .slider-container {
        position: relative;
        border: 2px solid var(--color-bordes);
        padding: 5px 250px;
    }
    
    .slider {
        display: flex;
        overflow-x: hidden;
        /* Cambiado de 'auto' a 'hidden' */
        scroll-snap-type: x mandatory;
    }
    
    .slide {
        display: flex;
        text-align: center;
        align-items: center;
    }
    
    .slide img {
        height: 50%;
    }
    
    
    .slide p {
        font-size: 14px;
        color: var(--color-letra);
        font-family: var(--fontPrincipal);
        text-transform: uppercase;
    }
    
    .prev-btn,
    .next-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        font-size: 24px;
        color: var(--color-bordes);
        cursor: pointer;
        padding: 200px;
    }
    
    .prev-btn {
        left: 10px;
    }
    
    .next-btn {
        right: 10px;
    }
    
    /* Estilos para tablets */
    @media (min-width: 768px) and (max-width: 1024px) {
        /* Aquí colocas tus estilos para tablets */
    
        .default {
            flex-wrap: wrap;
        }
    
        .viewBlue {
            flex-wrap: wrap;
        }
    
        .footer-body {
       flex-wrap: wrap;
        }
    }
    
    
    
    /* Estilos para dispositivos móviles */
    @media (max-width: 768px) {
        .container {
            width: 90%;
            /* Reducir el ancho del contenedor para dispositivos más pequeños */
        }
    
        .header h1 {
            font-size: 1.5em;
            /* Reducir el tamaño del encabezado para dispositivos más pequeños */
        }
    
        .default {
            flex-wrap: wrap;
        }
    
        .footer .footer-header {
         text-align: center !important;
         font-size: 12px;
         top: 0px !important;
        }
    
        .footer img {
          margin-top: 200px !important;
        }
    
        .viewBlue {
            flex-wrap: wrap;
        }
    
        .viewBlue img {
            width: 100%;
        }
        .footer-body {
            flex-direction: column;
            align-items: center;
            text-align: center;
             }
    }
    `;
    styleDefault.innerHTML = defaulStyle;
    document.head.appendChild(styleDefault);
    

    
});