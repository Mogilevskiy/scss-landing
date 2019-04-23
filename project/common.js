function ready() {
    let accordion = document.querySelector('.accordion');
    let mobIcon = document.getElementById('menu-icon');
    let menu = document.getElementById('menu');

    function toggleMenu() {
        menu.classList.toggle('open');
    }

    function scrollIt(element) {
        // let additionalOffset = 0;
        // if(menu.classList.contains('open')) {
        //     additionalOffset = 112;
        // }
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': element.offsetTop - 50
        });
    }

    const btns = document.querySelectorAll('.js-btn');
    const sections = document.querySelectorAll('.js-section');

    btns[0].addEventListener('click', () => scrollIt(sections[0]));
    btns[1].addEventListener('click', () => scrollIt(sections[1]));
    btns[2].addEventListener('click', () => scrollIt(sections[2]));


    function toggleAccordion(el) {
        el.onclick = function(event) {
            let target = event.target;
            while (!target.classList.contains('accordion')) {
                if(target.classList.contains('card')) {
                    if(target.classList.contains('active')) {
                        target.classList.remove('active');
                        return
                    }
                    let elem = this.children;
                    for(let i = 0; i < elem.length; i++) {
                        elem[i].classList.remove('active');
                    }
                    target.classList.add('active');
                    return;
                }
                target = target.parentNode;
            }        
        }
    }

    toggleAccordion(accordion);

    function toggleFooter(id) {
        let pageYOffset = window.pageYOffset;
        let elem = document.getElementById(id);
        let scrolled = !!pageYOffset;
        scrolled ? elem.classList.remove("hide") : elem.classList.add('hide');
    }

    window.onscroll = function() {
        toggleFooter('footer');
        //close the menu when scrolling
        menu.classList.remove('open');
    };

    mobIcon.addEventListener('click', toggleMenu);

    (function() {
        window.addEventListener('resize', resizeThrottler, false);
        let resizeTimeout;
        function resizeThrottler() {
            if(!resizeTimeout) {
                resizeTimeout = setTimeout(function() {
                    resizeTimeout = null;
                    actualResizeHandkler();
                }, 60)
            }
        }
        function actualResizeHandkler() {
            menu.classList.remove('open');
        };
    }())

}

document.addEventListener('DOMContentLoaded', ready);

