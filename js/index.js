let navItemTitle = document.getElementsByClassName("nav__st__item__title");
let navItemBody = document.getElementsByClassName("nav__st__item__body");
let navItem = document.getElementsByClassName("nav__st__item");

let hamburger = document.getElementById("hamburger");
let hamburgerTitle = document.getElementsByClassName("hamburger__menu__list__title");
let ulHamburger = document.getElementsByClassName("hamburger__menu__list__menu");
let hamburgerMenuTog = document.getElementById("hamburger__menu");

let allAnchor = document.getElementsByTagName("a");

function detectHoverNavbarItem() {
    for(let i = 0; i < navItemTitle.length; i++) {
        navItemTitle[i].onmouseover = function() {
            navItem[i].classList.add("is--active");
            navItemBody[i].onmouseover = function() {
                navItem[i].classList.add("is--active");
            }
        }
        navItemTitle[i].onmouseout = function() {
            navItem[i].classList.remove("is--active");
            navItemBody[i].onmouseout = function() {
                navItem[i].classList.remove("is--active");
            }
        }
    }
}

function hamburgerMenu() {
    hamburger.onclick = function() {
        hamburger.classList.toggle("is--active");
        hamburgerMenuTog.classList.toggle("is--active");
    }
    hamburgerExpand();
}

function hamburgerExpand() {
    let selected = 1;
    for(let i = 0; i < hamburgerTitle.length; i++) {
        hamburgerTitle[i].addEventListener("click", function() {
            selected = i;
            ulHamburger[i].classList.toggle("is--active");
            hamburgerTitle[i].classList.toggle("is--active");
            
            for(let j = 0; j < hamburgerTitle.length; j++) {
                if(selected!=j) {
                    ulHamburger[j].classList.remove("is--active");
                    hamburgerTitle[j].classList.remove("is--active");   
                }
            }
        });
    }
}

function disableAnchor() {
    for(let i = 0; i < allAnchor.length; i++) {
        allAnchor[i].setAttribute("href", "javascript:void(0)");
    }
}

detectHoverNavbarItem();
hamburgerMenu();
disableAnchor();