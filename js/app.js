/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let theNav = document.querySelector('#navbar__list');
let elem1;
let elem2; 
let sectionText = document.querySelector('#section1');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let list = document.querySelectorAll('section');
list.forEach(element => {
    elem1 = document.createElement('LI');
    elem2 = document.createElement('A');
    elem1.appendChild(elem2);
    elem2.textContent = element.dataset.nav;
    theNav.appendChild(elem1);
    elem2.href = element.id;
});

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',function(){
    list.forEach(element => {
        var sectionPositionT = element.getBoundingClientRect().top;
        var sectionPositionB = element.getBoundingClientRect().bottom;
       
        if (sectionPositionT <= 0){
            element.classList.add('your-active-class');
        }
        else if (sectionPositionB <= 0){
            element.classList.remove('your-active-class');
        }else {
            element.classList.remove('your-active-class');
        }
    });
});

// Scroll to anchor ID using scrollTO event

let links = document.querySelectorAll('a');
list.forEach((item, index) => {
    links[index].addEventListener('click', function () {
        item.scrollIntoView();
    });
});



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


