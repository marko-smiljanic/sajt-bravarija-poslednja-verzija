/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    //ovo sto sam dodao ce raditi samo za prikaz na telefonu i prikaz na desktopu (kada na desktopu udjemu u develop meni sa f12, bez refresh nece raditi, ali to nije ni svrha u sustini)

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const slikaNavbar = document.body.querySelector('#slika-navbar');                       //ova linija je dodata!!!
        const navbarToggler = document.body.querySelector('.navbar-toggler');                   //ova linija je dodata!!!
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {   
            if (window.getComputedStyle(navbarToggler).display !== 'none'){                     //ova linija je dodata!!!
                slikaNavbar.setAttribute("style", "filter: invert(0%); opacity: 1;");           //ova linija je dodata!!!
            }else {                                                                             //ova linija je dodata!!!
                navbarCollapsible.classList.remove('navbar-shrink');
                slikaNavbar.setAttribute("style", "filter: invert(100%); opacity: 0.5;");       //ova linija je dodata!!! kada nije skrolovano promeni boju
            }                                         
        }else {
            navbarCollapsible.classList.add('navbar-shrink');
            slikaNavbar.setAttribute("style", "filter: invert(0%); opacity: 1;");               //ova linija je dodata!!! kada je skrolovano vrati boju
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});