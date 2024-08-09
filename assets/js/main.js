/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

function calculatePercentage() {
    const number = parseFloat(document.getElementById('number').value);
    const percent = parseFloat(document.getElementById('percent').value);

    if (isNaN(number) || isNaN(percent)) {
        alert("Please enter valid numbers.");
        return;
    }

    const result = (number * percent) / 100;
    // document.getElementById('resultPercent').innerText = `${percent}% of ${number} is ${result}`;
    document.getElementById('resultPercent').innerText = `כ-${percent}% אחוז מ- ${number} זה ${result}`;

}

function calculateVAT() {
    var number = document.getElementById('inputMaamNumber').value;
    
    var vatAmount = number * 0.17;
    
    var total = parseFloat(number) + vatAmount;
    
    document.getElementById('resultMaam').innerText = 'הסכום עם מע"מ: ' + total.toFixed(2) + ' ש"ח';
}

function calculateInchToCm() {
    var inches = document.getElementById('inputInches').value;
    
    var centimeters = inches * 2.54;
    document.getElementById('resultInchToCm').innerHTML = '<span dir="rtl">' + inches + ' אינץ\' הם ' + centimeters.toFixed(2) + ' ס"מ</span>';

}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  });