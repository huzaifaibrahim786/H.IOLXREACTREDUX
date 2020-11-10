import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import {set_user} from '../Store/action'
import '../Css/SignIn.css'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid';


class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            image:[],
            profilepic:'https://firebasestorage.googleapis.com/v0/b/olxreact.appspot.com/o/images%2F585e4bf3cb11b227491c339a.png?alt=media&token=1cf91b88-5f8a-4c15-b101-e75687ad2b93'

        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    imagehandleChange = async (e) => {
        const file = e.target.files[0];
        console.log(file)
        const id = uuid();
        const storageRef = firebase.storage().ref('images').child(id);
        await storageRef.put(file);
        storageRef.getDownloadURL().then((url)=>{
            this.state.image.push(url);
            this.setState({
                username:this.state.username
            })
        })
        console.log(this.state.image)
        this.setState({
            profilepic:this.state.image[0]
        })
        console.log(this.state)

    }

    success=()=>{
        let email = this.state.email;
        let password = this.state.password
        let username = this.state.username
        let photoURLs = 'https://firebasestorage.googleapis.com/v0/b/olxreact.appspot.com/o/images%2F585e4bf3cb11b227491c339a.png?alt=media&token=1cf91b88-5f8a-4c15-b101-e75687ad2b93'
        console.log(username,email,password)
        alert("Please Wait ....")
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result=>{

            var user = result.user;
            // ...
            console.log("USER ==>  ", user)
            console.log(user.email)
            console.log(username)

            var users = {
                name: username,
                email: user.email,
                photoURL: photoURLs,
                uid:user.uid,
                password: password
            }

            var flag = false;
            firebase.database().ref('users').on("value", function(snapshot) {
                //var data = snapshot.val();

                snapshot.forEach(function(data) {
                    var userdata = data.val();
    
                    if (userdata.email === users.email) {
                        flag = true
                    }
                });
    
                if (flag === false) {
                    firebase.database().ref('/').child('users/'+user.uid).set({
                        displayName: users.name,
                        email: user.email,
                        photoURL:'https://firebasestorage.googleapis.com/v0/b/olxreact.appspot.com/o/images%2F585e4bf3cb11b227491c339a.png?alt=media&token=1cf91b88-5f8a-4c15-b101-e75687ad2b93',
                        uid:user.uid,
                        password: users.password
                    })

                    //alert("User Added Successfully")

                    // localStorage.setItem("name", user.displayName)
                    // localStorage.setItem("email", user.email)
    
                } else {
                    // //alert("User Already Added")
                    // localStorage.setItem("name", user.displayName)
                    // localStorage.setItem("email", user.email)
                }
                alert("SignUp Success")
    
            })  
            const { history } = this.props;
            history.push("/signin")

            

        })
        .catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            //alert(errorMessage);
            // ...
        });

    }

    render(){
        return(
            <>
            <div style={{backgroundColor:"#002F34",paddingBottom:"100%"}}>
                <div className="login-form">    
                    <br/><br/><br/>
                    <div className="form mt-5">
                        
                        <h4 className="modal-title">Create A New Account</h4>
                        <div className="form-group">
                            <input type="email" name="username" on onChange={this.handleChange} className="form-control" placeholder="Full Name" required="required"/>
                        </div>
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
                        <input type="submit" onClick={this.success} className="btn btn-primary btn-block btn-lg" value="Create Account"/>              
                    </div>			
                    <div className="text-center small text-white">Already have an account? <Link to='/signin'>Sign In</Link></div>
                </div>      
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


export default connect(mapStateToProps,mapDispatchToProps)(SignUp);