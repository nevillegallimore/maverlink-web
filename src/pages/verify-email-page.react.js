// import external dependencies
import React from 'react';

// import internal dependencies
import { Section } from '@self/components/section';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const VerifyEmailPage = () => {
    // TODO: Response from server after account creation needs to inform the client which email
    //       address the verification email was sent to.
    const email = 'john.doe@example.com';

    return (
        <main className="page verify-email-page">
            <Section name="verify-email">
                <div className="content">
                    <h2 className="headline">Please verify your email</h2>
                    <p className="action-text text-centered">
                        <span>You're almost there! We've </span>
                        <strong>sent an email to {email}</strong>
                    </p>

                    <p className="action-text text-centered">
                        <span>Please </span>
                        <strong>click the link in the email </strong>
                        <span>to complete your sign up! If you don't see our email, you may need to </span>
                        <strong>check your spam folder</strong>.
                    </p>

                    <p className="action-text text-centered unpadded">
                        Still can't find the email?
                    </p>
                    <button className="button button-centered">Resend email</button>
                    <p className="action-text text-centered">
                        <small>
                            <span>Need help? </span>
                            <strong>Contact us</strong>.
                        </small>
                    </p>
                </div>
            </Section>
        </main>
    );
};
