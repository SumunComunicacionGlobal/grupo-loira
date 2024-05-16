// Asegúrate de que el DOM esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    // Registra el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Selecciona todos los elementos con la clase .wp-block-button
    const buttons = document.querySelectorAll('.wp-block-button');
    const img_1 = document.querySelectorAll('#img-1-gsap');

    // Recorre cada elemento y crea una animación
    buttons.forEach((button) => {
        // Configura la opacidad inicial a 0 y la posición inicial 100px abajo
        gsap.set(button, {autoAlpha: 0, y: 100});

        // Crea la animación
        gsap.to(button, {
            autoAlpha: 1, // Anima la opacidad a 1
            y: 0, // Anima la posición a 0 (arriba)
            scrollTrigger: {
                trigger: button, // Usa el encabezado como disparador
                start: 'top 90%',
                toggleActions: 'play none none none', // Reproduce la animación al entrar en la vista
                duration: 3, // Duración de la animación
                //once: false, // Asegura que la animación solo se ejecute una vez
                //markers: true,
            }
        });
    });

    
    ScrollTrigger.defaults({
        // Defaults are used by all ScrollTriggers
        toggleActions: "play pause resume restart", // Scoll effect Forward, Leave, Back, Back Leave
        //markers: true // Easaly remove markers for production 
      });
      
      const timelineHeader = gsap.timeline({
        scrollTrigger: {
          id: "ZOOM", // Custom label to the marker
          trigger: img_1, // What element triggers the scroll
          scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
          start: "top center", // Start at top of Trigger and at the top of the viewport
          end: "+=100% 50px", // The element is 500px hight and end 50px from the top of the viewport
        }
      });
      
      timelineHeader
        .fromTo("#img-1-gsap", { y: -200 }, { y: 200, duration: 1 }, "sameTime")
        .to("#img-2-gsap", { y: -200, duration: 1 }, "sameTime")

});