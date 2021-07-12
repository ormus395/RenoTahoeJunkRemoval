window.onload = function() {
    let toggleButton = document.querySelector('.mobile-toggle');
    let mobileNav = document.querySelector('.nav__mobile');
    
    toggleButton.addEventListener('click', toggleMobileNav)
    
    function toggleMobileNav(e) {
        mobileNav.classList.toggle('hidden')
    }
}()