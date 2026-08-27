document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // SEARCH BEHAVIOR
    // ==========================================
    const searchBtn = document.querySelector('.search-action');
    const topbar = document.querySelector('.topbar');
    const searchInput = document.querySelector('.search-input');

    if (searchBtn && topbar && searchInput) {
        searchBtn.addEventListener('click', () => {
            topbar.classList.toggle('search-active');
            
            // Auto-focus the input after the bounce animation finishes
            if (topbar.classList.contains('search-active')) {
                setTimeout(() => searchInput.focus(), 400); 
            } else {
                searchInput.value = ''; // Clears text when closed
                searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    }

    // ==========================================
    // PROFILE MENU BEHAVIOR
    // ==========================================
    const profileWrapper = document.querySelector('.profile-wrapper');
    const profileBtn = document.querySelector('.profile-button');

    if (profileWrapper && profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileWrapper.classList.toggle('profile-active');
        });

        // Close the menu when clicking anywhere outside
        document.addEventListener('click', (e) => {
            if (!profileWrapper.contains(e.target)) {
                profileWrapper.classList.remove('profile-active');
            }
        });
    }

    // ==========================================
    // SIDEBAR & IOS BOUNCY INDICATOR LOGIC
    // ==========================================
    const appShell = document.querySelector('.app-shell');
    const menuBtn = document.querySelector('.sidebar-action');
    const navItems = document.querySelectorAll('.nav-item');
    const sidebarNav = document.querySelector('.sidebar-nav');
    const indicator = document.querySelector('.nav-indicator');

    // Toggle Sidebar Open/Close
    if (menuBtn && appShell) {
        menuBtn.addEventListener('click', () => {
            appShell.classList.toggle('menu-open');
            
            // Recalculate indicator position on open just in case
            if (appShell.classList.contains('menu-open')) {
                const activeItem = document.querySelector('.nav-item.active');
                if (activeItem) updateIndicator(activeItem);
            }
        });
    }

    // Function to move the bouncy pill
    function updateIndicator(item) {
        if (!indicator || !sidebarNav) return;
        
        // Finds how far the clicked item is from the top of the nav container
        const topPos = item.offsetTop; 
        
        // Updates the CSS variable to trigger the bounce animation
        sidebarNav.style.setProperty('--indicator-top', `${topPos}px`);
    }

    // Click events for nav items
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const href = item.getAttribute('href');

            // Keep placeholder items on the current page, but allow real links.
            if (!href || href === '#') e.preventDefault();
            
            // Remove active class from old item, add to clicked item
            document.querySelector('.nav-item.active')?.classList.remove('active');
            item.classList.add('active');
            
            // Move the pill!
            updateIndicator(item);
        });
    });

    // Initialize pill position on load to sync the active item perfectly
    setTimeout(() => {
        const activeStart = document.querySelector('.nav-item.active');
        if (activeStart) updateIndicator(activeStart);
    }, 100);

});
