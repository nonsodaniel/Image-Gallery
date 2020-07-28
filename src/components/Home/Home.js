import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Button, Link } from 'react-floating-action-button'

import Navbar from '../layout/Navbar'

import './home.scss'
import HomeContent from './HomeContent';
const key = process.env.REACT_APP_PIXABAY_API_KEY
let term = 'animal'
export class Home extends Component {
    state = {
        isLoading: true, images: []

    }
    componentDidMount() {
        this.fetchImage()
    }
    fetchImage = () => {
        fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ images: data.hits, isLoading: false })
            })
            .catch(err => console.log(err))
    }

    render() {
        let { images, isLoading } = this.state
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        if (isLoading) {
            return (<h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>)
        }

        return (
            <>
                {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}
                <div className='content-body'>
                    <Slider {...settings}>
                        {
                            images && images.map(image => {
                                console.log("images", image.webformatURL)
                                return (
                                    <div className="container-wrap" >
                                        <div className="container-content" style={{ backgroundImage: `url(${image.webformatURL}),  linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))` }}>
                                            {/* <HomeContent key={image.id} image={image} /> */}
                                            Hello
                                            <Container>
                                                <Link href="#"
                                                    tooltip="Create note link"
                                                    icon="far fa-sticky-note" />
                                                <Link href="#"
                                                    tooltip="Add user link"
                                                    icon="fas fa-user-plus" />
                                                className="fab-item btn btn-link btn-lg text-white"
            <Button
                                                    tooltip="The big plus button!"
                                                    icon="fas fa-plus"
                                                    rotate={true}
                                                    onClick={() => alert('FAB Rocks!')} />
                                            </Container>
                                        </div>
                                        {/* <img src={image.webformatURL} alt="photos" /> */}

                                    </div>
                                )
                            })


                        }
                    </Slider>
                </div>
            </>

        )
    }
}

export default Home
