import React from 'react';

import Images from '../images/images.component';
import composition from '../../assets/composition.jfif';
import composition2 from '../../assets/composition-1.jfif';
import composition3 from '../../assets/composition.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './about.styles.scss';

const About = () => {
    return (
        <div  className='about'>
            <Images />
            <div className='row gx-5'>
                <div className='col-sm-6'>
                    <p className='text-uppercase about-us'>about us</p>
                    <h3 className='text-white heading'>Welcome to ExamBay</h3>
                    <p className='fs-6 paragraph-1'><small>Exams can be difficult and stressful. We want to help you
                        practice and feel confident before your big day.</small>
                    </p>
                    <p className='paragraph-2'><small>ExamBay will prepare you for your EASA - FCL exams. The
                        educational tool with the largest and most up-to-date
                        database for your studies for EASA - FCL and FAA exams.</small>
                    </p>
                    <button type="button" class="btn">Read More</button>
                </div>
                <div className='col-sm-6 position-relative'>
                    <div className='composition composition--1'>
                        <img src={composition2} className='composition-image' alt='composition' />
                    </div>
                    <div className='composition composition--2'>
                        <img src={composition} className='composition-image' alt='composition' />
                    </div>
                    <div className='composition composition--3'>
                        <img src={composition3} className='composition-image' alt='composition' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
