// Preloader
document.addEventListener("DOMContentLoaded", function() {
    // Hide the preloader when the page is fully loaded
    window.onload = function() {
        var preloader = document.getElementById('load');
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 1000); // Match this timeout duration with the CSS transition duration
    };
});

// Brands
$(document).ready(function(){
    $('#carousel').carousel();
});

$(document).ready(function() {
    var carousel = document.getElementById('carousel');
    var hammertime = new Hammer(carousel);

    hammertime.on('swipeleft', function() {
        $(carousel).carousel('next');
    });

    hammertime.on('swiperight', function() {
        $(carousel).carousel('prev');
    });
});

// Milestone
// document.addEventListener('DOMContentLoaded', () => {
//     const counters = document.querySelectorAll('.stat-number');
//     const speed = 200; // Adjust the speed here

//     counters.forEach(counter => {
//       const animateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText;
//         const increment = target / speed;

//         console.log(`Animating: ${count} -> ${target}`); // Debugging line

//         if (count < target) {
//           counter.innerText = Math.ceil(count + increment);
//           setTimeout(animateCount, 10);
//         } else {
//           counter.innerText = target;
//         }
//       };

//       animateCount();
//     });
//   });