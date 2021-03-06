function ready() {
    let accordion = document.querySelector('.accordion');
    let mobIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');
    let isIE = /*@cc_on!@*/false || !!document.documentMode;
    let isEdge = !isIE && !!window.StyleMedia;

    function toggleMenu() {
        menu.classList.toggle('open');
    }

    function scrollIt(element) {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': element.offsetTop -50
        });
    }

    const btns = document.querySelectorAll('.js-btn');
    const sections = document.querySelectorAll('.js-section');

    btns[0].addEventListener('click', (event) => {
        if(!isIE && !isEdge) {
            event.preventDefault();
            return scrollIt(sections[0])
        } else return;
    });
    btns[1].addEventListener('click', (event) => {
        if(!isIE && !isEdge) {
            event.preventDefault();
            return scrollIt(sections[1])
        } else return;
    });
    btns[2].addEventListener('click', (event) => {
        if(!isIE && !isEdge) {
            event.preventDefault();
            return scrollIt(sections[2])
        } else return;
    });


    function toggleAccordion(el) {
        el.onclick = function(event) {
            let target = event.target;
            while (!target.classList.contains('accordion')) {
                if(target.classList.contains('card')) {
                    if(target.classList.contains('active')) {
                        let targetBody = target.lastElementChild;
                        target.classList.remove('active');
                        targetBody.style.maxHeight = null;
                        return
                    }
                    let elem = this.children;
                    for(let i = 0; i < elem.length; i++) {
                        elem[i].classList.remove('active');
                        elem[i].lastElementChild.style.maxHeight = null;
                    }
                    target.classList.add('active');
                    let targetBody = target.lastElementChild;
                    targetBody.style.maxHeight = targetBody.scrollHeight + "px";
                   
                    
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

    mobIcon.addEventListener('click', () => {
        event.preventDefault();
        toggleMenu();
    });

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

