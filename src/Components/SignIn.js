import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import {set_user} from '../Store/action'
import '../Css/SignIn.css'
import { Link, Redirect } from 'react-router-dom'


class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    signin=()=>{
        
    var nulls = "null";
    localStorage.setItem("email", nulls);
    localStorage.setItem("name", nulls);

    var emails = this.state.email
    var passwords = this.state.password

    console.log(emails,passwords)

    alert("Please Wait ....")
    firebase.auth().signInWithEmailAndPassword(emails, passwords)
        .then((result) => {
            console.log("SignIn Success", result)
            localStorage.setItem("hiolxemail", emails);
            console.log(emails)
        
            firebase.database().ref("users").on("child_added", function(snapshot) {

                if (snapshot.val().email === emails) {
                    
                    const name = snapshot.val().displayName;
                    var photoURL = snapshot.val().photoURL;
                    var uid = snapshot.val().uid
                    localStorage.setItem("hiolxname", name)
                    localStorage.setItem("hiolxphotoURL", photoURL)
                    localStorage.setItem("hiolxuid", uid)
                        
                }


            })
            
            let namess = localStorage.getItem("hiolxname");
            let emailss = localStorage.getItem("hiolxemail")
            let photoURLs = localStorage.getItem("hiolxphotoURL")
            let uids = localStorage.getItem("hiolxuid")

            console.log(namess)
            console.log(emailss)
            console.log(photoURLs)
            console.log(uids)
            
            this.props.set_user(namess,emailss,photoURLs,uids)

            const { history } = this.props;
            history.push("/")


            //this.props.history.push('/')
                
            // location.reload(true)
            // userslist();
            //window.location.href = "chat-app.html";


        })
        .catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            alert("Error")
        });
    }
    gotothome=()=>{
        return <Redirect to="/"></Redirect>
    }
    render(){
        return(
            <div style={{backgroundColor:"#002F34",paddingBottom:"100%"}}>
                <div className="login-form">    
                    <br/><br/><br/>
                    <div className="form mt-5">
                        
                        <h4 className="modal-title">Login to Your Account</h4>
                        <div className="form-group">
                            <input type="email" name="email" on onChange={this.handleChange} className="form-control" placeholder="Email Address" required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" on onChange={this.handleChange} className="form-control" placeholder="Password" required="required"/>
                        </div>
                        <div className="form-group small clearfix">
                            <label className="form-check-label"><input type="checkbox"/> Remember me</label>
                            <Link href="#" className="forgot-link">Forgot Password?</Link>
                        </div> 
                        <input type="submit" onClick={this.signin} className="btn btn-primary btn-block btn-lg" value="Login"/>              
                    </div>			
                    <div className="text-center small text-white">Don't have an account? <Link to='/signup'>Sign up</Link></div>
                </div>      
            </div>
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


export default connect(mapStateToProps,mapDispatchToProps)(SignIn);