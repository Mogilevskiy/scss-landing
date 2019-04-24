"use strict";

function ready() {
  var accordion = document.querySelector('.accordion');
  var mobIcon = document.querySelector('.menu-icon');
  var menu = document.querySelector('.menu');

  function toggleMenu() {
    menu.classList.toggle('open');
  }

  function scrollIt(element) {
    console.log('asds'); // let additionalOffset = 0;
    // if(menu.classList.contains('open')) {
    //     additionalOffset = 112;
    // }

    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop - 50
    });
  }

  var btns = document.querySelectorAll('.js-btn');
  var sections = document.querySelectorAll('.js-section');
  btns[0].addEventListener('click', function () {
    return scrollIt(sections[0]);
  });
  btns[1].addEventListener('click', function () {
    return scrollIt(sections[1]);
  });
  btns[2].addEventListener('click', function () {
    return scrollIt(sections[2]);
  });

  function toggleAccordion(el) {
    el.onclick = function (event) {
      var target = event.target;

      while (!target.classList.contains('accordion')) {
        if (target.classList.contains('card')) {
          if (target.classList.contains('active')) {
            var _targetBody = target.lastElementChild;
            target.classList.remove('active');
            _targetBody.style.maxHeight = null;
            return;
          }

          var elem = this.children;
          console.log(this);

          for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove('active');
            elem[i].lastElementChild.style.maxHeight = null;
          }

          target.classList.add('active');
          var targetBody = target.lastElementChild;
          targetBody.style.maxHeight = targetBody.scrollHeight + "px";
          return;
        }

        target = target.parentNode;
      }
    };
  }

  toggleAccordion(accordion);

  function toggleFooter(id) {
    var pageYOffset = window.pageYOffset;
    var elem = document.getElementById(id);
    var scrolled = !!pageYOffset;
    scrolled ? elem.classList.remove("hide") : elem.classList.add('hide');
  }

  window.onscroll = function () {
    toggleFooter('footer'); //close the menu when scrolling

    menu.classList.remove('open');
  };

  mobIcon.addEventListener('click', toggleMenu);

  (function () {
    window.addEventListener('resize', resizeThrottler, false);
    var resizeTimeout;

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          actualResizeHandkler();
        }, 60);
      }
    }

    function actualResizeHandkler() {
      menu.classList.remove('open');
    }

    ;
  })();
}

document.addEventListener('DOMContentLoaded', ready);