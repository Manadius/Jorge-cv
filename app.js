const menu  = document.querySelector(".menu");
const abrirMenubtn  = document.querySelector(".abrir-menu");
const cerrarMenubtn  = document.querySelector(".cerrar-menu");

function toggleMenu() {
    menu.classList.toggle("menu_abierto");
}

abrirMenubtn.addEventListener("click", toggleMenu);
cerrarMenubtn.addEventListener("click", toggleMenu);

const menulinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
 
        if (entry.isIntersecting) {
            document.querySelector(".menu a.seleccionado").classList.remove("seleccionado");
            menuLink.classList.add("seleccionado");
        }
    });
}, 
{rootMargin: "-30% 0px -70% 0px"} );



/*aca hacemos que en el celular al apretar en la seccion se del menu este menu se cierre*/
menulinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_abierto");
    });

    /*creamos const para el entry*/
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});