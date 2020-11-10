import React from 'react'
import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import firebase from 'firebase'
import MyItems from '../Components/MyItems.js'
import {connect} from 'react-redux'

class MyAds extends React.Component{
    constructor(){
        super()
        this.state={
            items:[]
        }
    }
    componentDidMount() {

   
            const userRef = firebase.database().ref('/').child("products");
            userRef.on('value', (snapshot) => {
                let newUsersState = [];
                snapshot.forEach(data => {
                    const dataVal = data.val()

                    if(dataVal.selleremail === this.props.currentUseremail){
                        newUsersState.push({
                            key: data.key,
                            title: dataVal.title,
                            price: dataVal.price,
                            date: dataVal.date,
                            city:dataVal.city,
                            state:dataVal.state,
                            image:dataVal.displayImage
                        })
                    }
                    
                })
                this.setState({
                    items:newUsersState,
                })

            })
        
    }

    render(){
        return(
            <>
                <Header/>
                <br/><br/>
                <div className="container-fluid mt-5">

                    <h4>MY ADS</h4>

                    <div className="row">

                    {this.state.items.map((v,i) => {

                                return <MyItems  key={i} itemimage={v.image} date={v.date} itemprice={v.price} keys={v.key} itemtitle={v.title} address={v.city+' '+v.state}/>
                               
                            })
                    } 
                        
                    </div>

                </div>
                <div style={{position:"fixed",bottom:"0px",width:"100%"}}>
                    <Footer/>

                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    name:state.name,
    hasUser:state.hasUser,
    currentUser:state.currentUser,
    currentUseremail:state.currentUseremail
})

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps,mapDispatchToProps)(MyAds);