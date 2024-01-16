import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Famousactors'>Famous Actors</NavLink>
                <NavLink to='/TopFilms'>Top Films</NavLink>
            </header>

            <Outlet />
        </>
    )
}

export { Layout };