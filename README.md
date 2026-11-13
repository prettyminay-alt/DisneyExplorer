# Disney Explorer

Disney Explorer is a responsive, client-side React application that allows users to explore Disney characters and their appearances using the public Disney API.

Users can search for characters, filter them by their appearances in movies, TV shows, video games, and park attractions, view character details, and save their favorite characters.

> This is an unofficial student project. It uses a community-maintained Disney API and is not affiliated with Disney.

## Features

- Browse Disney characters using a responsive character gallery.
- Search characters by name.
- Filter characters by movies, TV shows, video games, and park attractions.
- View detailed information about individual characters.
- Navigate between pages using React Router.
- Add and remove characters from favorites.
- Save favorite characters using browser localStorage.
- Navigate through character results using pagination.
- Display loading, error, and empty-result states.
- Responsive layout for desktop and mobile devices.

## Technologies Used

- React 19
- JavaScript
- Vite
- React Router
- Fetch API
- CSS
- Browser localStorage
- Disney API

## External API

This project uses the community-maintained Disney API.

API Website: https://disneyapi.dev/

API Base URL: https://api.disneyapi.dev

Example endpoints:

- Get characters: https://api.disneyapi.dev/character
- Get paginated characters: https://api.disneyapi.dev/character?page=1&pageSize=12
- Search characters: https://api.disneyapi.dev/character?name=Mickey%20Mouse
- Filter by films: https://api.disneyapi.dev/character?films=
- Filter by TV shows: https://api.disneyapi.dev/character?tvShows=
- Filter by video games: https://api.disneyapi.dev/character?videoGames=
- Filter by park attractions: https://api.disneyapi.dev/character?parkAttractions=

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Internet connection

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd DisneyExplorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Build the application

```bash
npm run build
```

## Environment Variables

The current version uses a public API that does not require an API key. Therefore, no `.env` file or additional environment variable configuration is needed.

## Project Structure

```text
src/
├── api/
├── components/
├── data/
├── hooks/
├── pages/
├── state/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/characters` | Character explorer |
| `/character/:id` | Character details |
| `/favorites` | Saved favorite characters |

## Team Contributions

| Team Member | Contribution |
|---|---|
| YOUR NAME | Describe your actual contribution |
| PARTNER'S NAME | Describe your partner's actual contribution |

## GitHub Collaboration

The project uses Git and GitHub for collaborative development.

Team members work on separate feature branches and submit changes through Pull Requests.

Example branch names:

- `feature/search-bar`
- `feature/favorites`
- `docs/readme-improvements`

Commit messages follow descriptive prefixes such as:

- `feat:` for new features
- `fix:` for bug fixes
- `style:` for styling changes
- `docs:` for documentation updates

## Disclaimer

Disney Explorer is an educational project developed for Web Systems and Technologies. Disney characters, names, and related properties belong to their respective owners.