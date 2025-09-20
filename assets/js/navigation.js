// Single Page Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Function to show a specific section
    function showSection(targetSection) {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show target section
        const targetElement = document.getElementById(targetSection + '-section');
        if (targetElement) {
            targetElement.classList.add('active');
        }
        
        // Add active class to corresponding nav link
        const activeLink = document.querySelector(`[data-section="${targetSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Update URL hash without triggering scroll
        if (targetSection !== 'home') {
            history.pushState(null, null, '#' + targetSection);
        } else {
            history.pushState(null, null, window.location.pathname);
        }
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1);
        const section = hash || 'home';
        showSection(section);
    });
    
    // Initialize with correct section based on URL hash
    const initialHash = window.location.hash.substring(1);
    const initialSection = initialHash || 'home';
    showSection(initialSection);
    
    // Smooth scroll to top when switching sections
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Add scroll to top on section change
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(scrollToTop, 100);
        });
    });
});