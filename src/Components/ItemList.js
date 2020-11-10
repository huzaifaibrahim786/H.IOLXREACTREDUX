import React from 'react'
import Item from './Item.js'
import firebase from 'firebase'

class ItemList extends React.Component{

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
            newUsersState.push({
            key: data.key,
            title: dataVal.title,
            price: dataVal.price,
            date: dataVal.date,
            city:dataVal.city,
            state:dataVal.state,
            image:dataVal.displayImage
            })
        })
        this.setState({
            items:newUsersState,
          })

        })
    }

    render(){
        return(
            <>
                <div className="container-fluid mt-5">

                    <h4>Fresh Recommendations</h4>

                    <div className="row">

                    {this.state.items.map((v,i) => {

                                return <Item  key={i} itemimage={v.image} date={v.date} itemprice={v.price} keys={v.key} itemtitle={v.title} address={v.city+' '+v.state}/>
                               
                            })
                    } 
                        
                    </div>

                </div>
            </>
        )
    }
}

export default ItemList