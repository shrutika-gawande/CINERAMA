# 🎬 Cinerama — Movie Listing & Rating App

A full-stack MERN application for browsing, searching, and rating movies using real data from the **OMDB API**. Features a cinematic dark UI, anonymous star ratings persisted in MongoDB, and a RESTful Express backend.

---

## 📸 Features

- 🎥 **Real Movie Data** — Fetches live data from OMDB API (titles, posters, plots, cast, ratings, awards)
- ⭐ **Star Rating System** — Rate any movie 1–5 stars; community average updates in real-time
- 🔍 **Search** — Full-text movie search powered by OMDB with pagination
- 🎭 **Genre Browsing** — Browse by Action, Drama, Sci-Fi, Crime, Romance, Animation, and more
- 📄 **Movie Detail Pages** — Full movie info including cast, director, runtime, awards, box office
- 💾 **MongoDB Caching** — Fetched movies are cached in MongoDB to reduce API calls
- 📱 **Responsive Design** — Works across mobile, tablet, and desktop
- 🚦 **Rate Limiting** — Built-in API rate limiting to prevent abuse

---

## 🗂️ Project Structure

```
cinerama/
├── package.json              # Root scripts (run both server + client)
│
├── server/                   # Express + MongoDB backend
│   ├── index.js              # App entry point
│   ├── .env.example          # Environment variable template
│   ├── models/
│   │   ├── Movie.js          # Movie schema (cached OMDB data + ratings)
│   │   └── Rating.js         # Per-session ratings
│   ├── controllers/
│   │   ├── movieController.js  # OMDB fetch, search, popular, genre
│   │   └── ratingController.js # Submit & retrieve ratings
│   └── routes/
│       ├── movieRoutes.js
│       └── ratingRoutes.js
│
└── client/                   # React frontend
    ├── public/index.html
    └── src/
        ├── App.jsx           # Router + layout
        ├── App.css           # Global styles (cinematic dark theme)
        ├── index.js          # React entry point
        ├── context/
        │   └── MovieContext.jsx  # Global ratings state
        ├── components/
        │   ├── Navbar.jsx        # Sticky header with search
        │   ├── MovieCard.jsx     # Grid card with inline rating
        │   └── StarRating.jsx    # Reusable star rating component
        ├── pages/
        │   ├── Home.jsx          # Popular movies grid
        │   ├── Search.jsx        # Search results with pagination
        │   └── MovieDetail.jsx   # Full movie detail page
        └── utils/
            ├── api.js            # Axios API client
            └── session.js        # Anonymous session management
```

---

## ⚙️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, React Router v6           |
| Styling    | Custom CSS (Playfair Display + Bebas Neue) |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB + Mongoose ODM              |
| Movie Data | OMDB API (omdbapi.com)              |
| HTTP       | Axios (client + server)             |
| Dev Tools  | Nodemon, Concurrently               |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ — [nodejs.org](https://nodejs.org)
- **MongoDB** — running locally or a [MongoDB Atlas](https://www.mongodb.com/atlas) URI
- **OMDB API Key** — free at [omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cinerama.git
cd cinerama
```

---

### 2. Configure Environment Variables

**Server:**
```bash
cp server/.env.example server/.env
```

Edit `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/cinerama
OMDB_API_KEY=your_actual_omdb_key_here
CLIENT_URL=http://localhost:3000
```

**Client:**
```bash
cp client/.env.example client/.env
```

Edit `client/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

### 3. Install Dependencies

```bash
# Install root + both server and client dependencies
npm install
npm run install:all
```

---

### 4. Run the App

```bash
# Run both server (port 5000) and client (port 3000) together
npm run dev
```

Or separately:
```bash
# Terminal 1 — Backend
npm run start:server

# Terminal 2 — Frontend
npm run start:client
```

Open **http://localhost:3000** in your browser.

---

## 🌐 API Endpoints

### Movies

| Method | Endpoint                        | Description                        |
|--------|---------------------------------|------------------------------------|
| GET    | `/api/movies/popular`           | Fetch 12 curated popular movies    |
| GET    | `/api/movies/search?q=&page=`   | Search movies via OMDB             |
| GET    | `/api/movies/genre?genre=&page=`| Browse movies by genre             |
| GET    | `/api/movies/:imdbID`           | Get full movie details             |

### Ratings

| Method | Endpoint                          | Description                        |
|--------|-----------------------------------|------------------------------------|
| POST   | `/api/ratings`                    | Submit a rating `{imdbID, rating, sessionId}` |
| GET    | `/api/ratings/:imdbID?sessionId=` | Get ratings for a movie            |
| GET    | `/api/ratings/session/:sessionId` | Get all ratings for a session      |

### Health

| Method | Endpoint        | Description      |
|--------|-----------------|------------------|
| GET    | `/api/health`   | Server health check |

---

## 🚢 Deployment

### Deploy Backend (Render / Railway)

1. Push code to GitHub
2. Create a new Web Service on [Render](https://render.com) or [Railway](https://railway.app)
3. Set **Root Directory** to `server`
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `npm start`
6. Add environment variables: `MONGO_URI`, `OMDB_API_KEY`, `CLIENT_URL`

### Deploy Frontend (Netlify / Vercel)

1. Set **Root Directory** to `client`
2. Set **Build Command**: `npm run build`
3. Set **Publish Directory**: `build`
4. Add environment variable: `REACT_APP_API_URL=https://your-backend-url/api`

### Deploy Database (MongoDB Atlas)

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Add a database user
3. Whitelist `0.0.0.0/0` in Network Access
4. Copy the connection string to your `MONGO_URI` env variable

---

## 🔑 Getting Your OMDB API Key

1. Go to **[omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)**
2. Select **Free** (1,000 daily requests)
3. Enter your email and submit
4. Check your email and click the activation link
5. Copy your key into `server/.env` as `OMDB_API_KEY`

---

## 📊 Evaluation Criteria Coverage

| Criterion              | Implementation                                               |
|------------------------|--------------------------------------------------------------|
| **Design Quality (25%)** | Cinematic dark luxury UI, Playfair Display + Bebas Neue fonts, film grain, gold accents, hover effects |
| **Functionality (25%)** | Real OMDB data, star rating system, search, genre filter, pagination, detail pages |
| **Code Quality (20%)**  | MVC architecture, Mongoose models, React Context, reusable components, error handling |
| **GitHub Usage (15%)**  | Structured commits, `.gitignore`, clear project organization |
| **Presentation (15%)** | Deployable on Vercel + Render + MongoDB Atlas                |

---

## 🧩 Optional Enhancements (Ideas)

- Add a **watchlist** feature using localStorage
- Integrate **React Query** for smarter data fetching and caching
- Add **JWT authentication** for user accounts
- Show **"Now Playing"** using TMDB API for richer data
- Add **trailer modal** using YouTube API

---

## 📝 License

MIT © 2025 Cinerama. Built for internship project demonstration.
