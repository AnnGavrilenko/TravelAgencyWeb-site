// Первый Observer для добавления/удаления класса "visible"
const classObserver = new IntersectionObserver((pages) => {
    pages.forEach(page => {
        if (page.isIntersecting) {
            page.target.classList.add('visible');
        } else {
            page.target.classList.remove('visible');
        }
    });
}, { threshold: 0.7 });

// Второй Observer для плавного скролла
const scrollObserver = new IntersectionObserver((pages) => {
    pages.forEach(page => {
        if (page.isIntersecting) {
            page.target.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.page').forEach(page => {
    classObserver.observe(page);
    scrollObserver.observe(page);
});

//header
window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("scrolled", window.scrollY > 0);
});

//buttons
 // Функция для плавного перехода к элементу с id "page3"
 function scrollToPage3() {
    const page3 = document.getElementById("page3");
    // Прокручиваем страницу к элементу
    page3.scrollIntoView({ behavior: 'smooth' });
}