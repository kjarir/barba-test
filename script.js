import barba from 'https://cdn.skypack.dev/@barba/core';

barba.init({
  transitions: [
    {
      name: 'modern-fade-zoom',

      async leave(data) {
        // Animate current container out
        await data.current.container.animate([
          { opacity: 1, transform: 'scale(1) translateY(0px)' },
          { opacity: 0, transform: 'scale(0.95) translateY(-20px)' }
        ], {
          duration: 600,
          easing: 'ease-in-out',
          fill: 'forwards'
        }).finished;
      },

      async enter(data) {
        // Start hidden and zoomed out
        data.next.container.style.opacity = 0;
        data.next.container.style.transform = 'scale(1.05) translateY(20px)';

        // Animate next container in
        await data.next.container.animate([
          { opacity: 0, transform: 'scale(1.05) translateY(20px)' },
          { opacity: 1, transform: 'scale(1) translateY(0px)' }
        ], {
          duration: 600,
          easing: 'ease-in-out',
          fill: 'forwards'
        }).finished;
      }
    }
  ]
});
