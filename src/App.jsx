import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import AppShell from './components/AppShell.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ItemPage from './pages/ItemPage.jsx'
import { FavoritesProvider } from './state/FavoritesContext.jsx'
import './App.css'

function CharacterRoute() {
  const { id } = useParams()
  return <ItemPage key={id} />
}

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="characters" element={<HomePage />} />
            <Route path="character/:id" element={<CharacterRoute />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  )
}

export default App
