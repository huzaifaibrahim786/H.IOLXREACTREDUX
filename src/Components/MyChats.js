import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import backButton from '../Images/backbutton.PNG'
import firebase from '../Config/firebase.js'
import '../Css/Categories.css'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../Components/Footer.js'
import { connect } from 'react-redux'
import {set_user} from '../Store/action'



class MyChats extends React.Component{
    constructor(){
        super()
        this.state={
            me:'',
            users:[],
            selectedUser:''
        }
    }
    componentDidMount() {

            const userRef = firebase.database().ref('/').child("users");
            userRef.on('value', (snapshot) => {
            snapshot.forEach(data => {
                const dataVal = data.val()
                if(dataVal.email === this.props.currentUseremail){
                    console.log(data.key)
                    this.setState({
                        me:dataVal.email
                    })

                    
                    
                    firebase.database().ref('/').child("users/"+data.key+"/chatwith/").on('value',(snapshot)=>{
                        let newUsersState = [];
                        snapshot.forEach(data=>{
                            const dataVal = data.val()
                            console.log(dataVal.name)
                            newUsersState.push({
                                name:dataVal.name,
                                email:dataVal.email
                            })
                            console.log(newUsersState)

                        })
                        this.setState({
                            users:newUsersState
                        })

                        
                    })
                }
            })


            })
            
    
    }
    
 
    render(){
        const name = localStorage.getItem("hiolxname");
        const email = localStorage.getItem("hiolxemail");
        const photoURL = localStorage.getItem("hiolxphotoURL");
        const uid = localStorage.getItem("hiolxuid");
        if(name === null || email === null || photoURL === null || uid === null ||name === 'null' || email === 'null' || photoURL === 'null' || uid === 'null'){
          console.log("No User IS Logged In")
          return <Redirect to="/" />

        }else{
          console.log(name,email,photoURL,uid)
          this.props.set_user(name,email,photoURL,uid)
          console.log(this.props.currentUseremail,this.props.currentUsername,this.props.hasUser)
        

        
        return(
            <>
                <div style={{backgroundColor:"#F7F8F8"}}>
                    <Link to='/'>
                        <img src={backButton} alt="Olx Logo" style={{marginLeft:"25px"}}/>
                    </Link>
                </div>
                <h3 className="text-center font-weight-bold mt-1 mb-1">CHAT WITH USERS</h3>
                <div className="container card" style={{width:"800px",margin:"10px auto",border:"2px solid grey"}}>
                <br/><h4>CHOOSE A USER TO RESUME CHAT</h4><br/>
                    <div className="row">
                        
                        <div className="col-md-6 border-right">
                        <span>
                            {this.state.users.map((v,i)=>{
                            return <span key={i} >
                                <Link to={{pathname:'/chatwith/'+v.name+"-"+v.email}} id="subcategoryName">{v.name}<FontAwesomeIcon icon={faAngleRight} id="angleright"/></Link>
                            </span>
                            })}
                        </span>
                        </div>
                        <div className="col-md-6" style={{marginTop:"-10px"}}>
                            
                        </div>
                    </div>
                </div>
                <div style={{position:"fixed",bottom:"0px",width:"100%"}}>
                    <Footer/>

                    </div>
            </>
        )
        }
    }
}

const mapStateToProps = (state) => ({
    name:state.name,
    currentUsername:state.currentUsername,
    currentUseremail:state.currentUseremail,
    hasUser:state.hasUser
})

const mapDispatchToProps = (dispatch) => ({
    set_user:(name,email,photoURL,uid)=> dispatch(set_user(name,email,photoURL,uid))

})

export default connect(mapStateToProps,mapDispatchToProps)(MyChats);