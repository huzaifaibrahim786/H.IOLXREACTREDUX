import React from 'react'
import logo from '../Images/logo.PNG'
import searchButton from '../Images/searchButton.PNG'
import loginButon from '../Images/loginButon.PNG'
import sellButton from '../Images/sellButton.PNG'
import '../Css/Header.css'
import { Link } from 'react-router-dom'
import { Modal} from "react-bootstrap";
import LoginModel from './LoginModel.js'
import { connect } from 'react-redux'
import {signout} from '../Store/action'
import firebase from 'firebase'
import chat_btn from '../Images/chat_btn.PNG'
import noti_btn from '../Images/noti_btn.PNG'
class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            showHide : false,
            searchtitle:'',
            state:''
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
        console.log(this.state)
    };

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    logout=()=>{

        firebase.auth().signOut().then(result=>{

            this.props.signout(null)


            localStorage.setItem("hiolxname",null)
            localStorage.setItem("hiolxemail",null)
            localStorage.setItem("hiolxphotoURL",null)
            localStorage.setItem("hiolxuid",null)



        }).catch(function(error) {
            //var errorCode = error.code;
            var errorMessage = error.message;
            console.log("ERROR == > " + error);
            alert(errorMessage)
        });

    }

    render(){
       console.log("redux data==>>",this.props)
        return(
            <>
                <div id="top" className="top fixed-top row">
                    <Link to="/"><img src={logo} alt="logo" className="ml-4 mr-2"/></Link>
                    <select className="form-control col-md-3" onChange={this.handleChange} name="state" id="city">
                        <option>Pakistan</option>
                        <option>Punjab</option>
                        <option>Sindh</option>
                        <option>Khyber Pakhtunkhwa</option>
                        <option>Islamabad</option>
                    </select>

                    <div className="input-group col-md-6">
                        <input type="text" className="form-control" name="searchtitle" id="searchBox" onChange={this.handleChange} placeholder="Find Cars, Mobile Phones And Much More..."/>
                        <div className="input-group-append">
                            <Link to={{pathname:'/searchitem/'+this.state.searchtitle+"-"+this.state.state}} id="searchButton" type="submit"><img src={searchButton} alt="search" className="" style={{marginTop:"1px"}}/></Link>
                        </div>
                    </div>

  


            
                    {/* <input type="text" id="searchBox" className="form-control" placeholder="Find Cars, Mobile Phones And Much More..." />
                      
                    <span><Link to="/"  id="searchButton"><img src={searchButton} alt="search" className="" style={{marginTop:"1px"}}/></Link></span>
                         */}
                    <div style={{display:"inline",position:"absolute",right:"10px"}}>


                    {this.props.hasUser ? 
                        <span style={{marginRight:"40px"}} className="ml-5">
                            <Link to="/mychats"><img src={chat_btn} alt="chat button" className="head_btn"/></Link>
                            <img src={noti_btn} alt="NOT" className="head_btn"/>
                            <span className="dropdown">
                                <button className="dropdown-toggle border-0" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="dropdown-toggle black rounded head_btn img-circle" src={this.props.photoURL} width="37px" height="35px" alt="user"/>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to="/mychats" className="dropdown-item">My Chats</Link>
                                    <Link to="/myads" className="dropdown-item">My Ads</Link>
                                    <Link to="#" className="dropdown-item" onClick={()=>this.logout()}>Log Out</Link>
                                </div>


                            </span>
                        </span>
                    :                        
                    <Link to="#" id="loginButton" variant="primary" onClick={() => this.handleModalShowHide()}><img src={loginButon} alt="login"/></Link>
                    }


                        
                    <Modal show={this.state.showHide} style={{marginTop:"10%"}}>
                       <LoginModel onClick={() => this.handleModalShowHide()}/>
                    </Modal>

                    {this.props.hasUser ? 
                    <Link to="/post"  id="sellButton"><img src={sellButton}  alt="sell"/></Link>
                    :                        
                    <p id="sellButton" style={{cursor:"pointer"}} onClick={() => this.handleModalShowHide()}><img src={sellButton}  alt="sell"/></p>
                    }

                    {/* <Link to="/post"  id="sellButton"><img src={sellButton}  alt="sell"/></Link> */}

                    
                    </div>
                        
                </div>

             

                
                
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
    name:state.name,
    currentUsername:state.currentUsername,
    photoURL:state.photoURL,
    hasUser:state.hasUser
})

const mapDispatchToProps = (dispatch) => ({
    signout:(i)=> dispatch(signout(null))
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);
