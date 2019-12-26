import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, ...otherProps}) => (
    // rendering a Button Component
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default CustomButton;