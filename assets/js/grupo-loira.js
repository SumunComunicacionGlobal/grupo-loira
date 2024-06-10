document.addEventListener('DOMContentLoaded', (event) => {
    
    // Selecciona todos los elementos con la clase .is-style-group-horizontal-scroll
    const sliders = document.querySelectorAll('.is-style-group-horizontal-scroll');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Añade el evento a cada slider
    sliders.forEach(slider => {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        });
    });

});


// Añade clase a body cuando se hace scroll
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const covers = document.querySelectorAll('#modos-wall .wp-block-cover');
    const wall = document.querySelector('#modos-wall');

    if (covers.length > 0 && wall) {
        covers.forEach((element) => {
            element.addEventListener('click', () => {
                covers.forEach((el) => {
                    el.classList.remove('expand');
                    el.classList.add('shrink');
                });
                element.classList.remove('shrink');
                element.classList.add('expand');
            });
        });

        wall.addEventListener('click', (event) => {
            if (event.target === wall) {
                covers.forEach((el) => {
                    el.classList.remove('shrink');
                    el.classList.remove('expand');
                });
            }
        });
    }
});