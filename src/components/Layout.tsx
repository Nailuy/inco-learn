import { Outlet, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';
import BuiltBy from './BuiltBy';

function Layout() {
    return (
        <div className="app-layout">
            <header className="header">
                <div className="container header-content">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="INCO" className="logo-icon" />
                    </NavLink>

                    <nav className="nav-links">
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Home
                        </NavLink>
                        <NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Courses
                        </NavLink>
                        <ThemeToggle />
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <p className="footer-text">
                        IncoLearn - Educational platform for{' '}
                        <a href="https://www.inco.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            Inco
                        </a>
                        {' '}| by EchoCircle
                    </p>
                </div>
            </footer>

            <BuiltBy />
        </div>
    );
}

export default Layout;
