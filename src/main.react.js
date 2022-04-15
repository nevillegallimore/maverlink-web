// import external dependencies
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import internal dependencies
import { Footer } from '@self/components/footer';
import { Header } from '@self/components/header';
import { LandingPage } from '@self/pages/landing-page';
import { SignUpPage } from '@self/pages/sign-up-page';
import { VerifyEmailPage } from './pages/verify-email-page';

////////////////////////////////////////////////////////////////////////////////////////////////////

const Application = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />

                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/verify-email" element={<VerifyEmailPage />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

////////////////////////////////////////////////////////////////////////////////////////////////////

const root = createRoot(document.getElementById('root'));
root.render(<Application />);
