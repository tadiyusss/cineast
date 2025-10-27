document.addEventListener('DOMContentLoaded', () => {
    const containers = document.getElementsByClassName('movie-scroll');
    let scrollInterval = null;

    Array.from(containers).forEach(container => {
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
        const width = rect.width;
        const edgeZone = 250; 
        const scrollSpeed = 10; 


        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }


        if (x > width - edgeZone) {
            scrollInterval = setInterval(() => {
                container.scrollLeft += scrollSpeed;
            }, 16); 
        }

        else if (x < edgeZone) {
            scrollInterval = setInterval(() => {
                container.scrollLeft -= scrollSpeed;
            }, 16);
        }
    });

    container.addEventListener('mouseleave', () => {
        clearInterval(scrollInterval);
        scrollInterval = null;
    });
});
});