function ready() {
    function toggleFooter(id) {
        let pageYOffset = window.pageYOffset;
        let elem = document.getElementById(id);
        let scrolled = !!pageYOffset; 
        scrolled ? elem.classList.remove("hide") : elem.classList.add('hide');
    }
    window.onscroll = function() {
        toggleFooter('footer')
    }
}
document.addEventListener('DOMContentLoaded', ready);

