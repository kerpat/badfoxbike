document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open'); // Prevent scrolling when menu is open
        });
        
        // Close menu when clicking on nav links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
    
    // Reviews Slider Navigation
    const reviewsSlider = document.querySelector('.reviews-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (reviewsSlider && prevBtn && nextBtn) {
        const cardWidth = document.querySelector('.review-card').offsetWidth + 32; // Card width + gap
        
        prevBtn.addEventListener('click', () => {
            reviewsSlider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            reviewsSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });
    }
    
    // Improved Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Increased header offset for mobile
            const headerOffset = window.innerWidth <= 768 ? 100 : 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            header.style.backdropFilter = 'blur(5px)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// Add mobile touch events for sliders
const addTouchEventsForSliders = () => {
    const sliders = document.querySelectorAll('.reviews-slider');
    
    sliders.forEach(slider => {
        let startX, startY, dist, threshold = 150;
        let allowedTime = 300;
        let elapsedTime;
        let startTime;
        
        slider.addEventListener('touchstart', function(e) {
            const touchobj = e.changedTouches[0];
            startX = touchobj.pageX;
            startY = touchobj.pageY;
            startTime = new Date().getTime();
            e.preventDefault();
        }, false);
        
        slider.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, false);
        
        slider.addEventListener('touchend', function(e) {
            const touchobj = e.changedTouches[0];
            dist = touchobj.pageX - startX;
            elapsedTime = new Date().getTime() - startTime;
            
            const horizontalDist = Math.abs(touchobj.pageX - startX);
            const verticalDist = Math.abs(touchobj.pageY - startY);
            
            // Check if swipe is horizontal
            if (horizontalDist >= verticalDist) {
                if (elapsedTime <= allowedTime) {
                    if (dist < -threshold) {
                        // Swipe left, go to next slide
                        const cardWidth = document.querySelector('.review-card').offsetWidth + 32;
                        slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
                    } else if (dist > threshold) {
                        // Swipe right, go to previous slide
                        const cardWidth = document.querySelector('.review-card').offsetWidth + 32;
                        slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                    }
                }
            }
        }, false);
    });
};

// Animate elements when they come into view
const animateOnScroll = () => {
    // Расширяем список элементов для анимации, добавляем новый раздел
    const elements = document.querySelectorAll(
        '.service-card, .advantage-card, .price-card, .review-card, ' +
        '.hero-logo, .hero h1, .hero .tagline, .hero-buttons > a, ' +
        '.services h2, .pricing h2, .advantages h2, .reviews h2, .investment h2, .investment-content, ' +
        '.contact h2, .contact-item, .footer-logo, .footer-links a'
    );
    
    elements.forEach((element, index) => {
        // Проверяем, не был ли элемент уже анимирован
        if (element.classList.contains('animated')) {
            return;
        }

        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // Порог срабатывания анимации
        
        if (elementPosition < screenPosition) {
            // Добавляем небольшую задержку для каждого элемента для каскадного эффекта
            // Увеличиваем базовую задержку и максимальную для более выраженного эффекта
            const delayFactor = element.closest('.hero-buttons') || element.closest('.footer-links') ? 0.05 : 0.15;
            const maxDelay = 700; // Максимальная задержка увеличена
            const delay = Math.min(index * (delayFactor * 1000), maxDelay);

            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)'; // Добавляем scale(1) для сброса, если был scale в transform
                element.classList.add('animated'); // Помечаем элемент как анимированный
            }, delay);
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
    // Запускаем animateOnScroll сразу при загрузке, чтобы анимировать видимые элементы
    animateOnScroll();
    addTouchEventsForSliders();
    // Запускаем эффект пишущей машинки при загрузке
    typewriterEffect(".hero .tagline", "Новые велосипеды! (весна 2025 г.)", 70);
});

// Эффект "пишущей машинки"
function typewriterEffect(selector, text, speed) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.textContent = ''; // Очищаем текст перед началом
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    // Добавляем небольшую задержку перед началом печати, чтобы другие анимации успели стартовать
    setTimeout(type, 700); 
}

// Новый блок стилей, который может понадобиться для JS-управляемых вещей,
// например, если решим скрывать текст для пишущей машинки изначально
const dynamicStyle = document.createElement('style');
dynamicStyle.innerHTML = `
    .hero .tagline {
        opacity: 0; /* Изначально скрываем для эффекта пишущей машинки */
        min-height: 1.2em; /* Резервируем место, чтобы не было скачка */
    } 
    @media (max-width: 768px) {
        body.menu-open {
            overflow: hidden;
        }
    }
`;
document.head.appendChild(dynamicStyle);