// hero slick section 

$('.hero-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.arrow-left',
  nextArrow: '.arrow-right'
});


// products mix up 

var mixer = mixitup('.produsts-mix');


// counter up for micro 
// $('.counter').counterUp({
//   delay: 1000,
//   time: 1000
// });

// latest items 

$('.latest-slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.arrow-lest-left',
  nextArrow: '.arrow-lest-right'
});

// test slick
$('.test-slick').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  prevArrow: '.arrow-test-right',
  nextArrow: '.arrow-test-left'
});

// veno box with blog 
new VenoBox({
  selector: '.my-video-links',
});

// counter 
const counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
  counter.innerText = '0'


  const updateCounter = function () {
    const target = +counter.getAttribute('data-target');

    const c = +counter.innerText;

    const increment = Math.ceil(target / 100)

    if (c < target) {
      counter.innerText = c + increment
      setTimeout(updateCounter, 100)
    }

  }

  updateCounter()
})

// section animation 
const sections = document.querySelectorAll('section');


// scroll event 
window.addEventListener('scroll', animateSection)

animateSection()

function animateSection() {
  const height = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;


    if (top < height) {
      section.classList.add('show')
    } else {
      section.classList.remove('show')
    }

  })

  // console.log(height)
}

// counter down 


function newTime() {
  const getTime = new Date('25 Nov 2022 00:00:00').getTime()
  const now = new Date().getTime()
  const gap = getTime - now;

  // new time 
  const seconds = 1000;
  const min = seconds * 60 ;
  const hours = min * 60;
  const days = hours * 24;


  const textDay = Math.floor(gap / days);
  const textHour = Math.floor(gap % days / hours);
  const textMin = Math.floor(gap % hours / min);
  const textSec = Math.floor(gap % min / seconds);

   document.querySelector('.days').innerHTML = textDay;
   document.querySelector('.hour').innerHTML = textHour;
   document.querySelector('.minte').innerHTML = textMin;
   document.querySelector('.sconds').innerHTML = textSec;

}

setInterval(newTime, 1000)


// search button 
const search = document.querySelector('.search');
const btn =  document.querySelector('.search a');
const input =  document.querySelector('.search input');

btn.addEventListener('click', function() {
  search.classList.toggle('active')
  input.focus()
})




