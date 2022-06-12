//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});

// clock

function clock(){

    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM';

    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);