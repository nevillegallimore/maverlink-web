// import external dependencies
import React from 'react';
import PropTypes from 'prop-types';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const ButtonLink = ({ href, text, type }) => {
    const getClassNames = () => {
        return `button-link button-link--${type}`;
    };

    return (
        <a className={getClassNames()} href={href}>{text}</a>
    );
};

ButtonLink.displayName = 'ButtonLink';
ButtonLink.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};
ButtonLink.defaultProps = {
    type: 'primary',
};
