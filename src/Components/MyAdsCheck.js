import React from 'react'
import { connect } from 'react-redux'
import MyAds from './MyAds.js'
import { Redirect } from 'react-router-dom'
import {set_user} from '../Store/action'


class MyAdsCheck extends React.Component{
    constructor(){
        super()
        this.state={

        }
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
            return <MyAds/>
            
        }
        
        
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


export default connect(mapStateToProps,mapDispatchToProps)(MyAdsCheck);