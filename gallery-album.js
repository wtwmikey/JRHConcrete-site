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
        title: 'House Foundation',
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
    'pooldeck-1': {
        title: 'Concrete Pool Deck',
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
            'https://tinyurl.com/92cpb46p',
            'https://tinyurl.com/yvnnukfx',
            'https://tinyurl.com/4rmntze3',
            'https://tinyurl.com/mtjrmsf2',
            'https://tinyurl.com/2f4nd7fb'
        ]
    },
    'patio-1': {
        title: 'Industrial Concrete Installation',
        photos: [
            'https://tinyurl.com/ymuk54sy',
            'https://tinyurl.com/5786xx96',
            'https://tinyurl.com/2hew4rtz',
            'https://tinyurl.com/5a5ajcmz',
            'https://tinyurl.com/yr2uptkt',
            'https://tinyurl.com/mw4xtxej'
        ]
    },
    'repair-1': {
        title: 'Concrete Restoration Project',
        photos: [
            'https://tinyurl.com/4bphn8yf',
            'https://tinyurl.com/2s4kj8kt',
            'https://tinyurl.com/yv55dmn7',
            'https://tinyurl.com/mwtt36yf',
            'https://tinyurl.com/29jfaprp'
        ]
    },
    'driveway-2': {
        title: 'Residential Driveway Construction',
        photos: [
            'https://tinyurl.com/pn4d42jb',
            'https://tinyurl.com/3zs46pmw',
            'https://tinyurl.com/4jnmmy48'
        ]
    },
    'foundation-2': {
        title: 'Residential Foundation Work',
        photos: [
            'https://tinyurl.com/ycyxn7rf',
            'https://tinyurl.com/yyu5zxxt',
            'https://tinyurl.com/yy8yvhbm',
            'https://tinyurl.com/ywpdk7cm',
            'https://tinyurl.com/5ayj93kd',
            'https://tinyurl.com/yz5uja6d',
            'https://tinyurl.com/3s59e9ce',
            'https://tinyurl.com/5x2nay25',
            'https://tinyurl.com/65f79v74'
        ]
    },
    'commercial-2': {
        title: 'Commercial Parking Lot',
        photos: [
            'https://tinyurl.com/3u4nu6b4',
            'https://tinyurl.com/mrxak9f6',
            'https://tinyurl.com/mfy4826v',
            'https://tinyurl.com/5adwyace'
        ]
    },
    // Albums for "Our Work" section on homepage
    'home-driveway-1': {
        title: 'Residential Driveways',
        photos: [
            'https://tinyurl.com/3xjwr6zu',
            'https://tinyurl.com/45j3sjmx',
            'https://tinyurl.com/4fmhxf2p',
            'https://tinyurl.com/2nmp62ur'
        ]
    },
    'home-foundation-1': {
        title: 'Housing Foundations',
        photos: [
            'https://tinyurl.com/bdcu7887',
            'https://tinyurl.com/esaa7hjt',
            'https://tinyurl.com/bd4r4w7h',
            'https://tinyurl.com/3z88exf8'
        ]
    },
    'home-pooldeck-1': {
        title: 'Pool Deck Constructions',
        photos: [
            'https://tinyurl.com/3s3z7m66',
            'https://tinyurl.com/b7wdn4cd',
            'https://tinyurl.com/ksbkv5uu',
            'https://tinyurl.com/yz5c263y',
            'https://tinyurl.com/87ncfksc',
            'https://tinyurl.com/murasrsn'
        ]
    },
    'sidewalk-2': {
        title: 'Residential/Commercial Walkways',
        photos: [
            'https://tinyurl.com/5ffk4dub',
            'https://tinyurl.com/4jpf8nth',
            'https://tinyurl.com/4tvr55f2',
            'https://tinyurl.com/485yvr2x',
            'https://tinyurl.com/3bjrshnh',
        ]
    },
    'home-patio-1': {
        title: 'Patio Constructions',
        photos: [
            'https://tinyurl.com/ywezfky3',
            'https://tinyurl.com/yzu5cs8v',
            'https://tinyurl.com/33t6adt5',
            'https://tinyurl.com/3s82cpx4',
            'https://tinyurl.com/3py2zyvu',
            'https://tinyurl.com/5acrew9d'
        ]
    },
    'home-repair-1': {
        title: 'Restorations',
        photos: [
            'https://tinyurl.com/mr27eu8r',
            'https://tinyurl.com/9w62fw7d',
            'https://tinyurl.com/yc2m3bmm',
            'https://tinyurl.com/48k9dsme',
            'https://tinyurl.com/bdesus54',
            'https://tinyurl.com/4n3a33wj',
            'https://tinyurl.com/35kkhys5',
            'https://tinyurl.com/3ck85pj6',
            'https://tinyurl.com/mu2vr7vw',
            'https://tinyurl.com/yen3dxfj',
            'https://tinyurl.com/54rkhtz2',
            'https://tinyurl.com/2huensvx',
            'https://tinyurl.com/yyup3xh8',
            'https://tinyurl.com/3uy4d954',
            'https://tinyurl.com/4hzx97u7',
            'https://tinyurl.com/hpttty74',
            'https://tinyurl.com/56w38t8z',
            'https://tinyurl.com/2fjx95d2',
            'https://tinyurl.com/2a8ptvbs'
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
        if (this.photos.length === 0) return;
        
        // Circular navigation: if at the end, loop to the beginning
        const nextIndex = this.currentIndex < this.photos.length - 1 
            ? this.currentIndex + 1 
            : 0;
        this.showPhoto(nextIndex);
    },

    showPrevious() {
        if (this.photos.length === 0) return;
        
        // Circular navigation: if at the beginning, loop to the end
        const prevIndex = this.currentIndex > 0 
            ? this.currentIndex - 1 
            : this.photos.length - 1;
        this.showPhoto(prevIndex);
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
        if (!thumbs || !this.thumbnails) return;

        const totalPhotos = this.photos.length;
        
        thumbs.forEach((thumb, index) => {
            if (index === this.currentIndex) {
                thumb.classList.add('active');
                
                // Always ensure active thumbnail is visible in the thumbnail row
                this.scrollThumbnailIntoView(thumb, index, totalPhotos);
            } else {
                thumb.classList.remove('active');
            }
        });
    },

    scrollThumbnailIntoView(thumb, index, totalPhotos) {
        if (!this.thumbnails) return;

        const container = this.thumbnails;
        
        // Calculate scroll position with margin consideration
        const leftMargin = 80; // Increased left margin for better spacing
        const rightMargin = 16; // Right margin (1rem = 16px)
        const thumbWidth = thumb.offsetWidth;
        
        // Get current scroll position and container dimensions
        const currentScroll = container.scrollLeft;
        const thumbOffset = thumb.offsetLeft;
        const containerWidth = container.clientWidth;
        const maxScroll = container.scrollWidth - containerWidth;
        
        // Calculate centered position with more left space
        // Position thumbnail so it has more space on the left side
        let targetScroll = thumbOffset - leftMargin;
        
        // For first few thumbnails, ensure they don't scroll past the start
        if (index < 3) {
            const minScroll = Math.max(0, thumbOffset - leftMargin);
            targetScroll = Math.max(minScroll, targetScroll);
        }
        // For last few thumbnails, ensure they don't scroll past the end
        else if (index >= totalPhotos - 3) {
            const maxPossibleScroll = thumbOffset + thumbWidth - containerWidth + rightMargin;
            const maxAllowedScroll = Math.min(maxScroll, maxPossibleScroll);
            targetScroll = Math.min(maxAllowedScroll, targetScroll);
        }
        // For middle thumbnails, use left margin positioning
        else {
            targetScroll = thumbOffset - leftMargin;
        }
        
        // Ensure scroll is within bounds
        targetScroll = Math.max(0, Math.min(maxScroll, targetScroll));
        
        // Only scroll if the target is different from current position
        if (Math.abs(targetScroll - currentScroll) > 1) {
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    },

    updateCounter() {
        const currentEl = document.getElementById('albumCurrentIndex');
        const totalEl = document.getElementById('albumTotalCount');
        if (currentEl) currentEl.textContent = this.currentIndex + 1;
        if (totalEl) totalEl.textContent = this.photos.length;
    },

    updateNavigationButtons() {
        // With circular navigation, buttons are always enabled
        if (this.prevBtn) {
            this.prevBtn.style.opacity = '1';
            this.prevBtn.style.pointerEvents = 'auto';
        }
        if (this.nextBtn) {
            this.nextBtn.style.opacity = '1';
            this.nextBtn.style.pointerEvents = 'auto';
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

