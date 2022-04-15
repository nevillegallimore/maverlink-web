// import external dependencies
import React from 'react';
import PropTypes from 'prop-types'

////////////////////////////////////////////////////////////////////////////////////////////////////

export const Section = ({ background, children, name }) => {
    return (
        <section className="section" data-section={name}>
            <div className="page-width">
                <div className="section-content">{children}</div>
            </div>
        </section>
    );
};

Section.displayName = 'Section';
Section.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
};
Section.defaultProps = {
    background: {},
    children: null,
};

export const LandingSection = ({ alignment, imageSrc, name, text, title }) => {
    const getColumnClasses = () => {
        return alignment === 'left'? `column column-left` : `column`;
    };

    return (
        <Section name={name}>
            <div className="columns">
                <div className="column">
                    <img className="illustration" src={imageSrc} alt="" />
                </div>
                <div className={getColumnClasses()}>
                    <div className="content">
                        <h2 className="title">{title}</h2>
                        <p className="text">{text}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

LandingSection.displayName = 'LandingSection';
LandingSection.propTypes = {
    ...Section.propTYpes,
    alignment: PropTypes.oneOf(['right', 'left']).isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
LandingSection.defaultProps = {
    children: null,
    alignment: 'right',
};
