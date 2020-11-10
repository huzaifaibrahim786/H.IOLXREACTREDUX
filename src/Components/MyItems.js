import React from 'react'
import '../Css/item.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import featuredTag from '../Images/featuredTag.PNG'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

class MyItems extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
            
        }
    }


    delete=(i)=>{
        
        firebase.database().ref('/').child("products/"+i).remove();

    }

    render(){


            return(
                <>
                    {/* to={{pathname:'/itemDetail/'+this.props.keys}} */}
                    <div className="col-md-3 col-sm-6 mt-3">
                        <div className="contain">
                        <div className="card" style={{cursor:"pointer",color:"black",textDecoration:"none"}}>
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
    
                        </div>
                        <div className="middle">
                            <Link className="btn btn-dark" to={{pathname:'/updateitem/'+this.props.keys}}>Edit</Link>
                            <br/><br/>
                            <button className="btn btn-dark" onClick={()=>this.delete(this.props.keys)}>Delete</button>
                            <br/><br/>
                            <Link className="btn btn-dark" to={{pathname:'/itemDetail/'+this.props.keys}}>Preview</Link>
    
                        </div>
                        </div>
                       
                    </div>
                </>
            )

       
           
          
            

        

       
        
    }
}


export default MyItems;


