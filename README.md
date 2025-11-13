# JD Landcare Website

A modern, responsive landscaping website for JD Landcare featuring a unified services and gallery system.

## Features

- **Unified Services & Gallery**: Combined services section with background images and clickable cards
- **Modular Design**: Easy to add, remove, or modify services
- **Responsive Design**: Optimized for all devices including mobile, tablet, and TV
- **Touch-Friendly**: Optimized for mobile devices with swipe gestures
- **Accessibility**: TV-friendly navigation and keyboard support
- **Floating Chat**: Quick quote request system
- **Modern UI**: Beautiful animations and hover effects

## Services System

The website now features a unified services section that combines both service information and visual examples. Each service card:

- Displays a background image related to the service
- Shows the service description overlaid on the image
- Includes a "View Gallery" button that appears on hover
- Links to dedicated gallery pages for each service

### Current Services

1. **Residential Landscaping** - Design, plantings, mulch, edging, seasonal cleanups
2. **Commercial Landscaping** - Grounds maintenance for businesses and HOAs
3. **Lawn Care & Maintenance** - Weekly mowing, edging, fertilization, aeration
4. **Hardscaping & Pool Decks** - Pool decks, walkways, retaining walls, stonework

## Modular Configuration

### Adding a New Service

To add a new service, edit `services-config.js`:

```javascript
// Add this to the SERVICES_CONFIG object
'new-service': {
    id: 'new-service',
    title: 'New Service Name',
    icon: 'fas fa-icon-name',
    description: 'Description of the new service...',
    backgroundImage: 'path/to/image.jpg',
    altText: 'Alt text for image',
    galleryPage: 'gallery-new-service.html',
    features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
    ]
}
```

### Removing a Service

To remove a service, simply delete its entry from `services-config.js`:

```javascript
// Remove this line
delete SERVICES_CONFIG['service-to-remove'];
```

### Modifying a Service

To modify an existing service, update its properties in `services-config.js`:

```javascript
// Update service properties
updateService('residential-landscaping', {
    title: 'Updated Title',
    description: 'Updated description...',
    backgroundImage: 'new-image-path.jpg'
});
```

## Gallery Pages

Each service links to a dedicated gallery page. To create a new gallery page:

1. Create a new HTML file (e.g., `gallery-new-service.html`)
2. Use the existing `gallery-residential.html` as a template
3. Update the content and images for your specific service
4. Update the `galleryPage` property in `services-config.js`

## File Structure

```
├── index.html              # Main website page
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript functionality
├── services-config.js      # Services configuration (modular)
├── gallery-residential.html # Sample gallery page
└── README.md               # This file
```

## Customization

### Colors
The main brand color is `#e74c3c` (red). You can change this throughout the CSS by updating the color values.

### Images
Replace the placeholder images in `services-config.js` with your actual service images. Recommended image dimensions:
- Service card backgrounds: 400x300px
- Gallery images: 400x300px
- Hero background: 1920x1080px

### Fonts
The website uses Poppins font family. You can change this in the CSS by updating the `font-family` properties.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile Portrait**: < 768px
- **Mobile Landscape**: 768px - 1023px
- **Tablet**: 1024px - 1366px
- **Desktop**: 1367px - 1919px
- **TV/Large**: 1920px+

## Performance Features

- Lazy loading for images
- Optimized scroll performance
- Touch-friendly interactions
- Reduced motion support for accessibility

## Accessibility Features

- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences
- TV remote navigation support

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Customize the services in `services-config.js`
4. Replace placeholder images with your actual images
5. Update contact information and business details (JD Landcare, (518) 308-9411, Troy, NY)
6. Test on different devices and screen sizes

## Support

For questions or customization help, refer to the code comments or modify the configuration files as needed.

## License

This project is for JD Landcare use. Please ensure you have proper licensing for any third-party assets used.