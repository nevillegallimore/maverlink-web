// import external dependencies
import React, { useEffect, useState } from 'react';

// import internal dependencies
import { Section } from '@self/components/section';
import { isEmail } from '@self/utils/is-email';
import { isPassword } from '@self/utils/is-password';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const SignUpPage = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        business: '',
        website: '',
        termsOfUse: false,
        city: '',
        country: '',
    });
    const [errors, setErrors] = useState({});
    const [isPasswordMasked, setIsPasswordMasked] = useState(true);

    const togglePasswordMode = () => {
        setIsPasswordMasked(!isPasswordMasked);
    };

    const validateForm = () => {
        let isValid = true;

        for (const prop in form) {
            if (prop === 'termsOfUse') {
                if (!form[prop]) {
                    isValid = false;
                    setErrors((errors) => ({
                        ...errors,
                        termsOfUse: 'To join, you must accept our terms of use.',
                    }));
                }

                continue;
            }

            if (prop === 'email') {
                if (!form[prop]) {
                    isValid = false;
                    setErrors((errors) => ({
                        ...errors,
                        email: 'Please enter your email address.',
                    }));
                } else if (!isEmail(form[prop])) {
                    isValid = false;
                    setErrors((errors) => ({
                        ...errors,
                        email: 'Please enter a valid email address.',
                    }));
                }

                continue;
            }

            if (prop === 'password') {
                if (!form[prop]) {
                    isValid = false;
                    setErrors((errors) => ({
                        ...errors,
                        password: 'Please enter a password (minimum 6 alphanumeric characters).',
                    }));
                } else if (!isPassword(form[prop])) {
                    isValid = false;
                    setErrors((errors) => ({
                        ...errors,
                        password: 'Please enter a password of at least 6 alphanumeric characters.',
                    }));
                }

                continue;
            }

            if (!form[prop] || form[prop].trim() === '') {
                isValid = false;
                setErrors((errors) => ({
                    ...errors,
                    [prop]: 'This field is required to proceed.',
                }));
            }
        }

        return isValid;
    };

    const onSubmit = () => {
        const isSubmitable = validateForm();
        if (isSubmitable) {
            // TODO: Submit form to server for validation and account creation. Then respond with
            //       confirmation or error, so the user can be redirected accordingly.
            window.location.href = '/verify-email';
        }
    };;

    const onToggleTermsOfUse = (event) => {
        setForm({ ...form, termsOfUse: !form.termsOfUse });
        setErrors((errors) => ({
            ...errors,
            termsOfUse: undefined,
        }));
    };

    const onChangeFormProp = (prop) => (event) => {
        switch (prop) {
            case 'firstName':
            case 'lastName':
            case 'email':
            case 'password':
            case 'business':
            case 'website':
            case 'termsOfUse':
            case 'city':
            case 'country': {
                setForm({ ...form, [prop]: event.target.value });
                setErrors((errors) => ({ ...errors, [prop]: undefined }));
                break;
            }
            default:
                console.warn('Attempted to change an unknown form property', { prop, event });
        }
    };

    useEffect(() => {
        console.log('[DEBUG] Updating error object:', errors); // DEBUG
    }, [errors]);

    return (
        <main className="page sign-up-page">
            <Section name="signup">
                <div className="content">
                    <h3 className="headline">Join Maverlink</h3>
                    <p className="subtitle">
                        - the community of mavericks and independent business ownsers
                    </p>
                    <div className="form">
                        <div className="row">
                            <div className="column column-50">
                                <div className="input-group">
                                    <label className="label sr-only" htmlFor="first-name">First Name</label>
                                    <input
                                        id="first-name"
                                        className="input"
                                        type="text"
                                        placeholder="First Name"
                                        required={true}
                                        value={form.firstName}
                                        onChange={onChangeFormProp('firstName')}
                                    />
                                    {errors.firstName && (
                                        <span className="validation">{errors.firstName}</span>
                                    )}
                                </div>
                            </div>

                            <div className="column column-50">
                                <div className="input-group">
                                    <label className="label sr-only" htmlFor="last-name">Last Name</label>
                                    <input
                                        id="last-name"
                                        className="input"
                                        type="text"
                                        placeholder="Last Name"
                                        required={true}
                                        value={form.lastName}
                                        onChange={onChangeFormProp('lastName')}
                                    />
                                    {errors.lastName && (
                                        <span className="validation">{errors.lastName}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <div className="input-group">
                                    <label className="label sr-only" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        className="input"
                                        type="email"
                                        placeholder="Email"
                                        required={true}
                                        value={form.email}
                                        onChange={onChangeFormProp('email')}
                                    />
                                    {errors.email && (
                                        <span className="validation">{errors.email}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <div className="input-group">
                                    <div className="input-group--inline">
                                        <label className="label sr-only" htmlFor="password">Password</label>
                                        <input
                                            id="password"
                                            className="input input--password"
                                            type={isPasswordMasked ? 'password' : 'text'}
                                            placeholder="Password"
                                            required={true}
                                            value={form.password}
                                            onChange={onChangeFormProp('password')}
                                        />
                                        <button id="show-password" className="input-action" onClick={togglePasswordMode}>
                                            {isPasswordMasked ? 'SHOW' : 'HIDE'}
                                            <span className="sr-only">password</span>
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <span className="validation">{errors.password}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <div className="input-group">
                                    <label className="label sr-only" htmlFor="business">Business Name</label>
                                    <input
                                        id="business"
                                        className="input"
                                        type="text"
                                        placeholder="Business Name"
                                        required={true}
                                        value={form.business}
                                        onChange={onChangeFormProp('business')}
                                    />
                                    {errors.business && (
                                        <span className="validation">{errors.business}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <div className="input-group">
                                    <label className="label sr-only" htmlFor="website">Website</label>
                                    <input
                                        id="website"
                                        className="input"
                                        type="text"
                                        placeholder="Website"
                                        required={true}
                                        value={form.website}
                                        onChange={onChangeFormProp('website')}
                                    />
                                    {errors.website && (
                                        <span className="validation">{errors.website}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column column-50">
                                <div className="input-group">
                                    <label className="label sr-only" htmlFor="city">City</label>
                                    <input
                                        id="city"
                                        className="input"
                                        type="text"
                                        placeholder="City"
                                        required={true}
                                        value={form.city}
                                        onChange={onChangeFormProp('city')}
                                    />
                                    {errors.city && (
                                        <span className="validation">{errors.city}</span>
                                    )}
                                </div>
                            </div>

                            <div className="column column-50">
                                <div className="input-group">
                                    <label className="label sr-only" htmlFor="country">Country</label>
                                    <input
                                        id="country"
                                        className="input"
                                        type="text"
                                        placeholder="Country"
                                        required={true}
                                        value={form.country}
                                        onChange={onChangeFormProp('country')}
                                    />
                                    {errors.country && (
                                        <span className="validation">{errors.country}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <div className="input-group">
                                    <div className="input-group--inline">
                                        <input
                                            id="terms-of-use"
                                            className="checkbox"
                                            type="checkbox"
                                            required={true}
                                            value={form.termsOfUse}
                                            onChange={onToggleTermsOfUse}
                                        />
                                        <label className="label" htmlFor="terms-of-use">I have read and accept the Terms of Use</label>
                                    </div>
                                    {errors.termsOfUse && (
                                        <span className="validation">{errors.termsOfUse}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <div className="input-group">
                                    <button className="button" onClick={onSubmit}>Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

SignUpPage.displayName = 'SignUpPage';
