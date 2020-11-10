import React from 'react'
import firebase from '../Config/firebase.js'
import '../Css/Categories.css'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import {set_Subcategory} from '../Store/action'
import { Link } from 'react-router-dom'


class SubCategory extends React.Component{
    constructor(){
        super()
        this.state={
            subcategories:[]
        }
    }

    static getDerivedStateFromProps(props,state){
        let userCategory = props.currentCategory;
        //console.log("VALUEEEEEEEEEEEEEEEE ============>>>>>>>>>",userCategory)
        const userRef = firebase.database().ref('/').child("Categories/"+userCategory+"/subCategories");
        userRef.on('value', (snapshot) => {
            let newUsersState = [];
            snapshot.forEach(data => {
                const dataVal = data.val()
                newUsersState.push({
                key: data.key,
                name: dataVal.name,
                })
            })
            //console.log(newUsersState)
            state.subcategories=newUsersState
            return {
                subcategories:newUsersState
            }
        })
        
    }

    goto_additem = (i,v) =>{
        this.props.set_Subcategory(i,v)

    }

    render(){
        console.log(this.props)
        return(
            <>
                <div>
                    <span></span>
                    <span>
                        {this.state.subcategories.map((v,i)=>{
                            return <span key={i} id="subcategories" style={{marginTop:"-8px"}}>
                               <Link key={i} id="subcategoryName" onClick={()=>this.goto_additem(i,v)} to='/additem'>{v.name}<FontAwesomeIcon icon={faAngleRight} id="angleright"/></Link>
                           </span>
                        })}
                    </span>
                    
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    currentUsername:state.currentUsername,
    currentCategory:state.currentCategory,
    currentSubCategory:state.currentSubCategory,
    name:state.name
})

const mapDispatchToProps = (dispatch) => ({
    set_Subcategory:(i,v)=> dispatch(set_Subcategory(i,v))
})


export default connect(mapStateToProps,mapDispatchToProps)(SubCategory);
