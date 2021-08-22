import React from 'react';

import image from '../../assets/image 2.jfif';

import 'bootstrap/dist/css/bootstrap.min.css';
import './images.styles.scss';

const Images = () => {
    return (
        <div className='images'>
            <div className="box">
                <img src={image} className='image' alt="..." />
                <div className="text-box text-uppercase text-white">
                    <h4 className=''><small>try free</small></h4>
                    <h6 className='fw-light fs-6 pb-2'><small>*for 7 days</small></h6>
                    <button type="button" class="btn btn-1">free</button>
                </div>
            </div>
            <div className="box">
                <img src={image} className='image' alt="..." />
                <div className="text-box text-uppercase text-white">
                    <h4 className=''><small>silver package</small></h4>
                    <h6 className='fw-light fs-6 pb-2'><small>*for 1 month</small></h6>
                    <button type="button" class="btn btn-2">$20</button>
                </div>
            </div>
            <div className="box">
                <img src={image} className='image' alt="..." />
                <div className="text-box text-uppercase text-white">
                    <h4 className=''><small>premium package</small></h4>
                    <h6 className='fw-light fs-6 pb-2'><small>*for 6 months</small></h6>
                    <button type="button" class="btn btn-3">$200</button>
                </div>
            </div>
        </div>
    )
}

export default Images
