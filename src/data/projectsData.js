/**
 * Local projects data for the portfolio work samples section.
 * Each project has:
 *  - id: unique identifier
 *  - name: display name for the project
 *  - folderName: the actual folder name in src/assets/
 *  - description: professional description
 *  - githubUrl: GitHub repository URL (placeholder - user will update)
 *  - images: array of imported images from the folder
 */

// --- Static image loaders per folder ---
// require.context MUST use a literal string so Webpack can statically resolve it at build time

const loadAppleImages = () => {
  const context = require.context('../assets/apple', false, /\.(jpe?g|png|gif|svg)$/i);
  return context.keys().map(context);
};

const loadBookstoreImages = () => {
  const context = require.context('../assets/bookstore', false, /\.(jpe?g|png|gif|svg)$/i);
  return context.keys().map(context);
};

const loadBurgerImages = () => {
  const context = require.context('../assets/burger', false, /\.(jpe?g|png|gif|svg)$/i);
  return context.keys().map(context);
};

const loadEcoRideImages = () => {
  const context = require.context('../assets/eco ride design', false, /\.(jpe?g|png|gif|svg)$/i);
  return context.keys().map(context);
};

const loadMovieTicketImages = () => {
  const context = require.context('../assets/movie ticket store', false, /\.(jpe?g|png|gif|svg)$/i);
  return context.keys().map(context);
};

const loadPizzaImages = () => {
  const context = require.context('../assets/pizza', false, /\.(jpe?g|png|gif|svg)$/i);
  return context.keys().map(context);
};

const projectsData = [
  {
    id: 1,
    name: 'Apple Store',
    folderName: 'apple',
    description:
      'A fully responsive e-commerce platform inspired by Apple\'s design philosophy. Built with a modern tech stack featuring smooth animations, a dynamic shopping cart, and seamless product browsing experience. The UI emphasizes minimalism and elegance, mirroring Apple\'s signature aesthetic.',
    githubUrl: 'https://github.com/yourusername/apple-store',
    images: loadAppleImages(),
  },
  {
    id: 2,
    name: 'BookStore',
    folderName: 'bookstore',
    description:
      'An online bookstore platform with a rich catalog management system. Users can browse through various genres, search for books, view detailed descriptions, and manage their reading lists. The interface is designed for an immersive reading-focused experience with clean typography.',
    githubUrl: 'https://github.com/yourusername/bookstore',
    images: loadBookstoreImages(),
  },
  {
    id: 3,
    name: 'Burger House',
    folderName: 'burger',
    description:
      'A vibrant restaurant website for a gourmet burger brand. Features an interactive menu with mouth-watering visuals, online ordering system, table reservation functionality, and location finder. The design uses warm tones and bold typography to reflect the brand\'s energetic personality.',
    githubUrl: 'https://github.com/yourusername/burger-house',
    images: loadBurgerImages(),
  },
  {
    id: 4,
    name: 'Eco Ride Design',
    folderName: 'eco ride design',
    description:
      'A UI/UX design concept for an eco-friendly ride-sharing application. Focuses on sustainable transportation with features like carbon footprint tracking, electric vehicle booking, route optimization, and green rewards system. The design uses nature-inspired colors and smooth micro-interactions.',
    behanceUrl: 'https://github.com/yourusername/eco-ride',
    images: loadEcoRideImages(),
  },
  {
    id: 5,
    name: 'Movie Ticket Store',
    folderName: 'movie ticket store',
    description:
      'A cinema ticket booking platform with real-time seat selection, movie schedules, trailer previews, and secure payment integration. Features an intuitive grid layout for browsing now-showing and upcoming films, with personalized recommendations based on viewing history.',
    githubUrl: 'https://github.com/yourusername/movie-tickets',
    images: loadMovieTicketImages(),
  },
  {
    id: 6,
    name: 'Pizza Restaurant',
    folderName: 'pizza',
    description:
      'A mouth-watering restaurant website for an authentic Italian pizzeria. Includes an interactive pizza builder, online delivery ordering, table booking, and a gallery of freshly baked creations. The warm color palette and rustic design elements capture the essence of traditional Italian dining.',
    githubUrl: 'https://github.com/yourusername/pizza-restaurant',
    images: loadPizzaImages(),
  },
];

export default projectsData;

