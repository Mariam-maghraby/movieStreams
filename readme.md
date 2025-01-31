# Full-Stack Movie Search and Favorites App

This application is a full-stack movie search and favorites management system that integrates with the OMDb API. The frontend is built using React with TypeScript, and the backend is powered by NestJS. The app allows users to search for movies, view details, and manage a list of their favorite movies, stored in a PostgreSQL database using Prisma.

## Features

### Frontend (React with TypeScript)
1. **Movie Search Page**:
   - A search bar to fetch movie data from the OMDb API.
   - Display search results in a responsive grid or card layout.
   - Each result shows the following details:
     - Movie title
     - Poster image
     - Year of release

2. **Favorites Management**:
   - A button to save movies to the favorites list.
   - Display a separate page for the list of favorite movies.
   - Allow users to edit or delete movies directly from the favorites list.

3. **TypeScript Practices**:
   - Strong typing for props, state, and API responses.
   - Reusable and modular components.

### Backend (NestJS)
1. **API Integration**:
   - Communicate with the OMDb API to fetch movie details based on a search query.
   - A service to handle API communication.

2. **CRUD Operations**:
   - Endpoints to:
     - Save a favorite movie to the database.
     - Retrieve all favorite movies.
     - Update movie details in the favorites list.
     - Delete a favorite movie.

3. **Database**:
   - Use PostgreSQL for data storage.
   - Prisma ORM to manage the database schema and queries.

4. **Error Handling**:
   - Gracefully handle API call failures or database issues.
   - Provide meaningful error messages in API responses.

## Installation and Setup

### Frontend (React with TypeScript)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/movie-app-frontend.git
   cd movie-app-frontend
Install dependencies:


npm install
Start the development server:

bash
Copy
Edit
npm run dev
Backend (NestJS)
Clone the backend repository:

bash
Copy
Edit
git clone https://github.com/your-repo/movie-app-backend.git
cd movie-app-backend
Install dependencies:

bash
Copy
Edit
npm install
Setup the database:

Ensure you have PostgreSQL installed and running.
Update the .env file with your PostgreSQL credentials.
Run database migrations:

bash
Copy
Edit
npm run migrate
Start the backend server:

bash
Copy
Edit
npm run start:dev
Environment Variables
Create a .env file in the backend root with the following variables:
makefile

### Backend
DATABASE_URL=your_postgresql_database_url
OMDB_API_KEY=your_omdb_api_key
API Endpoints
GET /movies/search?q={query} - Search for movies based on the query.
POST /favorites - Add a movie to the favorites list.
GET /favorites - Retrieve all favorite movies.
PUT /favorites/{id} - Update a favorite movie's details.
DELETE /favorites/{id} - 