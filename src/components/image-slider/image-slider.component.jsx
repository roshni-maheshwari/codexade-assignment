import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import sliderImage from '../../assets/image-1.jfif';
import sliderImage2 from '../../assets/image 2.jfif';
import sliderImage3 from '../../assets/image-3.jpg';



import './image-slider.styles.scss';


const ImageSlider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={sliderImage} className=" w-100 image-1" alt="carousel" />
                    <div className="carousel-caption d-none d-sm-block">
                        <h5 className="text-capitalize fs-3 text-black">Want to score 100%?</h5>
                        <p className="text-capitalize fs-2">we will prepare you <br /> for yours exams</p>
                        <button type="button" class="btn">Get Started</button>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src={sliderImage2} className="d-block w-100" alt="carousel" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-capitalize fs-3 text-black">Want to score 100%?</h5>
                        <p className="text-capitalize fs-2">we will prepare you <br /> for yours exams</p>
                        <button type="button" class="btn">Get Started</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={sliderImage3} className="d-block w-100" alt="carousel" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-capitalize fs-3 text-black">Want to score 100%?</h5>
                        <p className="text-capitalize fs-2">we will prepare you <br /> for yours exams</p>
                        <button type="button" class="btn">Get Started</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    );
};

export default ImageSlider;
