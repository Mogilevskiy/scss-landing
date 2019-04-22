function ready() {
    let accordion = document.getElementsByClassName('card-header');
    let elem = document.getElementById('menu-icon');

    function toggleMenu() {
        let menu = document.getElementById('menu');
        menu.classList.toggle('open');
    }

    function toggleAccordion(arr) {
        let elem = arr;
        for(let i=0; i < elem.length; i++) {
            elem[i].addEventListener('click', function() {
                this.classList.toggle('active');
                let body = this.nextElementSibling;
                if(body.style.maxHeight) {
                    body.style.maxHeight = null;
                } else {
                    body.style.maxHeight = body.scrollHeight + 'px';
                }
            })
        }
    }

    function toggleFooter(id) {
        let pageYOffset = window.pageYOffset;
        let elem = document.getElementById(id);
        let scrolled = !!pageYOffset;
        scrolled ? elem.classList.remove("hide") : elem.classList.add('hide');
    }

    toggleAccordion(accordion);

    window.onscroll = function() {
        toggleFooter('footer')
    };

    elem.addEventListener('click', toggleMenu);


}
document.addEventListener('DOMContentLoaded', ready);

