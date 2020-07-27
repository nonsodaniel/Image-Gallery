import React, { Component } from 'react'
import Navbar from '../layout/Navbar'

import './home.scss'

export class Home extends Component {
    render() {
        return (
            <div className="container-wrap">
                <div className="home-wrapper">
                    <Navbar />
                </div>

                <div className="bottom-wrap">
                    <div className="container-fluid">
                        <div className="text">
                            <h1>Picture name by <h6>(Nonso Daniel)</h6>  </h1>
                            <p>This is some badass picture you are gonna love</p>
                        </div>
                        <div className="action">

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Home
