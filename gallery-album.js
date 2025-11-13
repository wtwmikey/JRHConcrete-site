// ============================================================================
// GALLERY ALBUM MODAL - Facebook-style photo album viewer
// ============================================================================

// Photo albums data - each album contains multiple unique photos for a project
const photoAlbums = {
    'driveway-1': {
        title: 'Residential Driveway Installation',
        photos: [
            'https://tinyurl.com/5n7jsvh9',
            'https://tinyurl.com/42dap9td'
        ]
    },
    'foundation-1': {
        title: 'Commercial Foundation Project',
        photos: [
            'https://tinyurl.com/486cyfmr',
            'https://tinyurl.com/m8c7xhhp',
            'https://tinyurl.com/yhsjd9z6',
            'https://tinyurl.com/ymw3t85y',
            'https://tinyurl.com/yxmxh6ky',
            'https://tinyurl.com/29ff568a',
            'https://tinyurl.com/389d5m4h',
        ]
    },
    'patio-1': {
        title: 'Decorative Concrete Pool Deck',
        photos: [
            'https://tinyurl.com/3sscpzmd',
            'https://tinyurl.com/3jyb5dah',
            'https://tinyurl.com/4t74pswp',
            'https://tinyurl.com/355c2vfw',
            'https://tinyurl.com/ntb74nbd',
            'https://tinyurl.com/mpr6atf6',
            'https://tinyurl.com/4cv95dte',
            'https://tinyurl.com/bdcr62cb',
            'https://tinyurl.com/2wk97256',
            'https://tinyurl.com/m8n9y74m',
            'https://tinyurl.com/mubbcwmd',
        ]
    },
    'sidewalk-1': {
        title: 'Professional Sidewalk Installation',
        photos: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688909-1c88e0e49047?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688969-a5fcd7366612?w=1200&h=900&fit=crop'
        ]
    },
    'commercial-1': {
        title: 'Industrial Concrete Installation',
        photos: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop'
        ]
    },
    'repair-1': {
        title: 'Concrete Restoration Project',
        photos: [
            'https://images.unsplash.com/photo-1582515073490-39981397c445?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688909-1c88e0e49047?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688969-a5fcd7366612?w=1200&h=900&fit=crop'
        ]
    },
    'patio-2': {
        title: 'Pool Deck Outdoor Living Space',
        photos: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688909-1c88e0e49047?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1589374047341-933d5964d45f?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688969-a5fcd7366612?w=1200&h=900&fit=crop'
        ]
    },
    'foundation-2': {
        title: 'Residential Foundation Work',
        photos: [
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1617486491215-e594fc6c9359?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop'
        ]
    },
    'commercial-2': {
        title: 'Commercial Parking Lot',
        photos: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop'
        ]
    },
    // Albums for "Our Work" section on homepage
    'home-driveway-1': {
        title: 'Residential Driveways',
        photos: [
            'https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/482074813_940302181595452_965191402450490635_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tEQ-N5lUM3gQ7kNvwGOY3Yy&_nc_oc=Adn7QPgjglxY6in_YUqHNXxThKjb9ti7mVdNzf3kXjNf_6H_08DyR4p7TmdevxR7NM6sRxBZ1u7AuhqOGYDyjmgl&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=sSS8eggbzKtRcPLDMNWFCA&oh=00_Afg2_7cNbABRlw5kv6SbLvcWOD0L9D4D0cdl_qjOrsXuvw&oe=6911CF0F',
            'https://tinyurl.com/42dap9td',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop'
        ]
    },
    'home-foundation-1': {
        title: 'Housing Foundations',
        photos: [
            'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/537702686_1067269285565407_2336659898714897327_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4f13aZBzSBoQ7kNvwGcmVBW&_nc_oc=AdmtVR2uITHM2v_uWQ7XyqVe9weUQDKsoCUhfQY-BaqOuJ9z2xrHeGTIikSJPvcGTl6zXzLRc9AEStAFOyHN2UhU&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&_nc_gid=SOkFjdMPT9BviFWE9su-OA&oh=00_Afi_925yakPuCJClFv7q9HFElUjRhoZLSnIUW9KcFcUzYw&oe=6911E10F',
            'https://tinyurl.com/486cyfmr',
            'https://tinyurl.com/m8c7xhhp',
            'https://tinyurl.com/yhsjd9z6',
            'https://images.unsplash.com/photo-1617486491215-e594fc6c9359?w=1200&h=900&fit=crop'
        ]
    },
    'home-pooldeck-1': {
        title: 'Pool Deck Constructions',
        photos: [
            'https://tinyurl.com/34bsmez6',
            'https://images.unsplash.com/photo-1589374047341-933d5964d45f?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688909-1c88e0e49047?w=1200&h=900&fit=crop'
        ]
    },
    'home-walkway-1': {
        title: 'Residential/Commercial Walkways',
        photos: [
            'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/565693346_1112042871088048_9004295495231802155_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oO4fuXiIkr0Q7kNvwHZpg6d&_nc_oc=Adn5MXxU1BxDLWx_2thDQncyEfOErqXUlsEHG3GjNWe5_9rLDqr1QIudkJYSOrpfvFeZHxeVfPnLoKrqlTcZd27e&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&_nc_gid=3bpF1QGWuGZuUijQGLnE5g&oh=00_Afir5VR-EZApvGeS0FccVVQYwueF22YGUZQqpGgoaM0Abw&oe=69120774',
            'https://images.unsplash.com/photo-1600456243364-8e8e0fc8c3e2?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688909-1c88e0e49047?w=1200&h=900&fit=crop'
        ]
    },
    'home-patio-1': {
        title: 'Patio Constructions',
        photos: [
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1589374047341-933d5964d45f?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop'
        ]
    },
    'home-repair-1': {
        title: 'Restorations',
        photos: [
            'https://images.unsplash.com/photo-1582515073490-39981397c445?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607688969-a5d68b5b5c1a?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=900&fit=crop',
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=900&fit=crop'
        ]
    }
};

const AlbumModal = {
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
        this.modal = document.getElementById('albumModal');
        this.overlay = this.modal?.querySelector('.album-modal-overlay');
        this.container = this.modal?.querySelector('.album-modal-container');
        this.mainPhoto = document.getElementById('albumMainPhoto');
        this.photoContainer = this.modal?.querySelector('.album-photo-container');
        this.thumbnails = document.getElementById('albumThumbnails');
        this.prevBtn = this.modal?.querySelector('.album-modal-prev');
        this.nextBtn = this.modal?.querySelector('.album-modal-next');
        this.closeBtn = this.modal?.querySelector('.album-modal-close');

        if (!this.modal) return;

        this.initGalleryItems();
        this.initEventListeners();
        this.initKeyboardNavigation();
        this.initTouchGestures();
    },

    initGalleryItems() {
        // Handle gallery items from gallery.html (gallery-page-item)
        const galleryPageItems = document.querySelectorAll('.gallery-page-item');
        galleryPageItems.forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const albumId = item.getAttribute('data-album');
                if (albumId && photoAlbums[albumId]) {
                    this.openAlbum(albumId);
                }
            });
        });

        // Handle gallery items from index.html (gallery-item) - but exclude "Our Work" section
        // "Our Work" section is handled by our-work-album.js
        const galleryItems = document.querySelectorAll('.gallery-item[data-album]');
        galleryItems.forEach(item => {
            // Skip items that are in the "Our Work" section (#gallery)
            if (item.closest('#gallery')) {
                return; // Let our-work-album.js handle these
            }
            item.addEventListener('click', (e) => {
                const albumId = item.getAttribute('data-album');
                if (albumId && photoAlbums[albumId]) {
                    e.preventDefault();
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
        const album = photoAlbums[albumId];
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
        
        // Hide/show thumbnails based on mobile
        if (this.thumbnails) {
            if (this.isMobile) {
                this.thumbnails.classList.add('mobile-hidden');
            } else {
                this.thumbnails.classList.remove('mobile-hidden');
            }
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
        const currentEl = document.getElementById('albumCurrentIndex');
        const totalEl = document.getElementById('albumTotalCount');
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
    document.addEventListener('DOMContentLoaded', () => AlbumModal.init());
} else {
    AlbumModal.init();
}

