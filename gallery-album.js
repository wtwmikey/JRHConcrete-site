// ============================================================================
// GALLERY ALBUM MODAL - Facebook-style photo album viewer
// ============================================================================

// Photo albums data - each album contains multiple unique photos for a project
const photoAlbums = {
    'driveway-1': {
        title: 'Residential Driveway Installation',
        photos: [
            'Images/driveways/2.jpg',
            'Images/driveways/1.jpg'
        ]
    },
    'foundation-1': {
        title: 'House Foundation',
        photos: [
            'Images/gallery/2/1--1.png',
            'Images/gallery/2/1--2.png',
            'Images/gallery/2/1--3.png',
            'Images/gallery/2/1--4.png',
            'Images/gallery/2/1--5.png',
            'Images/gallery/2/1--6.png',
            'Images/gallery/2/1--7.png'
        ]
    },
    'pooldeck-1': {
        title: 'Concrete Pool Deck',
        photos: [
            'Images/gallery/3/2--1.png',
            'Images/gallery/3/2--2.png',
            'Images/gallery/3/2--3.png',
            'Images/gallery/3/2--4.png',
            'Images/gallery/3/2--5.png',
            'Images/gallery/3/2--6.png',
            'Images/gallery/3/2--7.png',
            'Images/gallery/3/2--8.png',
            'Images/gallery/3/2--9.png',
            'Images/gallery/3/2--10.png'
        ]
    },
    'sidewalk-1': {
        title: 'Professional Sidewalk Installation',
        photos: [
            'Images/gallery/6/-6-1.jpg',
            'Images/gallery/6/-6-2.jpg',
            'Images/gallery/6/-6-3.jpg',
            'Images/gallery/6/-6-4.jpg',
            'Images/gallery/6/-6-5.jpg',
            {
                type: 'video',
                src: 'Images/gallery/6/-6-v1.mp4',
                poster: 'Images/gallery/6/-6-4.jpg',
                caption: 'Pouring the walkway section'
            }
        ]
    },
    'patio-1': {
        title: 'Backyard Patio Installation',
        photos: [
            'Images/gallery/9/10-1.jpeg',
            'Images/gallery/9/10-2.jpg',
            'Images/gallery/9/10-3.jpg',
            'Images/gallery/9/10-4.jpg',
            'Images/gallery/9/10-5.jpg',
            'Images/gallery/9/10-6.jpg',
            'Images/gallery/9/10-7.jpg'
        ]
    },
    'repair-1': {
        title: 'Concrete Restoration Project',
        photos: [
            'Images/gallery/5/7-1.png',
            'Images/gallery/5/7-2.jpg',
            'Images/gallery/5/7-3.png',
            'Images/repairs/5-1.jpg'
        ]
    },
    'driveway-2': {
        title: 'Residential Driveway Construction',
        photos: [
            'Images/gallery/4/6-1.jpg',
            'Images/gallery/4/6-2.jpg',
            'Images/gallery/4/6-3.jpg'
        ]
    },
    'foundation-2': {
        title: 'Residential Foundation Work',
        photos: [
            'Images/gallery/12/12-1.jpg',
            'Images/gallery/12/12-2.jpg',
            'Images/gallery/12/12-3.jpg',
            'Images/gallery/12/12-4.jpg',
            'Images/gallery/12/12-5.jpg',
            'Images/gallery/12/12-6.jpg',
            'Images/gallery/12/12-7.jpg',
            'Images/gallery/12/12-8.jpg',
            'Images/gallery/12/12-9.jpg'
        ]
    },
    'commercial-2': {
        title: 'Commercial Parking Lot',
        photos: [
            'Images/gallery/11/11-1.jpg',
            'Images/gallery/11/11-3.jpg',
            'Images/gallery/11/11-2.jpg',
            'Images/gallery/11/11-4.jpg'
        ]
    },
    'home-foundation-1': {
        title: 'Housing Foundations',
        photos: [
            'Images/gallery/13/13-2.png',
            'Images/gallery/13/13-1.png',
            'Images/gallery/13/13-3.png',
            'Images/gallery/13/13-4.png'        ]
    },
    'home-patios-1': {
        title: 'backyard Deck Construction',
        photos: [
            'Images/gallery/15/15-1.png',
            'Images/gallery/15/15-2.png',
            'Images/gallery/15/15-3.png',
            'Images/gallery/15/15-4.png',
            'Images/gallery/15/15-5.png',
            'Images/gallery/15/15-6.png'
        ]
    },
   
    'home-patio-1': {
        title: 'Patio Constructions',
        photos: [
            'Images/gallery/14/14-1.jpg',
            'Images/gallery/14/14-2.jpg',
            'Images/gallery/14/14-3.jpg',
            'Images/gallery/14/14-4.jpg',
            'Images/gallery/14/14-5.jpg'
        ]
    },
    'home-repair-1': {
        title: 'Restorations',
        photos: [
            'Images/gallery/3/5-1.jpg',
            'Images/gallery/3/5-2.jpg',
            'Images/gallery/3/5-3.jpg',
            'Images/gallery/3/5-4.jpg',
            'Images/gallery/3/5-5.jpg',
            'Images/gallery/3/5-6.jpg',
            'Images/gallery/3/5-7.jpg',
            'Images/gallery/3/5-8.jpg',
            'Images/gallery/3/5-9.jpg',
            'Images/gallery/3/5-10.jpg',
            'Images/gallery/3/5-11.jpg',
            'Images/gallery/3/5-12.jpg',
            'Images/gallery/3/5-13.jpg',
            'Images/gallery/3/5-14.jpg',
            'Images/gallery/3/5-15.jpg'
        ]
    },
    // New albums for additional gallery rows
    'driveway-3': {
        title: 'Modern Driveway Installation',
        photos: [
            'Images/gallery/7/8-1.jpg',
            'Images/gallery/7/8-2.jpg',
            'Images/gallery/7/8-3.jpg',
            'Images/gallery/7/8-4.jpg',
            'Images/gallery/7/8-5.jpg',
            {
                type: 'video',
                src: 'Images/gallery/7/8-v1.mp4',
                poster: 'Images/gallery/7/8-4.jpg',
                caption: 'Pumping concrete for the driveway base'
            },
            {
                type: 'video',
                src: 'Images/gallery/7/8-v2.mp4',
                poster: 'Images/gallery/7/8-5.jpg',
                caption: 'Finished driveway walkthrough'
            }
        ]
    },
    'foundation-3': {
        title: 'Commercial Foundation Project',
        photos: [
            'Images/gallery/20/20-1.jpg',
            'Images/gallery/20/20-2.jpg',
            'Images/gallery/20/20-3.jpg',
            'Images/gallery/20/20-4.jpg'
        ]
    },
    'deck-1': {
        title: 'Deck Construction',
        photos: [
            'Images/gallery/16/16-2.jpg',
            'Images/gallery/16/16-3.jpg',
            'Images/gallery/16/16-4.jpg'
        ]
    },
    'pool-3': {
        title: 'Residential Pool Construction',
        photos: [
            'Images/gallery/21/21-1.jpg',
            'Images/gallery/21/21-2.jpg',
            'Images/gallery/21/21-3.jpg',
            'Images/gallery/21/21-4.jpg',
            'Images/gallery/21/21-5.jpg',
            'Images/gallery/21/21-6.jpg',
            'Images/gallery/21/21-7.jpg'

        ]
    },
    'stair': {
        title: 'Residential Stairs Construction',
        photos: [
            'Images/gallery/18/18-1.jpg',
            'Images/gallery/18/18-2.jpg',
            'Images/gallery/18/18-3.jpg',
            'Images/gallery/18/18-4.jpg',
            'Images/gallery/18/18-5.jpg'
        ]
    },

    'pool-2': {
        title: 'Residential Pool Construction',
        photos: [
            'Images/gallery/17/17-1.jpg',
            'Images/gallery/17/17-2.jpg',
            'Images/gallery/17/17-3.jpg',
            'Images/gallery/17/17-4.jpg'
        ]
    },
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
    videoElement: null,
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

        if (this.photoContainer && !this.videoElement) {
            this.videoElement = document.createElement('video');
            this.videoElement.className = 'album-main-video';
            this.videoElement.controls = true;
            this.videoElement.preload = 'metadata';
            this.videoElement.playsInline = true;
            this.videoElement.setAttribute('webkit-playsinline', 'true');
            this.videoElement.controlsList = 'nodownload';
            this.videoElement.style.display = 'none';
            this.videoElement.setAttribute('aria-label', 'Album video player');
            this.photoContainer.insertBefore(this.videoElement, this.photoContainer.firstChild);
        }

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
                           e.target === this.videoElement ||
                           e.target.closest('.album-main-video') ||
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
        this.videoElement?.addEventListener('click', (e) => {
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
                           e.target === this.videoElement ||
                           e.target.closest('.album-main-video') ||
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
                           e.target === this.videoElement ||
                           e.target.closest('.album-main-video') ||
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
        if (this.videoElement) {
            this.videoElement.pause();
            this.videoElement.removeAttribute('src');
            this.videoElement.load();
            this.videoElement.style.display = 'none';
        }
        if (this.mainPhoto) {
            this.mainPhoto.style.display = 'block';
            this.mainPhoto.style.opacity = '1';
        }
        this.currentIndex = 0;
        this.currentAlbum = null;
        this.photos = [];
    },

    showPhoto(index) {
        if (index < 0 || index >= this.photos.length) return;

        this.currentIndex = index;
        const mediaItem = this.photos[index];
        const media = (typeof mediaItem === 'object' && mediaItem !== null)
            ? mediaItem
            : { type: 'image', src: mediaItem };
        const mediaType = media.type || 'image';
        const mediaSrc = media.src;
        const mediaAlt = media.alt || `Photo ${index + 1} of ${this.photos.length}`;
        const mediaPoster = media.poster;

        // Show loader
        const loader = this.modal.querySelector('.album-photo-loader');
        if (loader) loader.style.display = 'flex';

        if (mediaType === 'video' && this.videoElement) {
            // Hide image while video is active
            if (this.mainPhoto) {
                this.mainPhoto.style.opacity = '0';
                this.mainPhoto.style.display = 'none';
            }

            // Prepare video element
            this.videoElement.style.display = 'block';
            this.videoElement.style.opacity = '0';
            this.videoElement.pause();

            const handleLoadedData = () => {
                this.videoElement.removeEventListener('loadeddata', handleLoadedData);
                this.videoElement.currentTime = 0;
                this.videoElement.pause();
                this.videoElement.style.opacity = '1';
                if (loader) loader.style.display = 'none';
            };

            this.videoElement.addEventListener('loadeddata', handleLoadedData);
            this.videoElement.src = mediaSrc;
            this.videoElement.removeAttribute('poster');
            this.videoElement.load();
        } else {
            // Ensure video element is reset/hidden
            if (this.videoElement) {
                this.videoElement.pause();
                this.videoElement.removeAttribute('src');
                this.videoElement.load();
                this.videoElement.style.display = 'none';
            }

            if (this.mainPhoto) {
                this.mainPhoto.style.display = 'block';
                this.mainPhoto.style.opacity = '0';
                this.mainPhoto.style.transition = 'opacity 0.3s ease';

                const img = new Image();
                img.onload = () => {
                    this.mainPhoto.src = mediaSrc;
                    this.mainPhoto.alt = mediaAlt;
                    this.mainPhoto.style.opacity = '1';
                    if (loader) loader.style.display = 'none';
                };
                img.onerror = () => {
                    if (loader) loader.style.display = 'none';
                    this.mainPhoto.style.opacity = '1';
                    console.error('Failed to load image:', mediaSrc);
                };
                img.src = mediaSrc;
            } else if (loader) {
                loader.style.display = 'none';
            }
        }

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

            const mediaData = (typeof photo === 'object' && photo !== null) ? photo : null;
            const mediaType = mediaData?.type || 'image';
            const isVideo = mediaType === 'video';
            const thumbnailSrc = mediaData
                ? (isVideo ? mediaData.src : (mediaData.thumbnail || mediaData.poster || mediaData.src))
                : photo;

            if (index === this.currentIndex) {
                thumb.classList.add('active');
            }
            if (mediaType === 'video') {
                thumb.classList.add('is-video');
            }

            if (mediaType === 'video') {
                const videoThumb = document.createElement('video');
                videoThumb.src = thumbnailSrc || '';
                videoThumb.muted = true;
                videoThumb.playsInline = true;
                videoThumb.preload = 'metadata';
                videoThumb.setAttribute('aria-hidden', 'true');
                videoThumb.className = 'album-thumbnail-media';
                videoThumb.controls = false;
                videoThumb.loop = false;
                videoThumb.addEventListener('loadeddata', () => {
                    videoThumb.currentTime = 0;
                    videoThumb.pause();
                });
                thumb.appendChild(videoThumb);

                const badge = document.createElement('span');
                badge.className = 'album-thumbnail-badge';
                badge.setAttribute('aria-label', 'Video thumbnail');
                badge.innerHTML = '<span class="material-icons">play_arrow</span>';
                thumb.appendChild(badge);
            } else {
                const img = document.createElement('img');
                img.src = thumbnailSrc;
                img.alt = `Thumbnail ${index + 1}`;
                img.loading = 'lazy';
                thumb.appendChild(img);
            }

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

