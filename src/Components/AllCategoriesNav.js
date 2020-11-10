import React from 'react';
import firebase from '../Config/firebase.js'
import { Link } from 'react-router-dom';



class AllCategoriesNav extends React.Component{
    constructor(){
        super()
        this.state={
            subCat:[]
        }

    }
    componentDidMount() {
        let userCategory = this.props.cat;
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
            this.setState({
                subCat:newUsersState
            })
        })
    }
    render(){
        return(
            <>
                {this.state.subCat.map((i,v)=>{
                    return <li key={v} className="mt-2"><Link to={{pathname:'/filtercategory/'+i.name}} >{i.name}</Link></li>
                })

                }

            </>
        )
    }
}


export default AllCategoriesNav;