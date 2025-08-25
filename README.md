# Clara Fashion Portfolio

A modern, full-stack fashion portfolio web application built with React, TypeScript, Express.js, and Tailwind CSS. Showcase collections, engage users, and manage content with a professional, scalable solution.

## Features
- Responsive landing page and navigation
- Dynamic product and collection display
- Newsletter subscription
- Contact and About pages
- Modular UI components
- RESTful API backend
- PostgreSQL database integration (via Drizzle ORM)
- Vite-powered development and build
- Modern styling with Tailwind CSS

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL (Drizzle ORM)
- **Other:** PostCSS, esbuild

## Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm or yarn
- PostgreSQL (for production)

### Installation
```bash
# Clone the repository
git clone https://github.com/gabrielANASH/ClaraFashionPortfolio.git
cd ClaraFashionPortfolio

# Install dependencies
npm install
```

### Development
```bash
# Start the development server
npm run dev
```
The app will be available at `http://localhost:5000`.

### Build
```bash
npm run build
```

### Environment Variables
Set the following environment variables as needed:
- `PORT` (default: 5000)
- Database connection string (see `drizzle.config.ts`)

## Project Structure
```
client/         # Frontend source code
server/         # Backend API and server logic
shared/         # Shared schema and types
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Author
Gabriel Anash

---

For questions or support, please contact [Gabriel Anash](mailto:your-email@example.com).
