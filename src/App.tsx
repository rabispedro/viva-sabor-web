import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { LoginPage } from './pages/Login'
import { SearchPage } from './pages/Search'
import { RestaurantPage } from './pages/Restaurant'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/restaurant/:id' element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
