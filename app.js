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
function hello(){alert("welcome to my landing page")};
const goup = document.querySelector("#goup");

goup.addEventListener("click",function () {
    window.scrollTo(0,0)
});
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Define Global Variables
 
//i do this variable to bring ul tag from html file
const ullist = document.querySelector('#navbar__list');

//i bring allsections from html file by this variable
const sec =document.querySelectorAll('section');
// i do an array from all of sections to made a function on it to made anav bar
const arraysec = Array.from (sec);

console.log (arraysec)

 //End Global Variables

 // Start Helper Functions
 //i create list element then i creat a element for ever opject in array
 arraysec.forEach( (elm,index) =>{
     let list = document.createElement('li');
     let atag = document.createElement('a');
     //i append li element in ul element
     ullist.appendChild(list);
     //i append anchor (a) in li element
     list.appendChild(atag);
     //i get id and data nav attribute from html file
     let link = elm.getAttribute('id');
     let name = elm.getAttribute('data-nav')
     //i add class menu-link to a element to access style on it
     atag.classList.add("menu_link");
     //i add the link of sections to a element
     atag.innerText = (name) 
     //i add event  it will scroll to section i clicked on it
     atag.addEventListener("click",()=>{elm.scrollIntoView({behavior:"smooth"});
    });
 });
// End Helper Functions


 // Begin Main Functions
 

// build the nav



// Add class 'active' to section when go top of view
//i get the container fo all sections frow html fil using id 
const procont = document.querySelector("#procont");
const port = ( (elm,index) =>{
    /**i apply to all object in array getBoubdingClientRecrt to retuns a domrect object providing information
     *  about the size of an element and its position relative to the view port**/
    let rect= elm.getBoundingClientRect();
    return (rect.top >=0);
});
port();
// Scroll to anchor ID using scrollTO event
 // iadd an event when i scroll on the container if the section in view port add tha clss your active class else remove this class from other sections
const active = ( (elm,index)=> {
    if (port(arraysec)) {
        if(!arraysec.classList.contains("your-active-class"));
        arraysec.classList.add("your-active-class");
    }else{
        arraysec.classList.remove("your-active-class");
    }

});
active();
procont.addEventListener('scroll',active);
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

