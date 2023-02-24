import { NavLink } from "react-router-dom"

export const Menu = () => {

    const isOnActive = 'active';


    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <NavLink
                    className='navbar-brand'
                    to='/'
                    activeClassName={isOnActive}
                > Integration.net</NavLink>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink
                                className='nav-link active'
                                aria-current='page'
                                to='/genders'
                                activeClassName={isOnActive}
                            >
                                Genders
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                className='nav-link active'
                                aria-current='page'
                                to='/movies'
                                activeClassName={isOnActive}
                            >
                                Filter movies
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                className='nav-link active'
                                aria-current='page'
                                to='/actors'
                                activeClassName={isOnActive}
                            >
                                Actors
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                className='nav-link active'
                                aria-current='page'
                                to='/cinemas'
                                activeClassName={isOnActive}
                            >
                                Cinemas
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                className='nav-link active'
                                aria-current='page'
                                to='/movies'
                                activeClassName={isOnActive}
                            >
                                Create Movies
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}
