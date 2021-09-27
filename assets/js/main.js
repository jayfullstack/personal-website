// Sidebar Nav functions
	function openNav() {
	  document.getElementById("sidenav").style.width = "250px";
	}

	function closeNav() {
	  document.getElementById("sidenav").style.width = "0";
	}

$( document ).ready(function() {
	// Document has been loaded
    console.log( "Document has been loaded" );

    // Header scroll to shrink

    window.onscroll = function() {myFunction()};

    var header = document.getElementById("desktop-nav");
	var sticky = header.offsetTop;

	function myFunction() {
  		if (window.pageYOffset > sticky) {
  	  		header.classList.add("sticky-header");
  		} else {
    		header.classList.remove("sticky-header");
  		}
	}

	// Type Effect
	function typeWriter(){
		// Typewriter Effect

    var app = document.getElementById('hero_header');

    var typewriter = new Typewriter(app, {
        loop: false
    });

    typewriter.typeString('Ecommerce Stores')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Websites')
        .pauseFor(2000)
        .deleteChars(15)
        .typeString('Stories')
        .pauseFor(3000)
        .start();
	}
	typeWriter();
	// Scroll Reveal
	// var slideUp = {
 //    	distance: '300%',
 //    	origin: 'bottom',
 //    	opacity: 0,
 //    	delay: 400,
 //    	duration: 400,
 //    	mobile: false
	// };
	ScrollReveal().reveal('#flip-card-one', { delay: 400, duration: 900, mobile: false });
	ScrollReveal().reveal('#flip-card-two', { delay: 600, duration: 900, mobile: false });
	ScrollReveal().reveal('#flip-card-three', { delay: 800, duration: 900, mobile: false });
	ScrollReveal().reveal('#flip-card-four', { delay: 1000, duration: 900, mobile: false });
	ScrollReveal().reveal('#flip-card-five', { delay: 1200, duration: 900, mobile: false });
	ScrollReveal().reveal('#flip-card-six', { delay: 1400, duration: 900, mobile: false });
});
