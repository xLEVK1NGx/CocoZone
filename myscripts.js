window.addEventListener('scroll', handleScroll);
const header = document.querySelector('header');
function handleScroll() {
    if (window.scrollY > 75) {
    header.classList.add('shrunk');
    } else {
    header.classList.remove('shrunk');
    }
}
