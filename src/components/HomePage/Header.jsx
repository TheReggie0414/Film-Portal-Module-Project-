import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/Homepage';
import { Famousactors } from '../../pages/Famousactors/Famousactors';
import { TopFilms } from '../../pages/TopFilms/TopFilms';
import { Layout } from '../../components/Layout';
import { Napoleon } from '../../pages/PagesFilms/Napoleon';
import { Wish } from '../../pages/PagesFilms/Wish';
import { Oppenheimer } from '../../pages/PagesFilms/Oppenheimer';
import { Fall } from '../../pages/PagesFilms/Fall';
import { Avatar } from '../../pages/PagesFilms/Avatar';
import { Marvels } from '../../pages/PagesFilms/Marvels';
import { Wonka } from '../../pages/PagesFilms/Wonka';
import { Silentnight } from '../../pages/PagesFilms/Silentnight';
import { Thanksgiving } from '../../pages/PagesFilms/Thanksgiving';
import './Header.css';

const Header = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='Famousactors' element={<Famousactors />} />
                <Route path='topFilms' element={<TopFilms />} />
                <Route path='Napoleon' element={<Napoleon />} />
                <Route path='Wish' element={<Wish />} />
                <Route path='Oppenheimer' element={<Oppenheimer />} />
                <Route path='Fall' element={<Fall />} />
                <Route path='Avatar' element={<Avatar />} />
                <Route path='Marvels' element={<Marvels />} />
                <Route path='Wonka' element={<Wonka />} />
                <Route path='Silentnight' element={<Silentnight />} />
                <Route path='Thanksgiving' element={<Thanksgiving />} />
            </Route>
        </Routes>
    );
}

export { Header };