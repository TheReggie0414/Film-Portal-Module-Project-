import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to='/'>Головна</NavLink>
                <NavLink to='/News'>Новини</NavLink>
                <NavLink to='/TopFilms'>Топ Фiльмiв</NavLink>
            </header>

            <Outlet />
        </>
    )
}

export { Layout }