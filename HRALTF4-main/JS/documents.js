document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // DOCUMENT SEARCH BEHAVIOR
    // ==========================================
    const searchInput = document.querySelector('.search-input');
    const documentLinks = document.querySelectorAll('.document-link');

    if (searchInput && documentLinks.length) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();

            documentLinks.forEach(link => {
                link.hidden = !link.textContent.toLowerCase().includes(query);
            });
        });
    }

});
