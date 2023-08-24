// Бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__list-link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

// Слайдер
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
    },
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 'auto',
  });
});

// Маска
// var selector = document.querySelector("input[type='tel']");

// var im = new Inputmask("+9 (999) 999 99 99");
// im.mask(selector);

// Форма
// "use strict"

// document.addEventListener('DOMContentLoaded', function () {

//   const form = document.getElementById('form');
const popup = document.getElementById('pop-up');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);

//     let formData = new FormData(form);

//     if (error === 0) {
//       form.classList.add('_sending');
//       let response = await fetch('sendmail.php', {
//         method: 'POST',
//         body: formData
//       });
//       if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         form.reset();
//         form.classList.remove('_sending');
//       } else {
//         popup.classList.add('open');
//       }
//     }
//   }

//   function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll('._req');

//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];
//       formRemoveError(input);

//       if (input.classList.contains('._tel')) {
//         if (telTest(input)) {
//           formAddError(input);
//           error++;
//         }
//       } else {
//         if (input.value === '') {
//           formAddError(input);
//           error++;
//         }
//       }
//     }
//     return error;
//   }

//   function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//   }

//   function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
//   }

//   function telTest(input) {
//     const re = !/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
//     return re.test(input.value);
//   }

const close = document.getElementById('close_pop-up');
close.onclick = function () {
  // form.reset();
  // form.classList.remove('_sending');
  popup.classList.remove('open');
}
// });

// Плавная прокрутка
$(document).ready(function () {
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {

        window.location.hash = hash;
      });
    }
  });
});

const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
  event.preventDefault();
  const name = form.querySelector('[name="name"]'),
    tel = form.querySelector('[name="tel"]'),
    email = form.querySelector('[name="email"]'),
    telegram = form.querySelector('[name="telegram"]'),
    count = form.querySelector('[name="country"]');
  const data = {
    name: name.value,
    tel: tel.value,
    telegram: telegram.value,
    email: email.value,
    count: count.value
  };

  // mailer
  const dataBlob = {
    tEmail: 'become@21winagents.gg',
    name: (data.name).toString(),
    contact: ('email:' + data.email + ';phone' + data.tel + ';telegram:' + data.telegram).toString(),
    subject: 'Become 21win agent',
    company: '',
    message: data.count
  };
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('X-Client-Ip', 'any');
  myHeaders.append('X-Visitor-Id', 'dont_care');
  const options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(dataBlob),
  };
  fetch('https://pyroproxy.herokuapp.com/https://pyro-mailer-megapari.vercel.app/send', options)
    .then(response => response.text())
    .then(response => {
      console.log('response: ' + response);
    })
    .then(response => {
      popup.classList.add('open');
    })
    .catch((err) => console.log(err));

}
