import React from 'react'
import Header from '../Components/Header.js'
import Navigation from '../Components/Navigation.js'
import ItemsDetails from '../Components/ItemsDetails.js'
import Footer from '../Components/Footer.js'
import firebase from 'firebase'

class ItemDetail extends React.Component{
    constructor(){
        super()
        this.state={
            itemimages:[],
            title:'',
            price:'',
            address:'',
            completeaddress:'',
            sellername:'',
            selleremail:'',
            subcategory:'',
            phone:'',
            condition:'',
            photoURL:'',
            date:'',
            description:''
        }
    }
    componentDidMount() {

        const userRef = firebase.database().ref('/').child("products/"+this.props.match.params.itemtitle);
        userRef.on('value', (snapshot) => {
            const dataVal = snapshot.val();
                
            this.setState({
                title:dataVal.title,
                price: dataVal.price,
                address:dataVal.city,
                sellername:dataVal.sellername,
                selleremail:dataVal.selleremail,
                subcategory:dataVal.subCategory,
                completeaddress:dataVal.completeaddress,
                phone:dataVal.phone,
                condition:dataVal.condition,
                photoURL:dataVal.photoURL,
                date:dataVal.date,
                description:dataVal.description
            })

            //console.log(this.state)

        })

        const imgRef = firebase.database().ref('/').child("products/"+this.props.match.params.itemtitle+"/images/");
        imgRef.on('value', (snapshot) => {
            let newUsersState1 = [];
            snapshot.forEach(data => {
                const dataVal = data.val()
                newUsersState1.push(dataVal)
            })
            this.setState({
                itemimages:newUsersState1,
            })

            //console.log(this.state.itemimages)


        })


        
    }
    render(){
        return(
            <>
                <Header/>
                <Navigation/>
                <ItemsDetails itemtitle={this.state.title} phone={this.state.phone} subcategory={this.state.subcategory} condition={this.state.condition} selleremail={this.state.selleremail} sellername={this.state.sellername} photoURL={this.state.photoURL} date={this.state.date} price={this.state.price} description={this.state.description} completeaddress={this.state.completeaddress} images={this.state.itemimages}/>
                <Footer/>
            </>
        )
    }
}

export default ItemDetail