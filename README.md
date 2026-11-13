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
=======
o	Project title and detailed overview.

# Disney Explorer

A responsive, client-side React app for discovering Disney characters and their appearances. It uses the community-maintained [Disney API](https://disneyapi.dev/) to load character details and artwork, search by name, filter by appearance, and build a personal favorites list.

> This is an unofficial student project. The Disney API is community maintained and is not an official Disney service.

The visual theme uses a hot-magenta-to-deep-burgundy gradient, soft blush page surround, and crisp white accents inspired by the provided branding reference.

## Features

- Explore a cinematic, API-powered character spotlight and browse characters in a responsive card grid.
- Search for characters by name from the always-visible header search bar; results are fetched from the API as you type.
- Filter characters to only those with films, TV shows, video games, or park attractions, then narrow the results by an optional title.
- Open a character detail page with films, shows, games, attractions, allies, and enemies.
- Save and remove favorites; they persist in browser local storage.
- Client-side routes: `/`, `/characters`, `/character/:id`, and `/favorites`.
- Responsive desktop and mobile layouts with complete character artwork fitted inside cards, quick navigation, pagination, accessible controls, loading/empty/error states, and missing-image fallbacks.

## Technology

- React 19 and JavaScript ES modules
- React Router
- Vite
- Fetch API and `AbortController`
- Disney API (`https://api.disneyapi.dev`)
- Browser local storage

## Getting started

### Requirements

- Node.js 20.19+ or 22.12+
- npm
- Internet access to reach the Disney API and character image hosts



o Setup & installation steps (e.g., npm install, npm run dev).
### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

```text
src/
├── api/                 # Disney API requests and response validation
├── components/          # App shell, search, explorer, cards, pagination, and icons
├── data/                # Character fields, appearance filters, and formatters
├── hooks/               # Asynchronous character list hook
├── pages/               # Home, character details, and favorites views
├── state/               # Persistent favorites context
├── App.jsx              # Client-side route configuration
├── App.css              # Application and responsive styles
├── index.css            # Global styles and design tokens
└── main.jsx             # React entry point


```
o	Links to the external API(s) used for all url api.  and	Environment variable setup instructions (.env setup for API keys). is for separated filtering like character, page, films and more
## Disney API

The app uses the public, community-maintained Disney API without an API key:

Base URL: [`https://api.disneyapi.dev`](https://api.disneyapi.dev)

- [`https://api.disneyapi.dev/character?page=1&pageSize=12`](https://api.disneyapi.dev/character?page=1&pageSize=12) — paginated character collection
- [`https://api.disneyapi.dev/character?name=Mickey%20Mouse`](https://api.disneyapi.dev/character?name=Mickey%20Mouse) — search character names
- [`https://api.disneyapi.dev/character?films=`](https://api.disneyapi.dev/character?films=) — return only characters with film appearances
- [`https://api.disneyapi.dev/character?films=Frozen`](https://api.disneyapi.dev/character?films=Frozen) — filter by a film
- [`https://api.disneyapi.dev/character?tvShows=Series`](https://api.disneyapi.dev/character?tvShows=Series) — filter by a TV show
- [`https://api.disneyapi.dev/character?videoGames=`](https://api.disneyapi.dev/character?videoGames=) — return only characters with video game appearances
- [`https://api.disneyapi.dev/character?parkAttractions=`](https://api.disneyapi.dev/character?parkAttractions=) — return only characters with park attraction appearances
- `https://api.disneyapi.dev/character/:id` — character details (replace `:id` with a character ID)

Character images are provided by the API in its `imageUrl` field. Some records may not include an image, and external image hosts can occasionally be unavailable; the app displays a designed fallback in those cases. The API's primary resource is characters and their related appearances, not a standalone movie catalog.




o	Team member contributions breakdown.
## [Dominay] — researched and selected the Disney API. and [Roland] — designed the pages and built the favorites feature.




## GitHub collaboration workflow

For a pair project, keep `main` as the stable branch and work on separate feature branches. Do not push project work directly to `main`.

1. Create a focused branch, for example `feature/disney-api` or `feature/favorites`.
2. Commit with descriptive conventional prefixes such as `feat: add character gallery` or `fix: handle unavailable images`.
3. Push your branch and open a pull request targeting `main`.
4. Ask your partner to review the change, address feedback, then merge the pull request.
5. Pull the updated `main` before starting the next feature branch.

## Data and attribution

Character data is fetched at runtime from the community-maintained [Disney API](https://disneyapi.dev/); artwork is served from the image URLs supplied by that API. Favorites are saved in this browser only and are not synchronized between devices. Disney characters and related properties belong to their respective rights holders.



## The API functions use async/await for fetch requests in src/api/disneyApi.js.
The character list shows loading and error states, debounces search requests, and cancels outdated requests in useCharacters.js.
The character detail page also fetches asynchronously and displays loading/error states.


## Client-side routing is implemented with React Router. The app has these routes in App.jsx:
/ and /characters — browse and search characters
/character/:id — view a character’s details
/favorites — view saved favorites
 68974d738aefc7ff727400bdda49f320adebaa5b
