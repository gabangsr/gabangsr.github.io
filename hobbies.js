document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let activeItem = null;

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            if (activeItem && activeItem !== item) {
                resetItem(activeItem);
            }

            item.style.transition = 'transform 0.3s cubic-bezier(.52,.02,.42,.89), z-index 0.6s ease';
            item.style.transform = 'scale(3)'; 
            item.style.zIndex = '50'; 
            activeItem = item;
        });
    });

    document.addEventListener('click', function(event) {
        if (activeItem && !event.target.closest('.gallery-item')) {
            resetItem(activeItem);
            activeItem = null;
        }
    });

    function resetItem(item) {
        item.style.transition = 'transform 0.4s ease, z-index 0.4s ease';
        item.style.transform = 'scale(1)';
        item.style.zIndex = '';
    }
});
