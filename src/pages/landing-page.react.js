// import external dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// import internal dependencies
import { ButtonLink } from '@self/components/button-link';
import { Section, LandingSection } from '@self/components/section';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const LandingPage = () => {
    const [errors, setErrors] = useState({});

    const onSubmit = () => {
        const payload = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        };

        if (payload.email && payload.password) {
            setErrors({});
            console.log(payload);
        } else {
            const errors = {};

            if (!payload.email) {
                errors.email = 'Please enter a valid email address.';
            }

            if (!payload.password) {
                errors.password = 'Please enter your password to sign in.'
            }

            setErrors(errors);
        }
    };

    const onSoftSubmit = (event) => {
        if (event && event.key === 'Enter') {
            const payload = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            };

            if (payload.email && payload.password) {
                console.log(payload);
            }
        }
    };

    const getFormContent = () => {
        return (
            <div className="columns">
                <div className="column">
                    <div className="content">
                        <h3 className="title">Welcome to your MAVERICK COMMUNITY</h3>
                        <div className="form">
                            <div className="input-group">
                                <label className="label sr-only" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="input"
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    onKeyDown={onSoftSubmit}
                                    required={true}
                                />
                                {errors.email && <span className="validation">{errors.email}</span>}
                            </div>

                            <div className="input-group">
                                <label className="label sr-only" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className="input"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onKeyDown={onSoftSubmit}
                                    required={true}
                                />
                                {errors.password && (
                                    <span className="validation">{errors.password}</span>
                                )}
                            </div>

                            <div className="input-group">
                                <a className="link" href="#">
                                    Forgot your password?
                                </a>
                            </div>

                            <div className="input-group">
                                <button className="button" onClick={onSubmit}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column no-padding">
                    <img
                        className="illustration"
                        src="/maverlink-web/assets/images/landing-page-illustration-signin.svg"
                        alt=""
                    />
                </div>
            </div>
        );
    };

    const getHeroContent = () => {
        return (
            <div className="content">
                <h2 className="headline">MAVERLINK</h2>
                <h3 className="tagline">The unique community for unique, creative, brave and truly independent maverick people - small business owners &amp; entrepreneurs</h3>
                <p className="text centered">Find and connect with like-minded people all around the world. Share experiences, brainstorm ideas, create collaborations and grow your businesses together!</p>
                <div className="cta">
                    <ButtonLink href="signup" text="Join" type="secondary" />
                </div>
            </div>
        );
    };

    const sections = [
        {
            type: 'default',
            name: 'form',
            content: getFormContent(),
        },
        {
            type: 'default',
            name: 'hero',
            content: getHeroContent(),
        },
        {
            type: 'landing',
            props: {
                alignment: 'left',
                imageSrc: '/maverlink-web/assets/images/landing-page-illustration-find-your-people.png',
                name: 'find-your-people',
                text: 'Find like-minded people in your industry in and beyond your location, from all around the world...',
                title: 'Find YOUR PEOPLE',
            },
        },
        {
            type: 'landing',
            props: {
                alignment: 'right',
                imageSrc: '/maverlink-web/assets/images/landing-page-illustration-share-experiences.png',
                name: 'share-experiences',
                text: 'Join or create your own unique niche communities and share ideas, knowledge, ideas and support each other...',
                title: 'Share EXPERIENCES',
            },
        },
        {
            type: 'landing',
            props: {
                alignment: 'left',
                imageSrc: '/maverlink-web/assets/images/landing-page-illustration-succeed-together.png',
                name: 'succeed-together',
                text: 'Create collaborations, share and learn skills from each other, exchange trade tools and any other useful items...',
                title: 'Succeed TOGETHER',
            },
        },
    ];

    return (
        <main className="page landing-page">
            {sections.map((section) => {
                if (section.type === 'landing') {
                    return (
                        <LandingSection key={section.props.name} {...section.props} />
                    );
                }

                return (
                    <Section key={section.name} name={section.name}>{section.content}</Section>
                );
            })}
        </main>
    );
};

LandingPage.displayName = 'LandingPage';
