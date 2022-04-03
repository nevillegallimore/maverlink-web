// import external dependencies
import React from 'react';

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
                                src="assets/icons/brand-logo-03.svg"
                                alt="Maverlink Brand Logo"
                            />
                        </a>
                    </div>
                    <div className="header-item">
                        <h1 className="headline">MAVERLINK</h1>
                    </div>
                    <div className="header-item">
                        <div className="action-links">
                            <ButtonLink href="./register" text="Join" type="secondary" />
                            <ButtonLink href="#" text="Sign In" type="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.displayName = 'Header';

////////////////////////////////////////////////////////////////////////////////////////////////////
