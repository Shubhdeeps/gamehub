import './assets/css/stylesheet.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard, Login, SignupPage, SingleGame, PlatformPage, TagGames, AllGames, GenreGames, UserAddedGames } from './pages';
import { getUsername } from './service/user.services';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    getUsername()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/signup' element={<SignupPage />} />
        <Route path='/games' element={<AllGames />} />
        <Route path='/games/:id' element={<SingleGame />} />
        <Route path='/games/users/:name' element={<UserAddedGames />} />
        <Route path='/platforms/:platform' element={<PlatformPage />} />
        <Route path='/tags/:tag' element={<TagGames />} />
        <Route path='/genres/:genre' element={<GenreGames />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
