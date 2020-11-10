import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import backButton from '../Images/backbutton.PNG'
import Footer from '../Components/Footer.js'
import {connect} from 'react-redux'
import '../Css/Header.css'
import '../Css/AddItem.css'
import changeButon from '../Images/changeButon.PNG'
import add_photo from '../Images/add_photo.PNG'
import firebase from 'firebase'
import { v4 as uuid } from 'uuid';
import {set_user} from '../Store/action'


class AddItem extends React.Component{

   constructor(){
        super()

        
        this.state={
            title : '',
            description : '',
            price : '',
            no : '',
            state:'',
            condition:'',
            city:'',
            nh:'',
            username:'',
            images:[],
            displayImage:null
        }
        
    }    

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    imagehandleChange = async (e) => {
            const file = e.target.files[0];
            const id = uuid();
            const storageRef = firebase.storage().ref('images').child(id);
            await storageRef.put(file);
            storageRef.getDownloadURL().then((url)=>{
                this.state.images.push(url);
                this.setState({
                    username:this.props.currentUsername
                })
            })
            console.log(this.state.images)
            this.setState({
                displayImage:this.state.images[0]
            })
    }
    

    success=()=>{
        var d = new Date();
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var currentMonth = months[d.getMonth()];
        var currentDate = d.getDate();
        var date = currentMonth+" "+currentDate;
        var completeaddress = this.state.nh+" "+this.state.city+" "+this.state.state;
        const title = this.state.title.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
        firebase.database().ref('products/'+title+this.props.currentUsername).set({
            sellername:this.props.currentUsername,
            selleremail:this.props.currentUseremail,
            title:this.state.title.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '),
            description:this.state.description,
            condition:this.state.condition,
            price:this.state.price,
            phone:this.state.no,
            state:this.state.state,
            city:this.state.city,
            completeaddress:completeaddress,
            subCategory:this.props.currentSubCategory,
            photoURL:this.props.photoURL,
            date:date,
            displayImage:this.state.displayImage,
            nh:this.state.nh,
        })
        firebase.database().ref('products/'+this.state.title+this.props.currentUsername+'/images').set(this.state.images)
        alert("Item Uploaded Successfully")

        return <Redirect to='/'/>

    }

    render(){
        const name = localStorage.getItem("hiolxname");
        const email = localStorage.getItem("hiolxemail");
        const photoURL = localStorage.getItem("hiolxphotoURL");
        const uid = localStorage.getItem("hiolxuid");
        const currentCategory = this.props.currentCategory;
        const currentSubCategory = this.props.currentSubCategory;
        if(name === null || email === null || photoURL === null || uid === null || currentSubCategory === null || currentCategory === null ||name === 'null' || email === 'null' || photoURL === 'null' || uid === 'null'|| currentSubCategory === 'null' || currentCategory === 'null'){
          console.log("No User IS Logged In")
          return <Redirect to="/post" />

        }else{
          console.log(name,email,photoURL,uid)
          this.props.set_user(name,email,photoURL,uid)
          console.log(this.props.currentUseremail,this.props.currentUsername,this.props.hasUser)
            return(
                <>
                    <div style={{backgroundColor:"#F7F8F8"}}>
                        <Link to='/'>
                            <img src={backButton} alt="Olx Logo" style={{marginLeft:"25px"}}/>
                        </Link>
                    </div>
    
                    <h3 className="text-center font-weight-bold mt-1 mb-1">POST YOUR AD</h3>
                    <div className="container card" style={{width:"800px",margin:"10px auto",border:"2px solid grey"}}>
                        <br/><h4>SELECTED CATEGORY</h4>
                        <span>
                        {this.props.currentCategory} / {this.props.currentSubCategory} &nbsp;&nbsp;
    
                        <Link to="/post" id="loginButton" variant="primary"><img src={changeButon} alt="login"  style={{display:"inline"}}/></Link>
    
                        </span>
                        <hr/>
                        <div className="col-md-7">
                            <div>
                            <h5>INCLUDE SOME DETAILS</h5><br/>
                            <p>Condition<sup>*</sup></p>
                            <ul className="radio-button">
                                <li>
                                    <input type="radio" id="new" name="condition" value="New" onChange={this.handleChange}/>
                                    <label htmlFor="new">&nbsp;&nbsp;New</label>
                                </li>
                                <li>
                                    <input type="radio" id="used" name="condition" value="Used" onChange={this.handleChange}/>
                                    <label htmlFor="used">&nbsp;&nbsp;Used</label>
                                </li>
                            </ul>
                            <br/><br/>
                            <p>Ad Title<sup>*</sup></p>
                            <input type="text" className="form-control" onChange={this.handleChange} name="title" value={this.state.title} id="ad_title" maxLength="70" minLength="5" style={{border:"2px solid black",marginTop:"-15px",height:"40px"}}/>
                            <p style={{fontSize:"12px"}}>A minimum length of 5 characters is required. Please edit the field. &nbsp;&nbsp; &nbsp;&nbsp;      0 / 70</p>

                            
                            <p>Description<sup>*</sup></p>
                            <textarea type="text" className="form-control" onChange={this.handleChange} name="description" value={this.state.description} id="ad_description" maxLength="70" minLength="5" style={{border:"2px solid black",marginTop:"-15px",height:"140px"}}/>
                            <p style={{fontSize:"12px"}}>A minimum length of 5 characters is required. Please edit the field.   &nbsp;&nbsp; &nbsp;&nbsp;     0 / 70</p>
                        
                            </div>
                            <br/>
                        

         
                        </div>

                        
                    <hr/>
                        <br/>
                            <div className="col-md-7">
                            <div>
                                <h5>SET A PRICE</h5>
                                <p>Price<sup>*</sup></p>
                                <div className="input-group mb-3 border-black" style={{marginTop:"-15px",border:"2px solid black"}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white">Rs.</span>
                                    </div>
                                    <input type="text" className="form-control" onChange={this.handleChange} name="price" value={this.state.price} aria-label="Dollar amount (with dot and two decimal places)"/>
                                </div>
                            </div>
                            </div>
                            
                    
                    <hr/>
                        

                    <br/>
                        <div  className="col-md-7">
                            <div>
                                <h5>STORE UPTO 12 PHOTOS</h5>

                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">
                                       {this.state.images[0] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[0]} alt="logo" width="99px" height="99px"/>}                  
                                        
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[1] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[1]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[2] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[2]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[3] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[3]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[4] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[4]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[5] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[5]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[6] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[6]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[7] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[7]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[8] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[8]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[9] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[9]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[10] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[10]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button type="file" className="add_photo">                    
                                    {this.state.images[11] === undefined ? <img src={add_photo} alt="logo"/> : <img src={this.state.images[11]} alt="logo" width="99px" height="99px"/>}                  
                                    </button>
                                    <input type="file" name="image" value={this.state.pic} onChange={this.imagehandleChange}/>
                                </div>
                            </div>
                        </div>


                        <hr/>
                        

                        <br/>
                            <div  className="col-md-7">
                                <div>
                                    <h5>CONFIRM YOUR LOCATION</h5>
                                    <br/>
                                    <p>State<sup>*</sup></p>

                                    <select className="form-control w-100" onChange={this.handleChange} name="state" value={this.state.state} style={{marginTop:"-15px"}} id="city">
                                        <option> </option>
                                        <option>Punjab</option>
                                        <option>Sindh</option>
                                        <option>Khyber Pakhtunkhwa</option>
                                        <option>Islamabad</option>
                                    </select>

                                    <br/><br/>
                                    
                                    <p>City<sup>*</sup></p>

                                    <select className="form-control w-100" onChange={this.handleChange} name="city" value={this.state.city} style={{marginTop:"-15px"}} id="city">
                                        <option> </option>
                                        <option>Karachi</option>
                                        <option>Quetta</option>
                                        <option>Lahore</option>
                                    </select>

                                    <br/><br/>
                                    <p>Neibourhood<sup>*</sup></p>

                                    <select className="form-control w-100" onChange={this.handleChange} name="nh" value={this.state.nh} style={{marginTop:"-15px"}} id="city">
                                        <option> </option>
                                        <option>F.B Area</option>
                                        <option>Hussainabad</option>
                                        <option>Gulshan e Iqbal</option>
                                        <option>North Nazimabad</option>
                                    </select>
    

    
                                </div>
                            </div>

                            <hr/>
                        <br/>
                            <div className="col-md-7">
                            <div>
                                <h5>REVIEW YOUR DETAILS</h5>

                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={this.props.photoURL} alt="logo"/>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Name<sup>*</sup></p>
                                            <input type="text" className="form-control" onChange={this.handleChange} name="name" id="name" value={this.props.currentUsername} readOnly maxLength="150" minLength="25" style={{border:"2px solid black",marginTop:"-15px",height:"40px"}}/>
                                    </div>

                                </div><br/>
                                <h6>Let's verify your account</h6>
                                <p>We will send you a confirmation code by sms on the next step.</p>
                                <p>Mobile Phone Number<sup>*</sup></p>
                                <div className="input-group mb-3 border-black" style={{marginTop:"-15px",border:"2px solid black"}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white">+92</span>
                                    </div>
                                    <input type="text" className="form-control" onChange={this.handleChange} name="no" value={this.state.no} aria-label="Dollar amount (with dot and two decimal places)"/>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-10">
                                        <p>Show my phone number on my ads</p>
                                    </div>
                                    <div className="col-md-2">
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                    
                    <hr/>

                    <div className="col-md-7">
                        <button className="btn btn-secondary" onClick={this.success} style={{backgroundColor:"#002F34",color:"white"}} 
                            disabled={!this.state.title || !this.state.description || !this.state.condition
                                        || !this.state.price || !this.state.state || !this.state.city 
                                        || !this.state.nh || !this.state.no}
                                        >POST NOW</button>
                        <br/>
                    </div>
                        

                    <br/>
                    
                    
                    </div>

                            
                        <Footer/>
    
    
                </>
            )
        }
        
    }
}


const mapStateToProps = (state) => ({
    currentUsername:state.currentUsername,
    currentUseremail:state.currentUseremail,
    currentCategory:state.currentCategory,
    currentSubCategory:state.currentSubCategory,
    photoURL:state.photoURL
})

const mapDispatchToProps = (dispatch) => ({
    set_user:(name,email,photoURL,uid)=> dispatch(set_user(name,email,photoURL,uid))

    
})


export default connect(mapStateToProps,mapDispatchToProps)(AddItem)