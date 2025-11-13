// Services Configuration - Modular and Easy to Modify
// Add, remove, or modify services by editing this file

const SERVICES_CONFIG = {
    'residential-landscaping': {
        id: 'residential-landscaping',
        title: 'Residential Landscaping',
        icon: 'home',
        description: 'Design, installation, and ongoing care for your home\'s outdoor spaces. Lawns, plantings, mulch, edging, and seasonal cleanups.',
        backgroundImage: 'https://images.unsplash.com/photo-1560185008-b033106af2a9?w=400&h=300&fit=crop',
        altText: 'Residential Landscaping',
        galleryPage: 'gallery-residential.html',
        features: [
            'Landscape Design',
            'Plantings & Mulch',
            'Edging & Bed Maintenance',
            'Seasonal Cleanups',
            'Sod Installation'
        ]
    },
    'commercial-landscaping': {
        id: 'commercial-landscaping',
        title: 'Commercial Landscaping',
        icon: 'business',
        description: 'Grounds maintenance, plantings, and snow removal planning for businesses, HOAs, and multi-unit properties.',
        backgroundImage: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?w=400&h=300&fit=crop',
        altText: 'Commercial Landscaping',
        galleryPage: 'gallery-commercial.html',
        features: [
            'Grounds Maintenance',
            'Seasonal Color & Plantings',
            'Shrub & Tree Care',
            'Snow Removal Planning',
            'Irrigation Coordination'
        ]
    },
    'lawn-care': {
        id: 'lawn-care',
        title: 'Lawn Care & Maintenance',
        icon: 'content_cut',
        description: 'Weekly mowing, edging, trimming, fertilization, aeration, and seasonal cleanups to keep your yard pristine.',
        backgroundImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&h=300&fit=crop',
        altText: 'Lawn Care',
        galleryPage: 'gallery-repairs.html',
        features: [
            'Weekly Mowing',
            'Edging & Trimming',
            'Fertilization & Weed Control',
            'Aeration & Overseeding',
            'Seasonal Cleanups'
        ]
    },
    'hardscaping': {
        id: 'hardscaping',
        title: 'Hardscaping & Pool Decks',
        icon: 'landscape',
        description: 'Pool decks, walkways, retaining walls, and stonework to elevate curb appeal and functionality.',
        backgroundImage: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop',
        altText: 'Hardscaping & Pool Decks',
        galleryPage: 'gallery-gutters.html',
        features: [
            'Paver Pool Decks & Walkways',
            'Retaining Walls',
            'Stone & Rock Features',
            'Steps & Borders',
            'Drainage Solutions'
        ]
    }
};

// Function to get all services
function getAllServices() {
    return Object.values(SERVICES_CONFIG);
}

// Function to get a specific service by ID
function getServiceById(serviceId) {
    return SERVICES_CONFIG[serviceId];
}

// Function to add a new service
function addService(serviceId, serviceData) {
    SERVICES_CONFIG[serviceId] = {
        id: serviceId,
        ...serviceData
    };
}

// Function to remove a service
function removeService(serviceId) {
    if (SERVICES_CONFIG[serviceId]) {
        delete SERVICES_CONFIG[serviceId];
        return true;
    }
    return false;
}

// Function to update a service
function updateService(serviceId, updates) {
    if (SERVICES_CONFIG[serviceId]) {
        SERVICES_CONFIG[serviceId] = {
            ...SERVICES_CONFIG[serviceId],
            ...updates
        };
        return true;
    }
    return false;
}

// Function to get service names for mobile slider labels
function getServiceNames() {
    return Object.values(SERVICES_CONFIG).map(service => service.title);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SERVICES_CONFIG,
        getAllServices,
        getServiceById,
        addService,
        removeService,
        updateService,
        getServiceNames
    };
}
