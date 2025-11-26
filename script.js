// ============================================================================
// JD LANDCARE - MAIN JAVASCRIPT FILE
// ============================================================================
// Organized, modular code for better maintainability
// ============================================================================

'use strict';

// ============================================================================
// UTILITIES & HELPERS
// ============================================================================

const Utils = {
    /**
     * Throttle function execution
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Debounce function execution
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Show notification to user
     */
    showNotification(message, type = 'info') {
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : '#3498db'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    },

    /**
     * Animate counter up to target number
     */
    animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
};

// ============================================================================
// NAVIGATION MODULE
// ============================================================================

const Navigation = {
    menuToggle: null,
    navMenu: null,
    navbar: null,
    navLinks: null,
    isMenuOpen: false,
    savedScrollPosition: 0,
    lastScrollTop: 0,
    scrollThreshold: 150,
    navbarHidden: false,
    scrollTimeout: null,

    init() {
        this.menuToggle = document.getElementById('mobileMenuToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        if (!this.navbar) {
            return;
        }
        
        // Initialize mobile menu first
        this.initMobileMenu();
        this.initNavbarBehavior();
    },

    initMobileMenu() {
        // Check if elements exist
        if (!this.menuToggle || !this.navMenu) {
            return;
        }
        
        // Close menu function
        const closeMenu = () => {
            if (!this.isMenuOpen) return;
            
            this.isMenuOpen = false;
            this.menuToggle.classList.remove('active');
            this.menuToggle.setAttribute('aria-expanded', 'false');
            this.navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            // Unlock body scroll
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            
            // Restore scroll position
            window.scrollTo(0, this.savedScrollPosition);
        };
        
        // Open menu function
        const openMenu = () => {
            if (this.isMenuOpen) return;
            
            this.isMenuOpen = true;
            this.menuToggle.classList.add('active');
            this.menuToggle.setAttribute('aria-expanded', 'true');
            this.navMenu.classList.add('active');
            document.body.classList.add('menu-open');
            
            // Ensure navbar is visible
            if (this.navbar) {
                this.navbar.classList.remove('navbar-hidden');
                this.navbarHidden = false;
            }
            
            // Save scroll position
            this.savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            // Lock body scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${this.savedScrollPosition}px`;
            document.body.style.width = '100%';
        };
        
        // Toggle menu function
        const toggleMenu = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            if (this.isMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        };
        
        // Unified click handler - handles both mouse and touch
        const handleToggle = (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        };
        
        // Attach event listeners to menu toggle button
        // Use click for all interactions (works for both mouse and touch)
        this.menuToggle.addEventListener('click', handleToggle, { passive: false });
        
        // Keyboard support
        this.menuToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
        
        // Close menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.isMenuOpen) {
                    closeMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen) {
                const clickedInsideMenu = this.navMenu.contains(e.target);
                const clickedOnToggle = this.menuToggle.contains(e.target);
                
                if (!clickedInsideMenu && !clickedOnToggle) {
                    closeMenu();
                }
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                closeMenu();
            }
        });
        
        // Handle window resize - close menu if switching to desktop
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 768 && this.isMenuOpen) {
                    closeMenu();
                }
            }, 100);
        });
        
        // Store functions for external access
        this.closeMenu = closeMenu;
        this.openMenu = openMenu;
        this.toggleMenu = toggleMenu;
    },


    initNavbarBehavior() {
        // Disable scroll-based navbar hide/show on mobile and desktop
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // On mobile, always show navbar (but don't interfere with hamburger menu)
            if (!this.isMenuOpen) {
                this.navbar.classList.remove('navbar-hidden');
                this.navbarHidden = false;
            }
            return;
        }
        
        // On desktop, always show navbar - no scroll animations
        this.navbar.classList.remove('navbar-hidden');
        this.navbarHidden = false;
        
        // Handle window resize to ensure navbar stays visible
        window.addEventListener('resize', Utils.debounce(() => {
            const nowMobile = window.innerWidth <= 768;
            if (nowMobile) {
                // Switched to mobile - always show navbar
                if (!this.isMenuOpen) {
                    this.navbar.classList.remove('navbar-hidden');
                    this.navbarHidden = false;
                }
            } else {
                // Switched to desktop - always show navbar
                this.navbar.classList.remove('navbar-hidden');
                this.navbarHidden = false;
            }
        }, 250));
    }
};

// ============================================================================
// FORM HANDLING MODULE
// ============================================================================

const Forms = {
    quoteForm: null,
    chatForm: null,

    init() {
        this.quoteForm = document.getElementById('quoteForm');
        this.chatForm = document.getElementById('chatForm');
        
        if (this.quoteForm) {
            this.initQuoteForm();
        }
        
        if (this.chatForm) {
            this.initChatForm();
        }
    },

    initQuoteForm() {
        this.quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(this.quoteForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            this.sendQuoteForm(formObject);
            Utils.showNotification('Thank you! Your quote request has been submitted. We\'ll contact you within 24 hours.', 'success');
            this.quoteForm.reset();
            console.log('Form submitted:', formObject);
        });
        
        // Real-time validation
        const inputs = this.quoteForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#e74c3c';
                } else {
                    this.style.borderColor = '#e1e8ed';
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#e1e8ed';
                }
            });
        });
    },

    initChatForm() {
        if (!this.chatForm) return;
        
        this.chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(this.chatForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            this.sendToBusinessOwner(formObject);
            Utils.showNotification('Thank you! Your quick quote request has been submitted. We\'ll contact you within 24 hours.', 'success');
            this.chatForm.reset();
            
            const chatBox = document.getElementById('chatBox');
            if (chatBox) {
                chatBox.classList.remove('active');
                // Re-enable scrolling if chat box was open
                if (FloatingChat && typeof FloatingChat.allowBodyScroll === 'function') {
                    FloatingChat.allowBodyScroll();
                }
            }
        });
        
        // Add form field names
        const nameInput = this.chatForm.querySelector('input[type="text"]');
        const phoneInput = this.chatForm.querySelector('input[type="tel"]');
        const serviceSelect = this.chatForm.querySelector('select');
        const descriptionTextarea = this.chatForm.querySelector('textarea');
        
        if (nameInput) nameInput.name = 'chatName';
        if (phoneInput) phoneInput.name = 'chatPhone';
        if (serviceSelect) serviceSelect.name = 'chatService';
        if (descriptionTextarea) descriptionTextarea.name = 'chatDescription';
    },

    sendToBusinessOwner(formData) {
        const businessEmail = 'jrhccllc@gmail.com';
        const emailSubject = 'New Quick Quote Request';
        const emailBody = `
New Quick Quote Request Received:

Customer Name: ${formData.chatName || 'Not provided'}
Phone Number: ${formData.chatPhone || 'Not provided'}
Service Requested: ${formData.chatService || 'Not specified'}
Project Description: ${formData.chatDescription || 'No description provided'}

Submitted via: Website Chat Box
Timestamp: ${new Date().toLocaleString()}
        `.trim();
        
        const emailLink = `mailto:${businessEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.open(emailLink, '_blank');
    },

    sendQuoteForm(formData) {
        const businessEmail = 'jrhccllc@gmail.com';
        const emailSubject = 'New Quote Request - JRH Concrete & Construction';
        const emailBody = `
New Quote Request Received:

Customer Information:
- First Name: ${formData.firstName || 'Not provided'}
- Last Name: ${formData.lastName || 'Not provided'}
- Email: ${formData.email || 'Not provided'}
- Phone: ${formData.phone || 'Not provided'}
- Property Address: ${formData.address || 'Not provided'}

Project Details:
- Service Needed: ${formData.service || 'Not specified'}
- Urgency Level: ${formData.urgency || 'Not specified'}
- Project Description: ${formData.description || 'No description provided'}
- Preferred Contact Method: ${formData.preferredContact || 'Not specified'}

Submitted via: Quote Request Form
Timestamp: ${new Date().toLocaleString()}
        `.trim();
        
        const emailLink = `mailto:${businessEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.open(emailLink, '_blank');
    }
};

// ============================================================================
// GALLERY MODULE
// ============================================================================

const Gallery = {
    container: null,
    grid: null,
    dotsContainer: null,
    items: [],
    dots: [],
    currentIndex: 0,

    init() {
        this.initGalleryNavigation();
        this.initGallerySwipe();
    },

    initGalleryNavigation() {
        document.querySelectorAll('.service-card, .mobile-service-card').forEach(card => {
            card.addEventListener('click', function() {
                const serviceType = this.getAttribute('data-service');
                if (typeof getServiceById === 'function') {
                    const service = getServiceById(serviceType);
                    if (service && service.galleryPage) {
                        window.location.href = service.galleryPage;
                    }
                }
            });
        });
    },

    initGallerySwipe() {
        // Initialize on all screen sizes
        
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
            this.container = document.querySelector('.gallery-container');
            this.grid = document.querySelector('.gallery-grid');
            this.dotsContainer = document.querySelector('.gallery-dots');
            
            if (!this.container || !this.grid || !this.dotsContainer) {
                console.warn('Gallery elements not found:', {
                    container: !!this.container,
                    grid: !!this.grid,
                    dotsContainer: !!this.dotsContainer
                });
                return;
            }
            
            this.items = Array.from(this.grid.querySelectorAll('.gallery-item'));
            if (this.items.length === 0) {
                console.warn('No gallery items found');
                return;
            }
            
            this.createDots();
            this.initScrollTracking();
        }, 100);
    },

    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        this.dots = [];
        
        this.items.forEach((item, index) => {
            const dot = document.createElement('button');
            dot.className = 'gallery-dot';
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.setAttribute('data-index', index);
            if (index === 0) {
                dot.classList.add('active');
            }
            
            dot.addEventListener('click', () => {
                this.scrollToItem(index);
            });
            
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    },

    scrollToItem(index) {
        if (index < 0 || index >= this.items.length) return;
        
        this.currentIndex = index;
        const targetItem = this.items[index];
        if (!targetItem) return;
        
        const containerRect = this.container.getBoundingClientRect();
        const itemRect = targetItem.getBoundingClientRect();
        const scrollLeft = this.grid.scrollLeft;
        const itemLeft = targetItem.offsetLeft;
        const itemWidth = itemRect.width;
        const containerWidth = containerRect.width;
        const targetScrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);
        
        this.grid.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
        });
        
        this.updateDots();
    },

    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    },

    initScrollTracking() {
        this.grid.addEventListener('scroll', Utils.throttle(() => {
            const containerRect = this.container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            
            let closestIndex = 0;
            let closestDistance = Infinity;
            
            this.items.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.left + itemRect.width / 2;
                const distance = Math.abs(containerCenter - itemCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            
            if (closestIndex !== this.currentIndex) {
                this.currentIndex = closestIndex;
                this.updateDots();
            }
        }, 100));
        
        this.updateDots();
    }
};

// ============================================================================
// TESTIMONIALS MODULE
// ============================================================================

const Testimonials = {
    container: null,
    grid: null,
    dotsContainer: null,
    cards: [],
    dots: [],
    currentIndex: 0,
    arrowLeft: null,
    arrowRight: null,
    isMobile: () => window.innerWidth < 768,
    isAutoScrolling: false,

    init() {
        // Initialize on all screen sizes
        
        this.container = document.querySelector('.testimonials-container');
        this.grid = document.querySelector('.testimonials-grid');
        this.dotsContainer = document.querySelector('.testimonials-dots');
        
        if (!this.container || !this.grid) {
            console.warn('Testimonials: container or grid not found');
            return;
        }
        
        this.cards = Array.from(this.grid.querySelectorAll('.testimonial-card'));
        if (this.cards.length === 0) {
            console.warn('Testimonials: no cards found');
            return;
        }
        
        // Ensure dots container exists before creating dots
        if (!this.dotsContainer) {
            console.warn('Testimonials: dots container not found, creating it');
            // Try to find the container and create dots container if needed
            const testimonialsSection = document.querySelector('.testimonials-section .container');
            if (testimonialsSection) {
                const dotsDiv = document.createElement('div');
                dotsDiv.className = 'testimonials-dots';
                dotsDiv.setAttribute('aria-label', 'Testimonials navigation dots');
                testimonialsSection.appendChild(dotsDiv);
                this.dotsContainer = dotsDiv;
            }
        }
        
        this.createDots();
        
        // Initialize arrow navigation for desktop
        if (!this.isMobile()) {
            this.initArrowNavigation();
        }
        
        // Always start from first card
        this.currentIndex = 0;
        this.updateDots();
        if (this.arrowLeft && this.arrowRight) {
            this.updateArrowVisibility();
        }
        
        // On mobile, set scroll to 0 and prevent tracking during init
        if (this.isMobile()) {
            // Disable auto-scrolling to prevent interference
            this.isAutoScrolling = true;
            
            // Set scroll to 0 immediately
            this.container.scrollLeft = 0;
            
            // Set it again after a short delay to ensure it sticks
            setTimeout(() => {
                this.container.scrollLeft = 0;
                this.currentIndex = 0;
                this.updateDots();
                
                // Re-enable after initialization
                setTimeout(() => {
                    this.isAutoScrolling = false;
                }, 300);
            }, 50);
            
            // One more time after layout is complete
            setTimeout(() => {
                this.container.scrollLeft = 0;
                this.currentIndex = 0;
                this.updateDots();
                this.isAutoScrolling = false;
            }, 300);
        } else {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.scrollToCard(0, true);
                });
            });
        }
        
        // Initialize scroll tracking AFTER setting initial position
        this.initScrollTracking();
    },

    createDots() {
        if (!this.dotsContainer) {
            console.warn('Testimonials: dotsContainer is null, cannot create dots');
            return;
        }
        
        this.dotsContainer.innerHTML = '';
        this.dots = [];
        
        if (this.cards.length === 0) {
            console.warn('Testimonials: no cards to create dots for');
            return;
        }
        
        this.cards.forEach((card, index) => {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot';
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dot.setAttribute('data-index', index);
            dot.setAttribute('type', 'button');
            if (index === 0) {
                dot.classList.add('active');
            }
            
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.scrollToCard(index);
            });
            
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
        
        // Ensure dots container is visible on mobile
        if (this.isMobile()) {
            this.dotsContainer.style.display = 'flex';
        }
    },

    scrollToCard(index, skipUpdate = false) {
        if (index < 0 || index >= this.cards.length) return;
        
        this.currentIndex = index;
        const targetCard = this.cards[index];
        if (!targetCard || !this.container) return;
        
        // Set auto-scrolling flag to prevent scroll event interference
        this.isAutoScrolling = true;
        
        let targetScrollLeft;
        
        if (this.isMobile()) {
            // On mobile, for the first card always scroll to 0
            if (index === 0) {
                targetScrollLeft = 0;
            } else {
                // For other cards, scroll to the card's position
                const cardLeft = targetCard.offsetLeft;
                // Account for any padding on the grid
                const gridPadding = this.grid ? parseInt(window.getComputedStyle(this.grid).paddingLeft) || 0 : 0;
                targetScrollLeft = cardLeft - gridPadding;
            }
        } else {
            // On desktop, center the card
            const containerRect = this.container.getBoundingClientRect();
            const cardRect = targetCard.getBoundingClientRect();
            const scrollLeft = this.container.scrollLeft;
            const cardLeft = cardRect.left - containerRect.left + scrollLeft;
            const cardWidth = cardRect.width;
            const containerWidth = containerRect.width;
            targetScrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        }
        
        this.container.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
        });
        
        // Reset flag after scroll completes
        setTimeout(() => {
            this.isAutoScrolling = false;
        }, 500);
        
        if (!skipUpdate) {
            this.updateDots();
            this.updateArrowVisibility();
        }
    },

    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    },

    initScrollTracking() {
        let scrollTimeout;
        
        const updateActiveCard = () => {
            // Skip if we're auto-scrolling to prevent loops
            if (this.isAutoScrolling) return;
            
            const containerRect = this.container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            
            let closestIndex = 0;
            let closestDistance = Infinity;
            
            this.cards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distance = Math.abs(containerCenter - cardCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            
            if (closestIndex !== this.currentIndex) {
                this.currentIndex = closestIndex;
                this.updateDots();
                // Update arrow visibility when index changes
                if (this.arrowLeft && this.arrowRight) {
                    this.updateArrowVisibility();
                }
            }
        };
        
        this.container.addEventListener('scroll', Utils.throttle(updateActiveCard, 100));
        
        // Also listen for touch events on mobile for better responsiveness
        if (this.isMobile()) {
            this.container.addEventListener('touchmove', Utils.throttle(updateActiveCard, 100));
            this.container.addEventListener('touchend', () => {
                // Update after touch ends
                setTimeout(updateActiveCard, 150);
            });
        }
        
        // When scrolling stops, center the closest card
        this.container.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Only auto-center if the card is not already well-centered
                const closestCard = this.cards[this.currentIndex];
                if (closestCard) {
                    const cardRect = closestCard.getBoundingClientRect();
                    const containerRect = this.container.getBoundingClientRect();
                    const cardCenter = cardRect.left + cardRect.width / 2;
                    const containerCenter = containerRect.left + containerRect.width / 2;
                    const offset = Math.abs(cardCenter - containerCenter);
                    
                    // Only center if offset is significant (more than 20px)
                    if (offset > 20) {
                        this.isAutoScrolling = true;
                        this.scrollToCard(this.currentIndex, true);
                        setTimeout(() => {
                            this.isAutoScrolling = false;
                        }, 500);
                    }
                }
            }, 300);
        });
        
        // Initial update
        this.updateDots();
        // Update arrow visibility on initial load
        if (this.arrowLeft && this.arrowRight) {
            this.updateArrowVisibility();
        }
    },

    initArrowNavigation() {
        this.arrowLeft = document.getElementById('testimonialsArrowLeft');
        this.arrowRight = document.getElementById('testimonialsArrowRight');
        
        if (!this.arrowLeft || !this.arrowRight || !this.grid) return;
        
        this.arrowLeft.addEventListener('click', () => {
            this.goToPrevious();
        });
        
        this.arrowRight.addEventListener('click', () => {
            this.goToNext();
        });
        
        this.updateArrowVisibility();
    },

    goToNext() {
        // Skip 2 cards forward - only if we can skip exactly 2
        const nextIndex = this.currentIndex + 2;
        if (nextIndex < this.cards.length) {
            this.scrollToCard(nextIndex);
        }
        // If we can't skip 2, don't do anything (arrow should be disabled)
    },

    goToPrevious() {
        // Skip 2 cards backward - only if we can skip exactly 2
        const prevIndex = this.currentIndex - 2;
        if (prevIndex >= 0) {
            this.scrollToCard(prevIndex);
        }
        // If we can't skip 2, don't do anything (arrow should be disabled)
    },

    updateArrowVisibility() {
        if (!this.arrowLeft || !this.arrowRight) return;
        
        // Check if we can skip 2 cards backward
        const canSkip2Back = this.currentIndex >= 2;
        if (!canSkip2Back) {
            this.arrowLeft.style.opacity = '0.3';
            this.arrowLeft.style.pointerEvents = 'none';
        } else {
            this.arrowLeft.style.opacity = '1';
            this.arrowLeft.style.pointerEvents = 'auto';
        }
        
        // Check if we can skip 2 cards forward
        const canSkip2Forward = this.currentIndex + 2 < this.cards.length;
        if (!canSkip2Forward) {
            this.arrowRight.style.opacity = '0.3';
            this.arrowRight.style.pointerEvents = 'none';
        } else {
            this.arrowRight.style.opacity = '1';
            this.arrowRight.style.pointerEvents = 'auto';
        }
    }
};

// ============================================================================
// FAQ MODULE
// ============================================================================

const FAQ = {
    items: [],
    container: null,
    dotsContainer: null,
    dots: [],
    grid: null,
    currentIndex: 0,
    isTransitioning: false,
    transitionDuration: 400, // Match CSS transition duration
    isMobile: () => window.innerWidth < 768,
    arrowLeft: null,
    arrowRight: null,

    init() {
        this.items = Array.from(document.querySelectorAll('.faq-item'));
        if (this.items.length === 0) return;
        
        this.container = document.querySelector('.faq-section');
        this.dotsContainer = document.querySelector('.faq-dots');
        this.grid = document.querySelector('.faq-container');
        
        if (!this.container || !this.grid) return;
        
        // Check if mobile or desktop
        const isMobile = this.isMobile();
        
        this.items.forEach((item, index) => {
            const header = item.querySelector('.faq-header');
            const answer = item.querySelector('.faq-answer');
            
            if (!header || !answer) return;
            
            // Add a flag to prevent double-firing on mobile (touchend + click)
            let justToggled = false;
            let toggleTimeout = null;
            
            if (isMobile) {
                // Mobile: Start closed, toggle on touch/click
                answer.style.maxHeight = '0';
                answer.style.padding = '0';
                item.classList.remove('active');
                // Ensure header is touchable on mobile
                header.style.cursor = 'pointer';
                header.style.pointerEvents = 'auto';
                header.style.touchAction = 'manipulation';
                header.style.webkitTapHighlightColor = 'rgba(255, 255, 255, 0.1)';
            } else {
                // Desktop: Start closed, toggle on click
                answer.style.maxHeight = '0';
                answer.style.padding = '0';
                item.classList.remove('active');
                // Enable pointer events on header for desktop
                header.style.cursor = 'pointer';
                header.style.pointerEvents = 'auto';
            }
            
            const handleToggle = (e) => {
                // Ensure this event is for THIS specific item's header
                const clickedHeader = e.currentTarget || e.target.closest('.faq-header');
                if (clickedHeader !== header) {
                    // This event is not for this item, ignore it
                    return;
                }
                
                // Prevent activation during transitions
                if (this.isTransitioning) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                
                // Prevent double-firing: if this item was just toggled, ignore subsequent events
                if (justToggled) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    return;
                }
                
                // Only respond to actual clicks/taps, not other events
                if (e.type === 'mouseenter' || e.type === 'mouseleave' || e.type === 'hover') {
                    return;
                }
                
                // For touch events, ensure it's a tap not a swipe
                if (e.type === 'touchend') {
                    const touch = e.changedTouches[0];
                    if (!touch) return;
                    
                    // Check if this was a tap (not a drag)
                    const touchStart = header.touchStartX || touch.clientX;
                    const touchEnd = touch.clientX;
                    const touchDiff = Math.abs(touchEnd - touchStart);
                    
                    // If moved more than 10px, it's likely a swipe - ignore
                    if (touchDiff > 10) {
                        return;
                    }
                }
                
                // Prevent default behavior to stop scrolling to top
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                // Set flag to prevent double-firing (touchend + click on mobile)
                justToggled = true;
                if (toggleTimeout) clearTimeout(toggleTimeout);
                toggleTimeout = setTimeout(() => {
                    justToggled = false;
                }, 300); // Clear flag after 300ms (before click event fires)
                
                const isActive = item.classList.contains('active');
                
                // Set transitioning flag
                this.isTransitioning = true;
                
                // Close all OTHER items first
                this.items.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0';
                            otherAnswer.style.padding = '0';
                        }
                    }
                });
                
                // Toggle clicked item
                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0';
                } else {
                    item.classList.add('active');
                    requestAnimationFrame(() => {
                        const currentHeight = answer.scrollHeight;
                        // Use larger max-height for desktop, smaller for mobile
                        const isMobile = window.innerWidth < 768;
                        if (isMobile) {
                            // Mobile: limit height to prevent taking up entire screen
                            const maxHeight = Math.min(currentHeight, window.innerHeight * 0.5);
                            answer.style.maxHeight = maxHeight + 'px';
                        } else {
                            // Desktop: show full content without scrollbar
                            answer.style.maxHeight = 'none';
                        }
                        answer.style.padding = '';
                    });
                }
                
                // Clear transitioning flag after animation completes
                setTimeout(() => {
                    this.isTransitioning = false;
                }, this.transitionDuration);
            };
            
            // Track touch start position for swipe detection (mobile only)
            header.addEventListener('touchstart', (e) => {
                if (e.touches && e.touches[0]) {
                    header.touchStartX = e.touches[0].clientX;
                }
            }, { passive: true });
            
            // On mobile, prefer touchend and prevent click from firing
            // On desktop, use click
            if (isMobile) {
                // Mobile: use touchend, and prevent click from also firing
                header.addEventListener('touchend', handleToggle, { passive: false });
                // Also listen to click but with a longer delay check to prevent double-firing
                header.addEventListener('click', (e) => {
                    // If touchend already handled it, ignore click
                    if (justToggled) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        return;
                    }
                    handleToggle(e);
                }, { passive: false });
            } else {
                // Desktop: only use click
                header.addEventListener('click', handleToggle, { passive: false });
            }
        });
        
        // Initialize dots navigation for all screen sizes
        if (this.dotsContainer) {
            this.createDots();
            // Enable scroll tracking for both mobile and desktop
            this.initScrollTracking();
        }
        
        // Initialize arrow navigation for desktop
        if (!isMobile) {
            this.initArrowNavigation();
        }
        
        // Handle window resize to update behavior
        let previousMobile = isMobile;
        window.addEventListener('resize', Utils.debounce(() => {
            const nowMobile = this.isMobile();
            if (nowMobile === previousMobile) return; // No change
            previousMobile = nowMobile;
            
            this.items.forEach((item) => {
                const header = item.querySelector('.faq-header');
                const answer = item.querySelector('.faq-answer');
                if (!header || !answer) return;
                
                if (nowMobile) {
                    // Switched to mobile - enable toggle behavior and close items
                    header.style.cursor = 'pointer';
                    header.style.pointerEvents = 'auto';
                    header.style.touchAction = 'manipulation';
                    header.style.webkitTapHighlightColor = 'rgba(255, 255, 255, 0.1)';
                    // Close all items when switching to mobile
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0';
                    
                    // Initialize dots navigation
                    if (this.dotsContainer) {
                        this.createDots();
                        this.initScrollTracking();
                    }
                } else {
                    // Switched to desktop - close all items and enable toggle
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0';
                    header.style.cursor = 'pointer';
                    header.style.pointerEvents = 'auto';
                    
                    // Initialize arrow navigation for desktop
                    if (!this.arrowLeft && !this.arrowRight) {
                        this.initArrowNavigation();
                    }
                }
            });
        }, 250));
    },

    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        this.dots = [];
        
        this.items.forEach((item, index) => {
            const dot = document.createElement('button');
            dot.className = 'faq-dot';
            dot.setAttribute('aria-label', `Go to FAQ ${index + 1}`);
            dot.setAttribute('data-index', index);
            if (index === 0) {
                dot.classList.add('active');
            }
            
            dot.addEventListener('click', () => {
                this.scrollToItem(index);
            });
            
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    },

    scrollToItem(index) {
        if (index < 0 || index >= this.items.length) return;
        
        const item = this.items[index];
        if (!item || !this.grid) return;
        
        // Use the grid element for scrolling (it has overflow-x: auto)
        const containerRect = this.grid.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const scrollLeft = this.grid.scrollLeft;
        const itemLeft = itemRect.left - containerRect.left + scrollLeft;
        const itemWidth = itemRect.width;
        const containerWidth = containerRect.width;
        const targetScroll = itemLeft - (containerWidth / 2) + (itemWidth / 2);
        
        this.grid.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
        
        this.currentIndex = index;
        this.updateDots();
        this.updateArrowVisibility();
    },

    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    },

    initScrollTracking() {
        if (!this.grid) return;
        
        let lastScrollLeft = this.grid.scrollLeft;
        let scrollThreshold = 50; // Minimum scroll distance to trigger close
        
        this.grid.addEventListener('scroll', Utils.throttle(() => {
            const containerRect = this.grid.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            
            // Check if user swiped horizontally (scroll changed significantly)
            const scrollDelta = Math.abs(this.grid.scrollLeft - lastScrollLeft);
            if (scrollDelta > scrollThreshold) {
                // Close all open FAQ items when user swipes
                this.items.forEach(item => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                        const answer = item.querySelector('.faq-answer');
                        if (answer) {
                            answer.style.maxHeight = '0';
                            answer.style.padding = '0';
                        }
                    }
                });
            }
            
            lastScrollLeft = this.grid.scrollLeft;
            
            let closestIndex = 0;
            let closestDistance = Infinity;
            
            this.items.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.left + itemRect.width / 2;
                const distance = Math.abs(containerCenter - itemCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            
            if (closestIndex !== this.currentIndex) {
                this.currentIndex = closestIndex;
                this.updateDots();
                // Update arrow visibility when index changes
                if (this.arrowLeft && this.arrowRight) {
                    this.updateArrowVisibility();
                }
            }
        }, 100));
        
        this.updateDots();
        // Update arrow visibility on initial load
        if (this.arrowLeft && this.arrowRight) {
            this.updateArrowVisibility();
        }
    },

    initArrowNavigation() {
        this.arrowLeft = document.getElementById('faqArrowLeft');
        this.arrowRight = document.getElementById('faqArrowRight');
        
        if (!this.arrowLeft || !this.arrowRight || !this.grid) return;
        
        this.arrowLeft.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.goToPrevious();
        });
        
        this.arrowRight.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.goToNext();
        });
        
        this.updateArrowVisibility();
    },

    goToNext() {
        // Skip 2 items forward - only if we can skip exactly 2
        const nextIndex = this.currentIndex + 2;
        if (nextIndex < this.items.length) {
            this.scrollToItem(nextIndex);
        }
        // If we can't skip 2, don't do anything (arrow should be disabled)
    },

    goToPrevious() {
        // Skip 2 items backward - only if we can skip exactly 2
        const prevIndex = this.currentIndex - 2;
        if (prevIndex >= 0) {
            this.scrollToItem(prevIndex);
        }
        // If we can't skip 2, don't do anything (arrow should be disabled)
    },

    updateArrowVisibility() {
        if (!this.arrowLeft || !this.arrowRight) return;
        
        // Check if we can skip 2 items backward
        const canSkip2Back = this.currentIndex >= 2;
        if (!canSkip2Back) {
            this.arrowLeft.style.opacity = '0.3';
            this.arrowLeft.style.pointerEvents = 'none';
        } else {
            this.arrowLeft.style.opacity = '1';
            this.arrowLeft.style.pointerEvents = 'auto';
        }
        
        // Check if we can skip 2 items forward
        const canSkip2Forward = this.currentIndex + 2 < this.items.length;
        if (!canSkip2Forward) {
            this.arrowRight.style.opacity = '0.3';
            this.arrowRight.style.pointerEvents = 'none';
        } else {
            this.arrowRight.style.opacity = '1';
            this.arrowRight.style.pointerEvents = 'auto';
        }
    }
};

// ============================================================================
// MOBILE SERVICES CAROUSEL MODULE
// ============================================================================

const MobileServices = {
    container: null,
    slider: null,
    cards: [],
    currentIndex: 0,
    autoAdvanceInterval: null,

    init() {
        const mobileServices = document.getElementById('mobileServices');
        this.container = document.getElementById('mobileServicesContainer');
        const slider = document.getElementById('servicesSlider');
        
        if (!mobileServices || !this.container || !slider) return;
        
        this.slider = slider;
        this.cards = Array.from(this.container.querySelectorAll('.mobile-service-card'));
        
        if (this.cards.length === 0) return;
        
        this.initSlider();
        this.initTouchGestures();
        this.initAutoAdvance(mobileServices);
        this.generateSliderLabels();
    },

    initSlider() {
        this.slider.addEventListener('input', (e) => {
            const newIndex = parseInt(e.target.value);
            if (newIndex !== this.currentIndex) {
                this.goToSlide(newIndex);
            }
        });
    },

    goToSlide(index) {
        this.currentIndex = index;
        this.updateDisplay();
        this.updateSlider();
    },

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.updateDisplay();
        this.updateSlider();
    },

    prevSlide() {
        this.currentIndex = this.currentIndex === 0 ? this.cards.length - 1 : this.currentIndex - 1;
        this.updateDisplay();
        this.updateSlider();
    },

    updateDisplay() {
        const translateX = -this.currentIndex * 100;
        this.container.style.transform = `translateX(${translateX}%)`;
        this.generateSliderLabels();
    },

    updateSlider() {
        this.slider.value = this.currentIndex;
    },

    generateSliderLabels() {
        const labelsContainer = document.querySelector('.mobile-services-slider-labels');
        if (!labelsContainer) return;
        
        labelsContainer.innerHTML = '';
        
        const label = document.createElement('span');
        if (typeof getServiceNames === 'function') {
            const serviceNames = getServiceNames();
            label.textContent = serviceNames[this.currentIndex] || 'Service';
        } else {
            label.textContent = 'Service';
        }
        label.className = 'active';
        labelsContainer.appendChild(label);
    },

    initTouchGestures() {
        let startX = 0;
        let endX = 0;
        let isDragging = false;
        
        const handleStart = (e) => {
            startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            isDragging = true;
            this.container.style.transition = 'none';
        };
        
        const handleMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const diff = currentX - startX;
            const translateX = -this.currentIndex * 100 + (diff / this.container.offsetWidth) * 100;
            
            this.container.style.transform = `translateX(${translateX}%)`;
        };
        
        const handleEnd = (e) => {
            if (!isDragging) return;
            
            isDragging = false;
            this.container.style.transition = 'transform 0.3s ease';
            
            endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
            const diff = endX - startX;
            const threshold = this.container.offsetWidth * 0.3;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.prevSlide();
                } else {
                    this.nextSlide();
                }
            } else {
                this.updateDisplay();
            }
        };
        
        this.container.addEventListener('touchstart', handleStart, { passive: false });
        this.container.addEventListener('touchmove', handleMove, { passive: false });
        this.container.addEventListener('touchend', handleEnd, { passive: false });
        this.container.addEventListener('mousedown', handleStart);
        this.container.addEventListener('mousemove', handleMove);
        this.container.addEventListener('mouseup', handleEnd);
        this.container.addEventListener('mouseleave', handleEnd);
    },

    initAutoAdvance(element) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startAutoAdvance();
                } else {
                    this.stopAutoAdvance();
                }
            });
        });
        
        observer.observe(element);
        
        this.container.addEventListener('mouseenter', () => this.stopAutoAdvance());
        this.container.addEventListener('mouseleave', () => this.startAutoAdvance());
        this.container.addEventListener('touchstart', () => this.stopAutoAdvance());
        this.container.addEventListener('touchend', () => this.startAutoAdvance());
    },

    startAutoAdvance() {
        this.stopAutoAdvance();
        this.autoAdvanceInterval = setInterval(() => this.nextSlide(), 6000);
    },

    stopAutoAdvance() {
        if (this.autoAdvanceInterval) {
            clearInterval(this.autoAdvanceInterval);
            this.autoAdvanceInterval = null;
        }
    }
};

// ============================================================================
// FLOATING CHAT MODULE
// ============================================================================

const FloatingChat = {
    chatToggle: null,
    chatBox: null,
    chatClose: null,
    chatForm: null,
    scrollPosition: 0,
    touchMoveHandler: null,

    init() {
        this.chatToggle = document.getElementById('chatToggle');
        this.chatBox = document.getElementById('chatBox');
        this.chatClose = document.getElementById('chatClose');
        this.chatForm = document.getElementById('chatForm');
        
        if (!this.chatToggle || !this.chatBox || !this.chatClose) return;
        
        this.chatToggle.addEventListener('click', () => {
            const isActive = this.chatBox.classList.contains('active');
            this.chatBox.classList.toggle('active');
            
            // Toggle body scroll based on chat box state
            if (!isActive) {
                this.preventBodyScroll();
            } else {
                this.allowBodyScroll();
            }
        });
        
        this.chatClose.addEventListener('click', () => {
            this.chatBox.classList.remove('active');
            this.allowBodyScroll();
        });
        
        document.addEventListener('click', (e) => {
            if (!this.chatBox.contains(e.target) && !this.chatToggle.contains(e.target)) {
                this.chatBox.classList.remove('active');
                this.allowBodyScroll();
            }
        });
        
        // Form handling is done in Forms module
    },

    preventBodyScroll() {
        // Save current scroll position
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Prevent scrolling on both html and body
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        
        // For iOS Safari, use position fixed
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        
        // Prevent touch scrolling on mobile
        this.touchMoveHandler = (e) => {
            // Allow scrolling within the chat box itself
            if (e.target.closest('.chat-box')) {
                return;
            }
            e.preventDefault();
        };
        document.addEventListener('touchmove', this.touchMoveHandler, { passive: false });
    },

    allowBodyScroll() {
        // Remove touch event listener
        if (this.touchMoveHandler) {
            document.removeEventListener('touchmove', this.touchMoveHandler);
            this.touchMoveHandler = null;
        }
        
        // Restore scroll position
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore scroll position only if we actually scrolled
        if (this.scrollPosition > 0) {
            window.scrollTo(0, this.scrollPosition);
        }
    }
};


// ============================================================================
// ANIMATIONS MODULE
// ============================================================================

const Animations = {
    observer: null,

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        const animateElements = document.querySelectorAll('.service-card, .gallery-item, .about-content, .quote-form');
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }
};

// ============================================================================
// TOUCH OPTIMIZATIONS
// ============================================================================

const TouchOptimizations = {
    init() {
        if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;
        
        const touchElements = document.querySelectorAll('.btn, .nav-link, .service-card, .gallery-item');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            });
            
            element.addEventListener('touchcancel', function() {
                this.style.transform = '';
            });
        });
    }
};

// ============================================================================
// INITIALIZATION
// ============================================================================

const App = {
    init() {
        // Prevent all form submissions from causing page jumps
        this.preventFormJumps();
        
        // Core modules
        Navigation.init();
        Forms.init();
        Gallery.init();
        Testimonials.init();
        FAQ.init();
        FloatingChat.init();
        Animations.init();
        MobileServices.init();
        TouchOptimizations.init();
        console.log('JD Landcare website initialized successfully!');
    },
    
    preventFormJumps() {
        // Prevent buttons without type from submitting forms
        document.querySelectorAll('button').forEach(button => {
            if (!button.hasAttribute('type')) {
                button.setAttribute('type', 'button');
            }
        });
        
        // Add a fallback handler to catch any form submissions that slip through
        // This runs AFTER Forms module handlers (bubble phase, not capture)
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                // Only prevent if not already prevented by Forms module
                if (!e.defaultPrevented) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            });
        });
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}

// Prevent browser back/forward swipe gesture on mobile
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
        // Prevent swipe from left edge (browser back gesture)
        if (touchStartX < 20 && e.touches[0].clientX > touchStartX + 50) {
            e.preventDefault();
        }
        // Prevent swipe from right edge (browser forward gesture)
        if (touchStartX > window.innerWidth - 20 && e.touches[0].clientX < touchStartX - 50) {
            e.preventDefault();
        }
    }, { passive: false });
}
