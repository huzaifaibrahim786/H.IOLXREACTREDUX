import React from 'react'
import { Link } from 'react-router-dom';
import backButton from '../Images/backbutton.PNG'
import SubCategory from './SubCategory.js'
import firebase from '../Config/firebase.js'
import '../Css/Categories.css'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../Components/Footer.js'
import { connect } from 'react-redux'
import {set_category} from '../Store/action'


class Sell extends React.Component{
    constructor(){
        super()
        this.state={
            categories:[],
            selectedCategory:''
        }
    }
    componentDidMount() {

            const userRef = firebase.database().ref('/').child("Categories");
            userRef.on('value', (snapshot) => {
            let newUsersState = [];
            snapshot.forEach(data => {
                const dataVal = data.val()
                newUsersState.push({
                key: data.key,
                name: dataVal.name,
                })
            })
            this.setState({
                categories:newUsersState,
            })

        })
    
    }
    
 
    render(){
        console.log(this.props)
        return(
            <>
                <div style={{backgroundColor:"#F7F8F8"}}>
                    <Link to='/'>
                        <img src={backButton} alt="Olx Logo" style={{marginLeft:"25px"}}/>
                    </Link>
                </div>
                <h3 className="text-center font-weight-bold mt-1 mb-1">POST YOUR AD</h3>
                <div className="container card" style={{width:"800px",margin:"10px auto",border:"2px solid grey"}}>
                <br/><h4>CHOOSE A CATEGORY</h4><br/>
                    <div className="row">
                        
                        <div className="col-md-6 border-right">
                        <span>
                            {this.state.categories.map((v,i)=>{
                            return <span key={i} >
                                <h5 id="categoryName" onClick={()=>this.props.set_category(i,v,this)}>{v.name}<FontAwesomeIcon icon={faAngleRight} id="angleright"/></h5>
                            </span>
                            })}
                        </span>
                        </div>
                        <div className="col-md-6" style={{marginTop:"-10px"}}>
                            <span>
                                <SubCategory/>
                            </span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    name:state.name,
    currentUsername:state.currentUsername,
    hasUser:state.hasUser
})

const mapDispatchToProps = (dispatch) => ({
    set_category:(i,v)=> dispatch(set_category(i,v))
})

export default connect(mapStateToProps,mapDispatchToProps)(Sell);