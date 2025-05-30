document.addEventListener('DOMContentLoaded', () => {
    const whatsNewButton = document.getElementById('whats-new-button');
    const whatsNewModal = document.getElementById('whats-new-modal');
    const closeButton = document.querySelector('#whats-new-modal .close-button');

    if (whatsNewButton && whatsNewModal && closeButton) {
        // When the user clicks the button, open the modal
        whatsNewButton.addEventListener('click', () => {
            whatsNewModal.style.display = 'block';
        });

        // When the user clicks on <span> (x), close the modal
        closeButton.addEventListener('click', () => {
            whatsNewModal.style.display = 'none';
        });

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', (event) => {
            if (event.target === whatsNewModal) {
                whatsNewModal.style.display = 'none';
            }
        });
    }
});