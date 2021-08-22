import React from 'react';

import EShopImage from '../../assets/books.jpg';
import EShopImage1 from '../../assets/books-1.jpg';
import EShopImage2 from '../../assets/books-2.jfif';
import EShopImage3 from '../../assets/books-3.jfif';

import 'bootstrap/dist/css/bootstrap.min.css';
import'./e-shop.styles.scss';

const EShop = () => {
    return (
        <div className='e-shop'>
            <h3 className='text-white text-center'>E-Shop</h3>
            <div className='e-shop__text-box'>
                <p className='e-shop__paragraph'>Books for Exams Preparation</p>
                <p className='e-shop__paragraph--1'>
                    <small>
                        Exambay subscriptions to subjects of the EASA syllabus contain questions & 
                        answers with explanations  for ATPL, CPL, <br /> IR & CBIR/EIR levels, 
                        both for airplanes and helicopters
                    </small>
                </p>
            </div> 
            <div className='e-shop__images pt-4'>
                <div className='row'>
                    <div className='col-6 p-0 col-md-4 p-md-0 position-relative'>
                        <div className='e-shop__images--box'>
                            <img src={EShopImage}  className='e-shop__image' alt='E-ShopImage' />
                            <div className='e-shop__images--paragraph'>
                                <p className='text-white text-align-center'>
                                    Set of 13 Question eBooks
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 p-0 col-md-4 p-md-0 position-relative'>
                        <div className='e-shop__images--box'>
                            <img src={EShopImage1} className='e-shop__image'  alt='E-ShopImage' />
                                <div className='e-shop__images--container'>
                                    <h3 className='text-white text-center fw-light pt-4'>Advanced E-Books</h3>
                                </div>
                        </div>
                    </div>
                    <div className='col-6 p-0 col-md-4 p-md-0 position-relative'>
                        <div className='e-shop__images--box'>
                            <img src={EShopImage3} className='e-shop__image'  alt='E-ShopImage' />
                            <div className='e-shop__images--paragraph'>
                                <p className='text-white text-align-center'>
                                    021- Airframe, Systems
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 p-0 col-md-4 p-md-0 position-relative'>
                        <div className='e-shop__images--box'>
                            <img src={EShopImage2} className='e-shop__image'  alt='E-ShopImage' />
                            <div className='e-shop__images--paragraph'>
                                <p className='text-white text-align-center'>
                                    Power Plant Questions
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 p-0 col-md-4 p-md-0 position-relative'>
                        <div className='e-shop__images--box'>
                            <img src={EShopImage3} className='e-shop__image'  alt='E-ShopImage' />
                            <div className='e-shop__images--paragraph'>
                                <p className='text-white text-align-center'>
                                    eBook Edition 2021
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 p-0 col-md-4 p-md-0 position-relative'>
                        <div className='e-shop__images--box'>
                            <img src={EShopImage}  className='e-shop__image' alt='E-ShopImage' />
                            <div className='e-shop__images--paragraph'>
                                <p className='text-white text-align-center'>
                                    Performance Questions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EShop;

