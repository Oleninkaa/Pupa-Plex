"use strict"









//При скролі змінювати колір хедера
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};






function addTouchClass() {
    // Check if the browser is mobile
    if (isMobile.any() && document.documentElement) {
        document.documentElement.classList.add('touch');
    }
}

let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

// Call the addTouchClass function to add the 'touch' class if the browser is mobile
addTouchClass();




const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

new Swiper('#swiper-seansy .swiper', {
    // Optional parameters
    
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup:1,
    spaceBetween: 30,
    loop: true,
    lazyLoading:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },

    breakpoints: {

        499: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        767.98: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 480px
        991.98: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '#swiper-seansy .swiper-button-next',
      prevEl: '#swiper-seansy .swiper-button-prev',
    },

  });


  new Swiper('#swiper-skoro .swiper', {
    // Optional parameters
    
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup:1,
    spaceBetween: 30,
    loop: true,
    lazyLoading:true,
   

    breakpoints: {

        499: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        767.98: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 480px
        991.98: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '#swiper-skoro .swiper-button-next',
      prevEl: '#swiper-skoro .swiper-button-prev',
    },

  });





/*

const swiper = new Swiper('.swiper',  {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    preventClicks: false,
    preventClicksPropagation: false,
    
   
    breakpoints: {

        767.98: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 480px
        991.98: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
    

    // Navigation arrows
    navigation: {
        nextEl: '.navigation__next',
        prevEl: '.navigation__prev',
    },

    
    

});
*/
