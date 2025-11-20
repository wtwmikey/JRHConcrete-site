// ============================================================================
// OUR WORK ALBUM MODAL - Facebook-style photo album viewer for "Our Work" section
// ============================================================================

// Photo albums data specifically for "Our Work" section
const ourWorkAlbums = {
    'home-driveway-1': {
        title: 'Residential Driveways',
        photos: [
            'https://tinyurl.com/42dap9td',
            'https://tinyurl.com/2nmp62ur',
            'https://tinyurl.com/4jnmmy48',
            'https://tinyurl.com/2s35hph4',
            'https://tinyurl.com/4u6dsjc7',
            'https://tinyurl.com/42xpjuet'
        ]
    },
    'home-foundation-1': {
        title: 'Housing Foundations',
        photos: [
            'https://tinyurl.com/4bs2zc7x',
            'https://tinyurl.com/3aay2art',
            'https://tinyurl.com/2sud926v',
            'https://tinyurl.com/mr48rseu',
            'https://tinyurl.com/22xjeu4h',
            'https://tinyurl.com/4m24zk68',
            'https://tinyurl.com/9cjhpkc8',
            'https://tinyurl.com/632h4479',
            'https://tinyurl.com/ycxtuzhu'
        ]
    },
    'home-pooldeck-1': {
        title: 'Pool Deck Constructions',
        photos: [
            'https://tinyurl.com/34bsmez6',
            'https://tinyurl.com/bdd63v9y',
            'https://tinyurl.com/yc88m7ne',
            'https://tinyurl.com/5xp22tcs',
            'https://tinyurl.com/hpr82h64'
        ]
    },
    'home-walkway-1': {
        title: 'Residential/Commercial Walkways',
        photos: [
            'https://tinyurl.com/ywbz3vaj',
            'https://tinyurl.com/5cs43y6u',
            'https://tinyurl.com/2d22cbfu',
            'https://tinyurl.com/47zuauwv',
            'https://tinyurl.com/dwmrxf2e',
            'https://tinyurl.com/2sypp98r',
            'https://tinyurl.com/sa8ppn8t',
            'https://tinyurl.com/3fmr8628',
            'https://tinyurl.com/3u9azm8f',
            'https://tinyurl.com/6fcfm64j',
            'https://tinyurl.com/jzwkk39j'
        ]
    },
    'home-patio-1': {
        title: 'Patio Constructions',
        photos: [
            'https://tinyurl.com/ya5yfvsf',
            'https://tinyurl.com/3sen3n97',
            'https://tinyurl.com/2s4682f7',
            'https://tinyurl.com/2tjatx7f',
            'https://tinyurl.com/3r3n38ef',
            'https://tinyurl.com/3evp6fc9',
            'https://tinyurl.com/mvc2xj7n',
            'https://tinyurl.com/ywebd6re',
            'https://tinyurl.com/2m6mf6k4'
        ]
    },
    'home-repair-1': {
        title: 'Restorations',
        photos: [
            'https://tinyurl.com/fatwjaw6',
            'https://tinyurl.com/5ak27kj7',
            'https://tinyurl.com/4v7eupy4',
            'https://tinyurl.com/ybrn7upu',
            'https://tinyurl.com/z7rw4cet',
            'https://tinyurl.com/4kzndzuy',
            'https://tinyurl.com/yfmtjekd',
            'https://tinyurl.com/mpscs2un',
            'https://tinyurl.com/2ppc7x7a',
            'https://tinyurl.com/yas98dwm',
            'https://tinyurl.com/ybhwbxjb',
            'https://tinyurl.com/yc8b43pp',
            'https://tinyurl.com/4x738b6p'
        ]
    }
};

const OurWorkAlbumModal = {
    modal: null,
    overlay: null,
    container: null,
    mainPhoto: null,
    photoContainer: null,
    thumbnails: null,
    prevBtn: null,
    nextBtn: null,
    closeBtn: null,
    currentIndex: 0,
    currentAlbum: null,
    photos: [],
    touchStartX: 0,
    touchEndX: 0,
    touchStartY: 0,
    touchEndY: 0,
    isSwiping: false,
    swipeOffset: 0,
    scrollPosition: 0,
    isMobile: false,
    touchStartTime: 0,

    init() {
        this.isMobile = window.innerWidth <= 768;
        this.modal = document.getElementById('ourWorkAlbumModal');
        this.overlay = this.modal?.querySelector('.album-modal-overlay');
        this.container = this.modal?.querySelector('.album-modal-container');
        this.mainPhoto = document.getElementById('ourWorkAlbumMainPhoto');
        this.photoContainer = this.modal?.querySelector('.album-photo-container');
        this.thumbnails = document.getElementById('ourWorkAlbumThumbnails');
        this.prevBtn = this.modal?.querySelector('.album-modal-prev');
        this.nextBtn = this.modal?.querySelector('.album-modal-next');
        this.closeBtn = this.modal?.querySelector('.album-modal-close');

        if (!this.modal) return;

        this.initOurWorkItems();
        this.initEventListeners();
        this.initKeyboardNavigation();
        this.initTouchGestures();
    },

    initOurWorkItems() {
        // Handle gallery items from "Our Work" section on index.html
        const ourWorkItems = document.querySelectorAll('#gallery .gallery-item[data-album]');
        ourWorkItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const albumId = item.getAttribute('data-album');
                if (albumId && ourWorkAlbums[albumId]) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.openAlbum(albumId);
                }
            });
        });
    },

    initEventListeners() {
        // Close button
        this.closeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeAlbum();
        });

        // Overlay click to close
        this.overlay?.addEventListener('click', () => this.closeAlbum());

        // Container click to close (but not on photo area)
        this.container?.addEventListener('click', (e) => {
            // Check if clicking on the photo image itself or its children
            const isPhoto = e.target === this.mainPhoto || 
                           e.target.closest('.album-main-photo') ||
                           e.target.closest('.album-photo-loader');
            
            // Check if clicking on interactive elements
            const isNavButton = e.target.closest('.album-modal-nav');
            const isThumbnail = e.target.closest('.album-thumbnail');
            const isCounter = e.target.closest('.album-counter');
            const isCloseBtn = e.target.closest('.album-modal-close');
            const isThumbnailsContainer = e.target.closest('.album-thumbnails');
            
            // Close if clicking outside photo and not on interactive elements
            if (!isPhoto && !isNavButton && !isThumbnail && !isCounter && !isCloseBtn && !isThumbnailsContainer) {
                this.closeAlbum();
            }
        });

        // Photo image click - prevent closing when clicking on photo
        this.mainPhoto?.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Navigation buttons
        this.prevBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showPrevious();
        });
        this.nextBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showNext();
        });

        // Thumbnail click
        this.thumbnails?.addEventListener('click', (e) => {
            e.stopPropagation();
            const thumb = e.target.closest('.album-thumbnail');
            if (thumb) {
                const index = parseInt(thumb.getAttribute('data-index'));
                this.showPhoto(index);
            }
        });

        // Touch events for mobile - close on tap outside photo
        let containerTouchStartX = 0;
        let containerTouchStartY = 0;
        let containerTouchStartTime = 0;
        
        this.container?.addEventListener('touchstart', (e) => {
            // Track touch start position for tap detection
            const isPhoto = e.target === this.mainPhoto || 
                           e.target.closest('.album-main-photo') ||
                           e.target.closest('.album-photo-loader');
            
            // Only track if touch starts outside photo
            if (!isPhoto) {
                containerTouchStartX = e.touches[0].clientX;
                containerTouchStartY = e.touches[0].clientY;
                containerTouchStartTime = Date.now();
            }
        }, { passive: true });
        
        this.container?.addEventListener('touchend', (e) => {
            // Check if tapping on the photo image itself
            const isPhoto = e.target === this.mainPhoto || 
                           e.target.closest('.album-main-photo') ||
                           e.target.closest('.album-photo-loader');
            
            // Check if clicking on interactive elements
            const isNavButton = e.target.closest('.album-modal-nav');
            const isThumbnail = e.target.closest('.album-thumbnail');
            const isCounter = e.target.closest('.album-counter');
            const isCloseBtn = e.target.closest('.album-modal-close');
            const isThumbnailsContainer = e.target.closest('.album-thumbnails');
            
            if (!isPhoto && !isNavButton && !isThumbnail && !isCounter && !isCloseBtn && !isThumbnailsContainer) {
                // Only close if it was a tap (not a swipe)
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                const touchDuration = Date.now() - containerTouchStartTime;
                const touchDiffX = Math.abs(containerTouchStartX - touchEndX);
                const touchDiffY = Math.abs(containerTouchStartY - touchEndY);
                
                // Close if it's a quick tap with minimal movement
                if (touchDuration < 300 && touchDiffX < 30 && touchDiffY < 30) {
                    this.closeAlbum();
                }
            }
        }, { passive: true });
    },

    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (!this.modal?.classList.contains('active')) return;

            switch(e.key) {
                case 'Escape':
                    this.closeAlbum();
                    break;
                case 'ArrowLeft':
                    this.showPrevious();
                    break;
                case 'ArrowRight':
                    this.showNext();
                    break;
            }
        });
    },

    initTouchGestures() {
        if (!this.mainPhoto) return;

        // Touch start
        this.mainPhoto.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.touchStartY = e.touches[0].clientY;
            this.touchStartTime = Date.now();
            this.isSwiping = false;
            this.swipeOffset = 0;
        }, { passive: true });

        // Touch move - for visual feedback
        this.mainPhoto.addEventListener('touchmove', (e) => {
            if (!this.touchStartX) return;
            
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = currentX - this.touchStartX;
            const diffY = currentY - this.touchStartY;

            // Determine if this is a horizontal swipe
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
                this.isSwiping = true;
                this.swipeOffset = diffX;
                
                // Add visual feedback during swipe
                const maxOffset = window.innerWidth * 0.3;
                const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, diffX));
                this.mainPhoto.style.transform = `translateX(${clampedOffset}px)`;
                this.mainPhoto.style.transition = 'none';
            }
        }, { passive: true });

        // Touch end
        this.mainPhoto.addEventListener('touchend', (e) => {
            if (!this.touchStartX) return;

            this.touchEndX = e.changedTouches[0].clientX;
            this.touchEndY = e.changedTouches[0].clientY;
            
            // Reset transform
            this.mainPhoto.style.transform = '';
            this.mainPhoto.style.transition = 'transform 0.3s ease';

            if (this.isSwiping) {
                this.handleSwipe();
            }

            // Reset touch tracking
            this.touchStartX = 0;
            this.touchStartY = 0;
            this.isSwiping = false;
            this.swipeOffset = 0;
        }, { passive: true });

        // Touch cancel
        this.mainPhoto.addEventListener('touchcancel', () => {
            this.mainPhoto.style.transform = '';
            this.mainPhoto.style.transition = 'transform 0.3s ease';
            this.touchStartX = 0;
            this.touchStartY = 0;
            this.isSwiping = false;
            this.swipeOffset = 0;
        }, { passive: true });

        // Handle window resize to update mobile detection
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth <= 768;
        });
    },

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next photo
                this.showNext();
            } else {
                // Swipe right - previous photo
                this.showPrevious();
            }
        }
    },

    openAlbum(albumId) {
        const album = ourWorkAlbums[albumId];
        if (!album) return;

        this.currentAlbum = albumId;
        this.photos = album.photos;
        this.currentIndex = 0;
        this.isMobile = window.innerWidth <= 768;

        // Prevent body scroll
        this.preventBodyScroll();

        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Load first photo
        this.showPhoto(0);
        this.updateThumbnails();
        this.updateCounter();
        
        // Always show thumbnails (including on mobile)
        if (this.thumbnails) {
            this.thumbnails.classList.remove('mobile-hidden');
        }
    },

    closeAlbum() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.allowBodyScroll();
        this.currentIndex = 0;
        this.currentAlbum = null;
        this.photos = [];
    },

    showPhoto(index) {
        if (index < 0 || index >= this.photos.length) return;

        this.currentIndex = index;
        const photoUrl = this.photos[index];

        // Show loader
        const loader = this.modal.querySelector('.album-photo-loader');
        if (loader) loader.style.display = 'flex';

        // Add fade transition
        this.mainPhoto.style.opacity = '0';
        this.mainPhoto.style.transition = 'opacity 0.3s ease';

        // Load image
        const img = new Image();
        img.onload = () => {
            this.mainPhoto.src = photoUrl;
            this.mainPhoto.alt = `Photo ${index + 1} of ${this.photos.length}`;
            this.mainPhoto.style.opacity = '1';
            if (loader) loader.style.display = 'none';
        };
        img.onerror = () => {
            if (loader) loader.style.display = 'none';
            this.mainPhoto.style.opacity = '1';
            console.error('Failed to load image:', photoUrl);
        };
        img.src = photoUrl;

        // Update active thumbnail
        this.updateActiveThumbnail();
        this.updateCounter();
        this.updateNavigationButtons();
    },

    showNext() {
        if (this.currentIndex < this.photos.length - 1) {
            this.showPhoto(this.currentIndex + 1);
        }
    },

    showPrevious() {
        if (this.currentIndex > 0) {
            this.showPhoto(this.currentIndex - 1);
        }
    },

    updateThumbnails() {
        if (!this.thumbnails) return;

        this.thumbnails.innerHTML = '';
        this.photos.forEach((photo, index) => {
            const thumb = document.createElement('div');
            thumb.className = 'album-thumbnail';
            thumb.setAttribute('data-index', index);
            if (index === this.currentIndex) {
                thumb.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = photo;
            img.alt = `Thumbnail ${index + 1}`;
            img.loading = 'lazy';

            thumb.appendChild(img);
            this.thumbnails.appendChild(thumb);
        });
    },

    updateActiveThumbnail() {
        const thumbs = this.thumbnails?.querySelectorAll('.album-thumbnail');
        thumbs?.forEach((thumb, index) => {
            if (index === this.currentIndex) {
                thumb.classList.add('active');
                // Scroll thumbnail into view
                thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                thumb.classList.remove('active');
            }
        });
    },

    updateCounter() {
        const currentEl = document.getElementById('ourWorkAlbumCurrentIndex');
        const totalEl = document.getElementById('ourWorkAlbumTotalCount');
        if (currentEl) currentEl.textContent = this.currentIndex + 1;
        if (totalEl) totalEl.textContent = this.photos.length;
    },

    updateNavigationButtons() {
        if (this.prevBtn) {
            this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.3' : '1';
            this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
        }
        if (this.nextBtn) {
            this.nextBtn.style.opacity = this.currentIndex === this.photos.length - 1 ? '0.3' : '1';
            this.nextBtn.style.pointerEvents = this.currentIndex === this.photos.length - 1 ? 'none' : 'auto';
        }
    },

    preventBodyScroll() {
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
    },

    allowBodyScroll() {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, this.scrollPosition);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => OurWorkAlbumModal.init());
} else {
    OurWorkAlbumModal.init();
}

