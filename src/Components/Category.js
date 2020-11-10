import React from 'react'
import firebase from '../Config/firebase.js'
import '../Css/Categories.css'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Category extends React.Component{
    constructor(){
        super()
        this.state={
            categories:[]
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
    getSubCategory = (i,v)=>{
        
    }
    render(){
        return(
            <>
            
                <div>
                    <span></span>
                    <span>
                        {this.state.categories.map((v,i)=>{
                           return <span>
                               <h5 key={i} id="categoryName" onClick={()=>this.getSubCategory(i,v)}>{v.name}<FontAwesomeIcon icon={faAngleRight} id="angleright"/></h5>
                           </span>
                        })}
                    </span>
                    
                </div>
            </>
        )
    }
}

export default Category;