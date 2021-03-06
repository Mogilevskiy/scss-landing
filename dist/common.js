"use strict";

function ready() {
  var accordion = document.querySelector('.accordion');
  var mobIcon = document.querySelector('.menu-icon');
  var menu = document.querySelector('.menu');
  var isIE =
  /*@cc_on!@*/
  false || !!document.documentMode;
  var isEdge = !isIE && !!window.StyleMedia;

  function toggleMenu() {
    menu.classList.toggle('open');
  }

  function scrollIt(element) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop - 50
    });
  }

  var btns = document.querySelectorAll('.js-btn');
  var sections = document.querySelectorAll('.js-section');
  btns[0].addEventListener('click', function (event) {
    if (!isIE && !isEdge) {
      event.preventDefault();
      return scrollIt(sections[0]);
    } else return;
  });
  btns[1].addEventListener('click', function (event) {
    if (!isIE && !isEdge) {
      event.preventDefault();
      return scrollIt(sections[1]);
    } else return;
  });
  btns[2].addEventListener('click', function (event) {
    if (!isIE && !isEdge) {
      event.preventDefault();
      return scrollIt(sections[2]);
    } else return;
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

  mobIcon.addEventListener('click', function () {
    event.preventDefault();
    toggleMenu();
  });

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