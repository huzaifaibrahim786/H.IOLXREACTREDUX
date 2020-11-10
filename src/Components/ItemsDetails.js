import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faShareSquare} from '@fortawesome/free-regular-svg-icons'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {Carousel} from 'react-bootstrap'
import '../Css/ItemDetail.css'
import {faArrowAltCircleLeft,faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import {connect} from 'react-redux'
import { Modal} from "react-bootstrap";
import LoginModel from './LoginModel.js'
import { Link } from 'react-router-dom'

class ItemsDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
    
    render(){
        return(
            <>
                <div className="container-fluid mt-3">
                    <p className="ml-1 currentAddress">
                        Home / {this.props.subcategory} / {this.props.itemtitle}
                    </p>
                    

                    <div className="row mt-2">
                        <div className="col-md-8">

                            <div className="card">
                                {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        {this.props.images.map((v,i)=>{
                                                return <div key={i} className="carousel-item active">
                                                    <img src={v} alt="mainImage" width="100%" height="500px" style={{maxHeight:"500px"}}/>
                                                </div>
                                                
                                            })   
                                        }

                                        // {console.log(this.props)}
                                        //<div className="carousel-item active">
                                       // <img src={mainImage} alt="mainImage" width="100%" height="500px" style={{maxHeight:"500px"}}/>
                                       // </div>
                                       // <div className="carousel-item">
                                       // <img src={mainImage} alt="mainImage" width="100%" height="500px" style={{maxHeight:"500px"}}/>
                                       // </div>
                                       // <div className="carousel-item">
                                       // <img src={mainImage} alt="mainImage" width="100%" height="500px" style={{maxHeight:"500px"}}/>
                                       // </div> 
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div> */}

                                <Carousel>
                                    {this.props.images.map((v,i)=>{
                                        return <Carousel.Item key={i}>
                                            <img className="d-block w-100" src={faArrowAltCircleLeft} alt=""/>
                                            <img className="d-block w-100" src={v} alt="First slide" style={{height:"500px"}}/>
                                            <img className="d-block w-100" src={faArrowAltCircleRight} alt=""/>
                                            {/* <Carousel.Caption>
                                                <h3>First slide label</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption> */}
                                        </Carousel.Item>
                                    })}
                    
                                </Carousel>
                            </div>
                            <div className="card mt-1">
                                <h3 className="mt-2 ml-2">
                                    Details
                                </h3>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ml-5">
                                            Condition : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.props.condition}<br/>
                                            Item : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.condition} {this.props.itemtitle}<br/>

                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="ml-5">
                                            Category : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.props.subcategory}<br/>

                                        </div>
                                        
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <div className="card mt-1 mb-5">
                                <h3 className="mt-2 ml-2">
                                    Description
                                    <br/>
                                    <br/>
                                </h3>
                                <p className="ml-3">{this.props.description}</p>


                                <br/><br/><br/>
                            </div>

                        </div>
                   

                
                        <div className="col-md-4">

                            
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-6">
                                                <h2 className="mt-2 ml-2">Rs. {this.props.price}</h2>    
                                                <p className="mt-2 ml-2">{this.props.itemtitle}</p>                       
                                        </div>
                                        <div className="col-md-6">
                                            <span><FontAwesomeIcon icon={faShareSquare} size="1x" className="ml-auto" style={{position:"absolute",right:"50px",top:"20px"}}/></span>

                                            <span><FontAwesomeIcon icon={faHeart} size="1x" className="ml-auto" style={{position:"absolute",right:"25px",top:"20px"}}/></span>
                                        </div>

                                        


                                    </div>

                                    <div className="ml-2">
                                    
                                    
                                            <div className="row mt-2" style={{fontSize:"11px"}}>
                                                <div className="col-md-7">
                                                <p>{this.props.completeaddress}</p>
                                                </div>
                                                <div className="col-md-5">
                                                    <p style={{textAlign:"right"}} className="mr-3">{this.props.date}</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>


                                <div className="card mt-1">

                                    <h4 className="mt-2 ml-2">Seller Description</h4>

                                    <div className="row">
                                        <div className="col-md-3 ml-3">
                                            <img src={this.props.photoURL} alt="logo" className="img-fluid mt-2" style={{borderRadius:"50%"}}/>
                                        </div>
                                        <div className="col-md-8">
                                            <h6 className="mt-4">{this.props.sellername}</h6>
                                            <h6 className="mt-1">{this.props.selleremail}</h6>

                                        </div>

                                        <Modal show={this.state.showHide} style={{marginTop:"10%"}}>
                                            <LoginModel onClick={() => this.handleModalShowHide()}/>
                                        </Modal>

                                        {this.props.hasUser ?
                                            this.props.currentUseremail !== this.props.selleremail && 
                                            <Link to={{pathname:'/chatwith/'+this.props.sellername+"-"+this.props.selleremail}} className="chatbtn mt-2 d-block text-decoration-none"><p className="mt-1" style={{textAlign:"center",textDecoration:"none"}}>Chat with seller</p></Link>
                                             : 
                                            <button className="chatbtn mt-2 d-block" onClick={() => this.handleModalShowHide()}>Chat with seller</button>
                                        }

                                        <br/>
                                        <div style={{margin:"5px auto"}}>
                                            <FontAwesomeIcon icon={faPhoneAlt}/>&nbsp;(+92) {this.props.phone}
                                        </div>
                                    </div>

                                   

                                </div>

                                <div className="card mt-3">
                                    <h5 className="mt-2 ml-2">Posted In</h5>

                                    <p className="ml-2">{this.props.address}</p>

                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115776.98179551623!2d67.00585524178854!3d24.93102470027482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c72ec76665%3A0xec5d1d821453c988!2sJinnah%20International%20Airport!5e0!3m2!1sen!2s!4v1601478976514!5m2!1sen!2s" style={{border:"0px",width:"91%"}} title="map" className="ml-3 mr-3 mb-3 img-fluid"></iframe>
                                </div>
                        </div>
                    </div>
                </div>
            </>
        )
        
    }
    
}


const mapStateToProps = (state) => ({
    name:state.name,
    hasUser:state.hasUser,
    currentUser:state.currentUser,
    currentUseremail:state.currentUseremail
})

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps,mapDispatchToProps)(ItemsDetails);