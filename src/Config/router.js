import React from 'react'
import Home from '../Components/Home.js'
import ItemDetail from '../Components/ItemDetail.js'
import AddItem from '../Components/AddItem.js'
import UpdateItem from '../Components/UpdateItem.js'
import Post from '../Components/Post'
import SearchFilter from '../Components/SearchFilter.js'
import MyAdsCheck from '../Components/MyAdsCheck.js'
import FilterCategoryItems from '../Components/FilterCategoryItems'
import ChatWith from '../Components/ChatWith.js'
import MyChats from '../Components/MyChats.js'
import SignIn from '../Components/SignIn.js'
import SignUp from '../Components/SignUp.js'
import PrivacyPolicy from '../Components/PrivacyPolicy.js'
import { connect } from 'react-redux'
import {set_user} from '../Store/action'
import {BrowserRouter as Router,Route} from "react-router-dom";

class AppRouter extends React.Component{
    componentDidMount(){
        const name = localStorage.getItem("hiolxname");
        const email = localStorage.getItem("hiolxemail");
        const photoURL = localStorage.getItem("hiolxphotoURL");
        const uid = localStorage.getItem("hiolxuid");
        if(name === null || email === null || photoURL === null || uid === null ||name === 'null' || email === 'null' || photoURL === 'null' || uid === 'null'){
          console.log("No User IS Logged In")
        }else{
          console.log(name,email,photoURL,uid)
          this.props.set_user(name,email,photoURL,uid)
        }
      }
    render(){
        return(
            <>
            <Router>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/post' component={Post}></Route>
                <Route exact path='/itemDetail/:itemtitle' component={ItemDetail}></Route>
                <Route exact path='/additem' component={AddItem}></Route>
                <Route exact path='/updateitem/:itemkey' component={UpdateItem}></Route>
                <Route exact path='/searchitem/:searchtitle' component={SearchFilter}></Route>
                <Route exact path='/chatwith/:seller' component={ChatWith}></Route>
                <Route exact path='/myads' component={MyAdsCheck}></Route>
                <Route exact path='/mychats' component={MyChats}></Route>
                <Route exact path='/signin' component={SignIn}></Route>
                <Route exact path='/signUp' component={SignUp}></Route>
                <Route exact path='/privacypolicy' component={PrivacyPolicy}></Route>
                <Route exact path='/filtercategory/:category' component={FilterCategoryItems}></Route>

            </Router>
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
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(AppRouter);