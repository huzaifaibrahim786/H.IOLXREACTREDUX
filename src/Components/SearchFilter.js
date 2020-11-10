import React from 'react'
import Item from './Item.js'
import Footer from './Footer.js'
import firebase from 'firebase'
import { Link } from 'react-router-dom';
import backButton from '../Images/backbutton.PNG'



class SearchFilter extends React.Component{

    constructor(){
        super()
        this.state={
            items:[]
        }
    }
    componentDidMount() {
        const searchstate = this.props.match.params.searchtitle.substring(this.props.match.params.searchtitle.indexOf('-') + 1);
        const searchitem = this.props.match.params.searchtitle.substr(0, this.props.match.params.searchtitle.indexOf('-'));
        const myStr = searchitem.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
        console.log(searchstate,searchitem,myStr)
        const userRef = firebase.database().ref('/').child("products/");
        userRef.on('value', (snapshot) => {
            let newUsersState = [];
            snapshot.forEach(data => {
                const dataVal = data.val()
                console.log(dataVal.title)
                if(dataVal.title.includes(myStr) === true && dataVal.state === searchstate){
                    newUsersState.push({
                    key: data.key,
                    title: dataVal.title,
                    price: dataVal.price,
                    date: dataVal.date,
                    city:dataVal.city,
                    state:dataVal.state,
                    image:dataVal.displayImage
                    })
                }else if(dataVal.title.includes(myStr) === true && searchstate === ""){
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
            console.log(this.state)

        })
    }

    render(){
        return(
            <>
                <div style={{backgroundColor:"#F7F8F8"}}>
                    <Link to='/'>
                        <img src={backButton} alt="Olx Logo" style={{marginLeft:"25px"}}/>
                    </Link>
                </div>
                
                <div className="container-fluid mt-5">
                
                    <h4 className="mt-5">You Searched For  {this.props.match.params.searchtitle}</h4>

                    <div className="row">

                    {this.state.items.map((v,i) => {

                                return <Item  key={i} itemimage={v.image} date={v.date} itemprice={v.price} keys={v.key} itemtitle={v.title} address={v.city+' '+v.state}/>
                               
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

export default SearchFilter