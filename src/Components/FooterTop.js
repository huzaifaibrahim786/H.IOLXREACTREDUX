import React from 'react'
import { NavLink } from 'react-bootstrap'
import '../Css/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons'
import appstore from '../Images/appstore.png'
import googleplay from '../Images/googleplay.png'

class FooterTop extends React.Component{
    render(){
        return(
            <>

                <div className="container-fluid">
                <div className="row footerNav">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3">
                            <div className="col-megamenu">
                                                <h6 className="title mt-3 ml-3">POPULAR CATEGORIES</h6>
                                                <ul className="list-unstyled">
                                                    <li><NavLink className="tops">Cars</NavLink></li>
                                                    <li><NavLink className="mt-n3">Flats For Rent</NavLink></li>
                                                    <li><NavLink className="mt-n3">Jobs</NavLink></li>
                                                    <li><NavLink className="mt-n3">Mobile Phones</NavLink></li>
                                                   
                                                </ul>
                                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="col-megamenu">
                                                <h6 className="title mt-3 ml-3">TRENDING SEARCHES</h6>
                                                <ul className="list-unstyled">
                                                    <li><NavLink className="tops">Bikes</NavLink></li>
                                                    <li><NavLink className="mt-n3">Watches</NavLink></li>
                                                    <li><NavLink className="mt-n3">Books</NavLink></li>
                                                    <li><NavLink className="mt-n3">Dogs</NavLink></li>

                                                </ul>
                                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="col-megamenu">
                                                <h6 className="title mt-3 ml-3">ABOUT US</h6>
                                                <ul className="list-unstyled">
                                                    <li><NavLink className="tops">About OLX Group</NavLink></li>
                                                    <li><NavLink className="mt-n3">OLX Blogs</NavLink></li>
                                                    <li><NavLink className="mt-n3">Contact US</NavLink></li>
                                                    <li><NavLink className="mt-n3">OLX For Businesses</NavLink></li>

                                                </ul>
                                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="col-megamenu">
                                                <h6 className="title mt-3 ml-3">OLX</h6>
                                                <ul className="list-unstyled">
                                                    <li><NavLink className="tops">Help</NavLink></li>
                                                    <li><NavLink className="mt-n3">Site Map</NavLink></li>
                                                    <li><NavLink className="mt-n3">Legal & Privacy Information</NavLink></li>
                                                   
                                                </ul>
                                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="col-megamenu">
                                                <h6 className="title mt-3 ml-3">FOLLOW US</h6>
                                                <ul className="list-unstyled mt-3">
                                                    <li><FontAwesomeIcon icon={faFacebookF} className="ml-3 mr-3" /><FontAwesomeIcon icon={faTwitter} className="mr-3"/><FontAwesomeIcon icon={faYoutube} className="mr-3" /><FontAwesomeIcon icon={faInstagram} className="mr-3" /></li>
                                                 
                                                    <li className="mt-2">
                                                        <NavLink className="mr-3 d-inline-block"><img src={appstore} alt="appstore" height="29px"/></NavLink>
                                                        <NavLink className="d-inline-block"><img src={googleplay} alt="googlestore" height="34px"/></NavLink>
                                                    </li>
                                                   
                                                </ul>
                                            </div>
                    </div>
                </div>
                </div>
                </>
        )
    }
}


export default FooterTop;