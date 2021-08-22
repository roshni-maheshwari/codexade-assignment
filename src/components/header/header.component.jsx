import React from 'react';

import Navigation from '../navigation/navigation.component';
import ImageSlider from '../image-slider/image-slider.component';

const Header = () => {
    return (
        <div className='header'>
            <Navigation />
            <ImageSlider />
        </div>
    )
}

export default Header;
