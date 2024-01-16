import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CarouselData } from './data';
import './carousel.scss';

const Carousels = () => {
    return (
        <Carousel className='container-fluid p-0 mb-5' >
            {
                CarouselData.map((data, index) => (
                    <Carousel.Item key={index} className='carousel-item' interval={1500}>
                        <img className='w-100' src={data.bgImage} alt='image1' />
                        <Carousel.Caption className='carousel-caption d-flex align-items-center'>
                            <div className='container'>
                                <div className='row align-items-center justify-content-center justify-content-lg-start'>
                                    <div className='col-10 col-lg-7 text-center text-lg-start'>
                                        <h6 className='text-white text-uppercase mb-3 animated slideInDown'>{data.name}</h6>
                                        <h1 className='display-3 text-white mb-4 pb-3 animated slideInDown'>{data.desc}</h1>
                                        <a href='' className='btn btn-primary py-3 px-5 animated slideInDown'>Learn More <FontAwesomeIcon icon={faArrowRight} className='ms-3' /></a>
                                    </div>
                                    <div className='col-lg-5 d-none d-lg-flex animated zoomIn'>
                                        <img className='img-fluid' src={data.frontImage} alt='' />
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Carousels
