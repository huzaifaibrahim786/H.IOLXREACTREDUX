import React from 'react'
import { Modal, Button } from "react-bootstrap";
import loginmodel1 from '../Images/loginmodel1.PNG'
import loginmodel2 from '../Images/loginmodel2.PNG'
import loginmodel3 from '../Images/loginmodel3.PNG'
import Carousel from 'react-bootstrap/Carousel'
import firebase from 'firebase'
import { connect } from 'react-redux'
import {set_user} from '../Store/action'
import {Link} from 'react-router-dom'
import '../Css/Header.css'


class LoginModel extends React.Component{
    constructor(){
        super();
        this.state={
            showHide : false,
            hasUser:false,
            user:null
        }
    }

    ModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    phoneLogin = () =>{
        alert("Phone Login Not Available Yet!")        
    }

    facebookLogin = () =>{
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result=> {
            var user = result.user;
            // ...
            console.log("USER ==>  ", user)
            console.log(user.email)
            console.log(user.displayName)
            console.log(user.photoURL)

            this.props.set_user(user.displayName,user.email,user.photoURL,user.uid)
    
            var users = {
                name: user.displayName,
                email: user.email,
                photoURL:user.photoURL,
                uid:user.uid,
                password: "null"
            }

            
            var flag = false;
            firebase.database().ref('users').on("value", function(snapshot) {
                //var data = snapshot.val();

                snapshot.forEach(function(data) {
                    var user = data.val();
    
                    if (user.email === users.email) {
                        flag = true
                    }
                });
    
                if (flag === false) {
                    firebase.database().ref('/').child('users/'+user.uid).set({
                        displayName: user.displayName,
                        email: user.email,
                        photoURL:user.photoURL,
                        uid:user.uid,
                        password: "null"
                    })

                    localStorage.setItem("hiolxname", user.displayName)
                    localStorage.setItem("hiolxemail", user.email)
                    localStorage.setItem("hiolxphotoURL", user.photoURL)
                    localStorage.setItem("hiolxuid", user.uid)
    
                } else {
    
                    localStorage.setItem("hiolxname", user.displayName)
                    localStorage.setItem("hiolxemail", user.email)
                    localStorage.setItem("hiolxphotoURL", user.photoURL)
                    localStorage.setItem("hiolxuid", user.uid)
                }
    
            })  


            
        })
        .catch(function(error) {
            //var errorCode = error.code;
            var errorMessage = error.message;
            console.log("ERROR == > " + error);
            alert(errorMessage)
        });


        return true


    }

    setUserState = () =>{
        console.log("wok=skgijhb")
        this.setState({
            hasUser : this.state.hasUser
        })
    }


    googleLogin = ()=>{

        console.log(this.props)
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result=> {
            var user = result.user;
            // ...
            console.log("USER ==>  ", user)
            console.log(user.email)
            console.log(user.displayName)
            console.log(user.photoURL)

            this.props.set_user(user.displayName,user.email,user.photoURL,user.uid)
    
            var users = {
                name: user.displayName,
                email: user.email,
                photoURL:user.photoURL,
                uid:user.uid,
                password: "null"
            }

            
            var flag = false;
            firebase.database().ref('users').on("value", function(snapshot) {
                //var data = snapshot.val();

                snapshot.forEach(function(data) {
                    var user = data.val();
    
                    if (user.email === users.email) {
                        flag = true
                    }
                });
    
                if (flag === false) {
                    firebase.database().ref('/').child('users/'+user.uid).set({
                        displayName: user.displayName,
                        email: user.email,
                        photoURL:user.photoURL,
                        uid:user.uid,
                        password: "null"
                    })

                    localStorage.setItem("hiolxname", user.displayName)
                    localStorage.setItem("hiolxemail", user.email)
                    localStorage.setItem("hiolxphotoURL", user.photoURL)
                    localStorage.setItem("hiolxuid", user.uid)
    
                } else {
    
                    localStorage.setItem("hiolxname", user.displayName)
                    localStorage.setItem("hiolxemail", user.email)
                    localStorage.setItem("hiolxphotoURL", user.photoURL)
                    localStorage.setItem("hiolxuid", user.uid)
                }
    
            })  


            
        })
        .catch(function(error) {
            //var errorCode = error.code;
            var errorMessage = error.message;
            console.log("ERROR == > " + error);
            alert(errorMessage)
        });


        return true


    }

    render(){
        return(
            <>
                    <div>

                        
                        <Modal.Header closeButton={true} onClick={this.props.onClick}></Modal.Header>
                            <Carousel indicators={false}>
                                
                                <Carousel.Item>
                                    <img
                                    className="d-block w-45"
                                    src={loginmodel1}
                                    alt="Third slide"
                                    height="110px"
                                    style={{margin:"0px auto"}}
                                    />
                                    <br/>
                                    <p style={{textAlign:"center",color:"black",fontWeight:"bold"}}>Help Make OLX safer place for nuying and selling</p>
                                
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-45"
                                    src={loginmodel2}
                                    alt="Third slide"
                                    height="110px"
                                    style={{margin:"0px auto"}}
                                    />
                                    <br/>
                                    <p style={{textAlign:"center",color:"black",fontWeight:"bold"}}>Contact & close deals faster.</p>
                                </Carousel.Item>
                                
                                <Carousel.Item>
                                    <img
                                    className="d-block w-45"
                                    src={loginmodel3}
                                    alt="Third slide"
                                    height="110px"
                                    style={{margin:"0px auto"}}
                                    />

                                    <br/>
                                    <p style={{textAlign:"center",color:"black",fontWeight:"bold"}}>Save all your favorite items at one place</p>
                    
                                </Carousel.Item>
                            </Carousel>
                        
                        <Modal.Body onClick={this.props.onClick}>
                            <Button  variant="outline-dark" block onClick={this.phoneLogin}>
                                Continue With Phone
                            </Button>
                            <Button  variant="outline-dark" block onClick={this.facebookLogin}>
                                Continue Wigh Facebook
                            </Button>
                            <Button  variant="outline-dark" block onClick={this.googleLogin}>
                                Continue With Google
                            </Button>
                            
                            <Link to="/signin" className="btnemail"><Button style={{marginTop:"10px"}}  variant="outline-dark" block>Continue With Email</Button></Link>

                            <br/>
                            <p style={{textAlign:"center",color:"black",fontWeight:"bold"}}>
                            We won't share your personal details with anyone

                            </p>
                        </Modal.Body>
                        {/* <Modal.Footer style={{textAlign:"center"}}>
                        </Modal.Footer> */}
                    </div>
            </>
        )
    }
}



const mapStateToProps = (state) => ({
    name:state.name,
    hasUser:state.hasUser,
    currentUser:state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    set_user:(name,email,photoURL,uid)=> dispatch(set_user(name,email,photoURL,uid))
})


export default connect(mapStateToProps,mapDispatchToProps)(LoginModel);