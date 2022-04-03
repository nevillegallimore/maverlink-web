// import external dependencies
import React from 'react';
import { createRoot } from "react-dom/client";

// import internal dependencies
import { Footer } from '@self/components/footer';
import { Header } from '@self/components/header';
import { LandingPage } from '@self/pages/landing-page';

////////////////////////////////////////////////////////////////////////////////////////////////////

const Application = () => {
    return (
        <div className="container">
            <Header />

            <LandingPage />

            <Footer />
        </div>
    );
};

////////////////////////////////////////////////////////////////////////////////////////////////////

const root = createRoot(document.getElementById('root'));
root.render(<Application />);
