import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to='/'>Головна</NavLink>
                <NavLink to='/Famousactors'>Вiдомi актори</NavLink>
                <NavLink to='/TopFilms'>Вiдомi фiльми</NavLink>
            </header>

            <Outlet />
        </>
    )
}

export { Layout }