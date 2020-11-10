import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import Footer from './Footer.js'
import { Link } from 'react-router-dom';
import backButton from '../Images/backbutton.PNG'
import '../Css/ChatWith.css'
import send from '../Images/send.png'
import firebase from 'firebase'
import {set_user} from '../Store/action'


class ChatWith extends React.Component{
    constructor(){
        super()
        this.state={
            sellername:'',
            selleremail:'',
            selleruid:'',
            photoURL:'',
            message:'',
            messages:[]
        }
    }

    uid_merge(uid1,uid2){
        if(uid1<uid2){
            return uid1 + uid2
        }else{
            return uid2 + uid1
        }
    }


    componentDidMount(){
        const selleremails = this.props.match.params.seller.substring(this.props.match.params.seller.indexOf('-') + 1);
        const sellernames = this.props.match.params.seller.substr(0, this.props.match.params.seller.indexOf('-'));
        firebase.database().ref('/').child("users").on("value",(data)=>{
            data.forEach(snapshot =>{

                if(snapshot.val().email === selleremails){
                    console.log(snapshot.val().uid)
                    this.state.selleruid = snapshot.val().uid
                }
            })
        })
        
        this.setState({
            sellername:sellernames,
            selleremail:selleremails
        })
        console.log(this.state)
        console.log(this.state.selleruid)
        let merge_uid = this.uid_merge(this.props.uid,this.state.selleruid)   
        console.log(merge_uid)
        const mesgRef = firebase.database().ref('/').child("messages/"+merge_uid);
        mesgRef.on('child_added', (messages) => {
            console.log(messages.val())
            this.state.messages.push(messages.val())

            this.setState({
                messages:this.state.messages
            })


            // snapshot.forEach(data => {

            //     const dataVal = data.val()
            //     console.log(dataVal.selleremail)
            //     console.log(selleremails)
                
                
                
            //     if((dataVal.selleremail === selleremails && dataVal.senderemail === this.props.currentUseremail) || (dataVal.selleremail === this.props.currentUseremail && dataVal.senderemail === selleremails)){
            //         console.log(dataVal.message)
                
            //         this.state.messages.push({
            //             sellername: dataVal.sellername,
            //             selleremail:dataVal.selleremail,
            //             message:dataVal.message,
            //             sendername:dataVal.sendername,
            //             senderemail:dataVal.senderemail
            //         })
                    
                    
            //     }
                
            // })        
            
                    
        })
        

        

        const imgRef = firebase.database().ref('/').child("users");
        imgRef.on('value', (snapshot) => {
            snapshot.forEach(data => {

                
                const dataVal = data.val()

                if(dataVal.email === selleremails){
                    this.setState({
                        photoURL:dataVal.photoURL
                    })
                }
            })
            
        })

      
        console.log(this.state)
    }

    // static getDerivedStateFromProps(state,props){

    //     redux ki initial state main messages ki array bnao or phir componentdidmount main se data redux
    //     main bhejo phir is function main get karao or phit update karao
        
    //     const mesgRef = firebase.database().ref('/').child("messages");
    //     mesgRef.on('value', (snapshot) => {
    //         snapshot.forEach(data => {

                
    //             const dataVal = data.val()
                

    //             if((dataVal.selleremail === state.selleremail && dataVal.senderemail === props.currentUseremail) || (dataVal.selleremail === props.currentUseremail && dataVal.senderemail === state.selleremail)){
    //                 //console.log(dataVal.message)
                
    //                 this.state.messages.push({
    //                     sellername: dataVal.sellername,
    //                     selleremail:dataVal.selleremail,
    //                     message:dataVal.message,
    //                     sendername:dataVal.sendername,
    //                     senderemail:dataVal.senderemail
    //                 })
                    
                    
    //             }
                
    //         })        
            
                    
    //     })
    //     return console.log("New Messages===>",state.messages)
    // }
    


    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    

    
    sendMessage=()=>{
        let obj = {
            sellername: this.state.sellername,
            selleremail:this.state.selleremail,
            message:this.state.message,
            sendername:this.props.currentUsername,
            senderemail:this.props.currentUseremail
        } 
        this.setState({
            messages:[...this.state.messages,obj],
            message:''
        })     
        let merge_uid = this.uid_merge(this.props.uid,this.state.selleruid)   
        firebase.database().ref('/').child('messages/'+merge_uid).push(obj)
        const userRef = firebase.database().ref('/').child("users");
        userRef.on('value', (snapshot) => {
            snapshot.forEach(data => {

                
                const dataVal = data.val()

                if(dataVal.email === this.props.currentUseremail){
                    var key = this.state.selleremail.replace(/\./g, '');
                    firebase.database().ref('/').child('users/'+data.key+'/chatwith/'+key).set({
                        name:this.state.sellername,
                        email:this.state.selleremail
                    })
                }
                if(dataVal.email === this.state.selleremail){
                    var key2 = this.props.currentUseremail.replace(/\./g, '');
                    firebase.database().ref('/').child('users/'+data.key+'/chatwith/'+key2).set({
                        name:this.props.currentUsername,
                        email:this.props.currentUseremail
                    })
                }
            })
            
        })

        
        
         
        console.log(this.state)
    }

    render(){
        if(this.props.hasUser === false){
            return <Redirect to="/mychats" />
        }else{
            return(
                
                <>
                {console.log("My State===>>",this.state)}
                    <div style={{backgroundColor:"#F7F8F8"}}>
                    <Link to='/'>
                        <img src={backButton} alt="Olx Logo" style={{marginLeft:"25px"}}/>
                    </Link>
                    </div>

                    <br/><br/>

                    <div className="containers" id="chat">
            <div className="chat">
                <div className="chat-header">
                    <div className="profile">
                        <div className="left">
                            <img src={this.state.photoURL} alt="" className="pp mb-2"/>
                            <span className="margin-user">
                                <h2 id="selectedUser">{this.state.sellername}</h2>
                            </span>
                            <span className="remove-user">
                                <h5 id="selectedUser_email" style={{marginLeft: "1px"}}>{this.state.selleremail}</h5>
                            </span>

                            {/* <span className="onlinetag" style={{display: "none;"}}>online</span> */}

                        </div>
                        
                    </div>
                </div>
                <div className="chat-box" id="chat-box">
                    {this.state.messages.map((v,i) => {
                        if(v.senderemail === this.props.currentUseremail && v.selleremail === this.state.selleremail){
                            return <div key={i}>
                                <div className="chat-r">
                                <div className="sp"></div>
                                    <div className="mess mess-r">
                                        <ul id="sender_messages">{v.message}</ul>
                                        <div className="check">
                                            <span>4:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        else{
                            return <div key={i}>
                                <div className="chat-l">
                                    <div className="mess  mess-l">
                                        <div className="sp"></div>
                                        <ul id="reciever-messages">{v.message}</ul>
                                        <div className="check">
                                            <span>4:00 PM</span>
                                        </div>
                                    </div>
                                    <div className="sp"></div>
                                </div> 

                            </div>
                        }
                        
                        
                               
                    })} 
          
                </div>

                <div className="chat-footer">
                    <textarea id="message" placeholder="Type a message" value={this.state.message} name="message" onChange={this.handleChange} style={{fontSize:"normal"}}></textarea>
                    <img src={send} alt="" className="mic" onClick={this.sendMessage}/>
                </div>
            </div>
        </div>
<br/><br/><br/>
                    <Footer/>
                </>
            )
        }
    }
}


const mapStateToProps = (state) => ({
    name:state.name,
    hasUser:state.hasUser,
    currentUsername:state.currentUsername,
    currentUseremail:state.currentUseremail,
    uid:state.uid
})

const mapDispatchToProps = (dispatch) => ({
    set_user:(name,email,photoURL,uid)=> dispatch(set_user(name,email,photoURL,uid))

})


export default connect(mapStateToProps,mapDispatchToProps)(ChatWith);