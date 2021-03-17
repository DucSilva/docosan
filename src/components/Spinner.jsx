import React from 'react';
import { bool, element } from 'prop-types';
import { SpinnerContainerStyled, SpinnerStyled } from '../stylesheets/Spinner';

const Spinner = ({ isLoading, children }) => (
    <SpinnerContainerStyled>{isLoading ? <SpinnerStyled /> : children}</SpinnerContainerStyled>
);

Spinner.propTypes = {
    isLoading: bool,
    children: element,
};

Spinner.defaultProps = {
    isLoading: false,
    children: null,
};

export default Spinner;
