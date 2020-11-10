import React from 'react'
import Header from '../Components/Header.js'
import Navigation from '../Components/Navigation.js'
import MainImage from '../Components/MainImage.js'
import ItemList from '../Components/ItemList.js'
import BottomImage from '../Components/BottomImage.js'
import FooterTop from '../Components/FooterTop.js'
import Footer from '../Components/Footer.js'
import { connect } from 'react-redux'
import {set_user} from '../Store/action'
// import ItemDetail from '../src/Components/ItemDetail.js'

class App extends React.Component{
  // componentDidMount(){
  //   const name = localStorage.getItem("hiolxname");
  //   const email = localStorage.getItem("hiolxemail");
  //   const photoURL = localStorage.getItem("hiolxphotoURL");
  //   const uid = localStorage.getItem("hiolxuid");
  //   if(name === null || email === null || photoURL === null || uid === null ||name === 'null' || email === 'null' || photoURL === 'null' || uid === 'null'){
  //     console.log("No User IS Logged In")
  //   }else{
  //     console.log(name,email,photoURL,uid)
  //     this.props.set_user(name,email,photoURL,uid)
  //   }
  // }
  render(){
    
    return(
      <>
        <Header />
        <Navigation/>
        <MainImage/>
        <ItemList/>
        <BottomImage/>
        <FooterTop/>
        <Footer/>
        {/* <ItemDetail/> */}
        
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


export default connect(mapStateToProps,mapDispatchToProps)(App);