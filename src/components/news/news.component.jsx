import React from 'react';

import image from '../../assets/image-1.jfif';
import image1 from '../../assets/image 2.jfif';
import image2 from '../../assets/image-3.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './news.styles.scss';

const News = () => {
    return (
        <div className='news'>
            <h3 className='text-white text-center tw-bold'>LATEST NEWS</h3>
            <div className="row">
                <div className="col-sm-4 col-12">
                    <div className="card">
                        <div className="image-box">
                            <img className='image-box__image' src={image} alt="" />
                        </div>
                        <h5 className='tw-bold pt-4'>Lorem ipsum dolor sit amet </h5>
                        <p className="text-white"><small>
                            consectetur adipisicing elit. Doloremque soluta hic qui reiciendis, 
                            voluptatum aliquam numquam earum veniam facere expedita nobis? Dicta 
                            eligendi voluptas omnis. Sit atque temporibus dolorem ipsam!</small>
                        </p>
                    </div>
                </div>
                <div className="col-sm-4 col-12">
                    <div className="card">
                        <div className="image-box">
                            <img className='image-box__image' src={image1} alt="" />
                        </div>
                        <h5 className='tw-bold pt-4'>Lorem ipsum dolor sit amet </h5>
                        <p className="text-white"><small>
                            consectetur adipisicing elit. Doloremque soluta hic qui reiciendis, 
                            voluptatum aliquam numquam earum veniam facere expedita nobis? Dicta 
                            eligendi voluptas omnis. Sit atque temporibus dolorem ipsam!</small>
                        </p>
                    </div>
                </div>
                <div className="col-sm-4 col-12 p-0">
                    <div className="card">
                        <div className="image-box">
                            <img className='image-box__image' src={image2} alt="" />
                        </div>
                        <h5 className='tw-bold pt-4'>Lorem ipsum dolor sit amet </h5>
                        <p className="text-white"><small>
                            consectetur adipisicing elit. Doloremque soluta hic qui reiciendis, 
                            voluptatum aliquam numquam earum veniam facere expedita nobis? Dicta 
                            eligendi voluptas omnis. Sit atque temporibus dolorem ipsam!</small>
                        </p>
                    </div>
                </div>
            </div>
            <button type='button' className='btn text-center mt-4 m-auto'>See More Blogs</button>
        </div>
    )
}

export default News;
