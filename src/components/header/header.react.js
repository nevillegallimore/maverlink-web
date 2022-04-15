// import external dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// import internal dependencies
import { ButtonLink } from '@self/components/button-link';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const Header = () => {
    return (
        <header className="header">
            <div className="page-width">
                <div className="header-content">
                    <div className="header-item">
                        <a className="brand-link" href="#">
                            <img
                                className="brand-logo"
                                src="/maverlink-web/assets/icons/brand-logo-03.svg"
                                alt="Maverlink Brand Logo"
                            />
                        </a>
                    </div>
                    <div className="header-item">
                        <h1 className="headline">MAVERLINK</h1>
                    </div>
                    <div className="header-item">
                        <div className="action-links">
                            <Link className="button-link button-link--secondary" to="/">Sign In</Link>
                            <Link className="button-link button-link--primary" to="/signup">Join</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.displayName = 'Header';

////////////////////////////////////////////////////////////////////////////////////////////////////
