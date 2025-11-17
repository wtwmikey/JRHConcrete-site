// ============================================================================
// WORK AREAS IMPORT UTILITY
// ============================================================================
// Utility functions to import and work with "Our Work" gallery items data

/**
 * Import all work areas from the gallery section
 * @returns {Array} Array of work area objects
 */
function importWorkAreas() {
    const galleryItems = document.querySelectorAll('#gallery .gallery-item[data-album]');
    const workAreas = [];

    galleryItems.forEach(item => {
        workAreas.push({
            albumId: item.getAttribute('data-album'),
            title: item.getAttribute('data-title'),
            image: item.getAttribute('data-image'),
            alt: item.getAttribute('data-alt'),
            href: item.getAttribute('href'),
            element: item // Reference to the DOM element
        });
    });

    return workAreas;
}

/**
 * Get a specific work area by album ID
 * @param {string} albumId - The album ID to search for
 * @returns {Object|null} Work area object or null if not found
 */
function getWorkAreaById(albumId) {
    const item = document.querySelector(`#gallery .gallery-item[data-album="${albumId}"]`);
    if (!item) return null;

    return {
        albumId: item.getAttribute('data-album'),
        title: item.getAttribute('data-title'),
        image: item.getAttribute('data-image'),
        alt: item.getAttribute('data-alt'),
        href: item.getAttribute('href'),
        element: item
    };
}

/**
 * Get a specific work area by title
 * @param {string} title - The title to search for
 * @returns {Object|null} Work area object or null if not found
 */
function getWorkAreaByTitle(title) {
    const items = document.querySelectorAll('#gallery .gallery-item[data-album]');
    
    for (const item of items) {
        if (item.getAttribute('data-title') === title) {
            return {
                albumId: item.getAttribute('data-album'),
                title: item.getAttribute('data-title'),
                image: item.getAttribute('data-image'),
                alt: item.getAttribute('data-alt'),
                href: item.getAttribute('href'),
                element: item
            };
        }
    }
    
    return null;
}

/**
 * Export work areas as JSON string
 * @returns {string} JSON string representation of all work areas
 */
function exportWorkAreasAsJSON() {
    const workAreas = importWorkAreas();
    // Remove the element reference before stringifying (can't be serialized)
    const serializable = workAreas.map(area => ({
        albumId: area.albumId,
        title: area.title,
        image: area.image,
        alt: area.alt,
        href: area.href
    }));
    return JSON.stringify(serializable, null, 2);
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        importWorkAreas,
        getWorkAreaById,
        getWorkAreaByTitle,
        exportWorkAreasAsJSON
    };
}

