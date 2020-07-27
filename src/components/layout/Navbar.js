import React from 'react'
import './layout.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="navbar-wrap">
                <nav className="navbar navbar-expand-lg text-white">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand text-white brand-name" to="#">Nonso Photography</Link>
                        <ul className="navbar-nav ml-auto mt-2 header-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">ABOUT <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">PHOTOS <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">BLOG <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">FEATURES <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">ACCOUNT <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
