import React from 'react'
import '../Css/item.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import featuredTag from '../Images/featuredTag.PNG'
import { Link } from 'react-router-dom'

class Item extends React.Component{

    render(){

       
        return(
            <>
                <div className="col-md-3 col-sm-6 mt-3">
                    <Link to={{pathname:'/itemDetail/'+this.props.keys}} className="card" style={{cursor:"pointer",color:"black",textDecoration:"none"}}>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={featuredTag} alt="featuredTag" style={{position:"absolute",left:"25px",top:"5px"}}/>
                            </div>
                            <div className="col-md-6">
                                <span><FontAwesomeIcon icon={faHeart} className="ml-auto" style={{position:"absolute",right:"25px",top:"5px"}}/></span>
                            </div>

                        </div>
                        <img src={this.props.itemimage} alt="itemImage" className="mt-3 ml-3 mb-4 card-img" style={{height:"200px",maxWidth:"88%"}} /><br/>
                        
                            <div className="blyellow">
                                
                                <div className="ml-2">
                                    <h5>Rs. {this.props.itemprice}</h5>
                                    <p>{this.props.itemtitle}</p>
                                    <div className="row mt-2" style={{fontSize:"11px"}}>
                                        <div className="col-md-7">
                                        <p>{this.props.address}</p>
                                        </div>
                                        <div className="col-md-5">
                                            <p style={{textAlign:"right"}} className="mr-3">{this.props.date}</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                      
                        
                        

                    </Link>
                </div>
            </>
        )
    }
}


export default Item;


