import React from 'react';

import image from '../../assets/image-1.jfif';
import image1 from '../../assets/image 2.jfif';
import image2 from '../../assets/image-3.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './users.styles.scss';

const Users = () => {
    return (
        <div className='users text-center'>
            <h3 className='text-white text-center tw-bold mb-4 p-4'>Meet Our Setisfied Users</h3>
            <p className="text-center m-0 pt-4"><small>You don't need to hesitate any longer</small></p>
            <p className='text-center'><small>We offer up to 1600 questions absolutely for 7 Days free</small></p>
            <div className="row">
                <div className="col-sm-4 col-12">
                    <div className="card">
                        <div className="image-box">
                            <img className='image-box__image' src={image} alt="" />
                        </div>
                        <h4 className='text-dark text-center tw-bold pt-4'>Czech Air Navigation</h4>
                        <p className="text-center text-dark"><small>Institute</small></p>
                    </div>
                </div>
                <div className="col-sm-4 col-12">
                    <div className="card">
                        <div className="image-box">
                            <img className='image-box__image' src={image1} alt="" />
                        </div>
                        <h4 className='text-dark text-center pt-4 tw-bold'>Trener Ltd.</h4>
                        <p className="text-center text-dark"><small>Institute</small></p>
                    </div>
                </div>
                <div className="col-sm-4 col-12 p-0">
                    <div className="card">
                        <div className="image-box">
                            <img className='image-box__image' src={image2} alt="" />
                        </div>
                        <h4 className='text-dark text-center pt-4 tw-bold'>GREY BIRD</h4>
                        <p className="text-center text-dark"><small>Institute</small></p>
                    </div>
                </div>
            </div>
            <button type='button' className='btn text-center mt-4 m-auto'><small>See The Whole Team</small></button>
        </div>
    )
}

export default Users;
