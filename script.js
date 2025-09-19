// Smooth Scroll untuk navigation links
document.addEventListener('DOMContentLoaded', function() {
    
    // Ambil semua link navigation
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const ctaButton = document.querySelector('.cta-button');
    
    // Function untuk smooth scroll
    function smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;
            
            // Hitung posisi target minus tinggi navbar
            const targetPosition = targetElement.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Event listener untuk nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });
    
    // Event listener untuk CTA button
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    }
    
    // Active nav link saat scroll
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class dari semua nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class ke nav link yang sesuai
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Jalankan setActiveNavLink saat scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Tambah/hapus class saat scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scroll ke top saat refresh
    if (window.location.hash) {
        setTimeout(() => {
            smoothScrollTo(window.location.hash);
        }, 100);
    }
});

// Scroll to top function (optional)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Back to top button (optional - tambahkan di HTML kalau mau)
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.classList.add('back-to-top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--accent);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Click event untuk back to top
    backToTopBtn.addEventListener('click', scrollToTop);
}


// Script buat redirect CTA button ke Instagram
document.addEventListener('DOMContentLoaded', function() {
    
    // Ambil CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    // Event listener untuk CTA button - redirect ke Instagram
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault(); // Stop default action
            
            // Ganti 'username_lu' dengan username Instagram lu yang asli
            window.open('https://www.instagram.com/_dvnsyptra', '_blank');
        });
    }
    
});
// Panggil function back to top button (optional)
// createBackToTopButton();