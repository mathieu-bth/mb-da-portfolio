(function () {
    'use strict';

    // Consent banner
    var consentBanner = document.getElementById('consentBanner');
    var storedConsent = localStorage.getItem('cookie_consent');

    function hideBanner() {
        consentBanner.classList.remove('visible');
        consentBanner.classList.add('hiding');
        consentBanner.addEventListener('transitionend', function onEnd() {
            consentBanner.removeEventListener('transitionend', onEnd);
            consentBanner.style.display = 'none';
        });
    }

    if (storedConsent === 'granted') {
        gtag('consent', 'update', {
            analytics_storage:  'granted',
            ad_storage:         'denied',
            ad_user_data:       'denied',
            ad_personalization: 'denied'
        });
        consentBanner.style.display = 'none';
    } else if (storedConsent === 'denied') {
        consentBanner.style.display = 'none';
    } else {
        setTimeout(function () {
            consentBanner.classList.add('visible');
        }, 800);
    }

    document.getElementById('consentAccept').addEventListener('click', function () {
        localStorage.setItem('cookie_consent', 'granted');
        gtag('consent', 'update', {
            analytics_storage:  'granted',
            ad_storage:         'denied',
            ad_user_data:       'denied',
            ad_personalization: 'denied'
        });
        hideBanner();
    });

    document.getElementById('consentDeny').addEventListener('click', function () {
        localStorage.setItem('cookie_consent', 'denied');
        hideBanner();
    });

    // Navbar scroll effect (throttled via rAF)
    var navbar = document.getElementById('navbar');
    var navLinks = document.getElementById('navLinks');
    var ticking = false;

    navLinks.classList.add('nav-links-pill');

    function onScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navLinks.classList.remove('nav-links-pill');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navLinks.classList.add('nav-links-pill');
        }
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    // Mobile menu
    var menuToggle = document.getElementById('menuToggle');
    var mobileMenu = document.getElementById('mobileMenu');
    var mobileMenuClose = document.getElementById('mobileMenuClose');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.add('open');
    });

    mobileMenuClose.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
        });
    });

    // Scroll reveal animation
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.service-card, .experience-card, .usecase-card').forEach(function (el) {
        el.classList.add('reveal');
        observer.observe(el);
    });
})();
